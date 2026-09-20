# Budget — Generador de presupuestos de servicios digitales

Aplicación web (SPA) hecha con **Angular 22** que permite a un cliente potencial elegir servicios digitales (SEO, Publicidad y Web), configurar el servicio Web, dejar sus datos y obtener un presupuesto con ID único. El equipo comercial puede consultar después el histórico de presupuestos, buscarlos por nombre de cliente y abrir el detalle de cada uno.

Proyecto 2 de la especialización Frontend de ITAcademy (metodología ABP): el objetivo es aprender Angular en un proyecto con arquitectura organizada según principios **SOLID**, siguiendo épicas y un flujo de ramas **Gitflow**.

- **Repositorio:** https://github.com/miquelvilimelisaceituno/Proyecto-2-BUDGET-PRESSUPOSTOS-DE-SERVEIS-DIGITALS

---

## Funcionalidades

El MVP se organiza en tres épicas, todas implementadas:

| Épica | Qué hace |
|---|---|
| **1. Selector de servicios** | Selección/deselección de SEO (300 €), Publicidad (400 €) y Web (500 € base + configuración). El configurador de Web (páginas e idiomas) solo se activa si Web está marcada. El total se recalcula en tiempo real. |
| **2. Generador de presupuesto** | Formulario con nombre, teléfono y email. Genera un presupuesto con ID único, fecha, servicios desglosados y total, y lo guarda en el navegador. |
| **3. Consulta de histórico** | Listado de todos los presupuestos, búsqueda por nombre de cliente (sin distinguir mayúsculas) y vista de detalle de cada presupuesto. |

La **Épica 4** (compartir el presupuesto mediante URL única / exportación a PDF) se descartó de forma consciente para cerrar el MVP con un alcance controlado.

### Reglas de precio

| Servicio | Precio |
|---|---|
| SEO | 300 € (fijo) |
| Publicidad | 400 € (fijo) |
| Web | `500 € + (páginas + idiomas) × 30 €` |

---

## Stack tecnológico

- **Angular 22** (componentes standalone, signals, `inject()`), sin NgModules
- **TypeScript 6**
- **Tailwind CSS v4** (vía `@tailwindcss/postcss`) con la tipografía Plus Jakarta Sans
- **Vitest 4 + jsdom** para los tests unitarios (`@angular/build:unit-test`)
- **Prettier** para el formato del código
- **CSR puro** (sin SSR/SSG): todo se ejecuta en el navegador y los datos se guardan en `localStorage`

---

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS reciente compatible con Angular 22)
- npm (el proyecto declara `npm@11.13.0` en `packageManager`)
- Git

No hace falta instalar Angular CLI globalmente: viene como dependencia de desarrollo y se usa con los scripts de npm (o con `npx ng ...`).

---

## Instalación y puesta en marcha

```bash
# 1. Clonar el repositorio
git clone https://github.com/miquelvilimelisaceituno/Proyecto-2-BUDGET-PRESSUPOSTOS-DE-SERVEIS-DIGITALS.git
cd Proyecto-2-BUDGET-PRESSUPOSTOS-DE-SERVEIS-DIGITALS

# 2. Instalar dependencias (usa el package-lock.json)
npm ci

# 3. Arrancar el servidor de desarrollo
npm start
```

La aplicación queda disponible en `http://localhost:4200/` y se recarga sola al guardar cambios.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo (`ng serve`) |
| `npm run build` | Build de producción en `dist/` (`ng build`) |
| `npm run watch` | Build en modo desarrollo que se recompila al guardar |
| `npm test` | Tests unitarios con Vitest (`ng test`) |

Para ejecutar los tests una sola vez, sin modo watch: `npx ng test --no-watch`.

---

## Estructura del proyecto

