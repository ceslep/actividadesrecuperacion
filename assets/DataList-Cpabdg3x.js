import{C as Ae,D as Ie,d as $e,s as _,p as Ce,o as Ee,h as u,E as Fe,I as y,l,i as T,k as t,w as J,a as d,b as Le,z as w,y as i,t as D,u as b,A as K,x as c,j as Se}from"./index-DCcnfLwf.js";import{e as F,b as Ne,S as Ge,i as L}from"./Spinner-Cug8ILpB.js";function Q(o){try{return new Date(o).toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"})}catch{return o}}function Pe(o){return`
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
      <p class="title-sub">Plan de Mejoramiento · ${Ae} · ${Ie}</p>
    </div>
  </div>
  `}function Me(o,j,m,g){const h=Q(o.fecha_limite),n=Q(new Date().toISOString().split("T")[0]);return`
  <div class="page-item">
    ${Pe(j)}

    <table class="info-table">
      <tr>
        <td class="info-cell"><span class="lbl">Estudiante</span><span class="val bold">${o.estudiante||""}</span></td>
        <td class="info-cell"><span class="lbl">Grupo</span><span class="val">${o.grupo||""}</span></td>
        <td class="info-cell"><span class="lbl">Asignatura</span><span class="val">${o.asignatura||""}</span></td>
      </tr>
      <tr>
        <td class="info-cell"><span class="lbl">Docente</span><span class="val">${o.docente||""}</span></td>
        <td class="info-cell"><span class="lbl">Fecha de Entrega</span><span class="val">${n}</span></td>
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
  ${g?"":'<div class="page-break"></div>'}
  `}function Oe(o,j){var f;Array.isArray(o)||(o=[o]);const m=((f=o[0])==null?void 0:f.estudiante)||"",g=o.map((x,A)=>Me(x,j,!0,A===o.length-1)).join(""),h=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Plan de Mejoramiento - ${m}</title>
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
  ${g}

  <script>
    window.onload = function() {
      window.print();
    };
  <\/script>
</body>
</html>`,n=window.open("","_blank");n.document.write(h),n.document.close()}var Re=c('<span class="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full"> </span>'),He=c('<button class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors"><!> Limpiar filtros</button>'),Ue=c("<option> </option>"),qe=c("<option> </option>"),Be=c('<div class="flex flex-col items-center justify-center py-24 gap-4"><!> <p class="text-sm text-slate-400 animate-pulse">Cargando registros...</p></div>'),Ve=c('<div class="card p-12 text-center"><div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4"><!></div> <p class="text-slate-500 font-medium">No se encontraron registros</p> <p class="text-sm text-slate-400 mt-1">Intenta ajustar los filtros de busqueda.</p></div>'),We=c('<span class="text-xs font-semibold text-white bg-violet-500 px-3 py-1 rounded-full"> </span>'),Ye=c('<span class="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">1 plan</span>'),Ze=c('<div class="card p-5 sm:p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group border-l-4 border-l-primary-500"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"><!></div> <div><h3 class="text-sm font-bold text-slate-800"> </h3> <p class="text-xs text-slate-400"> </p></div></div> <!></div> <div class="text-xs text-slate-500 bg-slate-50 rounded-lg p-3"><span class="font-medium">Asignaturas:</span> </div> <div class="mt-4 pt-4 border-t border-slate-100 flex justify-end"><button class="btn-danger"><!> Generar PDF</button></div></div>'),Je=c('<div class="grid gap-4"></div>'),Ke=c('<div class="space-y-6"><div class="card p-5 sm:p-6"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center"><!></div> <h2 class="text-base font-bold text-slate-800">Registros</h2> <!></div> <!></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><div class="relative"><!> <input type="text" placeholder="Buscar en todos los campos..." class="field-input pl-10"/></div> <select class="field-input"><option>Todos los grupos</option><!></select> <select class="field-input"><option>Todos los docentes</option><!></select></div></div> <!></div>');function et(o,j){$e(j,!0);let m=_(Ce([])),g=_(!0),h=_(""),n=_(""),f=_(""),x=_(""),A=w(()=>[...new Set(t(m).map(e=>e.grupo))].sort((e,a)=>Number(e)-Number(a))),X=w(()=>[...new Set(t(m).map(e=>e.docente))].sort()),I=w(()=>t(m).filter(e=>{const a=!t(n)||Object.values(e).some(p=>String(p).toLowerCase().includes(t(n).toLowerCase())),s=!t(f)||e.grupo===t(f),r=!t(x)||e.docente===t(x);return a&&s&&r})),k=w(()=>Object.values(t(I).reduce((e,a)=>(e[a.estudiante]||(e[a.estudiante]={estudiante:a.estudiante,grupo:a.grupo,records:[]}),e[a.estudiante].records.push(a),e),{})).sort((e,a)=>e.estudiante.localeCompare(a.estudiante)));function ee(){u(n,""),u(f,""),u(x,"")}let te=w(()=>t(n)||t(f)||t(x));Ee(async()=>{await Promise.allSettled([(async()=>{try{const e=await fetch("https://app.iedeoccidente.com/gs/getgsartirec.php");u(m,await e.json(),!0)}catch(e){console.error("Error fetching data:",e)}finally{u(g,!1)}})(),(async()=>{try{const a=await(await fetch(Fe)).blob(),s=new FileReader;s.onloadend=()=>{u(h,s.result,!0)},s.readAsDataURL(a)}catch{}})()])});function ae(e){const a=t(I).filter(s=>s.estudiante===e.estudiante);Oe(a,t(h))}var S=Ke(),N=i(S),G=i(N),P=i(G),M=i(P),se=i(M);y(se,{icon:"mdi:format-list-bulleted",class:"text-primary-600 text-lg"});var ie=l(M,4);{var oe=e=>{var a=Re(),s=i(a);D(()=>b(s,`${t(k).length??""} estudiante${t(k).length!==1?"s":""} (${t(I).length??""} planes)`)),d(e,a)};T(ie,e=>{t(g)||e(oe)})}var le=l(P,2);{var re=e=>{var a=He(),s=i(a);y(s,{icon:"mdi:filter-remove",class:"text-sm"}),K("click",a,ee),d(e,a)};T(le,e=>{t(te)&&e(re)})}var ne=l(G,2),O=i(ne),R=i(O);y(R,{icon:"mdi:magnify",class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base"});var de=l(R,2),$=l(O,2),C=i($);C.value=C.__value="";var ce=l(C);F(ce,17,()=>t(A),L,(e,a)=>{var s=Ue(),r=i(s),p={};D(()=>{b(r,`Grupo ${t(a)??""}`),p!==(p=t(a))&&(s.value=(s.__value=t(a))??"")}),d(e,s)});var H=l($,2),E=i(H);E.value=E.__value="";var pe=l(E);F(pe,17,()=>t(X),L,(e,a)=>{var s=qe(),r=i(s),p={};D(()=>{b(r,t(a)),p!==(p=t(a))&&(s.value=(s.__value=t(a))??"")}),d(e,s)});var ve=l(N,2);{var fe=e=>{var a=Be(),s=i(a);Ge(s,{size:48,color:"#3b82f6"}),d(e,a)},ue=e=>{var a=Ve(),s=i(a),r=i(s);y(r,{icon:"mdi:text-search-variant",class:"text-slate-400 text-3xl"}),d(e,a)},xe=e=>{var a=Je();F(a,21,()=>t(k),L,(s,r)=>{const p=w(()=>t(r).records.length);var U=Ze(),q=i(U),B=i(q),V=i(B),me=i(V);y(me,{icon:"mdi:account",class:"text-primary-600 text-lg"});var ge=l(V,2),W=i(ge),be=i(W),he=l(W,2),_e=i(he),ye=l(B,2);{var we=v=>{var z=We(),Te=i(z);D(()=>b(Te,`${t(p)??""} planes`)),d(v,z)},je=v=>{var z=Ye();d(v,z)};T(ye,v=>{t(p)>1?v(we):v(je,-1)})}var Y=l(q,2),De=l(i(Y)),ke=l(Y,2),Z=i(ke),ze=i(Z);y(ze,{icon:"mdi:file-pdf-box",class:"text-sm"}),D(v=>{b(be,t(r).estudiante),b(_e,`Grupo ${t(r).grupo??""}`),b(De,` ${v??""}`)},[()=>t(r).records.map(v=>v.asignatura).join(", ")]),K("click",Z,()=>ae(t(r).records[0])),d(s,U)}),d(e,a)};T(ve,e=>{t(g)?e(fe):t(k).length===0?e(ue,1):e(xe,-1)})}Ne(de,()=>t(n),e=>u(n,e)),J($,()=>t(f),e=>u(f,e)),J(H,()=>t(x),e=>u(x,e)),d(o,S),Le()}Se(["click"]);export{et as default};
