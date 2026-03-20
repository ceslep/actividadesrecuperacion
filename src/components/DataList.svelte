<script>
  import { onMount } from 'svelte'
  import { generatePDF } from '../lib/pdf.js'
  import Spinner from './Spinner.svelte'
  import Icon from '@iconify/svelte'
  import escudo from '../assets/escudo.png'

  let data = $state([])
  let loading = $state(true)
  let searchText = $state('')
  let filterGrupo = $state('')
  let filterDocente = $state('')

  let uniqueGrupos = $derived([...new Set(data.map(d => d.grupo))].sort((a, b) => Number(a) - Number(b)))
  let uniqueDocentes = $derived([...new Set(data.map(d => d.docente))].sort())

  let filteredData = $derived(
    data.filter(item => {
      const matchesSearch = !searchText || Object.values(item).some(v =>
        String(v).toLowerCase().includes(searchText.toLowerCase())
      )
      const matchesGrupo = !filterGrupo || item.grupo === filterGrupo
      const matchesDocente = !filterDocente || item.docente === filterDocente
      return matchesSearch && matchesGrupo && matchesDocente
    })
  )

  let uniqueStudents = $derived(
    Object.values(
      filteredData.reduce((acc, item) => {
        if (!acc[item.estudiante]) {
          acc[item.estudiante] = {
            estudiante: item.estudiante,
            grupo: item.grupo,
            records: []
          }
        }
        acc[item.estudiante].records.push(item)
        return acc
      }, {})
    ).sort((a, b) => a.estudiante.localeCompare(b.estudiante))
  )

  const fieldLabels = {
    grupo: { label: 'Grupo', icon: 'mdi:google-classroom' },
    asignatura: { label: 'Asignatura', icon: 'mdi:book-open-variant' },
    docente: { label: 'Docente', icon: 'mdi:account-tie' },
    estudiante: { label: 'Estudiante', icon: 'mdi:account' },
    plan: { label: 'Plan de mejoramiento', icon: 'mdi:text-box-edit-outline' },
    fecha_limite: { label: 'Fecha limite', icon: 'mdi:calendar-clock' },
    fecha_registro: { label: 'Fecha de registro', icon: 'mdi:clock-outline' }
  }

  function clearFilters() {
    searchText = ''
    filterGrupo = ''
    filterDocente = ''
  }

  let hasActiveFilters = $derived(searchText || filterGrupo || filterDocente)

  let escudoBase64 = $state('')

  onMount(async () => {
    const [, ] = await Promise.allSettled([
      (async () => {
        try {
          const res = await fetch('https://app.iedeoccidente.com/gs/getgsartirec.php')
          data = await res.json()
        } catch (err) {
          console.error('Error fetching data:', err)
        } finally {
          loading = false
        }
      })(),
      (async () => {
        try {
          const res = await fetch(escudo)
          const blob = await res.blob()
          const reader = new FileReader()
          reader.onloadend = () => { escudoBase64 = reader.result }
          reader.readAsDataURL(blob)
        } catch { /* ignore */ }
      })()
    ])
  })

  function formatDate(dateStr) {
    try {
      return new Date(dateStr).toLocaleDateString('es-CO', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    } catch {
      return dateStr
    }
  }

  function handleGeneratePDF(item) {
    const studentRecords = filteredData.filter(d => d.estudiante === item.estudiante)
    generatePDF(studentRecords, escudoBase64)
  }
</script>

<div class="space-y-6">
  <!-- Header + Filters -->
  <div class="card p-5 sm:p-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
          <Icon icon="mdi:format-list-bulleted" class="text-primary-600 text-lg" />
        </div>
        <h2 class="text-base font-bold text-slate-800">Registros</h2>
        {#if !loading}
          <span class="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            {uniqueStudents.length} estudiante{uniqueStudents.length !== 1 ? 's' : ''} ({filteredData.length} planes)
          </span>
        {/if}
      </div>
      {#if hasActiveFilters}
        <button onclick={clearFilters}
          class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors">
          <Icon icon="mdi:filter-remove" class="text-sm" />
          Limpiar filtros
        </button>
      {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="relative">
        <Icon icon="mdi:magnify" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
        <input type="text" placeholder="Buscar en todos los campos..." bind:value={searchText}
          class="field-input pl-10" />
      </div>
      <select bind:value={filterGrupo} class="field-input">
        <option value="">Todos los grupos</option>
        {#each uniqueGrupos as g}
          <option value={g}>Grupo {g}</option>
        {/each}
      </select>
      <select bind:value={filterDocente} class="field-input">
        <option value="">Todos los docentes</option>
        {#each uniqueDocentes as d}
          <option value={d}>{d}</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Results -->
  {#if loading}
    <div class="flex flex-col items-center justify-center py-24 gap-4">
      <Spinner size={48} color="#3b82f6" />
      <p class="text-sm text-slate-400 animate-pulse">Cargando registros...</p>
    </div>
  {:else if uniqueStudents.length === 0}
    <div class="card p-12 text-center">
      <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
        <Icon icon="mdi:text-search-variant" class="text-slate-400 text-3xl" />
      </div>
      <p class="text-slate-500 font-medium">No se encontraron registros</p>
      <p class="text-sm text-slate-400 mt-1">Intenta ajustar los filtros de busqueda.</p>
    </div>
  {:else}
    <div class="grid gap-4">
      {#each uniqueStudents as student}
        {@const recordCount = student.records.length}
        <div class="card p-5 sm:p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group border-l-4 border-l-primary-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Icon icon="mdi:account" class="text-primary-600 text-lg" />
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-800">{student.estudiante}</h3>
                <p class="text-xs text-slate-400">Grupo {student.grupo}</p>
              </div>
            </div>
            {#if recordCount > 1}
              <span class="text-xs font-semibold text-white bg-violet-500 px-3 py-1 rounded-full">
                {recordCount} planes
              </span>
            {:else}
              <span class="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                1 plan
              </span>
            {/if}
          </div>

          <div class="text-xs text-slate-500 bg-slate-50 rounded-lg p-3">
            <span class="font-medium">Asignaturas:</span> 
            {student.records.map(r => r.asignatura).join(', ')}
          </div>

          <div class="mt-4 pt-4 border-t border-slate-100 flex justify-end">
            <button onclick={() => handleGeneratePDF(student.records[0])} class="btn-danger">
              <Icon icon="mdi:file-pdf-box" class="text-sm" />
              Generar PDF
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
