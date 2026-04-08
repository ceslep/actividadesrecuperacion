import{C as Ie,D as Ee,d as Le,s as w,p as Ge,o as Se,j as u,E as Ne,I as _,m as r,i as z,l as t,w as Q,a as n,b as Pe,z as j,y as i,t as D,u as m,A as E,x as d,k as Me}from"./index-bVU6nCZL.js";import{e as L,b as Oe,S as Re,i as G}from"./Spinner-BdgjLeFr.js";function X(o){try{return new Date(o).toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"})}catch{return o}}function He(o){return`
  <div class="header">
    <div class="header-left">
      ${o?`<img src="${o}" alt="Escudo" class="escudo">`:""}
      <div>
        <p class="inst-name">INSTITUCIÓN EDUCATIVA OFICIAL <strong>INSTITUTO GUÁTICA</strong></p>
        <p class="inst-detail">Res. 002879 del 13/Dic/2017 · NIT 891.401.438-5 · DANE 166318000537</p>
      </div>
    </div>
    <div class="header-right">
      <p class="title-text">ACTA DE ENTREGA</p>
      <p class="title-sub">Plan de Mejoramiento · ${Ie} · ${Ee}</p>
    </div>
  </div>
  `}function Ue(o,k,g,b){const h=X(o.fecha_limite),c=X(new Date().toISOString().split("T")[0]);return`
  <div class="page-item">
    ${He(k)}

    <table class="info-table">
      <tr>
        <td class="info-cell"><span class="lbl">Estudiante</span><span class="val bold">${o.estudiante||""}</span></td>
        <td class="info-cell"><span class="lbl">Grupo</span><span class="val">${o.grupo||""}</span></td>
        <td class="info-cell"><span class="lbl">Asignatura</span><span class="val">${o.asignatura||""}</span></td>
      </tr>
      <tr>
        <td class="info-cell"><span class="lbl">Docente</span><span class="val">${o.docente||""}</span></td>
        <td class="info-cell"><span class="lbl">Fecha de Entrega</span><span class="val">${c}</span></td>
        <td class="info-cell"><span class="lbl">Fecha Límite</span><span class="val bold">${h}</span></td>
      </tr>
    </table>

    <div class="plan-section">
      <p class="plan-title">Plan de Mejoramiento / Refuerzo Académico</p>
      <div class="plan-content">${o.plan||""}</div>
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
  ${b?"":'<div class="page-break"></div>'}
  `}function ee(o,k){var p;Array.isArray(o)||(o=[o]);const g=((p=o[0])==null?void 0:p.estudiante)||"",b=o.map((x,$)=>Ue(x,k,!0,$===o.length-1)).join(""),h=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Plan de Mejoramiento - ${g}</title>
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
  ${b}

  <script>
    window.onload = function() {
      window.print();
    };
  <\/script>
</body>
</html>`,c=window.open("","_blank");c.document.write(h),c.document.close()}var qe=d('<span class="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full"> </span>'),Be=d('<button class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors"><!> Limpiar filtros</button>'),Ve=d('<button class="btn-danger text-xs flex items-center gap-1"><!> </button>'),We=d("<option> </option>"),Ye=d("<option> </option>"),Ze=d('<div class="flex flex-col items-center justify-center py-24 gap-4"><!> <p class="text-sm text-slate-400 animate-pulse">Cargando registros...</p></div>'),Je=d('<div class="card p-12 text-center"><div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4"><!></div> <p class="text-slate-500 font-medium">No se encontraron registros</p> <p class="text-sm text-slate-400 mt-1">Intenta ajustar los filtros de busqueda.</p></div>'),Ke=d('<span class="text-xs font-semibold text-white bg-violet-500 px-3 py-1 rounded-full"> </span>'),Qe=d('<span class="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">1 plan</span>'),Xe=d('<div class="card p-5 sm:p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group border-l-4 border-l-primary-500"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"><!></div> <div><h3 class="text-sm font-bold text-slate-800"> </h3> <p class="text-xs text-slate-400"> </p></div></div> <!></div> <div class="text-xs text-slate-500 bg-slate-50 rounded-lg p-3"><span class="font-medium">Asignaturas:</span> </div> <div class="mt-4 pt-4 border-t border-slate-100 flex justify-end"><button class="btn-danger"><!> Generar PDF</button></div></div>'),et=d('<div class="grid gap-4"></div>'),tt=d('<div class="space-y-6"><div class="card p-5 sm:p-6"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center"><!></div> <h2 class="text-base font-bold text-slate-800">Registros</h2> <!></div> <!> <!></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><div class="relative"><!> <input type="text" placeholder="Buscar en todos los campos..." class="field-input pl-10"/></div> <select class="field-input"><option>Todos los grupos</option><!></select> <select class="field-input"><option>Todos los docentes</option><!></select></div></div> <!></div>');function it(o,k){Le(k,!0);let g=w(Ge([])),b=w(!0),h=w(""),c=w(""),p=w(""),x=w(""),$=j(()=>[...new Set(t(g).map(e=>e.grupo))].sort((e,a)=>Number(e)-Number(a))),te=j(()=>[...new Set(t(g).map(e=>e.docente))].sort()),y=j(()=>t(g).filter(e=>{const a=!t(c)||Object.values(e).some(v=>String(v).toLowerCase().includes(t(c).toLowerCase())),s=!t(p)||e.grupo===t(p),l=!t(x)||e.docente===t(x);return a&&s&&l})),T=j(()=>Object.values(t(y).reduce((e,a)=>(e[a.estudiante]||(e[a.estudiante]={estudiante:a.estudiante,grupo:a.grupo,records:[]}),e[a.estudiante].records.push(a),e),{})).sort((e,a)=>e.estudiante.localeCompare(a.estudiante)));function ae(){u(c,""),u(p,""),u(x,"")}let se=j(()=>t(c)||t(p)||t(x));Se(async()=>{await Promise.allSettled([(async()=>{try{const e=await fetch("https://app.iedeoccidente.com/gs/getgsartirec.php");u(g,await e.json(),!0)}catch(e){console.error("Error fetching data:",e)}finally{u(b,!1)}})(),(async()=>{try{const a=await(await fetch(Ne)).blob(),s=new FileReader;s.onloadend=()=>{u(h,s.result,!0)},s.readAsDataURL(a)}catch{}})()])});function ie(e){const a=t(y).filter(s=>s.estudiante===e.estudiante);ee(a,t(h))}function oe(){const e=[...t(y)].sort((a,s)=>a.estudiante.localeCompare(s.estudiante));ee(e,t(h))}var S=tt(),N=i(S),P=i(N),M=i(P),O=i(M),re=i(O);_(re,{icon:"mdi:format-list-bulleted",class:"text-primary-600 text-lg"});var le=r(O,4);{var ne=e=>{var a=qe(),s=i(a);D(()=>m(s,`${t(T).length??""} estudiante${t(T).length!==1?"s":""} (${t(y).length??""} planes)`)),n(e,a)};z(le,e=>{t(b)||e(ne)})}var R=r(M,2);{var de=e=>{var a=Be(),s=i(a);_(s,{icon:"mdi:filter-remove",class:"text-sm"}),E("click",a,ae),n(e,a)};z(R,e=>{t(se)&&e(de)})}var ce=r(R,2);{var pe=e=>{var a=Ve(),s=i(a);_(s,{icon:"mdi:file-pdf-box",class:"text-sm"});var l=r(s);D(()=>m(l,` PDF Grupo ${t(p)??""} (${t(y).length??""} planes)`)),E("click",a,oe),n(e,a)};z(ce,e=>{t(p)&&t(y).length>0&&e(pe)})}var ve=r(P,2),H=i(ve),U=i(H);_(U,{icon:"mdi:magnify",class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base"});var fe=r(U,2),C=r(H,2),F=i(C);F.value=F.__value="";var ue=r(F);L(ue,17,()=>t($),G,(e,a)=>{var s=We(),l=i(s),v={};D(()=>{m(l,`Grupo ${t(a)??""}`),v!==(v=t(a))&&(s.value=(s.__value=t(a))??"")}),n(e,s)});var q=r(C,2),I=i(q);I.value=I.__value="";var xe=r(I);L(xe,17,()=>t(te),G,(e,a)=>{var s=Ye(),l=i(s),v={};D(()=>{m(l,t(a)),v!==(v=t(a))&&(s.value=(s.__value=t(a))??"")}),n(e,s)});var me=r(N,2);{var ge=e=>{var a=Ze(),s=i(a);Re(s,{size:48,color:"#3b82f6"}),n(e,a)},be=e=>{var a=Je(),s=i(a),l=i(s);_(l,{icon:"mdi:text-search-variant",class:"text-slate-400 text-3xl"}),n(e,a)},he=e=>{var a=et();L(a,21,()=>t(T),G,(s,l)=>{const v=j(()=>t(l).records.length);var B=Xe(),V=i(B),W=i(V),Y=i(W),_e=i(Y);_(_e,{icon:"mdi:account",class:"text-primary-600 text-lg"});var ye=r(Y,2),Z=i(ye),we=i(Z),je=r(Z,2),De=i(je),ke=r(W,2);{var ze=f=>{var A=Ke(),Fe=i(A);D(()=>m(Fe,`${t(v)??""} planes`)),n(f,A)},Te=f=>{var A=Qe();n(f,A)};z(ke,f=>{t(v)>1?f(ze):f(Te,-1)})}var J=r(V,2),Ae=r(i(J)),$e=r(J,2),K=i($e),Ce=i(K);_(Ce,{icon:"mdi:file-pdf-box",class:"text-sm"}),D(f=>{m(we,t(l).estudiante),m(De,`Grupo ${t(l).grupo??""}`),m(Ae,` ${f??""}`)},[()=>t(l).records.map(f=>f.asignatura).join(", ")]),E("click",K,()=>ie(t(l).records[0])),n(s,B)}),n(e,a)};z(me,e=>{t(b)?e(ge):t(T).length===0?e(be,1):e(he,-1)})}Oe(fe,()=>t(c),e=>u(c,e)),Q(C,()=>t(p),e=>u(p,e)),Q(q,()=>t(x),e=>u(x,e)),n(o,S),Pe()}Me(["click"]);export{it as default};
