/* NUVEA — Cart */

const _C = 'nuvea_cart';

function cartGet() {
  try { return JSON.parse(localStorage.getItem(_C)) || []; } catch { return []; }
}

function cartSave(items) {
  localStorage.setItem(_C, JSON.stringify(items));
}

function cartAdd(id, name, price, qty = 1) {
  const items    = cartGet();
  const existing = items.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ id, name, price, qty });
  }
  cartSave(items);
  updateCartBadge();
}

function cartRemove(id) {
  cartSave(cartGet().filter(i => i.id !== id));
  updateCartBadge();
}

function cartCount() {
  return cartGet().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return cartGet().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function initCart() {
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initCart);
