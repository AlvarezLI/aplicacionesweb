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
- Tipografía editorial: Cormorant Garamond para títulos, DM Sans para cuerpo
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