```
src/app/
├── core/                       # Servicios singleton transversales
│   ├── seleccion-servicios.ts     # Estado de la selección y cálculo del total
│   └── generador-id.ts            # ID único para cada presupuesto
├── shared/models/              # Modelos reutilizables, sin lógica de negocio
│   └── presupuesto.model.ts       # Presupuesto y RegistroPrecio
├── data/                       # Única capa que conoce el origen de los datos
│   ├── repositorio-presupuestos.model.ts   # Contrato (clase abstracta)
│   ├── repositorio-presupuestos.fake.ts    # Doble en memoria para tests
│   └── local-storage/
│       └── repositorio-presupuestos-local-storage.ts   # Implementación real
└── features/
    ├── service-selector/       # Épica 1
    │   ├── models/                # ServicioPresupuestable, Seo, Publicidad, Web
    │   └── components/            # SelectorServicios, TarjetaServicio, ConfiguradorWeb
    ├── budget-generator/       # Épica 2
    │   ├── services/              # GeneradorPresupuesto (orquestador)
    │   └── components/            # FormularioCliente
    └── budget-history/         # Épica 3
        ├── services/              # HistorialPresupuestos (búsqueda)
        └── components/            # ConsultaHistorial, TarjetaPresupuesto, DetallePresupuesto
```

Cada feature separa **componentes** (pintan y capturan eventos), **servicios** (lógica de dominio) y **modelos** (forma de los datos).

---

## Arquitectura y principios SOLID

| Principio | Cómo se aplica en el proyecto |
|---|---|
| **S** — Responsabilidad única | Cada épica es una feature; dentro, el componente pinta y el servicio calcula. Cada clase de servicio (`Seo`, `Publicidad`, `Web`) solo calcula su propio precio. |
| **O** — Abierto/cerrado | `Seo`, `Publicidad` y `Web` implementan `ServicioPresupuestable`. Añadir un cuarto servicio es una clase nueva, sin tocar `if/switch` existentes. |
| **L** — Sustitución de Liskov | `TarjetaServicio` y `SeleccionServicios` trabajan contra la interfaz, así que cualquier servicio es intercambiable. |
| **I** — Segregación de interfaces | `ServicioPresupuestable` solo exige `nombre` y `obtenerPrecio()`; páginas e idiomas son cosa exclusiva de `Web`. |
| **D** — Inversión de dependencias | `GeneradorPresupuesto`, `GeneradorId` e `HistorialPresupuestos` dependen de la clase abstracta `RepositorioPresupuestos`, nunca de `localStorage`. La implementación concreta se cablea en un único sitio (`app.config.ts`). |

Para cambiar `localStorage` por una API real bastaría con crear otra clase que extienda `RepositorioPresupuestos` y cambiar el `useClass` del proveedor en `app.config.ts`. Ningún componente ni servicio de `features/` se entera.

### Decisiones técnicas destacables

- **`RepositorioPresupuestos` es una clase abstracta y no una interfaz**: las interfaces de TypeScript se borran al compilar y no sirven como token de inyección de Angular; una clase abstracta sí existe en tiempo de ejecución.
- **`Presupuesto` guarda `RegistroPrecio` (nombre + precio) y no las instancias vivas de los servicios**, para que reconfigurar el selector después no altere retroactivamente un presupuesto ya generado.
- **La fecha es un `number` (timestamp)**, porque `JSON.parse` no reconstruye objetos `Date` al leer de `localStorage`.
- **`HistorialPresupuestos.buscar('')` devuelve todo el listado**, así no hace falta un método `listarTodos()` aparte.
- **Sin Angular Router**: el listado y el detalle se alternan con un signal dentro del mismo componente. Con la Épica 4 descartada, el enrutado quedó fuera del alcance.
- **CSR puro**: no hay contenido conocido en tiempo de build (SSG) ni backend que justifique un servidor (SSR).

---

## Persistencia de datos

Los presupuestos se guardan en el `localStorage` del navegador bajo la clave `presupuestos`, como un array JSON. Cada presupuesto tiene la forma:

