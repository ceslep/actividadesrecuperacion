import{d as Te,s as h,p as Ie,o as Fe,h as x,C as Le,I as _,l as r,i as A,k as a,w as Q,a as d,b as $e,z as y,y as s,t as z,u as b,B as X,x as p,j as Ce}from"./index-FDJ50x0-.js";import{e as C,b as Se,S as Ee,i as S}from"./Spinner-COVMuUWZ.js";function Z(o){try{return new Date(o).toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"})}catch{return o}}function Ne(o){return`
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        ${o?`<img src="${o}" alt="Escudo" class="escudo">`:""}
        <div class="header-info">
          <p class="inst-name">INSTITUCIÓN EDUCATIVA OFICIAL</p>
          <p class="inst-name-bold">INSTITUTO GUÁTICA</p>
          <p class="inst-resolution">Resolución de aprobación N° 002879 del 13 de Diciembre de 2017</p>
          <p class="inst-nit">NIT: 891.401.438-5 | DANE: 166318000537</p>
        </div>
      </div>
    </div>
    <div class="header-title">
      <div class="title-bar">
        <span class="title-text">ACTA DE ENTREGA</span>
      </div>
      <p class="subtitle">Plan de Mejoramiento Académico a Padres de Familia</p>
      <p class="period">Tercer Período Académico - Año Lectivo 2026</p>
    </div>
  </div>
  `}function Ge(){return`
  <div class="firmas-section">
    <p class="firmas-title">Firmas de Recibo y Aceptación</p>
    <div class="firmas">
      <div class="firma">
        <div class="firma-box">
          <hr>
          <p class="firma-label">Firma del Docente</p>
        </div>
      </div>
      <div class="firma">
        <div class="firma-box">
          <hr>
          <p class="firma-label">Firma del Coordinador</p>
        </div>
      </div>
      <div class="firma">
        <div class="firma-box">
          <hr>
          <p class="firma-label">Firma del Acudiente</p>
        </div>
      </div>
    </div>
  </div>
  `}function Pe(o,w,m,g){const c=Z(o.fecha_limite),l=Z(new Date().toISOString().split("T")[0]);return`
  ${Ne(w)}
  
  <div class="content-section">
    <div class="info-card">
      <div class="info-header">
        <span class="info-icon">📋</span>
        <span>Información del Registro</span>
      </div>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">Estudiante</span>
          <span class="info-value highlight">${o.estudiante||""}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Grupo</span>
          <span class="info-value">${o.grupo||""}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Asignatura</span>
          <span class="info-value">${o.asignatura||""}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Docente</span>
          <span class="info-value">${o.docente||""}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Fecha de Entrega</span>
          <span class="info-value">${l}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Fecha Límite</span>
          <span class="info-value deadline">${c}</span>
        </div>
      </div>
    </div>

    <div class="plan-card">
      <div class="plan-header">
        <span class="plan-icon">📚</span>
        <span>Plan de Mejoramiento / Refuerzo Académico</span>
      </div>
      <div class="plan-content">
        ${o.plan||""}
      </div>
    </div>

    <div class="notice-box">
      <p class="notice-title">⚠️ Importante</p>
      <p class="notice-text">El presente plan de mejoramiento debe ser desarrollado por el estudiante durante el período indicado. Los padres de familia deben supervisar y acompañar el proceso de realización de las actividades propuestas. La entrega se realizará en la fecha límite establecida.</p>
    </div>
  </div>

  ${Ge()}
  ${g?"":'<div class="page-break"></div>'}
  `}function Re(o,w){var u;Array.isArray(o)||(o=[o]);const m=((u=o[0])==null?void 0:u.estudiante)||"",g=o.map((D,T)=>Pe(D,w,!0,T===o.length-1)).join(""),c=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Plan de Mejoramiento - ${m}</title>
<style>
  @page { size: letter; margin: 12mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body { 
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif; 
    color: #1e293b; 
    font-size: 11px; 
    line-height: 1.5;
    background: #fff;
  }

  .header {
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 3px solid #1d4ed8;
  }

  .header-top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .escudo {
    width: 65px;
    height: 65px;
    object-fit: contain;
  }

  .header-info {
    text-align: left;
  }

  .inst-name {
    font-size: 9px;
    color: #64748b;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  .inst-name-bold {
    font-size: 14px;
    font-weight: 700;
    color: #1e3a8a;
    margin: 2px 0;
    letter-spacing: 0.5px;
  }

  .inst-resolution, .inst-nit {
    font-size: 8px;
    color: #64748b;
    margin: 1px 0;
  }

  .header-title {
    margin-top: 10px;
  }

  .title-bar {
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
    padding: 8px 20px;
    display: inline-block;
    border-radius: 4px;
  }

  .title-text {
    color: white;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 12px;
    color: #334155;
    margin-top: 10px;
    font-weight: 500;
  }

  .period {
    font-size: 10px;
    color: #64748b;
    margin-top: 3px;
  }

  .content-section {
    margin-top: 10px;
  }

  .info-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .info-header {
    background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
    color: white;
    padding: 8px 15px;
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info-icon {
    font-size: 14px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .info-item {
    padding: 10px 12px;
    border-right: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .info-item:nth-child(3n) {
    border-right: none;
  }

  .info-item:nth-last-child(-n+3) {
    border-bottom: none;
  }

  .info-label {
    display: block;
    font-size: 8px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 3px;
  }

  .info-value {
    display: block;
    font-size: 11px;
    color: #334155;
    font-weight: 500;
  }

  .info-value.highlight {
    color: #1d4ed8;
    font-weight: 700;
    font-size: 12px;
  }

  .info-value.deadline {
    color: #dc2626;
    font-weight: 700;
  }

  .plan-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .plan-header {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    padding: 8px 15px;
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .plan-icon {
    font-size: 14px;
  }

  .plan-content {
    padding: 15px;
    font-size: 11px;
    line-height: 1.7;
    color: #334155;
    background: #f0fdf4;
    white-space: pre-wrap;
  }

  .notice-box {
    background: #fef3c7;
    border: 1px solid #f59e0b;
    border-radius: 6px;
    padding: 12px 15px;
    margin-top: 15px;
  }

  .notice-title {
    font-size: 11px;
    font-weight: 700;
    color: #92400e;
    margin-bottom: 5px;
  }

  .notice-text {
    font-size: 10px;
    color: #78350f;
    line-height: 1.6;
  }

  .firmas-section {
    margin-top: 25px;
    padding-top: 15px;
    border-top: 2px dashed #e2e8f0;
  }

  .firmas-title {
    text-align: center;
    font-size: 10px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .firmas {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  .firma {
    flex: 1;
    text-align: center;
  }

  .firma-box {
    background: #f8fafc;
    padding: 15px 10px 10px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
  }

  .firma-box hr {
    border: none;
    border-top: 1px solid #1e3a8a;
    margin-bottom: 8px;
  }

  .firma-label {
    font-size: 9px;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .page-break {
    page-break-after: always;
  }

  @media print {
    body { 
      -webkit-print-color-adjust: exact; 
      print-color-adjust: exact; 
    }
    .page-break {
      page-break-after: always;
    }
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
</html>`,l=window.open("","_blank");l.document.write(c),l.document.close()}var Me=p('<span class="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full"> </span>'),He=p('<button class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors"><!> Limpiar filtros</button>'),Oe=p("<option> </option>"),Ue=p("<option> </option>"),qe=p('<div class="flex flex-col items-center justify-center py-24 gap-4"><!> <p class="text-sm text-slate-400 animate-pulse">Cargando registros...</p></div>'),Be=p('<div class="card p-12 text-center"><div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4"><!></div> <p class="text-slate-500 font-medium">No se encontraron registros</p> <p class="text-sm text-slate-400 mt-1">Intenta ajustar los filtros de busqueda.</p></div>'),Ve=p('<span class="text-xs font-semibold text-white bg-violet-500 px-3 py-1 rounded-full"> </span>'),We=p('<span class="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">1 plan</span>'),Ye=p('<div class="card p-5 sm:p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group border-l-4 border-l-primary-500"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"><!></div> <div><h3 class="text-sm font-bold text-slate-800"> </h3> <p class="text-xs text-slate-400"> </p></div></div> <!></div> <div class="text-xs text-slate-500 bg-slate-50 rounded-lg p-3"><span class="font-medium">Asignaturas:</span> </div> <div class="mt-4 pt-4 border-t border-slate-100 flex justify-end"><button class="btn-danger"><!> Generar PDF</button></div></div>'),Je=p('<div class="grid gap-4"></div>'),Ke=p('<div class="space-y-6"><div class="card p-5 sm:p-6"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center"><!></div> <h2 class="text-base font-bold text-slate-800">Registros</h2> <!></div> <!></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><div class="relative"><!> <input type="text" placeholder="Buscar en todos los campos..." class="field-input pl-10"/></div> <select class="field-input"><option>Todos los grupos</option><!></select> <select class="field-input"><option>Todos los docentes</option><!></select></div></div> <!></div>');function Ze(o,w){Te(w,!0);let m=h(Ie([])),g=h(!0),c=h(""),l=h(""),u=h(""),D=y(()=>[...new Set(a(m).map(e=>e.grupo))].sort((e,t)=>Number(e)-Number(t))),T=y(()=>[...new Set(a(m).map(e=>e.docente))].sort()),I=y(()=>a(m).filter(e=>{const t=!a(c)||Object.values(e).some(v=>String(v).toLowerCase().includes(a(c).toLowerCase())),i=!a(l)||e.grupo===a(l),n=!a(u)||e.docente===a(u);return t&&i&&n})),k=y(()=>Object.values(a(I).reduce((e,t)=>(e[t.estudiante]||(e[t.estudiante]={estudiante:t.estudiante,grupo:t.grupo,records:[]}),e[t.estudiante].records.push(t),e),{})).sort((e,t)=>e.estudiante.localeCompare(t.estudiante)));function ee(){x(c,""),x(l,""),x(u,"")}let ae=y(()=>a(c)||a(l)||a(u)),E=h("");Fe(async()=>{await Promise.allSettled([(async()=>{try{const e=await fetch("https://app.iedeoccidente.com/gs/getgsartirec.php");x(m,await e.json(),!0)}catch(e){console.error("Error fetching data:",e)}finally{x(g,!1)}})(),(async()=>{try{const t=await(await fetch(Le)).blob(),i=new FileReader;i.onloadend=()=>{x(E,i.result,!0)},i.readAsDataURL(t)}catch{}})()])});function te(e){const t=a(I).filter(i=>i.estudiante===e.estudiante);Re(t,a(E))}var N=Ke(),G=s(N),P=s(G),R=s(P),M=s(R),ie=s(M);_(ie,{icon:"mdi:format-list-bulleted",class:"text-primary-600 text-lg"});var se=r(M,4);{var oe=e=>{var t=Me(),i=s(t);z(()=>b(i,`${a(k).length??""} estudiante${a(k).length!==1?"s":""} (${a(I).length??""} planes)`)),d(e,t)};A(se,e=>{a(g)||e(oe)})}var re=r(R,2);{var ne=e=>{var t=He(),i=s(t);_(i,{icon:"mdi:filter-remove",class:"text-sm"}),X("click",t,ee),d(e,t)};A(re,e=>{a(ae)&&e(ne)})}var le=r(P,2),H=s(le),O=s(H);_(O,{icon:"mdi:magnify",class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base"});var de=r(O,2),F=r(H,2),L=s(F);L.value=L.__value="";var pe=r(L);C(pe,17,()=>a(D),S,(e,t)=>{var i=Oe(),n=s(i),v={};z(()=>{b(n,`Grupo ${a(t)??""}`),v!==(v=a(t))&&(i.value=(i.__value=a(t))??"")}),d(e,i)});var U=r(F,2),$=s(U);$.value=$.__value="";var ce=r($);C(ce,17,()=>a(T),S,(e,t)=>{var i=Ue(),n=s(i),v={};z(()=>{b(n,a(t)),v!==(v=a(t))&&(i.value=(i.__value=a(t))??"")}),d(e,i)});var ve=r(G,2);{var fe=e=>{var t=qe(),i=s(t);Ee(i,{size:48,color:"#3b82f6"}),d(e,t)},ue=e=>{var t=Be(),i=s(t),n=s(i);_(n,{icon:"mdi:text-search-variant",class:"text-slate-400 text-3xl"}),d(e,t)},xe=e=>{var t=Je();C(t,21,()=>a(k),S,(i,n)=>{const v=y(()=>a(n).records.length);var q=Ye(),B=s(q),V=s(B),W=s(V),me=s(W);_(me,{icon:"mdi:account",class:"text-primary-600 text-lg"});var ge=r(W,2),Y=s(ge),be=s(Y),he=r(Y,2),_e=s(he),ye=r(V,2);{var we=f=>{var j=Ve(),De=s(j);z(()=>b(De,`${a(v)??""} planes`)),d(f,j)},ze=f=>{var j=We();d(f,j)};A(ye,f=>{a(v)>1?f(we):f(ze,-1)})}var J=r(B,2),ke=r(s(J)),je=r(J,2),K=s(je),Ae=s(K);_(Ae,{icon:"mdi:file-pdf-box",class:"text-sm"}),z(f=>{b(be,a(n).estudiante),b(_e,`Grupo ${a(n).grupo??""}`),b(ke,` ${f??""}`)},[()=>a(n).records.map(f=>f.asignatura).join(", ")]),X("click",K,()=>te(a(n).records[0])),d(i,q)}),d(e,t)};A(ve,e=>{a(g)?e(fe):a(k).length===0?e(ue,1):e(xe,-1)})}Se(de,()=>a(c),e=>x(c,e)),Q(F,()=>a(l),e=>x(l,e)),Q(U,()=>a(u),e=>x(u,e)),d(o,N),$e()}Ce(["click"]);export{Ze as default};
