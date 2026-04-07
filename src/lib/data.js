export const asignaturas = [
  "CÁTEDRA DE LA PAZ",
  "CIENCIAS NATURALES Y EDUCACION AMBIENTAL",
  "CIENCIAS SOCIALES (HISTORIA, GEOGRAFÍA Y CONSTITUCION)",
  "EDUCACIÓN ARTÍSTICA",
  "EDUCACIÓN FÍSICA, RECREACIÓN Y DEPORTES",
  "EDUCACIÓN RELIGIOSA, ÉTICA Y V. HUMANOS",
  "EMPRENDIMIENTO",
  "ESTADÍSTICA",
  "FILOSOFÍA Y CIENCIAS SOCIALES (CIENCIAS",
  "FÍSICA",
  "INGLÉS",
  "LENGUA CASTELLANA",
  "MATEMÁTICAS",
  "PROYECTO Y EMPRENDIMIENTO",
  "QUÍMICA",
  "TECNOLOGÍA E INFORMÁTICA",
  "ÉTICA PROFESIONAL"
]

// --- Configuración del período académico ---
export const periodoConfig = {
  numero: 'Primer',       // Primer | Segundo | Tercer | Cuarto
  anioLectivo: 2026,
  nivel: 'Básica Secundaria y Media'
}

export const periodoLabel = `${periodoConfig.numero} Período Académico`
export const anioLectivoLabel = `Año Lectivo ${periodoConfig.anioLectivo}`

export const institutionHeader = `INSTITUCION EDUCATIVA OFICIAL INSTITUTO GUATICA
Resolución de aprobación N° 002879 del 13 de Diciembre de 2017
NIT: 891.401.438-5 DANE: 166318000537`

export const documentTitle = `ACTA DE ENTREGA PLANES DE MEJORAMIENTO ACADEMICO A PADRES - ${periodoConfig.numero.toUpperCase()} PERIODO ACADEMICO AÑO LECTIVO ${periodoConfig.anioLectivo} ${periodoConfig.nivel.toUpperCase()}`

export async function fetchEstudiantes() {
  const res = await fetch('https://app.iedeoccidente.com/ig/getEstudiantes.php')
  const data = await res.json()
  // data: [{nombre, grado}, ...]
  const estudiantes = data.map(e => ({
    nombreCompleto: e.nombre,
    grupo: String(e.grado)
  }))
  const grupos = [...new Set(estudiantes.map(e => e.grupo))].sort((a, b) => Number(a) - Number(b))
  return { estudiantes, grupos }
}

export async function fetchDocentes() {
  const res = await fetch('https://app.iedeoccidente.com/ig/getprofes.php')
  const data = await res.json()
  // data: ["NOMBRE1", "NOMBRE2", ...]
  return data
}
