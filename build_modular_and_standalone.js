const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Gerencia\\.gemini\\antigravity\\brain\\03c669ef-8edf-4146-88a3-071440441d6d';
const repoDir = 'D:\\Documentos\\Descargas\\alfadekor-capacitacion-ventas';
const standaloneOut = 'D:\\Documentos\\Descargas\\Capacitacion-Alfadekor-Maestria-en-Ventas.html';
const b64Path = path.join(brainDir, 'b64_images.json');
const b64 = JSON.parse(fs.readFileSync(b64Path, 'utf8'));

const cssDir = path.join(repoDir, 'css');
const jsDir = path.join(repoDir, 'js');
const imgDir = path.join(repoDir, 'assets', 'images');
const iconDir = path.join(repoDir, 'assets', 'icons');
[cssDir, jsDir, imgDir, iconDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// SVG ICONS
const ICONS = {
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  shieldCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  trending: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="2"/><line x1="8" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  maximize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  volume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  volumeX: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  handshakeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"/><path d="m3 11 7.7 7.7a1 1 0 0 0 1.4 0L21 9.8a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L9.4 13"/><path d="m7 7 3-3a1 1 0 0 1 1.4 0l2 2"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  dollar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
};

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

function renderLogo(isModular, type = 'header', extraStyle = '') {
  const officialMedallion = isModular ? 'assets/icons/logo_official_medallion.webp' : b64.logo_official_medallion;
  const symbolMedallion = isModular ? 'assets/icons/logo_symbol_medallion.webp' : b64.logo_symbol_medallion;
  
  if (type === 'grand') {
    return `
      <div class="brand-medallion-grand gold-pulse" style="${extraStyle}">
        <img src="${officialMedallion}" alt="ALFA DEKOR" class="brand-medallion-grand-img">
      </div>
    `;
  }
  
  return `
    <div class="brand-logo-wrap" style="${extraStyle}">
      <img src="${symbolMedallion}" alt="ALFA DEKOR" class="header-logo-medallion">
      <div style="display:flex; flex-direction:column; justify-content:center; text-align:left; line-height:1.15;">
        <span class="brand-name-text">ALFA DEKOR</span>
        <span class="brand-sub-text">IMPORTADORES DIRECTOS</span>
      </div>
    </div>
  `;
}

function getImgSrc(isModular, key) {
  if (isModular) {
    if (key.startsWith('medallion_') || key.startsWith('logo_')) return `assets/icons/${key}.webp`;
    return `assets/images/${key}.webp`;
  }
  return b64[key] || '';
}

function getHeader(isModular, slideNum) {
  const numStr = slideNum < 10 ? '0' + slideNum : String(slideNum);
  return `
        <div class="slide-meta">
          <div class="slide-num">${numStr}</div>
          <div class="brand-logo-slot">${renderLogo(isModular, 'header')}</div>
        </div>
  `;
}

// Exported function to generate all 30 pristine slides
function generateAll30Slides(isModular) {
  return [
    // -------------------------------------------------------------
    // SLIDE 01: PORTADA MAESTRÍA EN VENTAS
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 01: PORTADA ==================== -->
      <section class="slide active" data-slide="1" style="padding:0;">
        <div style="display:grid; grid-template-columns: 1.05fr 0.95fr; width:100%; height:100%;">
          <div style="padding: 85px 70px 75px 95px; display:flex; flex-direction:column; justify-content:space-between; z-index:2; position:relative;">
            <div>
              ${renderLogo(isModular, 'grand')}

              <div class="anim-1" style="font-family:var(--font-serif); font-size:42px; font-weight:700; color:#ffffff; letter-spacing:3px;">MAESTRÍA EN</div>
              <div class="anim-2 gold-gradient" style="font-family:var(--font-serif); font-size:92px; font-weight:900; line-height:1; letter-spacing:3px; margin: 10px 0 25px 0;">VENTAS</div>
              
              <div class="gold-ribbon anim-3" style="margin-bottom:25px; font-size:22px; letter-spacing:2px;">
                DE PORCELANATOS Y REVESTIMIENTOS
              </div>
              <div class="anim-4" style="font-size:22px; font-weight:600; letter-spacing:4px; color:var(--text-sub); text-transform:uppercase;">
                Capacitación Comercial y Técnica Alfadekor
              </div>
            </div>

            <div class="anim-5">
              <div class="script-quote" style="font-size:38px; margin-bottom:8px;">No vendemos porcelanatos,</div>
              <div style="font-family:var(--font-serif); font-size:36px; font-weight:800; letter-spacing:3px; color:#ffffff;">TRANSFORMAMOS ESPACIOS</div>
            </div>
          </div>

          <div style="position:relative; height:100%; overflow:hidden;">
            <img src="${getImgSrc(isModular, 'penthouse_living_room')}" alt="Luxury Penthouse" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.95) contrast(1.08);">
            <div style="position:absolute; inset:0; background:linear-gradient(to right, #080a10 0%, transparent 25%); pointer-events:none;"></div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 02: ¿POR QUÉ EXISTE ESTA CAPACITACIÓN?
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 02: ¿POR QUÉ EXISTE ESTA CAPACITACIÓN? ==================== -->
      <section class="slide" data-slide="2">
        ${getHeader(isModular, 2)}

        <div style="margin-bottom:22px;">
          <h2 class="title-large anim-1">¿POR QUÉ EXISTE <span class="gold-gradient">ESTA CAPACITACIÓN?</span></h2>
          <div class="title-sub anim-1">El Porcelanato es una Decisión de Vida para el Cliente</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:24px; height:calc(100% - 200px); align-items:stretch; margin-bottom:12px;">
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 01</div>
              <div class="luxury-icon-disc">${ICONS.home}</div>
              <h3 class="s30-pillar-title">Inversión Alta</h3>
              <div class="s30-pillar-badge">Patrimonio Familiar</div>
              <p class="s30-pillar-desc">
                El cliente compromete ahorros sustanciales. No es una compra cotidiana; exige garantía absoluta, certeza técnica y confianza plena en su asesor.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Clave Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Vende la certeza técnica y el respaldo directo de importador, no el precio por metro.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 02</div>
              <div class="luxury-icon-disc">${ICONS.heart}</div>
              <h3 class="s30-pillar-title">Carga Emocional</h3>
              <div class="s30-pillar-badge">Permanencia de 20+ Años</div>
              <p class="s30-pillar-desc">
                Nadie cambia un piso a los 6 meses. La decisión que tomen hoy acompañará su vida íntima, reuniones familiares y descanso durante décadas.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Clave Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Conecta con el futuro: cenas familiares, mascotas y durabilidad sin frustraciones.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 03</div>
              <div class="luxury-icon-disc">${ICONS.shield}</div>
              <h3 class="s30-pillar-title">Miedo al Error</h3>
              <div class="s30-pillar-badge">Riesgo Constructivo</div>
              <p class="s30-pillar-desc">
                Picar un piso mal elegido o manchado cuesta el triple que el material original. El comprador busca desesperadamente no equivocarse.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Clave Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Despeja el pánico con asesoría en pegantes C2 y cálculo exacto de desperdicio.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 04</div>
              <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
              <h3 class="s30-pillar-title">Asesor Experto</h3>
              <div class="s30-pillar-badge">Autoridad Alfadekor</div>
              <p class="s30-pillar-desc">
                No necesitan un tomador de pedidos; necesitan un consultor con dominio técnico que guíe su visión hacia un resultado impecable.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Clave Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-weight:600; margin-top:4px; line-height:1.35;">Domina especificaciones (Mohs, PEI, absorción) para posicionarte como líder.</div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 03: EL NUEVO CONSUMIDOR 2026 ==================== -->
      <section class="slide" data-slide="3">
        ${getHeader(isModular, 3)}

        <div style="margin-bottom:22px;">
          <h2 class="title-large anim-1">EL NUEVO CONSUMIDOR <span class="gold-gradient">ARQUITECTÓNICO 2026</span></h2>
          <div class="title-sub anim-1">Un Perfil Más Exigente, Visual y Conectado que Nunca</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:24px; height:calc(100% - 200px); align-items:stretch; margin-bottom:12px;">
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Perfil 01</div>
              <div class="luxury-icon-disc">${ICONS.search}</div>
              <h3 class="s30-pillar-title">Hiperinformado</h3>
              <div class="s30-pillar-badge">Pinterest & TikTok</div>
              <p class="s30-pillar-desc">
                Llega con fotos de Instagram, renders 3D y cotizaciones en el celular. Ya investigó precios; viene a comprobar calidad real al tacto.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Enfoque Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Valida su búsqueda digital previa y refuerza con la prueba táctil de textura y rectificado.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Perfil 02</div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <h3 class="s30-pillar-title">Sensible al Diseño</h3>
              <div class="s30-pillar-badge">Estética Contemporánea</div>
              <p class="s30-pillar-desc">
                No busca baldosas neutras; busca un estilo de vida: lujo silencioso, efecto mármol continuo, maderas nórdicas y calidez visual.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Enfoque Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Presenta muestras 60x120 en piso con luz real; vende la visión espacial terminada.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Perfil 03</div>
              <div class="luxury-icon-disc">${ICONS.shieldCheck}</div>
              <h3 class="s30-pillar-title">Busca Certeza</h3>
              <div class="s30-pillar-badge">Garantía de Lote Único</div>
              <p class="s30-pillar-desc">
                Teme variaciones de tono, piezas desportilladas o retrasos. El respaldo institucional y la entrega inmediata cierran la venta.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💡 Enfoque Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Certifica lote único sellado y disponibilidad inmediata de bodega para su tranquilidad.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Perfil 04</div>
              <div class="luxury-icon-disc core-disc">${ICONS.clock}</div>
              <h3 class="s30-pillar-title">Valora la Rapidez</h3>
              <div class="s30-pillar-badge">Solución Llave en Mano</div>
              <p class="s30-pillar-desc">
                Aprecia la asesoría integral donde en un solo lugar resuelve porcelanatos, pegantes especiales, niveladores y remates de lujo.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Enfoque Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-weight:600; margin-top:4px; line-height:1.35;">Posiciona el Calacatta Gold y los Maxi Slabs como la cúspide del diseño de autor.</div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 04: NO VENDEMOS PORCELANATOS, VENDEMOS TRANSFORMACIÓN ==================== -->
      <section class="slide" data-slide="4">
        ${getHeader(isModular, 4)}

        <div style="margin-bottom:22px;">
          <h2 class="title-large anim-1">NO VENDEMOS PORCELANATOS, <span class="gold-gradient">VENDEMOS TRANSFORMACIÓN</span></h2>
          <div class="title-sub anim-1">Las 4 Dimensiones del Valor Emocional en el Hogar</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:24px; height:calc(100% - 200px); align-items:stretch; margin-bottom:12px;">
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Dimensión 01</div>
              <div class="luxury-icon-disc">${ICONS.home}</div>
              <h3 class="s30-pillar-title">Estatus y Orgullo</h3>
              <div class="s30-pillar-badge">El Espacio de Recibo</div>
              <p class="s30-pillar-desc">
                La satisfacción inigualable de invitar a amigos, socios y familia sabiendo que cada acabado refleja éxito, buen gusto y distinción.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">⭐ Impacto Real</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"El orgullo supremo de invitar amigos y recibir elogios sinceros por el hogar."</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Dimensión 02</div>
              <div class="luxury-icon-disc">${ICONS.heart}</div>
              <h3 class="s30-pillar-title">Confort Diario</h3>
              <div class="s30-pillar-badge">Paz Visual y Acústica</div>
              <p class="s30-pillar-desc">
                Llegar tras un día de trabajo y experimentar una atmósfera de serenidad, higiene absoluta y superficies perfectas bajo los pies.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">⭐ Impacto Real</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"Paz visual absoluta y sensación de descanso al caminar descalzo en casa."</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Dimensión 03</div>
              <div class="luxury-icon-disc">${ICONS.shield}</div>
              <h3 class="s30-pillar-title">Durabilidad Eterna</h3>
              <div class="s30-pillar-badge">Cero Desgaste ni Cera</div>
              <p class="s30-pillar-desc">
                La tranquilidad de que los niños jueguen, las mascotas corran y pasen los años sin que el piso pierda un ápice de su esplendor.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">⭐ Impacto Real</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"Tranquilidad total con niños y mascotas; un piso inalterable por 25 años."</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Dimensión 04</div>
              <div class="luxury-icon-disc core-disc">${ICONS.trending}</div>
              <h3 class="s30-pillar-title">Plusvalía Inmueble</h3>
              <div class="s30-pillar-badge">Inversión que Crece</div>
              <p class="s30-pillar-desc">
                Cada metro cuadrado de porcelanato rectificado Alfadekor eleva de inmediato el avalúo comercial y la rentabilidad del apartamento.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Impacto Real</div>
              <div style="font-size:15px; color:#ffffff; font-weight:600; margin-top:4px; line-height:1.35;">"Incremento comprobado de avalúo y valor patrimonial de reventa del inmueble."</div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 05: CERÁMICA VS PORCELANATO ==================== -->
      <section class="slide" data-slide="5">
        ${getHeader(isModular, 5)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CERÁMICA VS <span class="gold-gradient">PORCELANATO</span></h2>
          <div class="title-sub anim-1">Diferenciación Técnica Rigurosa para Respaldar el Valor Patrimonial</div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px; height:calc(100% - 185px);">
          <!-- LEFT: Cerámica Tradicional -->
          <div class="anim-2" style="display:flex; flex-direction:column; gap:14px; height:100%;">
            <div style="position:relative; height:310px; border-radius:14px; overflow:hidden; border:2px solid rgba(239,68,68,0.5); box-shadow:0 15px 35px rgba(0,0,0,0.7);">
              <img src="${getImgSrc(isModular, 'ceramica_macro_hd')}" alt="Cerámica Tradicional Bizcocho Poroso" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; top:14px; left:14px; background:rgba(185,28,28,0.95); color:#fff; font-weight:800; font-size:15px; padding:6px 18px; border-radius:8px; letter-spacing:1.5px; box-shadow:0 4px 15px rgba(0,0,0,0.6);">
                CERÁMICA TRADICIONAL
              </div>
              <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(8,10,16,0.95), transparent); padding:16px 18px 12px 18px;">
                <div style="font-family:var(--font-serif); font-size:22px; font-weight:800; color:#fff;">Bizcocho de Arcilla Roja (Poroso)</div>
              </div>
            </div>
            <div class="card-glass" style="flex:1; padding:22px 26px; border-left:5px solid #ef4444; background:rgba(20, 14, 18, 0.85); display:flex; flex-direction:column; justify-content:space-around;">
              <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; margin:0; padding:0;">
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:#ef4444; font-weight:800; font-size:22px; flex-shrink:0;">✕</span> <span><strong>Alta Absorción (4% a 10%):</strong> Retiene humedad, hongos y manchas oscuras internas en juntas.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:#ef4444; font-weight:800; font-size:22px; flex-shrink:0;">✕</span> <span><strong>Baja Densidad Mecánica:</strong> Arcilla cocida a 900°C; frágil ante tacones, golpes y rayones.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:#ef4444; font-weight:800; font-size:22px; flex-shrink:0;">✕</span> <span><strong>Borde Prensado No Rectificado:</strong> Exige juntas anchas de 3mm a 5mm que acumulan grasa y suciedad.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:#ef4444; font-weight:800; font-size:22px; flex-shrink:0;">✕</span> <span><strong>Costo Oculto de Reposición:</strong> Picar, botar escombros y reponer triplica el costo inicial antes de 5 años.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- RIGHT: Porcelanato Alfadekor -->
          <div class="anim-3" style="display:flex; flex-direction:column; gap:14px; height:100%;">
            <div style="position:relative; height:310px; border-radius:14px; overflow:hidden; border:2px solid var(--gold-primary); box-shadow:0 15px 35px rgba(0,0,0,0.7), 0 0 25px rgba(212,175,55,0.3);">
              <img src="${getImgSrc(isModular, 'porcelanato_macro_hd')}" alt="Porcelanato Alfadekor Gres Ultra-Denso" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; top:14px; left:14px; background:rgba(212,175,55,0.96); color:#080a10; font-weight:800; font-size:15px; padding:6px 18px; border-radius:8px; letter-spacing:1.5px; box-shadow:0 4px 15px rgba(0,0,0,0.6);">
                PORCELANATO ALFADEKOR
              </div>
              <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(8,10,16,0.95), transparent); padding:16px 18px 12px 18px;">
                <div style="font-family:var(--font-serif); font-size:22px; font-weight:800; color:var(--gold-light);">Gres Porcelánico Ultra-Denso (Cero Absorción)</div>
              </div>
            </div>
            <div class="card-glass gold-pulse" style="flex:1; padding:22px 26px; border-left:5px solid var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.12) 0%, rgba(14,18,28,0.95) 100%); display:flex; flex-direction:column; justify-content:space-around;">
              <ul style="list-style:none; display:flex; flex-direction:column; gap:12px; margin:0; padding:0;">
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:var(--gold-primary); font-weight:800; font-size:22px; flex-shrink:0;">✓</span> <span><strong>Absorción Casi Nula (&lt; 0.05%):</strong> 100% impermeable a agua, café, grasas y agentes químicos de limpieza.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:var(--gold-primary); font-weight:800; font-size:22px; flex-shrink:0;">✓</span> <span><strong>Prensado a 4.000 Toneladas y 1.250°C:</strong> Dureza Mohs 6–8 semejante al cuarzo; tráfico intenso sin desgaste.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:var(--gold-primary); font-weight:800; font-size:22px; flex-shrink:0;">✓</span> <span><strong>Borde Rectificado Perfecto a 90°:</strong> Corte con diamante para junta mínima continua de 1mm monolítica.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:12px; font-size:19px; color:#ffffff; line-height:1.4;">
                  <span style="color:var(--gold-primary); font-weight:800; font-size:22px; flex-shrink:0;">✓</span> <span><strong>Plusvalía Inmobiliaria Garantizada:</strong> Inversión patrimonial que dura 25+ años con lote único sellado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 06: VENTAJAS DEL PORCELANATO ==================== -->
      <section class="slide" data-slide="6">
        ${getHeader(isModular, 6)}

        <div style="margin-bottom:22px;">
          <h2 class="title-large anim-1">VENTAJAS DEL <span class="gold-gradient">PORCELANATO</span></h2>
          <div class="title-sub anim-1">Los 6 Pilares de Rendimiento Técnico y Estético Superior</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:22px; height:calc(100% - 195px); align-items:stretch; margin-bottom:12px;">
          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc">${ICONS.droplet}</div>
                <span class="card-pillar-tag">Ventaja 01</span>
              </div>
              <h3 class="card-pillar-title">Baja Absorción (&lt;0.05%)</h3>
              <div class="card-pillar-badge">Impermeabilidad Absoluta</div>
              <p class="card-pillar-desc">
                No absorbe agua, café ni grasas. Ideal para baños, cocinas y terrazas húmedas sin riesgo de hongos ni desprendimientos.
              </p>
            </div>
          </div>

          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc">${ICONS.shield}</div>
                <span class="card-pillar-tag">Ventaja 02</span>
              </div>
              <h3 class="card-pillar-title">Dureza Extrema (Mohs 7)</h3>
              <div class="card-pillar-badge">Resistencia al Rayado</div>
              <p class="card-pillar-desc">
                Ultra prensado a más de 400 kg/cm². Tolera garras de mascotas, tacones, arrastre de sillas y tráfico comercial sin deteriorarse.
              </p>
            </div>
          </div>

          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc">${ICONS.sparkles}</div>
                <span class="card-pillar-tag">Ventaja 03</span>
              </div>
              <h3 class="card-pillar-title">Rectificado a 90°</h3>
              <div class="card-pillar-badge">Juntas Mínimas de 1mm</div>
              <p class="card-pillar-desc">
                Canto vivo cortado con disco de diamante. Permite juntas mínimas que crean el anhelado efecto de placa continua y monolítica.
              </p>
            </div>
          </div>

          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc">${ICONS.maximize}</div>
                <span class="card-pillar-tag">Ventaja 04</span>
              </div>
              <h3 class="card-pillar-title">Gran Formato (60x120+)</h3>
              <div class="card-pillar-badge">Sensación de Amplitud</div>
              <p class="card-pillar-desc">
                Menos divisiones en el suelo multiplican visualmente los metros cuadrados de cualquier sala o habitación, aportando lujo moderno.
              </p>
            </div>
          </div>

          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc">${ICONS.trending}</div>
                <span class="card-pillar-tag">Ventaja 05</span>
              </div>
              <h3 class="card-pillar-title">Plusvalía Inmediata</h3>
              <div class="card-pillar-badge">Retorno de Inversión (ROI)</div>
              <p class="card-pillar-desc">
                Un inmueble revestido con porcelanatos Alfadekor incrementa su valor de reventa y velocidad de alquiler de forma medible.
              </p>
            </div>
          </div>

          <div class="card-glass spotlight-card tilt-card anim-2" style="padding:26px 24px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
                <span class="card-pillar-tag">Ventaja 06</span>
              </div>
              <h3 class="card-pillar-title">Mantenimiento Simple</h3>
              <div class="card-pillar-badge">Belleza Sin Esfuerzo</div>
              <p class="card-pillar-desc">
                No requiere ceras, selladores periódicos ni pulidoras mecánicas. Basta un paño húmedo con jabón neutro para mantener su fulgor.
              </p>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 07: TIPOS DE PORCELANATO (MUESTRARIO)
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 07: TIPOS DE PORCELANATO ==================== -->
      <section class="slide" data-slide="7">
        ${getHeader(isModular, 7)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">TIPOS DE <span class="gold-gradient">PORCELANATO</span></h2>
          <div class="title-sub anim-1">Muestrario de Vanguardia con Texturas y Acabados de Tendencia</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:18px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- 1. Mármol Calacatta -->
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'tex_marmol')}" alt="Mármol Calacatta" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Clásico Supremo</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Mármol Calacatta</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Vetas Doradas / Grises</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Aporta luminosidad, realeza y sensación de penthouse neoyorquino.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              📍 Salas de estar & Muros
            </div>
          </div>

          <!-- 2. Travertino Romano -->
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'tex_travertino')}" alt="Travertino Romano" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Orgánico Cálido</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Travertino Italiano</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Tonos Arena y Beige</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Piedra natural atemporal que conecta la arquitectura con la calma natural.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              📍 Baños Spa & Terrazas
            </div>
          </div>

          <!-- 3. Concreto Industrial -->
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'tex_cemento')}" alt="Cemento Industrial" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Minimalismo Loft</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Cemento Urbano</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Gris Neutro Sedoso</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Superficie sobria que resalta el mobiliario de diseño y arte moderno.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              📍 Lofts & Oficinas
            </div>
          </div>

          <!-- 4. Madera Nórdica -->
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'tex_madera')}" alt="Madera Porcelánica" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Calidez Eterna</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Madera Porcelánica</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Listones 20x120</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">La calidez de la madera con la resistencia indestructible del porcelanato.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              📍 Habitaciones & Balcones
            </div>
          </div>

          <!-- 5. Nero Marquina -->
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'tex_negro')}" alt="Nero Marquina" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Drama & Contraste</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Nero Marquina</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Negro Azabache & Blanco</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Impacto escénico para baños sociales, barras de cocina y muros de acento.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              📍 Barras de Cocina & Baños
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 08: TENDENCIAS 2026 ==================== -->
      <section class="slide" data-slide="8">
        ${getHeader(isModular, 8)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">TENDENCIAS <span class="gold-gradient">ARQUITECTÓNICAS 2026</span></h2>
          <div class="title-sub anim-1">Lo que los Diseñadores e Interioristas de Vanguardia Están Exigiendo</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:18px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'trend_calacatta')}" alt="Calacatta Gold" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Tendencia 01</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Calacatta Gold</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Veta Continua XL</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Vetas doradas sincronizadas en grandes formatos para una continuidad visual infinita.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              ✨ Tendencia #1 en Showrooms
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'trend_travertino')}" alt="Travertino Navona" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Tendencia 02</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Travertino Poroso</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Textura Táctil 3D</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Acabados mate y táctiles que evocan las termas romanas con elegancia contemporánea.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              🌿 Biofilia & Textura Sensorial
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'trend_greige')}" alt="Greige Cálido" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Tendencia 03</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Greige Cálido</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Lujo Silencioso</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Fusión de gris y beige que crea fondos serenos, atemporales y libres de estridencia.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              🕊️ Máxima Versatilidad Decorativa
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'trend_wood')}" alt="Roble Listonado" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Tendencia 04</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Roble Listonado</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Efecto Palillería</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Listones con relieve acanalado para cabeceros, recepciones y muros envolventes.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              🪵 Confort Visual Acústico
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:320px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:14px;">
                <img src="${getImgSrc(isModular, 'trend_nero')}" alt="Nero Escultórico" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Tendencia 05</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Black & Brass</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Contraste Escultórico</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Superficies oscuras combinadas con griferías de bronce y perfilería dorada.</p>
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--gold-light); background:rgba(212,175,55,0.08); padding:6px 10px; border-radius:6px; border:1px solid rgba(212,175,55,0.2); text-align:center;">
              🖤 Máximo Impacto Arquitectónico
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 09: FORMATOS PARA CADA ESPACIO ==================== -->
      <section class="slide" data-slide="9">
        ${getHeader(isModular, 9)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">FORMATOS PARA <span class="gold-gradient">CADA ESPACIO</span></h2>
          <div class="title-sub anim-1">Cómo la Dimensión de la Placa Define la Percepción de Amplitud</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:28px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- 60x60 -->
          <div class="card-glass spotlight-card anim-2" style="padding:32px 28px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.grid}</div>
                <span style="font-family:var(--font-serif); font-size:32px; font-weight:800; color:var(--gold-primary);">60x60 cm</span>
              </div>
              <span class="card-pillar-tag">Formato Ágil</span>
              <h3 class="card-pillar-title" style="font-size:26px; margin:10px 0 6px 0;">Formato Clásico Modular</h3>
              <div class="card-pillar-badge" style="margin-bottom:12px;">Espacios Pequeños y Medianos</div>
              <p class="card-pillar-desc" style="font-size:18px; line-height:1.45;">
                Ideal para baños compactos, lavanderías, depósitos y remodelaciones con desniveles pronunciados. Fácil manipulación e instalación ágil por un solo instalador.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); padding:14px 18px; border-radius:8px; font-size:17px; color:var(--text-muted);">
              📏 <strong>Rendimiento:</strong> 0.36 m² por pieza · Menor desperdicio en cortes curvos.
            </div>
          </div>

          <!-- 60x120 -->
          <div class="card-glass spotlight-card anim-2" style="padding:32px 28px; border:1.5px solid var(--gold-primary); display:flex; flex-direction:column; justify-content:space-between; background:linear-gradient(180deg, rgba(212,175,55,0.14) 0%, rgba(14,18,28,0.95) 100%); box-shadow:0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.2);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.maximize}</div>
                <span style="font-family:var(--font-serif); font-size:36px; font-weight:900; color:var(--gold-light);">60x120 cm</span>
              </div>
              <span class="card-pillar-tag" style="background:var(--gold-gradient); color:#080a10; font-weight:900;">BEST SELLER ALFADEKOR</span>
              <h3 class="card-pillar-title" style="font-size:26px; margin:10px 0 6px 0;">El Estándar de Oro Actual</h3>
              <div class="card-pillar-badge" style="margin-bottom:12px;">Salas, Comedores y Muros de Baño</div>
              <p class="card-pillar-desc" style="font-size:18px; line-height:1.45;">
                Multiplica la sensación de amplitud visual en un 40%. Reduce a la mitad la cantidad de juntas frente al 60x60. El balance perfecto entre costo, impacto escénico y logística en ascensores.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.2); border:1px solid var(--gold-primary); padding:14px 18px; border-radius:8px; font-size:18px; color:var(--gold-light);">
              ⭐ <strong>Recomendación Asesor:</strong> El formato que enamora al cliente y maximiza la plusvalía.
            </div>
          </div>

          <!-- 120x240 / Slabs -->
          <div class="card-glass spotlight-card anim-2" style="padding:32px 28px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.sparkles}</div>
                <span style="font-family:var(--font-serif); font-size:32px; font-weight:800; color:var(--gold-primary);">120x240 cm</span>
              </div>
              <span class="card-pillar-tag">Ultra Formato</span>
              <h3 class="card-pillar-title" style="font-size:26px; margin:10px 0 6px 0;">Maxi Slabs Monolíticos</h3>
              <div class="card-pillar-badge" style="margin-bottom:12px;">Islas de Cocina, Muros y Fachadas</div>
              <p class="card-pillar-desc" style="font-size:18px; line-height:1.45;">
                La cúspide del diseño arquitectónico de lujo. Piezas piso-a-techo con cero juntas horizontales. Convierte muros enteros en verdaderas obras de arte de cuarzo y mármol.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); padding:14px 18px; border-radius:8px; font-size:17px; color:var(--text-muted);">
              💎 <strong>Exclusividad:</strong> 2.88 m² por placa · Requiere ventosas y pegante C2TES2.
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 10: ACABADOS Y CARACTERÍSTICAS ==================== -->
      <section class="slide" data-slide="10">
        ${getHeader(isModular, 10)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">ACABADOS Y <span class="gold-gradient">CARACTERÍSTICAS TÉCNICAS</span></h2>
          <div class="title-sub anim-1">Cómo Explicar la Resistencia PEI, la Escala de Mohs y el Rectificado</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:26px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- Pulido Espejo -->
          <div class="card-glass spotlight-card anim-2" style="padding:28px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <div class="luxury-icon-disc">${ICONS.sparkles}</div>
                <span class="card-pillar-tag">Alto Brillo</span>
              </div>
              <h3 class="card-pillar-title">Acabado Pulido Nano</h3>
              <div class="card-pillar-badge">Reflejo Espejo >95 Gloss</div>
              <p class="card-pillar-desc" style="margin-top:12px;">
                Superficie tratada con sellado nanotecnológico que cierra los microporos y aporta luminosidad imponente. Ideal para salas de estar, comedores y halls principales.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.1); border:1px solid var(--gold-border); padding:12px 16px; border-radius:8px; font-size:17px; color:var(--gold-light);">
              ✨ <strong>Efecto:</strong> Rebota la luz natural, haciendo que los espacios se sientan dos veces más grandes.
            </div>
          </div>

          <!-- Satinado / Mate -->
          <div class="card-glass spotlight-card anim-2" style="padding:28px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <div class="luxury-icon-disc">${ICONS.eye}</div>
                <span class="card-pillar-tag">Tacto Sedoso</span>
              </div>
              <h3 class="card-pillar-title">Acabado Satinado / Mate</h3>
              <div class="card-pillar-badge">Elegancia Sobria & Confort</div>
              <p class="card-pillar-desc" style="margin-top:12px;">
                Tacto de seda sin reflejos directos. Oculta el polvo cotidiano, huellas y marcas de agua. La opción preferida por arquitectos contemporáneos para dormitorios y baños.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:12px 16px; border-radius:8px; font-size:17px; color:#ffffff;">
              🌿 <strong>Beneficio:</strong> Atmósfera cálida y relajada, perfecta para iluminación LED cálida.
            </div>
          </div>

          <!-- Rústico / Antideslizante -->
          <div class="card-glass spotlight-card anim-2" style="padding:28px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <div class="luxury-icon-disc core-disc">${ICONS.shield}</div>
                <span class="card-pillar-tag">Grip Seguro</span>
              </div>
              <h3 class="card-pillar-title">Acabado Estructurado / Rústico</h3>
              <div class="card-pillar-badge">Seguridad Antideslizante (R10–R11)</div>
              <p class="card-pillar-desc" style="margin-top:12px;">
                Microtextura con coeficiente de fricción elevado. Evita resbalones incluso con superficie completamente mojada. Imprescindible en duchas, terrazas y zonas de piscina.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.1); border:1px solid var(--gold-border); padding:12px 16px; border-radius:8px; font-size:17px; color:var(--gold-light);">
              🛡️ <strong>Seguridad:</strong> Máxima protección contra accidentes en niños y adultos mayores.
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 11: APLICACIONES EN CADA AMBIENTE
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 11: APLICACIONES EN CADA AMBIENTE ==================== -->
      <section class="slide" data-slide="11">
        ${getHeader(isModular, 11)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">APLICACIONES EN <span class="gold-gradient">CADA AMBIENTE</span></h2>
          <div class="title-sub anim-1">Asesoría Técnica y Estética Especializada Según el Uso del Espacio</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:18px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div class="card-glass spotlight-card anim-2" style="padding:20px 16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.home}</div>
              <span class="card-pillar-tag">Living / Sala</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:10px 0 4px 0;">Salas y Comedores</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">60x120 Pulido o Satinado</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Luz continua, majestuosidad visual y resistencia al tránsito continuo de visitas familiares.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2); padding:8px 10px; border-radius:6px; font-size:14px; color:var(--gold-light);">
              💡 <strong>Tip:</strong> Placas 60x120 con junta de 1mm para continuidad infinita.
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px 16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.droplet}</div>
              <span class="card-pillar-tag">Zonas Húmedas</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:10px 0 4px 0;">Baños de Lujo</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Piso y Pared Continuos</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Cero humedad ni hongos. Sanitización inmediata y sensación de spa de hotel de 5 estrellas.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2); padding:8px 10px; border-radius:6px; font-size:14px; color:var(--gold-light);">
              💡 <strong>Tip:</strong> Acabado antideslizante R10 en plato de ducha para seguridad.
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px 16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <span class="card-pillar-tag">Gourmet</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:10px 0 4px 0;">Cocinas de Autor</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Resistencia Grasas y Ácidos</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Tolera salpicaduras de aceite hirviendo, limón y vino tinto sin mancharse en lo absoluto.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2); padding:8px 10px; border-radius:6px; font-size:14px; color:var(--gold-light);">
              💡 <strong>Tip:</strong> Gres vitrificado impermeable resistente a salpicaduras ácidas.
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px 16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.layers}</div>
              <span class="card-pillar-tag">Exterior</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:10px 0 4px 0;">Terrazas y Balcones</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">Inalterable al Sol y Lluvia</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Resistencia a los rayos UV; no se decolora, no absorbe agua lluvia y mantiene el grip.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2); padding:8px 10px; border-radius:6px; font-size:14px; color:var(--gold-light);">
              💡 <strong>Tip:</strong> Filtro UV de alta resistencia para cero decoloración solar.
            </div>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px 16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc core-disc">${ICONS.building}</div>
              <span class="card-pillar-tag">Alto Tráfico</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:10px 0 4px 0;">Locales y Oficinas</h3>
              <div class="card-pillar-badge" style="margin-bottom:10px;">PEI 4 / PEI 5 Indestructible</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Diseñado para recibir miles de pasos diarios conservando el brillo y la elegancia original.</p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); padding:8px 10px; border-radius:6px; font-size:14px; color:var(--gold-light);">
              ⭐ <strong>Tip:</strong> Clasificación PEI 5 para soportar alto flujo continuo.
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 12: PROYECTOS QUE INSPIRAN ==================== -->
      <section class="slide" data-slide="12">
        ${getHeader(isModular, 12)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">PROYECTOS QUE <span class="gold-gradient">INSPIRAN</span></h2>
          <div class="title-sub anim-1">Casos Reales Instalados con Materiales Exclusivos Alfadekor</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:24px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div class="card-glass spotlight-card anim-2" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:250px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:16px;">
                <img src="${getImgSrc(isModular, 'penthouse_living_room')}" alt="Penthouse" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Residencial Premium</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Penthouse Los Cerros</h3>
              <div class="card-pillar-badge">Calacatta Gold 60x120 Pulido</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Integración de 140 m² entre sala, comedor y cocina con junta invisible de 1mm.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:250px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:16px;">
                <img src="${getImgSrc(isModular, 'cbr_luxury_bathroom')}" alt="Baño Spa" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Bienestar & Spa</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Residencia El Poblado</h3>
              <div class="card-pillar-badge">Travertino Navona Satinado</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Paredes y pisos continuos con nichos iluminados y grifería empotrada en bronce.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:250px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:16px;">
                <img src="${getImgSrc(isModular, 'cbr_luxury_kitchen')}" alt="Cocina Gourmet" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Cocina de Autor</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Villa Campestre</h3>
              <div class="card-pillar-badge">Cemento Antracita + Madera</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Contraste de placa cementicia en piso con listones de madera porcelánica en barra.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:250px; border-radius:10px; overflow:hidden; border:1px solid var(--gold-border); margin-bottom:16px;">
                <img src="${getImgSrc(isModular, 'cbr_commercial_lobby')}" alt="Lobby Corporativo" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <span class="card-pillar-tag">Corporativo</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Torre Empresarial 93</h3>
              <div class="card-pillar-badge">Nero Marquina & Greige 60x120</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Lobby de alto impacto con alfombra porcelánica central y resistencia de tránsito PEI 5.</p>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 13: CÓMO LEER AL CLIENTE EN 30 SEGUNDOS
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 13: CÓMO LEER AL CLIENTE ==================== -->
      <section class="slide" data-slide="13">
        ${getHeader(isModular, 13)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CÓMO LEER AL CLIENTE <span class="gold-gradient">EN 30 SEGUNDOS</span></h2>
          <div class="title-sub anim-1">La Tipología Visual del Comprador y Cómo Adaptar tu Discurso</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:22px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- 1. Diseñador -->
          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <span class="card-pillar-tag">Perfil A</span>
              <h3 class="card-pillar-title" style="font-size:22px;">El Estético / Diseñador</h3>
              <div class="card-pillar-badge">Busca Belleza y Tendencia</div>
              <p class="card-pillar-desc" style="font-size:17px; margin-top:10px;">
                Llega con fotos de Pinterest y paletas de color en mano. Le importan las vetas, el tono de la iluminación y la armonía visual de su hogar.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">🎯 Acción Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px;">Enfócate en la continuidad de vetas, luz y texturas satinadas de lujo silencioso.</div>
            </div>
          </div>

          <!-- 2. Técnico -->
          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.shieldCheck}</div>
              <span class="card-pillar-tag">Perfil B</span>
              <h3 class="card-pillar-title" style="font-size:22px;">El Racional / Técnico</h3>
              <div class="card-pillar-badge">Busca Datos y Certidumbre</div>
              <p class="card-pillar-desc" style="font-size:17px; margin-top:10px;">
                Pregunta por la clasificación PEI, la dureza Mohs, la tasa de absorción y el espesor en milímetros. Desconfía de los halagos comerciales vacíos.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">🎯 Acción Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px;">Presenta fichas técnicas, la cocción a 1.250°C y la absorción &lt;0.05%.</div>
            </div>
          </div>

          <!-- 3. Práctico -->
          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.home}</div>
              <span class="card-pillar-tag">Perfil C</span>
              <h3 class="card-pillar-title" style="font-size:22px;">El Práctico / Familiar</h3>
              <div class="card-pillar-badge">Busca Mantenimiento Cero</div>
              <p class="card-pillar-desc" style="font-size:17px; margin-top:10px;">
                Tiene niños pequeños o mascotas. Su dolor principal es limpiar todo el día o que el piso se raye con los juguetes o las garras del perro.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">🎯 Acción Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px;">Demuestra cómo se limpia solo con paño húmedo y su resistencia total a manchas.</div>
            </div>
          </div>

          <!-- 4. Indeciso -->
          <div class="card-glass spotlight-card anim-2 gold-active-card" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
              <span class="card-pillar-tag">Perfil D</span>
              <h3 class="card-pillar-title" style="font-size:22px;">El Cauteloso / Indeciso</h3>
              <div class="card-pillar-badge">Busca Validación y Guía</div>
              <p class="card-pillar-desc" style="font-size:17px; margin-top:10px;">
                Mira muchas opciones sin decidir. Teme que la sala le quede oscura o que el maestro se queje. Requiere que el asesor tome el liderazgo.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Acción Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-weight:600; margin-top:4px;">Guíalo con los 3 escenarios y valida la opción ideal con el respaldo Alfadekor.</div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 14: LAS 5 PREGUNTAS MAESTRAS ==================== -->
      <section class="slide" data-slide="14">
        ${getHeader(isModular, 14)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">LAS 5 PREGUNTAS <span class="gold-gradient">MAESTRAS DE DIAGNÓSTICO</span></h2>
          <div class="title-sub anim-1">Quien Pregunta con Maestría Domina la Conversación y Guía el Cierre</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:18px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- Pregunta 1 -->
          <div class="card-glass spotlight-card anim-2" style="padding:22px 18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.home}</div>
              <span class="card-pillar-tag">Pregunta 01</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">El Espacio</h3>
              <div class="card-pillar-badge" style="margin-bottom:8px;">¿Qué ambiente va a renovar?</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Permite saber si requiere pulido para sala o antideslizante para baño y ducha.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💬 Guión Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"¿Cuénteme, qué ambiente sueñan transformar primero para definir el acabado ideal?"</div>
            </div>
          </div>

          <!-- Pregunta 2 -->
          <div class="card-glass spotlight-card anim-2" style="padding:22px 18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.users}</div>
              <span class="card-pillar-tag">Pregunta 02</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">Los Habitantes</h3>
              <div class="card-pillar-badge" style="margin-bottom:8px;">¿Quiénes disfrutarán el hogar?</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Detecta la presencia de niños pequeños, perros grandes o adultos mayores.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💬 Guión Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"¿Quiénes conviven en casa? Si tienen niños o mascotas, les recomendaré acabados antigolpe."</div>
            </div>
          </div>

          <!-- Pregunta 3 -->
          <div class="card-glass spotlight-card anim-2" style="padding:22px 18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <span class="card-pillar-tag">Pregunta 03</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">El Estilo</h3>
              <div class="card-pillar-badge" style="margin-bottom:8px;">¿Qué atmósfera sueña lograr?</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Define si conectamos con Calacatta clásico, maderas nórdicas o cementos loft.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💬 Guión Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"¿Prefieren la luminosidad de un mármol o la calidez orgánica de la madera nórdica?"</div>
            </div>
          </div>

          <!-- Pregunta 4 -->
          <div class="card-glass spotlight-card anim-2" style="padding:22px 18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.droplet}</div>
              <span class="card-pillar-tag">Pregunta 04</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">La Exigencia</h3>
              <div class="card-pillar-badge" style="margin-bottom:8px;">¿Qué nivel de tráfico y humedad?</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Orienta la recomendación del PEI adecuado y el pegante correcto de instalación.</p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">💬 Guión Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">"¿Tendrá tránsito continuo o humedad directa? Así definimos el PEI y el pegante C2 exacto."</div>
            </div>
          </div>

          <!-- Pregunta 5 -->
          <div class="card-glass spotlight-card anim-2" style="padding:22px 18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc core-disc">${ICONS.clock}</div>
              <span class="card-pillar-tag">Pregunta 05</span>
              <h3 class="card-pillar-title" style="font-size:22px; margin:8px 0 4px 0;">El Plazo</h3>
              <div class="card-pillar-badge" style="margin-bottom:8px;">¿Para cuándo en obra?</div>
              <p class="card-pillar-desc" style="font-size:17px; line-height:1.4;">Activa la urgencia de apartar el lote con stock inmediato para no retrasar maestros.</p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:12px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Guión Asesor</div>
              <div style="font-size:15px; color:#ffffff; font-weight:600; margin-top:4px; line-height:1.35;">"¿Para cuándo entran los maestros? Apartemos el lote hoy para no retrasar la obra."</div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 15: LA REGLA 80/20 DE LAS VENTAS ==================== -->
      <section class="slide" data-slide="15">
        ${getHeader(isModular, 15)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">LA REGLA 80/20 <span class="gold-gradient">DE LAS VENTAS</span></h2>
          <div class="title-sub anim-1">El Vendedor Mediocre Habla Sin Parar; El Maestro Escucha y Diagnostica</div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px; height:calc(100% - 240px); align-items:stretch; margin-bottom:20px;">
          <!-- 80% Escuchar -->
          <div class="card-glass spotlight-card anim-2" style="padding:35px; border:1.5px solid var(--gold-primary); display:flex; flex-direction:column; justify-content:space-between; background:linear-gradient(180deg, rgba(212,175,55,0.12) 0%, rgba(14,18,28,0.95) 100%);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
                <div class="luxury-icon-disc">${ICONS.volume}</div>
                <span style="font-family:var(--font-serif); font-size:48px; font-weight:900; color:var(--gold-light);">80%</span>
              </div>
              <h3 class="card-pillar-title" style="font-size:32px;">Escucha Activa Consultiva</h3>
              <div class="card-pillar-badge">Descubrir las Necesidades Ocultas</div>
              <p class="card-pillar-desc" style="font-size:21px; margin-top:16px;">
                Guarda silencio cuando el cliente hable. Observa sus gestos ante cada muestra. Toma nota mental de sus dolores (malas experiencias pasadas, desconfianza, presupuestos). Cada respuesta te dará la munición exacta para cerrar.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.16); border:1px solid var(--gold-primary); padding:14px 18px; border-radius:8px; font-size:18px; color:var(--gold-light);">
              👂 <strong>Principio de Oro:</strong> Quien habla se compromete; quien escucha controla la negociación.
            </div>
          </div>

          <!-- 20% Hablar -->
          <div class="card-glass spotlight-card anim-2" style="padding:35px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
                <div class="luxury-icon-disc core-disc">${ICONS.sparkles}</div>
                <span style="font-family:var(--font-serif); font-size:48px; font-weight:900; color:#ffffff;">20%</span>
              </div>
              <h3 class="card-pillar-title" style="font-size:32px;">Propuesta Quirúrgica</h3>
              <div class="card-pillar-badge">Presentar la Solución Exacta</div>
              <p class="card-pillar-desc" style="font-size:21px; margin-top:16px;">
                No recites el catálogo completo. Presenta exclusivamente la opción que resuelve lo que él mismo te acaba de confesar. Usa oraciones cortas, argumentos de valor emocional y preguntas de validación continua.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:14px 18px; border-radius:8px; font-size:18px; color:#ffffff;">
              🎯 <strong>Precisión:</strong> Menos palabras, más impacto emocional y certeza técnica indiscutible.
            </div>
          </div>
        </div>

        <div class="card-glass" style="padding:16px 30px; text-align:center; background:rgba(212,175,55,0.08); border:1px solid var(--gold-border);">
          <span class="script-quote" style="font-size:24px; color:var(--gold-light);">
            "El cliente no compra cuando comprende todo lo que vendes; compra cuando siente que comprendes todo lo que él necesita."
          </span>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 16: MÉTODO CBR ALFADEKOR
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 16: MÉTODO CBR ALFADEKOR ==================== -->
      <section class="slide" data-slide="16">
        ${getHeader(isModular, 16)}

        <div style="margin-bottom:25px;">
          <h2 class="title-large anim-1">MÉTODO <span class="gold-gradient">CBR ALFADEKOR</span></h2>
          <div class="title-sub anim-1">La Fórmula Infalible: Característica → Beneficio → Resultado de Vida</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:28px; height:calc(100% - 200px); align-items:stretch; margin-bottom:15px;">
          <div class="s30-pillar-card spotlight-card tilt-card anim-2">
            <div>
              <div class="s30-pillar-tag">Fase 1 · El Dato Técnico</div>
              <div class="luxury-icon-disc">${ICONS.layers}</div>
              <h3 class="s30-pillar-title">C · Característica</h3>
              <div class="s30-pillar-badge">¿Qué es el producto?</div>
              <p class="s30-pillar-desc" style="font-size:20px; margin-top:14px;">
                La especificación tangible de fábrica. Ejemplos: "Absorción &lt;0.05%", "Rectificado con diamante a 90°", "Formato 60x120 cm", "Prensado a 400 kg/cm²".
              </p>
            </div>
            <div style="font-size:17px; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.1); padding-top:12px;">
              ⚠️ <em>El cliente NO compra características por sí solas.</em>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2">
            <div>
              <div class="s30-pillar-tag">Fase 2 · La Utilidad</div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <h3 class="s30-pillar-title">B · Beneficio</h3>
              <div class="s30-pillar-badge">¿Qué hace por el cliente?</div>
              <p class="s30-pillar-desc" style="font-size:20px; margin-top:14px;">
                La función práctica en el hogar. Ejemplos: "No absorbe humedad ni grasa", "Las juntas se reducen a 1mm", "Se limpia en minutos", "Resiste muebles pesados sin rayarse".
              </p>
            </div>
            <div style="font-size:17px; color:var(--gold-light); border-top:1px solid rgba(212,175,55,0.2); padding-top:12px;">
              💡 <em>El beneficio justifica la utilidad en el día a día.</em>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2">
            <div>
              <div class="s30-pillar-tag">Fase 3 · La Emoción</div>
              <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
              <h3 class="s30-pillar-title">R · Resultado</h3>
              <div class="s30-pillar-badge">¿Qué emoción o estatus vivirá?</div>
              <p class="s30-pillar-desc" style="font-size:20px; margin-top:14px;">
                El impacto final en su vida. Ejemplos: "Tener la tranquilidad de que su piso se verá idéntico por 20 años", "Orgullo al recibir visitas", "Aumento inmediato de plusvalía".
              </p>
            </div>
            <div style="font-size:17px; color:#ffffff; font-weight:700; border-top:1px solid rgba(255,255,255,0.2); padding-top:12px;">
              🏆 <em>¡EL RESULTADO ES LO QUE REALMENTE CIERRA LA VENTA!</em>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 17: CBR EN UNA SALA
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 17: CBR EN UNA SALA ==================== -->
      <section class="slide" data-slide="17">
        ${getHeader(isModular, 17)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CBR APLICADO: <span class="gold-gradient">EN UNA SALA PRINCIPAL</span></h2>
          <div class="title-sub anim-1">Ejemplo de Guión Práctico para Conectar con el Deseo de Amplitud</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'penthouse_living_room')}" alt="Sala Penthouse" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Espacio Social</span>
              <div style="font-family:var(--font-serif); font-size:28px; font-weight:800; color:#fff; margin-top:8px;">Gran Formato 60x120 Pulido</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.layers}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">CARACTERÍSTICA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Este porcelanato Calacatta viene en placas de 60x120 cm con corte rectificado a 90° con láser."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.sparkles}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">BENEFICIO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Al tener placas el doble de grandes, reducimos el 50% de las juntas y el brillo rebota toda la luz hacia el interior."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">RESULTADO DE VIDA</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Su sala se verá como un penthouse moderno, espacioso y elegante. Sus invitados quedarán fascinados al entrar."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 18: CBR EN BAÑOS ==================== -->
      <section class="slide" data-slide="18">
        ${getHeader(isModular, 18)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CBR APLICADO: <span class="gold-gradient">EN BAÑOS DE LUJO</span></h2>
          <div class="title-sub anim-1">Conectar con la Tranquilidad, la Higiene y el Confort de Spa Privado</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'cbr_luxury_bathroom')}" alt="Baño Spa" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Zona de Bienestar</span>
              <div style="font-family:var(--font-serif); font-size:28px; font-weight:800; color:#fff; margin-top:8px;">Travertino Satinado + Ducha Grip</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.layers}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">CARACTERÍSTICA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Este material tiene una tasa de absorción de agua menor al 0.05% y acabado satinado antideslizante R10."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.sparkles}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">BENEFICIO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"El agua resbala sin penetrar, imposibilitando la formación de moho, hongos o manchas amarillentas en la ducha."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">RESULTADO DE VIDA</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Disfrutará cada mañana de un baño impecable como suite de hotel 5 estrellas, seguro para toda su familia."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 19: CBR EN COCINAS
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 19: CBR EN COCINAS ==================== -->
      <section class="slide" data-slide="19">
        \${getHeader(isModular, 19)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CBR APLICADO: <span class="gold-gradient">EN COCINAS GOURMET</span></h2>
          <div class="title-sub anim-1">Cero Preocupación por Grasas, Ácidos y Altas Temperaturas</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="\${getImgSrc(isModular, 'cbr_luxury_kitchen')}" alt="Cocina Gourmet" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Área Culinaria</span>
              <div style="font-family:var(--font-serif); font-size:28px; font-weight:800; color:#fff; margin-top:8px;">Placas Calacatta en Isla & Piso</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">\${ICONS.layers}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">CARACTERÍSTICA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Porcelanato horneado a 1250°C con cero porosidad superficial y resistencia a manchas químicas."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">\${ICONS.sparkles}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">BENEFICIO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Puede caer aceite caliente, salsa de tomate o vino tinto; nada se absorbe ni deja mancha permanente."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">\${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">RESULTADO DE VIDA</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Cocinar con libertad absoluta sabiendo que con un solo paño húmedo su cocina volverá a quedar reluciente."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 20: CBR EN PROYECTOS COMERCIALES
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 20: CBR EN PROYECTOS COMERCIALES ==================== -->
      <section class="slide" data-slide="20">
        ${getHeader(isModular, 20)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CBR APLICADO: <span class="gold-gradient">EN PROYECTOS COMERCIALES</span></h2>
          <div class="title-sub anim-1">Resistencia al Tráfico Pesado y Cero Costos de Reposición para el Inversionista</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'cbr_commercial_lobby')}" alt="Lobby Comercial" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Comercial / Corporativo</span>
              <div style="font-family:var(--font-serif); font-size:28px; font-weight:800; color:#fff; margin-top:8px;">PEI 5 Alto Rendimiento</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.layers}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">CARACTERÍSTICA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Masa compacta con clasificación PEI 5 y dureza de superficie Mohs 8 resistente a la abrasión."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.sparkles}</div>
              <div>
                <div style="font-size:14px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">BENEFICIO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Soporta miles de personas por día, carritos y tacones sin generar desgaste, opacidad ni rayones."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">RESULTADO DE VIDA</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Ahorro de millones en mantención y una imagen corporativa impecable que transmite solidez y éxito."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 21: OBJECIÓN: ESTÁ MUY CARO ==================== -->
      <section class="slide" data-slide="21">
        ${getHeader(isModular, 21)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">MANEJO DE OBJECIÓN: <span class="gold-gradient">"ESTÁ MUY CARO"</span></h2>
          <div class="title-sub anim-1">Cómo Desmontar el Precio con la Fórmula de Costo por Año de Vida Útil</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'objection_thinking_man')}" alt="Cliente Pensativo" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">La Duda del Precio</span>
              <div style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:#fff; margin-top:8px;">No es un Gasto, es Patrimonio</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.shield}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">PASO 1 · VALIDAR Y AISLAR</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Comprendo su punto; cuidar la inversión es lo más sensato. Si dejamos de lado el precio por un instante, ¿el diseño, formato y calidad le encantan?"</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.dollar}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">PASO 2 · COSTE A 25 AÑOS</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Un piso dura mínimo 25 años. La diferencia frente a un producto básico son apenas $15.000 al mes. Menos de lo que cuesta un café a la semana por tener lujo permanente."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">PASO 3 · EL COSTO DEL ERROR</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Picar un piso desportillado a los 3 años cuesta el triple: escombros, nuevo material y mano de obra. En Alfadekor compra tranquilidad una sola vez."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 22: OBJECIÓN: OTRA TIENDA ==================== -->
      <section class="slide" data-slide="22">
        ${getHeader(isModular, 22)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">OBJECIÓN: <span class="gold-gradient">"EN OTRA TIENDA ES MÁS BARATO"</span></h2>
          <div class="title-sub anim-1">El Desarme de Precios mediante Comparación Técnica Honesta</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'meeting_consultation')}" alt="Asesoría Showroom" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Diferenciación Real</span>
              <div style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:#fff; margin-top:8px;">Comparar Manzanas con Manzanas</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.scale}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">PREGUNTA DE DESARME</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Es muy probable que haya opciones de menor precio. La pregunta crucial es: ¿ese producto es porcelanato masa blanca prensado a 1250°C o cerámica de arcilla roja esmaltada?"</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px; flex:1;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.shieldCheck}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">LOTE ÚNICO GARANTIZADO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Muchos liquidadores venden saldos de diferentes lotes que al instalarse cambian de color entre cajas. En Alfadekor entregamos lote único y mismo tono certificado."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%); flex:1;">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">RESPALDO DIRECTO</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Somos importadores directos. Si le faltan 2 cajas a su maestro, aquí tenemos reposición idéntica inmediata de bodega sin retrasar su obra."</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 23: TRES ESCENARIOS ==================== -->
      <section class="slide" data-slide="23">
        ${getHeader(isModular, 23)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">LA TÉCNICA DE LOS <span class="gold-gradient">TRES ESCENARIOS</span></h2>
          <div class="title-sub anim-1">Cómo Guiar la Decisión del Cliente Hacia la Opción de Mayor Valor</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:28px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- 1. Económica -->
          <div class="card-glass spotlight-card anim-2" style="padding:30px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.layers}</div>
              <span class="card-pillar-tag">Escenario 1</span>
              <h3 class="card-pillar-title">Opción Básica / Económica</h3>
              <div class="card-pillar-badge">Formato 60x60 cm</div>
              <p class="card-pillar-desc" style="margin-top:14px;">
                Cumple técnicamente la función básica. Sin embargo, tiene el doble de juntas visibles y menor sensación de amplitud. Sirve de ancla para mostrar el salto de calidad.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; font-size:17px; color:var(--text-muted);">
              Presupuesto ajustado · Menor impacto visual.
            </div>
          </div>

          <!-- 2. Ideal Alfadekor -->
          <div class="card-glass spotlight-card anim-2" style="padding:30px; border:1.5px solid var(--gold-primary); display:flex; flex-direction:column; justify-content:space-between; background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%);">
            <div>
              <div class="luxury-icon-disc core-disc">${ICONS.sparkles}</div>
              <span class="card-pillar-tag" style="background:var(--gold-gradient); color:#080a10; font-weight:900;">RECOMENDACIÓN IDEAL</span>
              <h3 class="card-pillar-title">Porcelanato 60x120 cm</h3>
              <div class="card-pillar-badge">El Punto Óptimo de Lujo y Valor</div>
              <p class="card-pillar-desc" style="margin-top:14px;">
                El balance perfecto entre inversión inteligente y transformación visual imponente. Multiplica la amplitud, reduce juntas y ofrece la mayor plusvalía comprobada.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.2); border:1px solid var(--gold-primary); padding:12px; border-radius:8px; font-size:18px; color:var(--gold-light); font-weight:700;">
              ⭐ El 85% de nuestros clientes eligen este escenario.
            </div>
          </div>

          <!-- 3. Premium Slabs -->
          <div class="card-glass spotlight-card anim-2" style="padding:30px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.award}</div>
              <span class="card-pillar-tag">Escenario 3</span>
              <h3 class="card-pillar-title">Maxi Slabs Exclusivos</h3>
              <div class="card-pillar-badge">Formato 120x240 cm</div>
              <p class="card-pillar-desc" style="margin-top:14px;">
                Máxima sofisticación sin límites de presupuesto. Placas monolíticas de suelo a techo. Ideal para clientes que buscan exclusividad arquitectónica absoluta.
              </p>
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; font-size:17px; color:var(--text-muted);">
              Lujo sin concesiones · Arquitectura de autor.
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 24: CIERRE POR VISUALIZACIÓN
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 24: CIERRE POR VISUALIZACIÓN ==================== -->
      <section class="slide" data-slide="24">
        ${getHeader(isModular, 24)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CIERRE POR <span class="gold-gradient">VISUALIZACIÓN EMOCIONAL</span></h2>
          <div class="title-sub anim-1">Conectar al Comprador con la Experiencia Sensorial de su Hogar Terminado</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'warm_illuminated_home')}" alt="Hogar Iluminado" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">La Emoción del Logro</span>
              <div style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:#fff; margin-top:8px;">Vivir el Espacio Antes de Instalarlo</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.eye}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">PASO 1 · PINTAR EL CUADRO MENTAL</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Cierre los ojos un segundo. Imagine llegar un viernes por la tarde a su apartamento. Las luces cálidas reflejadas en este piso pulido continuo..."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.heart}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">PASO 2 · CONECTAR CON LA FAMILIA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Sentir la tranquilidad de caminar descalzo, ver a sus hijos jugar y recibir a sus amigos sabiendo que cada rincón refleja su esfuerzo y buen gusto."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%);">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.sparkles}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">PASO 3 · PREGUNTA DE COMPROMISO</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"¿No es exactamente esta la sensación de paz y elegancia que quería para su nuevo hogar?"</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 25: CIERRE POR SEGURIDAD Y RESPALDO
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 25: CIERRE POR SEGURIDAD ==================== -->
      <section class="slide" data-slide="25">
        ${getHeader(isModular, 25)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CIERRE POR <span class="gold-gradient">SEGURIDAD Y RESPALDO</span></h2>
          <div class="title-sub anim-1">Disipar Cualquier Miedo con Garantía Institucional y Soporte de Bodega</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'closing_handshake')}" alt="Alianza de Confianza" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Garantía Alfadekor</span>
              <div style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:#fff; margin-top:8px;">Pacto de Confianza en Obra</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.shieldCheck}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-primary);">PILAR 1 · LOTE ÚNICO CERTIFICADO</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Apartamos hoy mismo la totalidad de sus metros cuadrados de un solo lote de producción para asegurar tonalidad 100% homogénea."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px 26px; display:flex; align-items:center; gap:20px;">
              <div class="luxury-icon-disc" style="margin-bottom:0;">${ICONS.award}</div>
              <div>
                <div style="font-size:15px; font-weight:800; letter-spacing:2px; color:var(--gold-light);">PILAR 2 · SOPORTE DIRECTO EN OBRA</div>
                <div style="font-size:19px; color:#fff; margin-top:4px;">"Le enviamos a su instalador la ficha técnica oficial con el tipo de llana y pegante exacto. No lo dejamos solo en ningún momento del proceso."</div>
              </div>
            </div>

            <div class="card-glass spotlight-card" style="padding:24px 26px; display:flex; align-items:center; gap:20px; border-color:var(--gold-primary); background:linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(14,18,28,0.95) 100%);">
              <div class="luxury-icon-disc core-disc" style="margin-bottom:0;">${ICONS.check}</div>
              <div>
                <div style="font-size:15px; font-weight:900; letter-spacing:2px; color:var(--gold-primary);">LA PREGUNTA DEFINITIVA</div>
                <div style="font-size:20px; color:#ffffff; font-weight:600; margin-top:4px;">"Si este fuera el piso para mi propia casa, tomaría exactamente esta decisión. ¿Preparamos la orden para asegurar su lote de inmediato?"</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 26: VENTA CRUZADA ALFADEKOR (KIT COMPLETO)
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 26: VENTA CRUZADA ALFADEKOR ==================== -->
      <section class="slide" data-slide="26">
        ${getHeader(isModular, 26)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">VENTA CRUZADA: <span class="gold-gradient">KIT DE INSTALACIÓN PERFECTA</span></h2>
          <div class="title-sub anim-1">Garantizar el 100% del Éxito en Obra y Aumentar el Ticket Promedio</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.95fr 1.05fr; gap:32px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <!-- LEFT: Real Product Pack Hero Image -->
          <div style="border-radius:14px; overflow:hidden; border:1.5px solid var(--gold-primary); position:relative; box-shadow:0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.25);">
            <img src="${getImgSrc(isModular, 'cross_selling_pack')}" alt="Kit Instalación Alfadekor" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.95) 0%, rgba(8,10,16,0.4) 40%, transparent 70%);"></div>
            
            <div style="position:absolute; top:20px; left:20px;">
              <span class="gold-ribbon" style="font-size:14px; letter-spacing:2px;">SOLUCIÓN INTEGRAL OBLIGATORIA</span>
            </div>

            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <h3 style="font-family:var(--font-serif); font-size:30px; font-weight:900; color:#ffffff; line-height:1.2; margin-bottom:8px;">El Kit de Obra Perfecta</h3>
              <p style="font-size:18px; color:var(--text-sub); line-height:1.4; margin-bottom:14px;">
                Un porcelanato premium de alta gama colocado con pegante corriente es un desastre anunciado. Alfadekor provee el ecosistema técnico completo.
              </p>
              <div style="background:rgba(212,175,55,0.18); border:1px solid var(--gold-primary); border-radius:8px; padding:10px 16px; font-size:16px; color:var(--gold-light); font-weight:700;">
                💎 Eleva el ticket promedio en un +25% y garantiza la durabilidad a 25 años.
              </div>
            </div>
          </div>

          <!-- RIGHT: 6 Product Cards (2x3 Grid) with Luxury Icon Discs -->
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; height:100%;">
            <!-- 1. Pegante C2 -->
            <div class="card-glass spotlight-card anim-2" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.layers}</div>
                  <span class="card-pillar-tag">Producto 01</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Pegante C2TES2</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">Alta Flexibilidad</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Imprescindible para baja absorción. Evita piezas sopladas o desprendidas.</p>
              </div>
            </div>

            <!-- 2. Boquilla Epóxica -->
            <div class="card-glass spotlight-card anim-2" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.droplet}</div>
                  <span class="card-pillar-tag">Producto 02</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Boquilla Epóxica</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">100% Antihongos</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Juntas selladas que jamás se ennegrecen ni acumulan suciedad o grasa.</p>
              </div>
            </div>

            <!-- 3. Niveladores -->
            <div class="card-glass spotlight-card anim-2" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.grid}</div>
                  <span class="card-pillar-tag">Producto 03</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Cuñas y Clips</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">Nivelación 0 Dientes</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Garantiza una superficie perfectamente plana sin tropiezos entre placas.</p>
              </div>
            </div>

            <!-- 4. Sellador Nano -->
            <div class="card-glass spotlight-card anim-2" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.shield}</div>
                  <span class="card-pillar-tag">Producto 04</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Sellador Nano</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">Barrera Invisible</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Protección hidrófuga extra para boquillas en duchas y terrazas expuestas.</p>
              </div>
            </div>

            <!-- 5. Limpiador Final -->
            <div class="card-glass spotlight-card anim-2" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.sparkles}</div>
                  <span class="card-pillar-tag">Producto 05</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Detergente Ácido</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">Limpieza Post-Obra</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Elimina velos de obra y cemento sin opacar el esmalte brillante.</p>
              </div>
            </div>

            <!-- 6. Perfilería Gold -->
            <div class="card-glass spotlight-card anim-2 gold-active-card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div class="luxury-icon-disc core-disc" style="width:50px; height:50px; margin-bottom:0;">${ICONS.award}</div>
                  <span class="card-pillar-tag">Producto 06</span>
                </div>
                <h4 class="card-pillar-title" style="font-size:20px; margin-bottom:4px;">Perfiles Remate</h4>
                <div class="card-pillar-badge" style="margin-bottom:8px;">Aluminio Dorado & Negro</div>
                <p class="card-pillar-desc" style="font-size:16px; line-height:1.35;">Remate estético supremo para esquinas vivas y transiciones de nivel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>`,

    `<!-- ==================== SLIDE 27: EL PROCESO DE VENTA PERFECTO ==================== -->
      <section class="slide" data-slide="27">
        ${getHeader(isModular, 27)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">EL PROCESO DE <span class="gold-gradient">VENTA PERFECTO</span></h2>
          <div class="title-sub anim-1">Los 8 Pasos de la Asesoría de Alto Rendimiento en Showroom</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; height:calc(100% - 240px); align-items:stretch; margin-bottom:16px;">
          <!-- Paso 01 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.handshakeIcon}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 01</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Saludo Cálido</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Primeros 10 Segundos</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Rompe el hielo con sonrisa genuina. Identifica si viene solo, en pareja o con arquitecto sin presionar.
              </p>
            </div>
          </div>

          <!-- Paso 02 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.search}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 02</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Preguntas Clave</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Diagnóstico Preciso</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Indaga metraje total, tipo de espacio (sala, baño, exterior), estilo soñado y fecha estimada de obra.
              </p>
            </div>
          </div>

          <!-- Paso 03 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.eye}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 03</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Detectar Necesidad</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Lectura de Intención</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Descubre qué busca resolver: ¿amplitud?, ¿fácil limpieza?, ¿mascotas?, ¿revalorizar el inmueble?
              </p>
            </div>
          </div>

          <!-- Paso 04 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.layers}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 04</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">3 Escenarios</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Muestras en Mano</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Presenta muestras físicas del mismo estilo y ancla la conversación en la opción Ideal 60x120 Alfadekor.
              </p>
            </div>
          </div>

          <!-- Paso 05 -->
          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc core-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.award}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 05</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Método CBR</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">El Núcleo de la Venta</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Convierte cada Característica técnica en Beneficio práctico y Resultado emocional de satisfacción duradera.
              </p>
            </div>
          </div>

          <!-- Paso 06 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.shield}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 06</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Objeciones</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Aislar y Reencuadrar</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Desarma "está caro" dividiendo a 25 años y "otra tienda" resaltando lote único y entrega inmediata.
              </p>
            </div>
          </div>

          <!-- Paso 07 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.check}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 07</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Cierre Seguro</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Validación Mutua</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Haz la pregunta definitiva de tranquilidad: "Para su hogar, ¿siente que esta es la decisión correcta?".
              </p>
            </div>
          </div>

          <!-- Paso 08 -->
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="padding:22px 20px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div class="luxury-icon-disc" style="width:54px; height:54px; margin-bottom:0;">${ICONS.trending}</div>
                <span class="s30-pillar-tag" style="margin-bottom:0;">Paso 08</span>
              </div>
              <h3 class="s30-pillar-title" style="font-size:22px; margin-top:12px;">Venta Cruzada</h3>
              <div class="s30-pillar-badge" style="font-size:15px;">Kit Completo de Obra</div>
              <p class="s30-pillar-desc" style="font-size:18px;">
                Añade pegante C2TES2, boquilla epóxica y niveladores para garantizar el 100% del éxito en la instalación.
              </p>
            </div>
          </div>
        </div>

        <div class="card-glass" style="padding:14px 30px; text-align:center; background:rgba(212,175,55,0.08); border:1px solid var(--gold-border);">
          <span class="script-quote" style="font-size:25px; color:var(--gold-light);">
            "Los mejores vendedores siguen procesos rigurosos, no improvisan."
          </span>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 28: CASO PRÁCTICO INTERACTIVO (APTO 90M²)
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 28: CASO PRÁCTICO INTERACTIVO ==================== -->
      <section class="slide" data-slide="28">
        ${getHeader(isModular, 28)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">CASO PRÁCTICO: <span class="gold-gradient">APARTAMENTO 90M²</span></h2>
          <div class="title-sub anim-1">Simulación Real de Cotización y Asesoría Técnica en Showroom</div>
        </div>

        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:36px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--gold-border); position:relative;">
            <img src="${getImgSrc(isModular, 'apartamento_65m2')}" alt="Plano Arquitectónico" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 40%);"></div>
            <div style="position:absolute; bottom:25px; left:25px; right:25px;">
              <span class="gold-ribbon">Caso de Estudio</span>
              <div style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:#fff; margin-top:8px;">Cliente: Familia con Mascota</div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:18px;">
            <div class="card-glass spotlight-card" style="padding:22px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="luxury-icon-disc">${ICONS.home}</div>
                <span class="card-pillar-tag">Metraje Total</span>
                <h3 class="card-pillar-title" style="font-size:22px;">90 m² Reales</h3>
                <div class="card-pillar-badge">+10% Desperdicio (99 m²)</div>
              </div>
              <p class="card-pillar-desc" style="font-size:18px;">60 m² Área Social + 30 m² Habitaciones y Baños.</p>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="luxury-icon-disc">${ICONS.layers}</div>
                <span class="card-pillar-tag">Formato Óptimo</span>
                <h3 class="card-pillar-title" style="font-size:22px;">60x120 Rectificado</h3>
                <div class="card-pillar-badge">Calacatta Gold + Madera</div>
              </div>
              <p class="card-pillar-desc" style="font-size:18px;">Amplitud en sala y confort térmico en cuartos.</p>
            </div>

            <div class="card-glass spotlight-card" style="padding:22px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="luxury-icon-disc">${ICONS.grid}</div>
                <span class="card-pillar-tag">Kit Instalación</span>
                <h3 class="card-pillar-title" style="font-size:22px;">Kit Completo</h3>
                <div class="card-pillar-badge">20 Bolsas Pegante C2</div>
              </div>
              <p class="card-pillar-desc" style="font-size:18px;">+ 500 Niveladores + Boquilla Epóxica Antihongos.</p>
            </div>

            <div class="card-glass spotlight-card gold-active-card" style="padding:22px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
                <span class="card-pillar-tag">Cierre Asesor</span>
                <h3 class="card-pillar-title" style="font-size:22px;">Garantía Total</h3>
                <div class="card-pillar-badge">Entrega Inmediata</div>
              </div>
              <p class="card-pillar-desc" style="font-size:18px;">Despacho de bodega en 24h con lote único sellado.</p>
            </div>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 29: EVALUACIÓN FINAL Y CERTIFICACIÓN
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 29: EVALUACIÓN FINAL ==================== -->
      <section class="slide" data-slide="29">
        ${getHeader(isModular, 29)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">EVALUACIÓN FINAL Y <span class="gold-gradient">CERTIFICACIÓN</span></h2>
          <div class="title-sub anim-1">Los 5 Estándares de Maestría que Exige el Sello de Asesor Alfadekor</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:20px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.award}</div>
              <span class="card-pillar-tag">Módulo 01</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Dominio Técnico</h3>
              <div class="card-pillar-badge">Absorción, PEI & Mohs</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Capacidad de explicar al milímetro por qué el porcelanato supera a cualquier cerámica.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.search}</div>
              <span class="card-pillar-tag">Módulo 02</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Diagnóstico 30s</h3>
              <div class="card-pillar-badge">Preguntas Maestras</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Lectura certera del perfil de cliente para conectar con sus motivaciones emocionales.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <span class="card-pillar-tag">Módulo 03</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Método CBR</h3>
              <div class="card-pillar-badge">Transformación Real</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Fluidez absoluta para convertir datos técnicos en resultados de estatus y durabilidad.</p>
          </div>

          <div class="card-glass spotlight-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc">${ICONS.shield}</div>
              <span class="card-pillar-tag">Módulo 04</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Desarme Objeción</h3>
              <div class="card-pillar-badge">Precio & Competencia</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Destreza para defender el valor patrimonial sin entrar en guerras de descuentos.</p>
          </div>

          <div class="card-glass spotlight-card gold-active-card anim-2" style="padding:24px 20px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="luxury-icon-disc core-disc">${ICONS.check}</div>
              <span class="card-pillar-tag">Módulo 05</span>
              <h3 class="card-pillar-title" style="font-size:22px;">Cierre & Kit</h3>
              <div class="card-pillar-badge">Venta Cruzada 100%</div>
            </div>
            <p class="card-pillar-desc" style="font-size:18px;">Cierre con respaldo total y venta completa de pegantes y niveladores profesionales.</p>
          </div>
        </div>
      </section>`,

    // -------------------------------------------------------------
    // SLIDE 30: ADN DEL VENDEDOR ALFADEKOR (5 PILARES DE ORO)
    // -------------------------------------------------------------
    `<!-- ==================== SLIDE 30: ADN DEL VENDEDOR ALFADEKOR ==================== -->
      <section class="slide" data-slide="30">
        ${getHeader(isModular, 30)}

        <div style="margin-bottom:20px;">
          <h2 class="title-large anim-1">ADN DEL VENDEDOR <span class="gold-gradient">ALFADEKOR</span></h2>
          <div class="title-sub anim-1">Los 5 Pilares de Oro que Separan al Vendedor Común del Asesor de Élite</div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:20px; height:calc(100% - 190px); align-items:stretch; margin-bottom:10px;">
          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 01</div>
              <div class="luxury-icon-disc">${ICONS.sparkles}</div>
              <h3 class="s30-pillar-title">Visión Transformadora</h3>
              <div class="s30-pillar-badge">No vende cajas de baldosas</div>
              <p class="s30-pillar-desc">
                Entiende que el porcelanato define el confort, la plusvalía y la estética de un hogar por los próximos 25 años.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:11px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">👑 Regla de Oro</div>
              <div style="font-size:14px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">El cliente no compra metros cuadrados; compra el hogar donde vivirá su familia.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 02</div>
              <div class="luxury-icon-disc">${ICONS.users}</div>
              <h3 class="s30-pillar-title">Empatía Consultiva</h3>
              <div class="s30-pillar-badge">Escucha el 80% del tiempo</div>
              <p class="s30-pillar-desc">
                Diagnostica antes de recetar. Conecta con el estilo, los miedos y el anhelo familiar de cada cliente.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:11px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">👑 Regla de Oro</div>
              <div style="font-size:14px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Quien no diagnostica no puede recetar; escucha el 80% y presenta en el 20%.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card gold-active-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 03 · Núcleo</div>
              <div class="luxury-icon-disc core-disc">${ICONS.award}</div>
              <h3 class="s30-pillar-title">Dominio Absoluto</h3>
              <div class="s30-pillar-badge">Autoridad técnica Alfadekor</div>
              <p class="s30-pillar-desc">
                Explica con solvencia la baja absorción, el corte rectificado a 90° y el kit de instalación profesional.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.14); border:1px solid var(--gold-primary); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:11px; font-weight:800; letter-spacing:1px; color:var(--gold-light); text-transform:uppercase;">⭐ Regla de Oro</div>
              <div style="font-size:14px; color:#ffffff; font-weight:600; margin-top:4px; line-height:1.35;">La seguridad técnica vence al precio; respalda con autoridad de importador.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 04</div>
              <div class="luxury-icon-disc">${ICONS.shield}</div>
              <h3 class="s30-pillar-title">Solidez & Respaldo</h3>
              <div class="s30-pillar-badge">Disipa cualquier objeción</div>
              <p class="s30-pillar-desc">
                Demuestra el valor del costo por año de vida útil y brinda la certeza de comprar a importadores directos.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:11px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">👑 Regla de Oro</div>
              <div style="font-size:14px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Divide el costo a 25 años; el lujo patrimonial cuesta menos que un café diario.</div>
            </div>
          </div>

          <div class="s30-pillar-card spotlight-card tilt-card anim-2" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="s30-pillar-tag">Pilar 05</div>
              <div class="luxury-icon-disc">${ICONS.handshakeIcon}</div>
              <h3 class="s30-pillar-title">Cierre de Alianza</h3>
              <div class="s30-pillar-badge">Solución integral garantizada</div>
              <p class="s30-pillar-desc">
                Acompaña la venta cruzada del kit perfecto y construye relaciones comerciales duraderas y recomendadas.
              </p>
            </div>
            <div style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:12px; margin-top:14px;">
              <div style="font-size:11px; font-weight:800; letter-spacing:1px; color:var(--gold-primary); text-transform:uppercase;">👑 Regla de Oro</div>
              <div style="font-size:14px; color:#ffffff; font-style:italic; margin-top:4px; line-height:1.35;">Vende el kit completo; garantizar el éxito de obra es tu compromiso ético.</div>
            </div>
          </div>
        </div>
      </section>`
  ].join('\n\n');
}

// -------------------------------------------------------------
// HTML Document Template Builder
// -------------------------------------------------------------
function buildCompleteHTML(isModular) {
  const slidesHtml = generateAll30Slides(isModular);
  const emblemHeaderSrc = isModular ? 'assets/icons/logo_symbol_medallion.webp' : b64.logo_symbol_medallion;

  const reactbitsJs = `
