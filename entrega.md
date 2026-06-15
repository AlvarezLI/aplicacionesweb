# NUVEA — Entrega Final

**Autor:** Alvarez Luis Ignacio Jesús

## Links

- **Video explicativo:** [Ver en Google Drive](https://drive.google.com/drive/folders/1yG0LlcUyMd9ZIjMsledjkmjBHKDPvrX5?usp=sharing)
- **Proyecto publicado:** [https://alvarezli.github.io/aplicacionesweb/pages/gate.html](https://alvarezli.github.io/aplicacionesweb/pages/gate.html)

---

# NUVEA — Tecnologías y mejoras

## Tecnologías utilizadas

### Frontend
| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de 8 páginas interconectadas |
| CSS3 con custom properties | Design system completo sin frameworks externos |
| JavaScript vanilla (ES5/ES6) | Lógica de componentes, autenticación y carrito |
| Google Fonts | Tipografías Cormorant Garamond (display) + DM Sans (cuerpo) |
| Fetch API | Carga dinámica de productos desde JSON |
| localStorage | Persistencia del carrito entre sesiones |
| sessionStorage | Manejo de sesión de usuario activa |

### Despliegue
| Herramienta | Uso |
|---|---|
| Git + GitHub | Control de versiones y repositorio remoto |
| GitHub Pages | Hosting estático gratuito y público |

---

## Arquitectura del proyecto

```
aplicaciones-web/
├── index.html              ← Redirect raíz (GitHub Pages)
├── css/
│   └── styles.css          ← Design system unificado
├── js/
│   ├── auth.js             ← Autenticación y rutas protegidas
│   ├── cart.js             ← Lógica completa del carrito
│   ├── navbar.js           ← Navbar generado dinámicamente
│   └── productCard.js      ← Componente de tarjeta de producto
├── data/
│   └── products.json       ← Catálogo de productos (fuente de datos)
└── pages/
    ├── index.html          ← Home con hero y productos destacados
    ├── gate.html           ← Landing de bienvenida
    ├── login.html          ← Inicio de sesión
    ├── register.html       ← Registro de usuario
    ├── moda.html           ← Categoría Moda
    ├── electronica.html    ← Categoría Electrónica
    ├── hogar.html          ← Categoría Hogar
    └── cart.html           ← Carrito de compras
```

---

## Mejoras incorporadas por módulo

### Módulo 1 — Estructura base
- Definición del design system con variables CSS (`--bg`, `--accent`, `--text`, `--radius`, etc.)
- Layout multi-página con navegación entre categorías
- Grilla de productos responsive con CSS puro

### Módulo 2 — Interactividad con JavaScript
- **Navbar dinámico**: componente generado por JS que detecta la página activa automáticamente
- **Productos desde JSON**: los productos se renderizan dinámicamente leyendo `data/products.json` via `fetch()`, eliminando HTML duplicado entre páginas
- **Selector de cantidad**: control de cantidad por producto antes de agregar al carrito
- **Carrito con localStorage**: los ítems persisten entre sesiones; badge en el navbar muestra el total de unidades en tiempo real

### Módulo 3 — Autenticación
- **Sistema de registro**: formulario con validación, almacena usuarios en `localStorage`
- **Inicio de sesión**: verifica credenciales y crea sesión en `sessionStorage`
- **Rutas protegidas**: `guardAuth()` redirige automáticamente a `gate.html` si no hay sesión activa; protege home, categorías y carrito
- **Cierre de sesión**: limpia la sesión y redirige al login

### Módulo 4 — Carrito completo
- Vista detallada del carrito con tabla de productos, cantidades editables y subtotales
- Cálculo de total en tiempo real al modificar cantidades o eliminar ítems
- Botón de vaciar carrito con confirmación de estado vacío
- Flujo de compra con mensaje de confirmación

### Entrega final — Despliegue
- Publicación en **GitHub Pages**: `https://alvarezli.github.io/aplicacionesweb/`
- Corrección de rutas relativas para entorno de subdirectorio (`pages/` vs raíz)
- Redirect automático desde la raíz hacia la landing page del sitio

---

# Roadmap de Desarrollo — NUVEA E-Commerce

## Visión general

NUVEA es un e-commerce estático de productos premium, desarrollado en etapas progresivas a lo largo del curso de Desarrollo Web. El objetivo final fue contar con una aplicación de una sola página de entrada que gestione autenticación, catálogo de productos y carrito de compras completamente desde el navegador.

---

## Etapa 1 — Estructura HTML (Entrega 1)

**Objetivos:**
- Crear el repositorio público en GitHub con README que incluye nombre, apellido y descripción del proyecto.
- Crear `index.html` como página de inicio con navbar (Home, botón de logout e ícono de la tienda), tres categorías de productos y título en el `<head>` con el nombre de la tienda.
- Crear `login.html` con formulario que solicita email y contraseña, con botón de submit.
- Crear `register.html` con formulario que solicita nombre, apellido, email, contraseña y fecha de nacimiento, con botón de submit.
- Crear una página HTML por cada categoría (Moda, Electrónica, Hogar), cada una con el navbar del home, título de la tienda + nombre de categoría, y accesibles desde el navbar.

**Decisiones:**
- Se eligió un diseño editorial premium (sin colores saturados, sin ilustraciones distractoras) para diferenciar el proyecto de un e-commerce genérico.
- El logo se implementó como SVG inline para controlar el color sin depender de imágenes externas.

---

## Etapa 2 — Estilos e identidad visual (Entrega 2)

**Objetivos:**
- Definir la paleta de colores e identidad de la marca (neutros oscuros, tipografía refinada, espaciados generosos).
- Estructurar y estilizar el navbar.
- Estructurar y estilizar las páginas de login y registro.
- Crear el prototipo visual de la card de producto.
- Definir el layout general del home y páginas de categoría donde irán las cards.

---

## Etapa 3 — Lógica JavaScript y componentes (Módulo 3)

**Objetivos:**
- Implementar en `auth.js` la redirección al home luego del login y la redirección al login al cerrar sesión (logout).
- Crear la estructura de datos `NAV_PAGES` (array de objetos con rutas y títulos) que alimenta la navbar.
- Desarrollar el componente de navbar (`renderNavbar()`) que usa esa estructura para construir el HTML y emplearlo en todas las páginas de la tienda.
- Crear el componente de card de producto (`productCard.js`) con imagen, título, descripción, precio, control de cantidad (suma/resta) y botón "Agregar al carrito".
- Implementar `guardAuth()` para proteger las páginas de usuarios no autenticados.

---

## Etapa 4 — Datos, fetch y carrito (Módulo 4)

**Objetivos:**
- Crear `data/products.json` con la estructura de productos por categoría (id, título, descripción, imagen, precio).
- Traer los datos mediante `fetch()` y renderizar las cards en cada página de categoría.
- En el home mostrar al menos 2 o 3 productos por categoría.
- Guardar la información del usuario logueado en `sessionStorage`.
- Guardar los productos seleccionados por el usuario en `localStorage`.
- Crear `cart.html` que muestre los productos del carrito con cantidad, subtotal y total.
- Permitir al usuario eliminar productos del carrito.

**Mejora significativa respecto a entregas anteriores:**
La navbar pasó de estar hardcodeada en cada HTML a ser generada por JavaScript desde un único array de configuración (`NAV_PAGES`). Esto elimina el riesgo de inconsistencias entre páginas y facilita agregar o renombrar secciones en un solo lugar.

---

## Etapa 5 — Organización final de archivos (Módulo 5 / Entrega final)

**Fecha:** Junio 2026

**Objetivos:**
- Mover todos los HTMLs sueltos de la raíz (`gate.html`, `login.html`, `register.html`, `cart.html`, `index.html`) al directorio `pages/`, dejando la raíz limpia.
- Actualizar todas las rutas relativas de CSS, JS y enlaces internos.
- Simplificar `_root()` en `auth.js`: al estar todos los HTMLs en `pages/`, la función siempre retorna `'../'`, eliminando la lógica condicional.
- Actualizar `NAV_PAGES` en `navbar.js` para que las rutas sean relativas entre páginas del mismo directorio.

**Resultado:**
```
aplicaciones-web/
├── pages/          ← todos los HTMLs
│   ├── index.html
│   ├── gate.html
│   ├── login.html
│   ├── register.html
│   ├── cart.html
│   ├── moda.html
│   ├── electronica.html
│   └── hogar.html
├── css/
│   └── styles.css
├── js/
│   ├── auth.js
│   ├── cart.js
│   ├── navbar.js
│   └── productCard.js
└── data/
    └── products.json
```
