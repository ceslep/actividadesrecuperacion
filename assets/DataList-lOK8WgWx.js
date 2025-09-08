import{p as ge,o as me,l as fe,a as be,i as _e,f as p,t as b,c as s,b as P,g as e,d as X,h as n,j as he,s as l,m as c,S as xe,k as d,n as J,v as x,A as K,y as Q,u as j,I as ye,e as we,x as De,P as Te,B as Ee,z as Se}from"./index-D4JsePJ-.js";import{e as y,b as $e,i as A,S as ke}from"./Spinner-BZ_aF7VQ.js";import{h as Pe}from"./html2pdf-CFhc7yHi.js";var je=p("<option> </option>"),Ae=p("<option> </option>"),Fe=p('<div class="flex justify-center items-center h-40"><!></div>'),ze=p("<p>No hay información disponible para los filtros seleccionados.</p>"),Le=p('<p class="my-1 text-base text-gray-800"><strong class="text-gray-700 capitalize"> </strong> </p>'),Ge=p('<li class="bg-white border border-gray-200 rounded-lg mb-4 p-6 shadow-md relative transition-all duration-300 ease-in-out hover:shadow-lg hover:border-blue-300 border-l-4 border-l-blue-500"><!> <button class="absolute bottom-3 right-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center gap-1"><!> Generar PDF</button></li>'),Ie=p('<ul class="list-none p-0"></ul>'),Oe=p('<div class="mt-5 p-4 border border-gray-200 rounded-lg bg-gray-50"><h2 class="text-gray-800 mb-4">Información Registrada</h2> <div class="mb-4 flex flex-col sm:flex-row gap-4"><input type="text" placeholder="Buscar..." class="p-2 border border-gray-300 rounded-md w-full sm:w-1/3 focus:ring-blue-500 focus:border-blue-500"/> <select class="p-2 border border-gray-300 rounded-md w-full sm:w-1/3 focus:ring-blue-500 focus:border-blue-500"><option>Todos los Grupos</option><!></select> <select class="p-2 border border-gray-300 rounded-md w-full sm:w-1/3 focus:ring-blue-500 focus:border-blue-500"><option>Todos los Docentes</option><!></select></div> <!></div>');function Ce(U,V){ge(V,!1);const _=c();let m=c([]),F=c(!0),f=c(""),u=c(""),v=c(""),w=c([]),D=c([]);function W(t){const r=new Date(t+"T00:00:00"),a={weekday:"long",year:"numeric",month:"long",day:"numeric"};return r.toLocaleDateString("es-ES",a)}function Y(t){const r=W(t.fecha_limite),a=`
      <div style="padding: 20px 20px 20px 100px; font-family: sans-serif; position: relative;">
        <img src="/src/assets/escudo.png" style="position: absolute; top: 10px; left: 10px; width: 80px; height: 80px;" alt="Escudo">
        <div style="text-align: center; margin-bottom: 10px; font-size: 0.9em;">
          ${Te}
        </div>
        <div style="text-align: center; margin-bottom: 20px;">
          ${Ee}
        </div>
        <h1 style="color: #333; text-align: center;">Detalle del Plan de Mejoramiento</h1>
        <p><strong>Grupo:</strong> ${t.grupo}</p>
        <p><strong>Asignatura:</strong> ${t.asignatura}</p>
        <p><strong>Docente:</strong> ${t.docente}</p>
        <p><strong>Estudiante:</strong> ${t.estudiante}</p>
        <h2 style="text-align: center; margin-top: 20px; margin-bottom: 10px; font-size: 1.2em;">Plan de Mejoramiento/Recuperación</h2>
        <p style="margin-bottom: 15px;">${t.plan}</p>
        <p><strong>Fecha Límite:</strong> ${r}</p>
        <br><br><br><br><br>
        <div style="text-align: center;">
          <div style="display: inline-block; width: 45%; text-align: center; margin-right: 5%;">
            <hr style="border: none; border-top: 1px solid #000; margin-bottom: 5px;">
            <p style="margin: 0; font-size: 0.9em;">Firma del Docente</p>
          </div>
          <div style="display: inline-block; width: 45%; text-align: center;">
            <hr style="border: none; border-top: 1px solid #000; margin-bottom: 5px;">
            <p style="margin: 0; font-size: 0.9em;">Firma del Coordinador</p>
          </div>
        </div>
      </div>
    `,i=`Plan_Mejoramiento_${t.estudiante.replace(/\s/g,"_")}.pdf`;Pe().from(a).set({margin:10,filename:i,html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}}).save()}me(async()=>{try{const t=await fetch("https://app.iedeoccidente.com/gs/getgsartirec.php");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);l(m,await t.json()),l(w,Array.from(new Set(e(m).map(r=>r.grupo))).sort()),l(D,Array.from(new Set(e(m).map(r=>r.docente))).sort())}catch(t){xe.fire({icon:"error",title:"Error al cargar datos",text:`Ocurrió un error al cargar la información: ${t.message}`,confirmButtonText:"Ok"})}finally{l(F,!1)}}),fe(()=>(e(m),e(f),e(u),e(v)),()=>{l(_,e(m).filter(t=>{const r=e(f)===""||Object.values(t).some(o=>String(o).toLowerCase().includes(e(f).toLowerCase())),a=e(u)===""||t.grupo===e(u),i=e(v)===""||t.docente===e(v);return r&&a&&i}))}),be(),_e();var z=Oe(),L=d(s(z),2),G=s(L),T=d(G,2);b(()=>{e(u),J(()=>{e(w)})});var E=s(T);E.value=E.__value="";var Z=d(E);y(Z,1,()=>e(w),A,(t,r)=>{var a=je(),i=s(a),o={};b(()=>{x(i,e(r)),o!==(o=e(r))&&(a.value=(a.__value=e(r))??"")}),n(t,a)});var I=d(T,2);b(()=>{e(v),J(()=>{e(D)})});var S=s(I);S.value=S.__value="";var ee=d(S);y(ee,1,()=>e(D),A,(t,r)=>{var a=Ae(),i=s(a),o={};b(()=>{x(i,e(r)),o!==(o=e(r))&&(a.value=(a.__value=e(r))??"")}),n(t,a)});var te=d(L,2);{var re=t=>{var r=Fe(),a=s(r);ke(a,{size:60}),n(t,r)},ae=t=>{var r=K(),a=Q(r);{var i=o=>{var O=K(),oe=Q(O);{var se=g=>{var h=ze();n(g,h)},ne=g=>{var h=Ie();y(h,5,()=>e(_),$=>$.estudiante,($,k)=>{var M=Ge(),R=s(M);y(R,1,()=>(e(k),j(()=>Object.entries(e(k)))),A,(le,ce)=>{var C=De(()=>Se(e(ce),2));let H=()=>e(C)[0],de=()=>e(C)[1];var q=Le(),N=s(q),pe=s(N),ue=d(N);b(ve=>{x(pe,`${ve??""}:`),x(ue,` ${de()??""}`)},[()=>(H(),j(()=>H().replace(/_/g," ")))]),n(le,q)});var B=d(R,2),ie=s(B);ye(ie,{icon:"mdi:file-pdf-box",class:"w-4 h-4"}),we("click",B,()=>Y(e(k))),n($,M)}),n(g,h)};P(oe,g=>{e(_),j(()=>e(_).length===0)?g(se):g(ne,!1)},!0)}n(o,O)};P(a,o=>{o(i,!1)},!0)}n(t,r)};P(te,t=>{e(F)?t(re):t(ae,!1)})}$e(G,()=>e(f),t=>l(f,t)),X(T,()=>e(u),t=>l(u,t)),X(I,()=>e(v),t=>l(v,t)),n(U,z),he()}export{Ce as default};
