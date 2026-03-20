import { institutionHeader, documentTitle } from './data.js'

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('es-CO', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  } catch {
    return dateStr
  }
}

function generateHeaderHTML(escudoBase64) {
  return `
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        ${escudoBase64 ? `<img src="${escudoBase64}" alt="Escudo" class="escudo">` : ''}
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
  `
}

function generateFirmasHTML() {
  return `
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
  `
}

function generateItemHTML(item, escudoBase64, includeHeader, isLast) {
  const fechaFormatted = formatDate(item.fecha_limite)
  const todayFormatted = formatDate(new Date().toISOString().split('T')[0])
  
  return `
  ${includeHeader ? generateHeaderHTML(escudoBase64) : ''}
  
  <div class="content-section">
    <div class="info-card">
      <div class="info-header">
        <span class="info-icon">📋</span>
        <span>Información del Registro</span>
      </div>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">Estudiante</span>
          <span class="info-value highlight">${item.estudiante || ''}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Grupo</span>
          <span class="info-value">${item.grupo || ''}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Asignatura</span>
          <span class="info-value">${item.asignatura || ''}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Docente</span>
          <span class="info-value">${item.docente || ''}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Fecha de Entrega</span>
          <span class="info-value">${todayFormatted}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Fecha Límite</span>
          <span class="info-value deadline">${fechaFormatted}</span>
        </div>
      </div>
    </div>

    <div class="plan-card">
      <div class="plan-header">
        <span class="plan-icon">📚</span>
        <span>Plan de Mejoramiento / Refuerzo Académico</span>
      </div>
      <div class="plan-content">
        ${item.plan || ''}
      </div>
    </div>

    <div class="notice-box">
      <p class="notice-title">⚠️ Importante</p>
      <p class="notice-text">El presente plan de mejoramiento debe ser desarrollado por el estudiante durante el período indicado. Los padres de familia deben supervisar y acompañar el proceso de realización de las actividades propuestas. La entrega se realizará en la fecha límite establecida.</p>
    </div>
  </div>

  ${generateFirmasHTML()}
  ${!isLast ? '<div class="page-break"></div>' : ''}
  `
}

export function generatePDF(items, escudoBase64) {
  if (!Array.isArray(items)) {
    items = [items]
  }

  const studentName = items[0]?.estudiante || ''
  const itemsHTML = items.map((item, index) => 
    generateItemHTML(item, escudoBase64, true, index === items.length - 1)
  ).join('')

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Plan de Mejoramiento - ${studentName}</title>
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
  ${itemsHTML}

  <script>
    window.onload = function() {
      window.print();
    };
  <\/script>
</body>
</html>`

  const printWindow = window.open('', '_blank')
  printWindow.document.write(html)
  printWindow.document.close()
}