class ReactBitsFX {
  constructor() {
    this.initSpotlight();
    this.initTilt();
  }

  initSpotlight() {
    document.querySelectorAll('.spotlight-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', \`\${x}px\`);
        card.style.setProperty('--mouse-y', \`\${y}px\`);
      });
    });
  }

  initTilt() {
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = \`perspective(1000px) rotateX(\${-y * 8}deg) rotateY(\${x * 8}deg) translateY(-4px)\`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.reactBitsFX = new ReactBitsFX();
});
`;

  const deckEngineJs = `
const SLIDE_TITLES = ${JSON.stringify(SLIDE_TITLES, null, 2)};
const ICONS = {
  volume: \`${ICONS.volume}\`,
  volumeX: \`${ICONS.volumeX}\`
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
        this.stage.style.transform = \`scale(\${scale})\`;
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
      prevSlide.className = \`slide \${direction === 'next' ? 'slide-exit-next' : 'slide-exit-prev'}\`;
      setTimeout(() => {
        prevSlide.className = 'slide';
      }, 500);
    }

    if (nextSlide) {
      nextSlide.className = \`slide active \${direction === 'next' ? 'slide-enter-next' : 'slide-enter-prev'}\`;
      void nextSlide.offsetWidth;
      nextSlide.className = 'slide active';
    }

    this.currentSlide = newIdx;
    this.playClick();

    if (this.counter) {
      const curStr = (this.currentSlide + 1) < 10 ? '0' + (this.currentSlide + 1) : (this.currentSlide + 1);
      const totStr = this.totalSlides < 10 ? '0' + this.totalSlides : this.totalSlides;
      this.counter.textContent = \`\${curStr} / \${totStr}\`;
    }

    if (this.progressBar) {
      const pct = ((this.currentSlide + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = \`\${pct}%\`;
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
      const title = SLIDE_TITLES[idx] || \`Lámina \${numStr}\`;

      card.innerHTML = \`
        <div style="font-family:var(--font-serif); font-size:18px; font-weight:800; color:var(--gold-primary); margin-bottom:6px;">
          Lámina \${numStr}
        </div>
        <div style="font-size:13px; color:#ffffff; line-height:1.3; font-weight:600;">
          \${title}
        </div>
      \`;

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
`;

  // Write JS to repo
  fs.writeFileSync(path.join(jsDir, 'reactbits-fx.js'), reactbitsJs.trim(), 'utf8');
  fs.writeFileSync(path.join(jsDir, 'deck-engine.js'), deckEngineJs.trim(), 'utf8');

  const mainCss = fs.readFileSync(path.join(cssDir, 'main.css'), 'utf8');

  const headStyles = isModular ? `
  <link rel="stylesheet" href="css/main.css">
` : `
  <style>
${mainCss}
  </style>
`;

  const scriptTags = isModular ? `
  <script src="js/reactbits-fx.js"></script>
  <script src="js/deck-engine.js"></script>
` : `
  <script>
${reactbitsJs}

${deckEngineJs}
  </script>
`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALFADEKOR · Maestría en Ventas de Porcelanatos y Revestimientos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
  ${headStyles}
</head>
<body>
  <!-- Top Progress Bar -->
  <div class="top-progress-track">
    <div class="top-progress-bar" id="progressBar"></div>
  </div>

  <!-- Main 16:9 Presentation Stage -->
  <main class="presentation-wrapper">
    <div class="slide-stage" id="slideStage">
      <!-- Ambient Aurora Background Effect -->
      <div class="ambient-aurora"></div>

${slidesHtml}

    </div>
  </main>

  <!-- Bottom Navigation Dock (Fixed 65px footer bar with 0% overlap) -->
  <footer class="fixed-footer-bar">
    <div class="footer-left">
      <img src="${emblemHeaderSrc}" alt="ALFADEKOR" style="width:36px; height:36px; object-fit:contain; filter:drop-shadow(0 2px 8px rgba(212,175,55,0.5)); flex-shrink:0;">
      <span style="font-family:var(--font-serif); font-size:16px; font-weight:800; letter-spacing:2px; color:var(--gold-primary); margin-left:14px;">
        ALFADEKOR · MAESTRÍA EN VENTAS
      </span>
    </div>

    <div class="footer-center">
      <button class="nav-btn" onclick="deck.prev()" title="Lámina Anterior (←)">
        ${ICONS.chevronLeft}
      </button>
      <div class="slide-counter-badge" id="slideCounter">01 / 30</div>
      <button class="nav-btn" onclick="deck.next()" title="Siguiente Lámina (→ / Espacio)">
        ${ICONS.chevronRight}
      </button>
    </div>

    <div class="footer-right">
      <button class="fullscreen-pill-btn" onclick="deck.toggleFullscreen()" id="fsBtn" title="Pantalla Completa (F)">
        <span class="fs-icon">${ICONS.maximize}</span>
        <span class="fs-text">PANTALLA COMPLETA</span>
        <span class="fs-badge">F</span>
      </button>
      <button class="nav-btn" onclick="deck.toggleGrid()" title="Vista Cuadrícula (G)">
        ${ICONS.grid}
      </button>
      <button class="nav-btn" onclick="deck.toggleAudio()" id="audioBtn" title="Efectos de Audio (M)">
        ${ICONS.volume}
      </button>
      <button class="nav-btn" onclick="deck.toggleHelp()" title="Atajos de Teclado (?)">
        ${ICONS.help}
      </button>
    </div>
  </footer>

  <!-- Grid Index Modal -->
  <div class="grid-modal" id="gridModal">
    <div class="modal-header">
      <div>
        <h2 style="font-family:var(--font-serif); font-size:30px; font-weight:800; color:var(--gold-primary);">
          ÍNDICE DE LÁMINAS (30)
        </h2>
        <div style="font-size:16px; color:var(--text-muted); margin-top:4px;">
          Haz click en cualquier lámina para navegar directamente
        </div>
      </div>
      <button class="nav-btn" onclick="deck.closeGrid()" title="Cerrar (Esc)">
        ${ICONS.cross}
      </button>
    </div>
    <div class="grid-cards-container" id="gridCardsContainer"></div>
  </div>

  <!-- Keyboard Shortcuts Help Modal -->
  <div class="help-modal" id="helpModal">
    <div class="help-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; border-bottom:1px solid var(--gold-border); padding-bottom:15px;">
        <h3 style="font-family:var(--font-serif); font-size:26px; font-weight:800; color:var(--gold-primary);">
          ATAJOS DE TECLADO
        </h3>
        <button class="nav-btn" onclick="deck.toggleHelp()" style="width:36px; height:36px;">
          ${ICONS.cross}
        </button>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; font-size:16px;">
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Siguiente lámina</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">→ / Espacio</kbd>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Lámina anterior</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">←</kbd>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Pantalla completa</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">F</kbd>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Ver cuadrícula</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">G</kbd>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Silenciar audio</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">M</kbd>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
          <span style="color:var(--text-sub);">Cerrar ventanas</span>
          <kbd style="background:rgba(212,175,55,0.2); padding:2px 8px; border-radius:4px; font-weight:700; color:var(--gold-light);">Esc</kbd>
        </div>
      </div>
    </div>
  </div>

  ${scriptTags}
</body>
</html>`;
}

// Build both formats
console.log('Building Modular index.html...');
const modularHtml = buildCompleteHTML(true);
fs.writeFileSync(path.join(repoDir, 'index.html'), modularHtml, 'utf8');
console.log('Modular index.html written to repo!');

console.log('Building Standalone HTML...');
const standaloneHtml = buildCompleteHTML(false);
fs.writeFileSync(standaloneOut, standaloneHtml, 'utf8');
fs.writeFileSync(path.join(repoDir, 'Capacitacion-Alfadekor-Maestria-en-Ventas.html'), standaloneHtml, 'utf8');
console.log('Standalone HTML written successfully to both destinations!');

console.log('ALL 30 SLIDES SUCCESSFULLY BUILT WITH LUXURY ICON DISCS & ENLARGED LOGOS!');
