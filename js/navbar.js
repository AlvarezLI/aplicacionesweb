/* NUVEA — Navbar Component */

const NAV_PAGES = [
  { href: 'index.html',             label: 'Inicio' },
  { href: 'pages/moda.html',        label: 'Moda' },
  { href: 'pages/electronica.html', label: 'Electrónica' },
  { href: 'pages/hogar.html',       label: 'Hogar' },
];

function renderNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  const path = window.location.pathname.replace(/\\/g, '/');
  const root = _root();

  const linksHTML = NAV_PAGES.map(function (page) {
    const filename = page.href.split('/').pop();
    const isActive = path.endsWith('/' + filename);
    return '<li><a href="' + root + page.href + '"' + (isActive ? ' class="active"' : '') + '>' + page.label + '</a></li>';
  }).join('');

  nav.innerHTML =
    '<a href="' + root + 'index.html" class="nav-brand">' +
      '<svg class="nav-logo" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="28" height="28" rx="3" fill="#1A1917"/>' +
        '<path d="M7 8v12M7 8l14 12M21 8v12" stroke="#FAFAF8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      '<span class="nav-brand-name">uvea</span>' +
    '</a>' +
    '<ul class="nav-links">' + linksHTML + '</ul>' +
    '<a href="' + root + 'cart.html" class="nav-cart" aria-label="Carrito">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>' +
        '<line x1="3" y1="6" x2="21" y2="6"/>' +
        '<path d="M16 10a4 4 0 0 1-8 0"/>' +
      '</svg>' +
      '<span class="cart-badge"></span>' +
    '</a>' +
    '<button class="nav-toggle" aria-label="Menú" aria-expanded="false">' +
      '<span></span><span></span><span></span>' +
    '</button>' +
    '<button class="btn-logout" onclick="authLogout()">Cerrar sesión</button>';

  initNav();
}
