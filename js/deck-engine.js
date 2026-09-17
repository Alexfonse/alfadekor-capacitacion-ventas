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
  "El Proceso de Venta Perfecto (6 Pasos)",
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

  playChime() {
    if (!this.audioEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1318.51, this.audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.35);
    } catch(e) {}
  }

  initScaling() {
    const resize = () => {
      const availW = window.innerWidth;
      const isTheater = document.body.classList.contains('theater-mode');
      const availH = isTheater ? window.innerHeight : window.innerHeight - 65;
      const scale = Math.min(availW / 1920, availH / 1080);
      const offsetX = (availW - 1920 * scale) / 2;
      const offsetY = (availH - 1080 * scale) / 2;
      this.stage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  updateSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;
    this.slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });
    this.currentSlide = index;
    const padNum = String(index + 1).padStart(2, '0');
    if (this.counter) this.counter.textContent = `${padNum} / ${this.totalSlides}`;
    if (this.progressBar) this.progressBar.style.width = `${((index + 1) / this.totalSlides) * 100}%`;

    if (this.gridContainer) {
      Array.from(this.gridContainer.children).forEach((c, idx) => {
        c.classList.toggle('active-card', idx === index);
      });
    }

    if (window.reactBitsFX) {
      window.reactBitsFX.initSpotlight();
      window.reactBitsFX.initTilt();
    }
  }

  next() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.playClick();
      this.updateSlide(this.currentSlide + 1);
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.playClick();
      this.updateSlide(this.currentSlide - 1);
    }
  }

  goTo(index) {
    this.playClick();
    this.updateSlide(index);
    this.closeGrid();
  }

  toggleGrid() {
    this.playClick();
    this.gridModal.classList.toggle('open');
  }

  closeGrid() {
    this.gridModal.classList.remove('open');
  }

  toggleHelp() {
    this.playClick();
    this.helpModal.classList.toggle('open');
  }

  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    this.audioBtn.innerHTML = this.audioEnabled ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
    if (this.audioEnabled) this.playClick();
  }

  toggleFullscreen() {
    this.playClick();
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => {
          this.updateFullscreenUI();
        }).catch(() => {
          document.body.classList.toggle('theater-mode');
          this.updateFullscreenUI();
          window.dispatchEvent(new Event('resize'));
        });
      } else {
        document.body.classList.toggle('theater-mode');
        this.updateFullscreenUI();
        window.dispatchEvent(new Event('resize'));
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          this.updateFullscreenUI();
        }).catch(() => {});
      }
      document.body.classList.remove('theater-mode');
      this.updateFullscreenUI();
      window.dispatchEvent(new Event('resize'));
    }
  }

  updateFullscreenUI() {
    const fsBtn = document.getElementById('fsBtn');
    const isFs = !!document.fullscreenElement || document.body.classList.contains('theater-mode');
    if (fsBtn) {
      fsBtn.classList.toggle('fs-active', isFs);
      const fsText = fsBtn.querySelector('.fs-text');
      if (fsText) fsText.textContent = isFs ? 'SALIR PANTALLA' : 'PANTALLA COMPLETA';
    }
  }

  buildGrid() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = '';
    SLIDE_TITLES.forEach((title, i) => {
      const card = document.createElement('div');
      card.className = `grid-card ${i === 0 ? 'active-card' : ''}`;
      card.innerHTML = `
        <div>
          <div class="grid-card-num">LÁMINA ${String(i + 1).padStart(2, '0')}</div>
          <div class="grid-card-title">${title}</div>
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <span style="font-size:13px; color:var(--gold-primary); font-weight:700;">Ver →</span>
        </div>
      `;
      card.onclick = () => this.goTo(i);
      this.gridContainer.appendChild(card);
    });
  }

  revealSolution(btn) {
    this.playChime();
    const sol = document.getElementById('caseSolution');
    if (sol) {
      sol.style.opacity = '1';
      sol.style.filter = 'blur(0px)';
      sol.style.borderColor = 'var(--gold-primary)';
      sol.style.boxShadow = '0 0 40px rgba(212,175,55,0.45)';
    }
    btn.textContent = '✓ Solución Revelada';
    btn.style.background = 'rgba(212,175,55,0.2)';
    btn.style.color = 'var(--gold-light)';
    btn.style.pointerEvents = 'none';
  }

  toggleAnswer(card) {
    this.playClick();
    const ans = card.querySelector('.quiz-ans');
    if (ans) {
      const isHidden = ans.style.display === 'none' || ans.style.display === '';
      ans.style.display = isHidden ? 'block' : 'none';
      const indicator = card.querySelector('span:last-child');
      if (indicator) {
        indicator.textContent = isHidden ? 'Ocultar ▲' : 'Ver respuesta ▼';
      }
    }
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.goTo(this.totalSlides - 1);
      } else if (e.key === 'g' || e.key === 'G') {
        this.toggleGrid();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        this.toggleAudio();
      } else if (e.key === '?' || e.key === 'h' || e.key === 'H') {
        this.toggleHelp();
      } else if (e.key === 'Escape') {
        this.closeGrid();
        this.helpModal.classList.remove('open');
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    window.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) this.next();
        else this.prev();
      }
    }, { passive: true });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.deck = new DeckEngine();
});