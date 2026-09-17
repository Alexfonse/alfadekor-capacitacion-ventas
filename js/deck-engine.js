const SLIDE_TITLES = [
  "Portada: Maestría en Ventas",
  "¿Por Qué Existe Esta Capacitación?",
  "El Nuevo Consumidor 2026",
  "No Vendemos Porcelanatos, Vendemos Transformación",
  "Cerámica vs Porcelanato (Diferenciación Técnica)",
  "Ventajas del Porcelanato (6 Pilares)",
  "Tipos de Porcelanato (Muestrario de Vanguardia)",
  "Tendencias Arquitectónicas 2026",
  "Formatos para Cada Espacio",
  "Acabados y Características Técnicas",
  "Aplicaciones en Cada Ambiente",
  "Proyectos que Inspiran (Portafolio)",
  "Cómo Leer al Cliente en 30 Segundos",
  "Las 5 Preguntas Maestras",
  "La Regla 80/20 de las Ventas",
  "Método CBR Alfadekor",
  "CBR Aplicado: En una Sala",
  "CBR Aplicado: En Baños",
  "CBR Aplicado: En Cocinas",
  "CBR Aplicado: En Proyectos Comerciales",
  "Objeción: 'Está Muy Caro'",
  "Objeción: 'En Otra Tienda es Más Barato'",
  "La Técnica de los Tres Escenarios",
  "Cierre por Visualización",
  "Cierre por Seguridad y Respaldo",
  "Venta Cruzada Alfadekor (Kit Completo)",
  "El Proceso de Venta Perfecto (8 Pasos)",
  "Caso Práctico Interactivo (Apto 90m²)",
  "Evaluación Final y Certificación",
  "ADN del Vendedor Alfadekor (5 Pilares de Oro)"
];
const ICONS = {
  volume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  volumeX: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
};

class DeckEngine {
  constructor() {
    this.currentSlide = 0;
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.totalSlides = this.slides.length;
    this.stage = document.getElementById('slideStage');
    this.counter = document.getElementById('slideCounter');
    this.progressBar = document.getElementById('progressBar');
    this.gridModal = document.getElementById('gridModal');
    this.gridContainer = document.getElementById('gridCardsContainer');
    this.helpModal = document.getElementById('helpModal');
    this.audioBtn = document.getElementById('audioBtn');
    this.audioEnabled = true;

    this.audioCtx = null;
    this.initAudio();
    this.initScaling();
    this.buildGrid();
    this.initEvents();
    this.updateSlide(0);
  }

  initAudio() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.audioCtx = new AudioCtx();
    }
  }

  playClick() {
    if (!this.audioEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch(e) {}
  }

  initScaling() {
    const baseW = 1920;
    const baseH = 1080;
    const footerH = 65;

    const scaleStage = () => {
      const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
      const availableW = window.innerWidth;
      const availableH = isFull ? window.innerHeight : window.innerHeight - footerH;

      const scale = Math.min(availableW / baseW, availableH / baseH);
      if (this.stage) {
        this.stage.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('resize', scaleStage);
    document.addEventListener('fullscreenchange', scaleStage);
    document.addEventListener('webkitfullscreenchange', scaleStage);
    scaleStage();
  }

  updateSlide(newIdx, direction = 'next') {
    if (newIdx < 0 || newIdx >= this.totalSlides) return;

    const prevSlide = this.slides[this.currentSlide];
    const nextSlide = this.slides[newIdx];

    if (prevSlide && prevSlide !== nextSlide) {
      prevSlide.className = `slide ${direction === 'next' ? 'slide-exit-next' : 'slide-exit-prev'}`;
      setTimeout(() => {
        prevSlide.className = 'slide';
      }, 500);
    }

    if (nextSlide) {
      nextSlide.className = `slide active ${direction === 'next' ? 'slide-enter-next' : 'slide-enter-prev'}`;
      void nextSlide.offsetWidth;
      nextSlide.className = 'slide active';
    }

    this.currentSlide = newIdx;
    this.playClick();

    if (this.counter) {
      const curStr = (this.currentSlide + 1) < 10 ? '0' + (this.currentSlide + 1) : (this.currentSlide + 1);
      const totStr = this.totalSlides < 10 ? '0' + this.totalSlides : this.totalSlides;
      this.counter.textContent = `${curStr} / ${totStr}`;
    }

    if (this.progressBar) {
      const pct = ((this.currentSlide + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${pct}%`;
    }

    this.updateGridActive();
  }

  next() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.updateSlide(this.currentSlide + 1, 'next');
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.updateSlide(this.currentSlide - 1, 'prev');
    }
  }

  goTo(idx) {
    if (idx >= 0 && idx < this.totalSlides) {
      const dir = idx > this.currentSlide ? 'next' : 'prev';
      this.updateSlide(idx, dir);
      this.closeGrid();
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    if (this.audioBtn) {
      this.audioBtn.innerHTML = this.audioEnabled ? ICONS.volume : ICONS.volumeX;
      this.audioBtn.title = this.audioEnabled ? 'Silenciar Audio (M)' : 'Activar Audio (M)';
    }
  }

  toggleGrid() {
    if (!this.gridModal) return;
    const isOpen = this.gridModal.classList.contains('open');
    if (isOpen) {
      this.closeGrid();
    } else {
      this.gridModal.classList.add('open');
    }
  }

  closeGrid() {
    if (this.gridModal) this.gridModal.classList.remove('open');
  }

  toggleHelp() {
    if (!this.helpModal) return;
    this.helpModal.classList.toggle('open');
  }

  buildGrid() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = 'grid-thumb-card';
      const numStr = (idx + 1) < 10 ? '0' + (idx + 1) : (idx + 1);
      const title = SLIDE_TITLES[idx] || `Lámina ${numStr}`;

      card.innerHTML = `
        <div style="font-family:var(--font-serif); font-size:18px; font-weight:800; color:var(--gold-primary); margin-bottom:6px;">
          Lámina ${numStr}
        </div>
        <div style="font-size:13px; color:#ffffff; line-height:1.3; font-weight:600;">
          ${title}
        </div>
      `;

      card.addEventListener('click', () => {
        this.goTo(idx);
      });

      this.gridContainer.appendChild(card);
    });
  }

  updateGridActive() {
    if (!this.gridContainer) return;
    const cards = this.gridContainer.querySelectorAll('.grid-thumb-card');
    cards.forEach((c, i) => {
      if (i === this.currentSlide) {
        c.style.borderColor = 'var(--gold-primary)';
        c.style.background = 'rgba(212, 175, 55, 0.15)';
      } else {
        c.style.borderColor = 'var(--gold-border)';
        c.style.background = 'rgba(14, 18, 28, 0.9)';
      }
    });
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      if (this.helpModal && this.helpModal.classList.contains('open')) {
        if (e.key === 'Escape' || e.key === '?') {
          this.toggleHelp();
          return;
        }
      }

      if (this.gridModal && this.gridModal.classList.contains('open')) {
        if (e.key === 'Escape' || e.key.toLowerCase() === 'g') {
          this.closeGrid();
          return;
        }
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          this.next();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          this.toggleGrid();
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          this.toggleAudio();
          break;
        case '?':
          e.preventDefault();
          this.toggleHelp();
          break;
        case 'Escape':
          this.closeGrid();
          if (this.helpModal) this.helpModal.classList.remove('open');
          break;
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 60) this.next();
      if (touchEndX > touchStartX + 60) this.prev();
    }, { passive: true });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.deck = new DeckEngine();
});