# ActiRec - Agent Guidelines

## Project Overview
Svelte 5 web app for managing academic improvement plans at I.E. Oficial Instituto Guatica.

## Build Commands
```bash
npm install         # Install dependencies
npm run dev         # Dev server (hot reload)
npm run build       # Production build
npm run preview     # Preview production build
```
**Note:** No test framework or linting configured.

---

## Tech Stack
- **Framework:** Svelte 5 (runes: `$state`, `$derived`, `$props`)
- **Build:** Vite 6 | **CSS:** Tailwind CSS v4 | **Icons:** @iconify/svelte | **Dialogs:** SweetAlert2

---

## Code Style

### Svelte 5 Runes
```svelte
<script>
  let count = $state(0)                           // Reactive state
  let doubled = $derived(count * 2)               // Derived state
  let { title, onSubmit } = $props()              // Props
</script>
```

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| JS variables | camelCase | `fechaLimite`, `nombresEstudiante` |
| Components | PascalCase | `FormComponent`, `DataList` |
| CSS classes | kebab-case | `btn-primary`, `field-input` |
| Constants | SCREAMING_SNAKE | `institutionHeader` |

### Component Template
```svelte
<script>
  // 1. Imports
  import Icon from '@iconify/svelte'
  import Spinner from './Spinner.svelte'
  import { onMount } from 'svelte'

  // 2. Props (if any)
  let { size = 80 } = $props()

  // 3. State
  let loading = $state(true)
  let data = $state([])

  // 4. Derived
  let filtered = $derived(data.filter(x => x.active))

  // 5. Functions
  function handleClick() { ... }

  // 6. Lifecycle
  onMount(() => { ... })
</script>

<!-- Template -->
<div class="container">
  {#if condition}<p>Content</p>{/if}
</div>
```

### Dynamic Component Imports
```javascript
let FormComponent = $state(null)
async function loadView() {
  FormComponent = (await import('./components/FormComponent.svelte')).default
}
```

### Imports
- Use relative paths: `'./lib/'`, `'./components/'`
- Import lifecycle from `'svelte'`
- Always import `onMount` when used

### CSS & Tailwind v4
- Global CSS in `src/app.css` with `@import "tailwindcss"` and `@theme` directive
- Custom tokens: `--color-primary-500`, `--color-accent-600`
- Component classes: `.card`, `.btn-primary`, `.btn-danger`, `.field-label`, `.field-input`, `.glass-nav`
- Use `@layer components` for custom classes

### Error Handling
```javascript
async function loadData() {
  try {
    loading = true
    const res = await fetch('/api')
    if (!res.ok) throw new Error('Failed')
    data = await res.json()
  } catch (err) {
    console.error(err)
    Swal.fire({ title: 'Error', text: 'Message', icon: 'error', confirmButtonColor: '#2563eb' })
  } finally {
    loading = false
  }
}
```

### SweetAlert2
```javascript
Swal.fire({
  icon: 'success|error|warning|info',
  confirmButtonColor: '#2563eb',
  confirmButtonText: 'Cerrar'
})
```

---

## Icons
```svelte
<Icon icon="mdi:clipboard-text-outline" class="text-lg" />
```
Use `mdi` icon set (Material Design Icons).

---

## API Endpoints
| Function | URL | Method |
|----------|-----|--------|
| `fetchEstudiantes` | `app.iedeoccidente.com/ig/getEstudiantes.php` | GET |
| `fetchDocentes` | `app.iedeoccidente.com/ig/getprofes.php` | GET |
| Submit | `app.iedeoccidente.com/gs/gsartirec.php` | POST |
| Records | `app.iedeoccidente.com/gs/getgsartirec.php` | GET |

---

## Project Structure
```
src/
├── App.svelte              # Root: nav, routing
├── main.js                 # Entry point
├── app.css                 # Tailwind config, component classes
├── lib/
│   ├── data.js             # Constants, API functions
│   └── pdf.js              # PDF generation
└── components/
    ├── FormComponent.svelte
    ├── DataList.svelte
    └── Spinner.svelte
```

---

## Key Patterns

**Form Validation:**
1. Check all required fields
2. Validate min lengths (plan: 40 chars)
3. Validate date ranges (deadline > today)
4. Show errors with Swal

**Adding a Form Field:**
1. Add to `FormComponent.svelte`
2. Add to API request body
3. Update `DataList.svelte` labels
4. Update `pdf.js` template
