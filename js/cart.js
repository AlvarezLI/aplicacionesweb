/* NUVEA — Cart */

const _C = 'nuvea_cart';

function cartGet() {
  try { return JSON.parse(localStorage.getItem(_C)) || []; } catch { return []; }
}

function cartSave(items) {
  localStorage.setItem(_C, JSON.stringify(items));
}

function cartAdd(id, name, price) {
  const items    = cartGet();
  const existing = items.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ id, name, price, qty: 1 });
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
  document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const id    = this.dataset.id;
      const name  = this.dataset.name;
      const price = parseInt(this.dataset.price, 10);
      cartAdd(id, name, price);
      this.textContent = '✓ Agregado';
      this.classList.add('added');
      setTimeout(() => {
        this.textContent = 'Agregar al carrito';
        this.classList.remove('added');
      }, 2000);
    });
  });
}

document.addEventListener('DOMContentLoaded', initCart);
