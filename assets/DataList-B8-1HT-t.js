import{F as Gt,G as It,H as Mt,J as Nt,e as Ht,s as de,a as Ot,o as Rt,k as P,K as Ut,y as qt,f as Ee,I as d,n as r,i as S,m as e,q as ce,r as he,z as at,b as p,d as Vt,B as k,C as a,D as q,t as w,x as i,u as V,A as m,$ as Bt,v as Fe,L as st,l as Kt,w as rt}from"./index-Bju4p2Eg.js";import{b as Zt,S as Jt}from"./SkeletonLoader-BBI2ConV.js";function Wt(v,Q,A){Gt(()=>{var $=It(()=>Q(v,A==null?void 0:A())||{});if($!=null&&$.destroy)return()=>$.destroy()})}function lt(v){try{return new Date(v).toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"})}catch{return v}}function Yt(v){return`
  <div class="header">
    <div class="header-left">
      ${v?`<img src="${v}" alt="Escudo" class="escudo">`:""}
      <div>
        <p class="inst-name">INSTITUCIÓN EDUCATIVA OFICIAL <strong>INSTITUTO GUÁTICA</strong></p>
        <p class="inst-detail">Res. 002879 del 13/Dic/2017 · NIT 891.401.438-5 · DANE 166318000537</p>
      </div>
    </div>
    <div class="header-right">
      <p class="title-text">ACTA DE ENTREGA</p>
      <p class="title-sub">Plan de Mejoramiento · ${Mt} · ${Nt}</p>
    </div>
  </div>
  `}function Qt(v,Q,A,$){const X=lt(v.fecha_limite),j=lt(new Date().toISOString().split("T")[0]);return`
  <div class="page-item">
    ${Yt(Q)}

    <table class="info-table">
      <tr>
        <td class="info-cell"><span class="lbl">Estudiante</span><span class="val bold">${v.estudiante||""}</span></td>
        <td class="info-cell"><span class="lbl">Grupo</span><span class="val">${v.grupo||""}</span></td>
        <td class="info-cell"><span class="lbl">Asignatura</span><span class="val">${v.asignatura||""}</span></td>
      </tr>
      <tr>
        <td class="info-cell"><span class="lbl">Docente</span><span class="val">${v.docente||""}</span></td>
        <td class="info-cell"><span class="lbl">Fecha de Entrega</span><span class="val">${j}</span></td>
        <td class="info-cell"><span class="lbl">Fecha Límite</span><span class="val bold">${X}</span></td>
      </tr>
    </table>

    <div class="plan-section">
      <p class="plan-title">Plan de Mejoramiento / Refuerzo Académico</p>
      <div class="plan-content">${v.plan||""}</div>
    </div>

    <div class="footer-zone">
      <p class="notice"><strong>Nota:</strong> Este plan debe ser desarrollado por el estudiante en el período indicado con acompañamiento de los padres. Entregar en la fecha límite.</p>
      <div class="firmas">
        <div class="firma"><div class="firma-line"></div><p class="firma-label">Firma del Docente</p></div>
        <div class="firma"><div class="firma-line"></div><p class="firma-label">Firma del Coordinador</p></div>
        <div class="firma"><div class="firma-line"></div><p class="firma-label">Firma del Acudiente</p></div>
      </div>
    </div>
  </div>
  ${$?"":'<div class="page-break"></div>'}
  `}function it(v,Q){var D;Array.isArray(v)||(v=[v]);const A=((D=v[0])==null?void 0:D.estudiante)||"",$=v.map((G,C)=>Qt(G,Q,!0,C===v.length-1)).join(""),X=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Plan de Mejoramiento - ${A}</title>
<style>
  @page { size: letter; margin: 10mm 12mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    color: #222;
    font-size: 10px;
    line-height: 1.4;
    height: 100%;
  }

  /* Cada acta ocupa exactamente una página */
  .page-item {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Encabezado ---- */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border-bottom: 1.5px solid #333;
    flex-shrink: 0;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .escudo {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .inst-name {
    font-size: 9px;
    color: #222;
  }

  .inst-detail {
    font-size: 7px;
    color: #666;
    margin-top: 1px;
  }

  .header-right {
    text-align: right;
  }

  .title-text {
    font-size: 12px;
    font-weight: 700;
    color: #111;
    letter-spacing: 1px;
  }

  .title-sub {
    font-size: 8px;
    color: #555;
    margin-top: 2px;
  }

  /* ---- Tabla de datos ---- */
  .info-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #aaa;
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  .info-cell {
    border: 1px solid #ccc;
    padding: 5px 8px;
    width: 33.33%;
  }

  .lbl {
    display: block;
    font-size: 7.5px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 1px;
  }

  .val {
    display: block;
    font-size: 10px;
    color: #222;
  }

  .val.bold { font-weight: 700; }

  /* ---- Plan: crece para llenar todo el espacio disponible ---- */
  .plan-section {
    border: 1px solid #aaa;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  .plan-title {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    padding: 5px 8px;
    border-bottom: 1px solid #aaa;
    color: #222;
    flex-shrink: 0;
  }

  .plan-content {
    padding: 8px 10px;
    font-size: 10px;
    line-height: 1.5;
    color: #222;
    white-space: pre-wrap;
    flex: 1;
    overflow: hidden;
  }

  /* ---- Zona inferior fija: nota + firmas ---- */
  .footer-zone {
    flex-shrink: 0;
    margin-top: 10px;
  }

  .notice {
    font-size: 8px;
    color: #555;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .firmas {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding-top: 8px;
    border-top: 1px dashed #aaa;
  }

  .firma {
    flex: 1;
    text-align: center;
  }

  .firma-line {
    border-top: 1px solid #333;
    margin-top: 30px;
    margin-bottom: 4px;
  }

  .firma-label {
    font-size: 8px;
    color: #444;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .page-break {
    page-break-after: always;
    height: 0;
  }

  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page-item {
      height: auto;
      min-height: 100vh;
      page-break-inside: avoid;
    }
    .plan-section {
      flex: 1;
    }
    .page-break { page-break-after: always; }
  }
</style>
</head>
<body>
  ${$}

  <script>
    window.onload = function() {
      window.print();
    };
  <\/script>
</body>
</html>`,j=window.open("","_blank");j.document.write(X),j.document.close()}var Xt=m('<button class="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center gap-1 transition-colors svelte-92ti40"><!> Limpiar filtros</button>'),ea=m('<button class="btn-danger text-xs flex items-center gap-1 svelte-92ti40"><!> </button>'),ta=m('<option class="svelte-92ti40"> </option>'),aa=m('<option class="svelte-92ti40"> </option>'),sa=m('<span class="filter-chip svelte-92ti40"><!> <span class="truncate max-w-[150px] svelte-92ti40"> </span> <button class="w-4 h-4 rounded-full hover:bg-primary-200 dark:hover:bg-primary-700 flex items-center justify-center transition-colors ml-0.5 svelte-92ti40"><!></button></span>'),ra=m('<div class="sticky-filter-bar svelte-92ti40"><div class="flex items-center gap-2 flex-wrap svelte-92ti40"><!> <span class="text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0 svelte-92ti40">Filtros activos:</span> <!> <span class="text-xs text-slate-400 dark:text-slate-500 ml-auto shrink-0 svelte-92ti40"> </span></div></div>'),la=m('<span class="text-[10px] font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/50 px-1.5 py-0.5 rounded-md svelte-92ti40">Filtrado</span>'),ia=m('<span class="text-[10px] font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded-md truncate max-w-[80px] svelte-92ti40"> </span>'),na=m('<div class="flex items-center gap-3 svelte-92ti40"><span class="text-xs text-slate-600 dark:text-slate-300 w-28 sm:w-40 truncate font-medium svelte-92ti40"> </span> <div class="flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative svelte-92ti40"><div></div> <span> </span></div> <span class="text-[10px] text-slate-400 dark:text-slate-500 w-8 text-right font-medium svelte-92ti40"> </span></div>'),oa=m('<div class="card p-4 sm:p-5 stagger-item svelte-92ti40" style="animation-delay: 320ms"><div class="flex items-center gap-2 mb-3 svelte-92ti40"><!> <h3 class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider svelte-92ti40">Distribución por asignatura</h3> <span class="text-[10px] text-slate-400 dark:text-slate-500 ml-auto svelte-92ti40">Top 5</span></div> <div class="space-y-2.5 svelte-92ti40"></div></div>'),da=m('<div class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 border border-amber-200/60 dark:border-amber-800/60 stagger-item svelte-92ti40" style="animation-delay: 400ms"><!> <p class="text-xs text-amber-700 dark:text-amber-300 svelte-92ti40"><span class="font-semibold svelte-92ti40">Próxima fecha límite:</span> <span class="text-amber-500 dark:text-amber-400 ml-1 svelte-92ti40"> </span></p></div>'),ca=m('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 svelte-92ti40"><div class="stat-card group stagger-item svelte-92ti40" style="animation-delay: 0ms"><div class="flex items-center justify-between mb-3 svelte-92ti40"><div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center transition-transform group-hover:scale-110 svelte-92ti40"><!></div> <!></div> <p class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight svelte-92ti40"> </p> <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 svelte-92ti40">Estudiantes</p></div> <div class="stat-card group stagger-item svelte-92ti40" style="animation-delay: 80ms"><div class="flex items-center justify-between mb-3 svelte-92ti40"><div class="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center transition-transform group-hover:scale-110 svelte-92ti40"><!></div> <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500 svelte-92ti40"> </span></div> <p class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight svelte-92ti40"> </p> <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 svelte-92ti40">Planes de mejoramiento</p></div> <div class="stat-card group stagger-item svelte-92ti40" style="animation-delay: 160ms"><div class="flex items-center justify-between mb-3 svelte-92ti40"><div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center transition-transform group-hover:scale-110 svelte-92ti40"><!></div> <!></div> <p class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight svelte-92ti40"> </p> <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 svelte-92ti40">Asignaturas</p></div> <div class="stat-card group stagger-item svelte-92ti40" style="animation-delay: 240ms"><div class="flex items-center justify-between mb-3 svelte-92ti40"><div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center transition-transform group-hover:scale-110 svelte-92ti40"><!></div> <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500 svelte-92ti40"> </span></div> <p class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight svelte-92ti40"> </p> <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 svelte-92ti40">Docentes</p></div></div> <!> <!>',1),va=m('<button class="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 rounded-xl transition-colors svelte-92ti40"><!> Limpiar filtros</button>'),pa=m('<div class="card p-12 text-center stagger-item svelte-92ti40"><div class="mx-auto mb-6 w-48 h-48 svelte-92ti40"><svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full svelte-92ti40"><circle cx="100" cy="100" r="90" class="fill-slate-100 dark:fill-slate-800 svelte-92ti40"></circle><rect x="45" y="75" width="110" height="80" rx="8" class="fill-slate-200 dark:fill-slate-700 svelte-92ti40"></rect><path d="M45 83C45 78.5817 48.5817 75 53 75H80L90 65H137C141.418 65 145 68.5817 145 73V75H45V83Z" class="fill-slate-300 dark:fill-slate-600 svelte-92ti40"></path><rect x="40" y="85" width="120" height="70" rx="6" stroke-width="1.5"></rect><circle cx="100" cy="115" r="18" class="stroke-primary-400 dark:stroke-primary-500 svelte-92ti40" stroke-width="3" fill="none"></circle><line x1="113" y1="128" x2="125" y2="140" class="stroke-primary-400 dark:stroke-primary-500 svelte-92ti40" stroke-width="3" stroke-linecap="round"></line><text x="95" y="122" class="fill-primary-400 dark:fill-primary-500 svelte-92ti40" font-size="20" font-weight="bold" font-family="sans-serif">?</text><circle cx="50" cy="55" r="3" class="fill-primary-200 dark:fill-primary-700 svelte-92ti40" opacity="0.6"></circle><circle cx="160" cy="60" r="4" class="fill-violet-200 dark:fill-violet-700 svelte-92ti40" opacity="0.6"></circle><circle cx="35" cy="150" r="3" class="fill-emerald-200 dark:fill-emerald-700 svelte-92ti40" opacity="0.6"></circle><circle cx="170" cy="145" r="5" class="fill-amber-200 dark:fill-amber-700 svelte-92ti40" opacity="0.5"></circle></svg></div> <p class="text-slate-600 dark:text-slate-300 font-semibold text-lg mb-1 svelte-92ti40">No se encontraron registros</p> <p class="text-sm text-slate-400 dark:text-slate-500 max-w-sm mx-auto svelte-92ti40"><!></p> <!></div>'),xa=m('<div class="alert-badge svelte-92ti40"><span class="alert-ring svelte-92ti40"></span> <span class="alert-ring alert-ring-2 svelte-92ti40"></span> <span class="alert-icon-wrap svelte-92ti40"><!></span> <span class="alert-label svelte-92ti40"> </span></div>'),ma=m('<span><span></span> <span class="truncate max-w-[120px] svelte-92ti40"> </span></span>'),ua=m(`<button><!> <div class="flex items-start gap-3 mb-3 svelte-92ti40"><div> </div> <div class="flex-1 min-w-0 svelte-92ti40"><h3 class="text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-tight line-clamp-2 svelte-92ti40"> </h3> <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1 svelte-92ti40"><!> </p></div></div> <div class="flex flex-wrap gap-1.5 mb-3 svelte-92ti40"></div> <div class="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700 svelte-92ti40"><div class="flex items-center gap-1.5 svelte-92ti40"><!> <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 svelte-92ti40"> </span></div> <span class="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1 svelte-92ti40"><!> </span></div> <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center bg-slate-900/5 dark:bg-slate-100/5 svelte-92ti40"><span class="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-xs font-semibold text-primary-600 dark:text-primary-400 px-3 py-1.5 rounded-full shadow-lg svelte-92ti40"><!> Ver
              detalle</span></div></button>`),fa=m('<div class="flex items-center justify-between px-1 svelte-92ti40"><p class="text-xs text-slate-400 dark:text-slate-500 svelte-92ti40">Mostrando <span class="font-semibold text-slate-600 dark:text-slate-300 svelte-92ti40"> </span> <span class="font-semibold text-slate-600 dark:text-slate-300 svelte-92ti40"> </span> planes</p></div> <div class="student-grid svelte-92ti40"></div>',1),ga=m('<div class="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/60 p-4 space-y-3 svelte-92ti40"><div class="flex flex-wrap items-center gap-x-3 gap-y-1.5 svelte-92ti40"><span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 svelte-92ti40"><!> </span> <span class="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 svelte-92ti40"><!> </span> <span><span></span> </span></div> <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line svelte-92ti40"> </div> <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 dark:text-slate-500 svelte-92ti40"><span class="flex items-center gap-1 svelte-92ti40"><!> Límite: <span class="font-medium text-slate-500 dark:text-slate-400 svelte-92ti40"> </span></span> <span class="flex items-center gap-1 svelte-92ti40"><!> </span></div></div>'),ba=m('<div class="svelte-92ti40"><div class="modal-backdrop svelte-92ti40" role="dialog" aria-modal="true" aria-label="Detalle del estudiante"><div class="modal-content svelte-92ti40"><div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-700 shrink-0 svelte-92ti40"><div class="flex items-center gap-3 svelte-92ti40"><div> </div> <div class="svelte-92ti40"><h3 class="text-base font-bold text-slate-800 dark:text-slate-100 svelte-92ti40"> </h3> <p class="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 svelte-92ti40"><!> <span class="text-slate-200 dark:text-slate-600 svelte-92ti40">|</span> </p></div></div> <button class="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 svelte-92ti40" aria-label="Cerrar"><!></button></div> <div class="p-5 space-y-3 overflow-y-auto modal-body svelte-92ti40"></div> <div class="flex justify-end gap-2 p-5 border-t border-slate-100 dark:border-slate-700 shrink-0 svelte-92ti40"><button class="px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors svelte-92ti40">Cerrar</button> <button class="btn-danger svelte-92ti40"><!> Generar PDF</button></div></div></div></div>'),ha=m('<div class="space-y-5 svelte-92ti40"><div class="card p-5 sm:p-6 svelte-92ti40"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 svelte-92ti40"><div class="flex items-center gap-2 svelte-92ti40"><div class="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center svelte-92ti40"><!></div> <h2 class="text-base font-bold text-slate-800 dark:text-slate-100 svelte-92ti40">Registros</h2></div> <div class="flex items-center gap-2 svelte-92ti40"><!> <!></div></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 svelte-92ti40"><div class="relative svelte-92ti40"><!> <input type="text" placeholder="Buscar en todos los campos..." class="field-input pl-10 svelte-92ti40"/></div> <select class="field-input svelte-92ti40"><option class="svelte-92ti40">Todos los grupos</option><!></select> <select class="field-input svelte-92ti40"><option class="svelte-92ti40">Todos los docentes</option><!></select></div></div> <!> <!> <!></div> <!>',1);function ka(v,Q){Ht(Q,!0);let A=de(Ot([])),$=de(!0),X=de(""),j=de(""),D=de(""),G=de(""),C=de(null),nt=k(()=>[...new Set(e(A).map(t=>t.grupo))].sort((t,s)=>Number(t)-Number(s))),ot=k(()=>[...new Set(e(A).map(t=>t.docente))].sort()),b=k(()=>e(A).filter(t=>{const s=!e(j)||Object.values(t).some(x=>String(x).toLowerCase().includes(e(j).toLowerCase())),l=!e(D)||t.grupo===e(D),n=!e(G)||t.docente===e(G);return s&&l&&n})),ee=k(()=>Object.values(e(b).reduce((t,s)=>(t[s.estudiante]||(t[s.estudiante]={estudiante:s.estudiante,grupo:s.grupo,records:[]}),t[s.estudiante].records.push(s),t),{})).sort((t,s)=>t.estudiante.localeCompare(s.estudiante))),E=k(()=>({totalEstudiantes:e(ee).length,totalPlanes:e(b).length,totalAsignaturas:[...new Set(e(b).map(t=>t.asignatura))].length,totalDocentes:[...new Set(e(b).map(t=>t.docente))].length,totalGrupos:[...new Set(e(b).map(t=>t.grupo))].length,promedioPlanesPorEstudiante:e(ee).length>0?(e(b).length/e(ee).length).toFixed(1):"0",asignaturaTop:(()=>{const t={};e(b).forEach(l=>{t[l.asignatura]=(t[l.asignatura]||0)+1});const s=Object.entries(t).sort((l,n)=>n[1]-l[1]);return s[0]?{nombre:s[0][0],cantidad:s[0][1]}:null})(),fechaProxima:(()=>{const t=new Date;return t.setHours(0,0,0,0),e(b).map(l=>new Date(l.fecha_limite)).filter(l=>l>=t).sort((l,n)=>l-n)[0]||null})()})),Le=k(()=>()=>{const t={};e(b).forEach(l=>{t[l.asignatura]=(t[l.asignatura]||0)+1});const s=e(b).length||1;return Object.entries(t).sort((l,n)=>n[1]-l[1]).slice(0,5).map(([l,n])=>({nombre:l,cantidad:n,porcentaje:Math.round(n/s*100)}))});function ze(){P(j,""),P(D,""),P(G,"")}let _e=k(()=>e(j)||e(D)||e(G)),dt=k(()=>()=>{const t=[];return e(j)&&t.push({key:"search",label:`"${e(j)}"`,icon:"mdi:magnify",clear:()=>P(j,"")}),e(D)&&t.push({key:"grupo",label:`Grupo ${e(D)}`,icon:"mdi:google-classroom",clear:()=>P(D,"")}),e(G)&&t.push({key:"docente",label:e(G),icon:"mdi:account-tie",clear:()=>P(G,"")}),t});Rt(async()=>{await Promise.allSettled([(async()=>{try{const t=await fetch("https://app.iedeoccidente.com/gs/getgsartirec.php");P(A,await t.json(),!0)}catch(t){console.error("Error fetching data:",t)}finally{P($,!1)}})(),(async()=>{try{const s=await(await fetch(Ut)).blob(),l=new FileReader;l.onloadend=()=>{P(X,l.result,!0)},l.readAsDataURL(s)}catch{}})()])});function Ge(t){try{return new Date(t).toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"})}catch{return t}}function Ie(t){try{return new Date(t).toLocaleDateString("es-CO",{month:"short",day:"numeric"})}catch{return t}}function je(t){const s=new Date;s.setHours(0,0,0,0);const l=new Date(t);return l.setHours(0,0,0,0),Math.ceil((l-s)/(1e3*60*60*24))}function Me(t){const s=je(t);return s<0?{label:"Vencido",color:"text-rose-600 bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800",icon:"mdi:alert-circle",dot:"bg-rose-500"}:s<=3?{label:`${s}d restante${s!==1?"s":""}`,color:"text-amber-600 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800",icon:"mdi:clock-alert",dot:"bg-amber-500"}:s<=7?{label:`${s} días`,color:"text-blue-600 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",icon:"mdi:calendar-clock",dot:"bg-blue-500"}:{label:`${s} días`,color:"text-emerald-600 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800",icon:"mdi:calendar-check",dot:"bg-emerald-500"}}function ct(t){P(C,t,!0)}function we(){P(C,null)}function De(t){return document.body.appendChild(t),{destroy(){t.parentNode&&t.parentNode.removeChild(t)}}}function vt(t){t.key==="Escape"&&e(C)&&we()}const Ne=["from-primary-400 to-primary-600","from-violet-400 to-violet-600","from-emerald-400 to-emerald-600","from-amber-400 to-amber-600","from-rose-400 to-rose-600","from-cyan-400 to-cyan-600","from-fuchsia-400 to-fuchsia-600","from-teal-400 to-teal-600"];function He(t){let s=0;for(let l=0;l<t.length;l++)s=t.charCodeAt(l)+((s<<5)-s);return Ne[Math.abs(s)%Ne.length]}function Oe(t){return t.split(" ").slice(0,2).map(s=>s[0]).join("").toUpperCase()}function pt(t){const s=e(b).filter(l=>l.estudiante===t.estudiante);it(s,e(X))}function xt(){const t=[...e(b)].sort((s,l)=>s.estudiante.localeCompare(l.estudiante));it(t,e(X))}const Re=["bg-primary-500","bg-violet-500","bg-emerald-500","bg-amber-500","bg-rose-500"];var Ue=ha();qt("keydown",Bt,vt);var qe=Ee(Ue),Ve=a(qe),Be=a(Ve),Ke=a(Be),mt=a(Ke),ut=a(mt);d(ut,{icon:"mdi:format-list-bulleted",class:"text-primary-600 dark:text-primary-400 text-lg"});var ft=r(Ke,2),Ze=a(ft);{var gt=t=>{var s=Xt(),l=a(s);d(l,{icon:"mdi:filter-remove",class:"text-sm"}),q("click",s,ze),p(t,s)};S(Ze,t=>{e(_e)&&t(gt)})}var bt=r(Ze,2);{var ht=t=>{var s=ea(),l=a(s);d(l,{icon:"mdi:file-pdf-box",class:"text-sm"});var n=r(l);w(()=>i(n,` PDF Grupo ${e(D)??""}`)),q("click",s,xt),p(t,s)};S(bt,t=>{e(D)&&e(b).length>0&&t(ht)})}var _t=r(Be,2),Je=a(_t),We=a(Je);d(We,{icon:"mdi:magnify",class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base"});var yt=r(We,2),Ce=r(Je,2),Te=a(Ce);Te.value=Te.__value="";var kt=r(Te);ce(kt,17,()=>e(nt),he,(t,s)=>{var l=ta(),n=a(l),x={};w(()=>{i(n,`Grupo ${e(s)??""}`),x!==(x=e(s))&&(l.value=(l.__value=e(s))??"")}),p(t,l)});var Ye=r(Ce,2),Pe=a(Ye);Pe.value=Pe.__value="";var wt=r(Pe);ce(wt,17,()=>e(ot),he,(t,s)=>{var l=aa(),n=a(l),x={};w(()=>{i(n,e(s)),x!==(x=e(s))&&(l.value=(l.__value=e(s))??"")}),p(t,l)});var Qe=r(Ve,2);{var $t=t=>{var s=ra(),l=a(s),n=a(l);d(n,{icon:"mdi:filter-variant",class:"text-primary-500 dark:text-primary-400 text-sm shrink-0"});var x=r(n,4);ce(x,17,()=>e(dt)(),I=>I.key,(I,M)=>{var N=sa(),O=a(N);d(O,{get icon(){return e(M).icon},class:"text-xs"});var o=r(O,2),g=a(o),h=r(o,2),B=a(h);d(B,{icon:"mdi:close",class:"text-[10px]"}),w(()=>i(g,e(M).label)),q("click",h,function(...K){var Z;(Z=e(M).clear)==null||Z.apply(this,K)}),p(I,N)});var F=r(x,2),L=a(F);w(()=>i(L,`${e(b).length??""} resultado${e(b).length!==1?"s":""}`)),p(t,s)};S(Qe,t=>{e(_e)&&!e($)&&t($t)})}var Xe=r(Qe,2);{var jt=t=>{Jt(t,{type:"cards"})},Dt=t=>{var s=ca(),l=Ee(s),n=a(l),x=a(n),F=a(x),L=a(F);d(L,{icon:"mdi:account-group",class:"text-primary-600 dark:text-primary-400 text-xl"});var I=r(F,2);{var M=u=>{var c=la();p(u,c)};S(I,u=>{e(_e)&&u(M)})}var N=r(x,2),O=a(N),o=r(n,2),g=a(o),h=a(g),B=a(h);d(B,{icon:"mdi:text-box-multiple",class:"text-violet-600 dark:text-violet-400 text-xl"});var K=r(h,2),Z=a(K),R=r(g,2),ve=a(R),te=r(o,2),J=a(te),W=a(J),H=a(W);d(H,{icon:"mdi:book-open-variant",class:"text-emerald-600 dark:text-emerald-400 text-xl"});var z=r(W,2);{var Y=u=>{var c=ia(),f=a(c);w(()=>{Fe(c,"title",`Más frecuente: ${e(E).asignaturaTop.nombre??""}`),i(f,`Top: ${e(E).asignaturaTop.cantidad??""}`)}),p(u,c)};S(z,u=>{e(E).asignaturaTop&&u(Y)})}var pe=r(J,2),xe=a(pe),ae=r(te,2),se=a(ae),re=a(se),le=a(re);d(le,{icon:"mdi:account-tie",class:"text-amber-600 dark:text-amber-400 text-xl"});var ie=r(re,2),me=a(ie),ue=r(se,2),fe=a(ue),ge=r(l,2);{var ne=u=>{var c=oa(),f=a(c),_=a(f);d(_,{icon:"mdi:chart-bar",class:"text-slate-400 text-base"});var y=r(f,2);ce(y,21,()=>e(Le)(),he,(U,T,oe)=>{var $e=na(),Se=a($e),Et=a(Se),et=r(Se,2),Ae=a(et),tt=r(Ae,2),Ft=a(tt),Lt=r(et,2),zt=a(Lt);w(()=>{Fe(Se,"title",e(T).nombre),i(Et,e(T).nombre),V(Ae,1,`h-full rounded-full transition-all duration-700 ease-out ${Re[oe%Re.length]??""}`,"svelte-92ti40"),rt(Ae,`width: ${e(T).porcentaje??""}%`),V(tt,1,`absolute inset-0 flex items-center justify-end pr-2 text-[10px] font-bold ${e(T).porcentaje>50?"text-white":"text-slate-500 dark:text-slate-300"}`,"svelte-92ti40"),i(Ft,e(T).cantidad),i(zt,`${e(T).porcentaje??""}%`)}),p(U,$e)}),p(u,c)},ye=k(()=>e(Le)().length>0);S(ge,u=>{e(ye)&&u(ne)})}var ke=r(ge,2);{var be=u=>{var c=da(),f=a(c);d(f,{icon:"mdi:bell-ring-outline",class:"text-amber-500 text-lg"});var _=r(f,2),y=r(a(_)),U=r(y),T=a(U);w((oe,$e)=>{i(y,` ${oe??""} `),i(T,`(${$e??""} días)`)},[()=>Ge(e(E).fechaProxima.toISOString()),()=>je(e(E).fechaProxima.toISOString())]),p(u,c)};S(ke,u=>{e(E).fechaProxima&&u(be)})}w(()=>{i(O,e(E).totalEstudiantes),i(Z,`${e(E).promedioPlanesPorEstudiante??""}/est.`),i(ve,e(E).totalPlanes),i(xe,e(E).totalAsignaturas),i(me,`${e(E).totalGrupos??""} grupos`),i(fe,e(E).totalDocentes)}),p(t,s)};S(Xe,t=>{e($)?t(jt):e(A).length>0&&t(Dt,1)})}var Ct=r(Xe,2);{var Tt=t=>{var s=pa(),l=a(s),n=a(l),x=r(a(n),3);V(x,0,"fill-white dark:fill-slate-700 svelte-92ti40",null,{},{"stroke-slate-200":!0});var F=r(l,4),L=a(F);{var I=o=>{var g=st(`No hay resultados para los filtros actuales. Intenta ajustar los
          criterios de busqueda.`);p(o,g)},M=o=>{var g=st(`Aun no hay planes de mejoramiento registrados. Usa el formulario para
          crear el primero.`);p(o,g)};S(L,o=>{e(_e)?o(I):o(M,-1)})}var N=r(F,2);{var O=o=>{var g=va(),h=a(g);d(h,{icon:"mdi:filter-remove",class:"text-base"}),q("click",g,ze),p(o,g)};S(N,o=>{e(_e)&&o(O)})}p(t,s)},Pt=t=>{var s=fa(),l=Ee(s),n=a(l),x=r(a(n)),F=a(x),L=r(x),I=r(L),M=a(I),N=r(l,2);ce(N,21,()=>e(ee),he,(O,o,g)=>{const h=k(()=>e(o).records.length),B=k(()=>e(o).records.reduce((c,f)=>{const _=je(f.fecha_limite);return _<c?_:c},1/0)),K=k(()=>e(B)<0?"rose":e(B)<=3?"amber":e(B)<=7?"blue":"emerald"),Z=k(()=>`border-t-${e(K)}-500`);var R=ua(),ve=a(R);{var te=c=>{var f=xa(),_=r(a(f),4),y=a(_);d(y,{icon:"mdi:alert",class:"text-[13px] relative z-10"});var U=r(_,2),T=a(U);w(()=>{Fe(f,"title",`Este estudiante tiene ${e(h)??""} planes de mejoramiento`),i(T,`${e(h)??""} planes`)}),p(c,f)};S(ve,c=>{e(h)>2&&c(te)})}var J=r(ve,2),W=a(J),H=a(W),z=r(W,2),Y=a(z),pe=a(Y),xe=r(Y,2),ae=a(xe);d(ae,{icon:"mdi:google-classroom",class:"text-xs"});var se=r(ae),re=r(J,2);ce(re,21,()=>e(o).records,he,(c,f)=>{const _=k(()=>Me(e(f).fecha_limite));var y=ma(),U=a(y),T=r(U,2),oe=a(T);w(()=>{V(y,1,`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-lg border ${e(_).color??""}`,"svelte-92ti40"),V(U,1,`w-1.5 h-1.5 rounded-full ${e(_).dot??""} shrink-0`,"svelte-92ti40"),i(oe,e(f).asignatura)}),p(c,y)});var le=r(re,2),ie=a(le),me=a(ie);d(me,{icon:"mdi:text-box-multiple",class:"text-xs text-slate-400 dark:text-slate-500"});var ue=r(me,2),fe=a(ue),ge=r(ie,2),ne=a(ge);d(ne,{icon:"mdi:calendar-clock",class:"text-[11px]"});var ye=r(ne),ke=r(le,2),be=a(ke),u=a(be);d(u,{icon:"mdi:eye-outline",class:"text-sm inline -mt-0.5"}),w((c,f,_,y)=>{V(R,1,`student-card card border-t-4 ${e(Z)??""} text-left cursor-pointer group stagger-item`,"svelte-92ti40"),rt(R,`animation-delay: ${c??""}ms`),V(W,1,`w-11 h-11 rounded-xl bg-gradient-to-br ${f??""} flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0`,"svelte-92ti40"),i(H,_),i(pe,e(o).estudiante),i(se,` Grupo ${e(o).grupo??""}`),i(fe,`${e(h)??""}
                ${e(h)===1?"plan":"planes"}`),i(ye,` ${y??""}`)},[()=>Math.min(g*60,600),()=>He(e(o).estudiante),()=>Oe(e(o).estudiante),()=>Ie(e(o).records[0].fecha_limite)]),q("click",R,()=>ct(e(o))),p(O,R)}),w(()=>{i(F,e(ee).length),i(L,` estudiante${e(ee).length!==1?"s":""} con `),i(M,e(b).length)}),p(t,s)};S(Ct,t=>{!e($)&&e(ee).length===0?t(Tt):e($)||t(Pt,1)})}var St=r(qe,2);{var At=t=>{var s=ba(),l=a(s),n=a(l),x=a(n),F=a(x),L=a(F),I=a(L),M=r(L,2),N=a(M),O=a(N),o=r(N,2),g=a(o);d(g,{icon:"mdi:google-classroom",class:"text-sm"});var h=r(g),B=r(h,2),K=r(F,2),Z=a(K);d(Z,{icon:"mdi:close",class:"text-lg"});var R=r(x,2);ce(R,21,()=>e(C).records,he,(H,z)=>{const Y=k(()=>Me(e(z).fecha_limite));var pe=ga(),xe=a(pe),ae=a(xe),se=a(ae);d(se,{icon:"mdi:book-open-variant",class:"text-sm text-primary-500"});var re=r(se),le=r(ae,2),ie=a(le);d(ie,{icon:"mdi:account-tie",class:"text-sm text-slate-400"});var me=r(ie),ue=r(le,2),fe=a(ue),ge=r(fe),ne=r(xe,2),ye=a(ne),ke=r(ne,2),be=a(ke),u=a(be);d(u,{icon:"mdi:calendar-clock",class:"text-xs"});var c=r(u,2),f=a(c),_=r(be,2),y=a(_);d(y,{icon:"mdi:clock-outline",class:"text-xs"});var U=r(y);w((T,oe)=>{i(re,` ${e(z).asignatura??""}`),i(me,` ${e(z).docente??""}`),V(ue,1,`inline-flex items-center gap-1 text-[11px] font-medium border px-2 py-0.5 rounded-full ${e(Y).color??""}`,"svelte-92ti40"),V(fe,1,`w-1.5 h-1.5 rounded-full ${e(Y).dot??""}`,"svelte-92ti40"),i(ge,` ${e(Y).label??""}`),i(ye,e(z).plan),i(f,T),i(U,` Registro: ${oe??""}`)},[()=>Ge(e(z).fecha_limite),()=>Ie(e(z).fecha_registro)]),p(H,pe)});var ve=r(R,2),te=a(ve),J=r(te,2),W=a(J);d(W,{icon:"mdi:file-pdf-box",class:"text-sm"}),Wt(s,H=>De==null?void 0:De(H)),w((H,z)=>{V(L,1,`w-12 h-12 rounded-xl bg-gradient-to-br ${H??""} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`,"svelte-92ti40"),i(I,z),i(O,e(C).estudiante),i(h,` Grupo ${e(C).grupo??""} `),i(B,` ${e(C).records.length??""}
                ${e(C).records.length===1?"plan":"planes"}`)},[()=>He(e(C).estudiante),()=>Oe(e(C).estudiante)]),q("click",l,we),q("click",n,H=>H.stopPropagation()),q("click",K,we),q("click",te,we),q("click",J,()=>pt(e(C).records[0])),p(t,s)};S(St,t=>{e(C)&&t(At)})}Zt(yt,()=>e(j),t=>P(j,t)),at(Ce,()=>e(D),t=>P(D,t)),at(Ye,()=>e(G),t=>P(G,t)),p(v,Ue),Vt()}Kt(["click"]);export{ka as default};
