/* NUVEA — Auth*/

const _S = 'nuvea_session';
const _U = 'nuvea_users';

/* Retorna true si hay sesión activa */
function isLoggedIn() {
  try { return !!sessionStorage.getItem(_S); } catch { return false; }
}

/* Retorna el objeto de sesión o null */
function getSession() {
  try { return JSON.parse(sessionStorage.getItem(_S)); } catch { return null; }
}

/* Intenta loguear. Retorna { ok, error? } */
function authLogin(email, password) {
  const user = _getUsers().find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (user) {
    sessionStorage.setItem(_S, JSON.stringify({ email: user.email, nombre: user.nombre }));
    return { ok: true };
  }
  return { ok: false, error: 'Correo o contraseña incorrectos.' };
}

/* Registra un nuevo usuario. Retorna { ok, error? } */
function authRegister(data) {
  const users = _getUsers();
  if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
    return { ok: false, error: 'Ya existe una cuenta con ese correo.' };
  }
  users.push(data);
  localStorage.setItem(_U, JSON.stringify(users));
  return { ok: true };
}

/* Cierra sesión y redirige al gate */
function authLogout() {
  sessionStorage.removeItem(_S);
  window.location.href = _root() + 'gate.html';
}

/* Llama esto en páginas protegidas: redirige si no hay sesión */
function guardAuth() {
  if (!isLoggedIn()) {
    window.location.replace(_root() + 'gate.html');
  }
}

/* Ruta raíz relativa según profundidad de la página */
function _root() {
  return window.location.pathname.replace(/\\/g, '/').includes('/pages/') ? '../' : './';
}

function _getUsers() {
  try { return JSON.parse(localStorage.getItem(_U)) || []; } catch { return []; }
}

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

document.addEventListener('DOMContentLoaded', initNav);
