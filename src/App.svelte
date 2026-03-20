<script>
  import Swal from 'sweetalert2'
  import escudo from './assets/escudo.png'
  import { documentTitle, institutionHeader } from './lib/data.js'
  import Icon from '@iconify/svelte'

  let currentView = $state('form')
  let FormComponent = $state(null)
  let DataList = $state(null)

  async function loadView(view) {
    currentView = view
    if (view === 'form' && !FormComponent) {
      FormComponent = (await import('./components/FormComponent.svelte')).default
    } else if (view === 'list' && !DataList) {
      DataList = (await import('./components/DataList.svelte')).default
    }
  }

  loadView('form')

  function showAbout() {
    Swal.fire({
      title: 'Acerca de ActiRec',
      html: `
        <div style="text-align:left; font-size:14px; line-height:1.7;">
          <p style="margin-bottom:8px;">Aplicacion para la gestion de <strong>Planes de Mejoramiento Academico</strong>.</p>
          <hr style="margin:12px 0; border-color:#e2e8f0;">
          <p><strong>Desarrollado por:</strong></p>
          <p>Cesar Leandro Patino Velez</p>
          <p style="color:#64748b; font-size:13px;">Docente - Institucion Educativa Oficial Instituto Guatica</p>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#2563eb',
      background: '#fff',
      customClass: { popup: 'rounded-2xl' }
    })
  }
</script>

<div class="min-h-screen flex flex-col">
  <!-- Header -->
  <header class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
    <div class="absolute inset-0 opacity-10"
      style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
      <div class="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm p-1 shadow-lg ring-1 ring-white/20 shrink-0">
        <img src={escudo} alt="Escudo institucional" class="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div>
        <p class="text-primary-200 text-xs font-medium tracking-wide uppercase whitespace-pre-line leading-tight">{institutionHeader}</p>
        <h1 class="text-white text-sm sm:text-base font-bold leading-snug">{documentTitle}</h1>
      </div>
    </div>
  </header>

  <!-- Tab switcher -->
  <div class="max-w-4xl mx-auto w-full px-4 sm:px-6 mt-4">
    <div class="card inline-flex p-1.5 gap-1">
      <button
        onclick={() => loadView('form')}
        class="px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 {currentView === 'form' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}">
        <Icon icon="mdi:form-select" class="text-base" />
        Formulario
      </button>
      <button
        onclick={() => loadView('list')}
        class="px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 {currentView === 'list' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}">
        <Icon icon="mdi:format-list-bulleted" class="text-base" />
        Registros
      </button>
    </div>
  </div>

  <!-- Main content -->
  <main class="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
    {#if currentView === 'form' && FormComponent}
      <FormComponent />
    {:else if currentView === 'list' && DataList}
      <DataList />
    {/if}
  </main>

  <!-- Footer -->
  <footer class="border-t border-slate-200/60 bg-white/40 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-center text-xs text-slate-400">
      ActiRec &copy; {new Date().getFullYear()} &mdash; I.E. Oficial Instituto Guatica
    </div>
  </footer>
</div>