```ts
{
  id: number,
  fecha: number,          // timestamp
  nombre: string,
  email: string,
  telefono: string,
  servicios: { nombre: string, precio: number }[],
  total: number
}
```

Al ser `localStorage`, los datos son propios de cada navegador y se pierden si el usuario borra los datos del sitio.

---

## Tests

```bash
npm test                  # modo watch
npx ng test --no-watch    # una sola ejecución
```

Los tests usan **Vitest** con **jsdom**. Los componentes que dependen de `RepositorioPresupuestos` se prueban con `RepositorioPresupuestosFake`, un doble en memoria que aprovecha la inversión de dependencias descrita arriba (así los tests nunca tocan el `localStorage` real).

Hay tests de comportamiento para el cálculo de precio de `Web`, la selección de servicios (`SeleccionServicios`) y la generación/guardado de presupuestos (`GeneradorPresupuesto`); el resto de piezas tienen, de momento, pruebas básicas de creación/renderizado.

---

## Accesibilidad y diseño

- **Mobile-first** con Tailwind: la cuadrícula del formulario y del detalle cambia con el breakpoint `sm`, y la cabecera con `md`.
- **HTML semántico**: `lang="ca"`, `<main>`, secciones con encabezados, `fieldset`/`legend`, `<dl>` y `<time>` en el detalle, `<output>` como región en vivo para totales y avisos.
- **Controles nativos** (checkbox real en las tarjetas de servicio) antes que ARIA.
- **Gestión del foco**: al pasar del listado al detalle (y al volver), el foco se mueve al encabezado de la vista nueva.
- Etiquetas `<label>` presentes (ocultas visualmente con `sr-only` donde el diseño no las muestra).

---

## Flujo de trabajo con Git (Gitflow)

Se sigue Gitflow de forma manual, con git "puro":

| Rama | Propósito |
|---|---|
| `main` | Versión estable. Solo recibe merges desde `release/*` o `hotfix/*`. |
| `develop` | Rama de integración. |
| `feature/service-selector` | Épica 1 |
| `feature/budget-generator` | Épica 2 |
| `feature/budget-history` | Épica 3 |
| `UX/UI` | Rama transversal: diseño Tailwind aplicado a las tres épicas según los mockups |
| `testing` | Rama transversal: corrección y ampliación de los tests |
| `maquetacion_semantica` | Rama transversal: revisión de semántica HTML y accesibilidad |

Los merges se hacen con `git merge --no-ff` para dejar constancia de cada integración en el historial. Los mensajes de commit siguen mayoritariamente el estilo de Conventional Commits (`feat:`, `fix:`, `test:`, `chore:`).

---

## Despliegue

El proyecto es una SPA estática, así que sirve cualquier hosting de ficheros estáticos (Netlify, Vercel, GitHub Pages).

```bash
npm run build
```

El resultado queda en `dist/Projecte_2_Budget/browser/` (comprobar la ruta exacta tras el primer build). En Netlify o Vercel: comando de build `npm run build` y directorio de publicación esa carpeta. Si se publica en GitHub Pages bajo `/<nombre-repo>/`, hay que compilar con `--base-href /<nombre-repo>/`.

---

## Limitaciones conocidas y próximos pasos

- Sin enrutado: no hay URL propia por presupuesto (Épica 4 descartada).
- Validación del formulario limitada a la nativa del navegador (`type="email"`); falta validación propia con mensajes de error.
- Búsqueda solo por nombre de cliente (no por servicio).
- Ordenación por fecha/importe/nombre en el histórico: solo maquetada, deshabilitada.
- Escenarios Gherkin de las historias de usuario aún por formalizar como tests.
- Contraste de algunos colores por debajo de WCAG AA (documentado y fuera del alcance de la revisión semántica).
- Formato de fecha en el detalle en inglés: falta registrar el locale `ca`.

---

## Autoría

Proyecto realizado por [@miquelvilimelisaceituno](https://github.com/miquelvilimelisaceituno) para la especialización Frontend de ITAcademy.
