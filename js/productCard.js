/* NUVEA — Product Card Component */

function createProductCard(product) {
  var root = _root();
  var card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML =
    '<div class="product-img">' +
      '<img src="../' + product.img + '" alt="' + product.title + '" loading="lazy" />' +
    '</div>' +
    '<span class="product-tag">' + product.tag + '</span>' +
    '<h3 class="product-name">' + product.title + '</h3>' +
    '<p class="product-desc">' + product.desc + '</p>' +
    '<p class="product-price">$' + product.price.toLocaleString('es-AR') + '</p>' +
    '<div class="product-qty">' +
      '<button class="qty-btn qty-minus" aria-label="Disminuir cantidad">&#8722;</button>' +
      '<span class="qty-value">1</span>' +
      '<button class="qty-btn qty-plus" aria-label="Aumentar cantidad">+</button>' +
    '</div>' +
    '<button class="product-btn">Agregar al carrito</button>';

  var qty     = 1;
  var minus   = card.querySelector('.qty-minus');
  var plus    = card.querySelector('.qty-plus');
  var qtySpan = card.querySelector('.qty-value');
  var addBtn  = card.querySelector('.product-btn');

  minus.addEventListener('click', function () {
    if (qty > 1) {
      qty--;
      qtySpan.textContent = qty;
    }
  });

  plus.addEventListener('click', function () {
    qty++;
    qtySpan.textContent = qty;
  });

  addBtn.addEventListener('click', function () {
    cartAdd(product.id, product.title, product.price, qty);
    addBtn.textContent = '✓ Agregado';
    addBtn.classList.add('added');
    qty = 1;
    qtySpan.textContent = 1;
    setTimeout(function () {
      addBtn.textContent = 'Agregar al carrito';
      addBtn.classList.remove('added');
    }, 2000);
  });

  return card;
}

/* Trae el JSON y renderiza todos los productos de una categoría */
function renderProducts(category) {
  var grid = document.querySelector('.products-grid');
  if (!grid) return;

  fetch('../data/products.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var list = data[category] || [];
      list.forEach(function (product) {
        grid.appendChild(createProductCard(product));
      });
    });
}

/* Trae el JSON y renderiza 3 productos por categoría en el home */
function renderFeatured() {
  var grid = document.querySelector('.featured-grid');
  if (!grid) return;

  fetch('../data/products.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      ['moda', 'electronica', 'hogar'].forEach(function (category) {
        var items = (data[category] || []).slice(0, 3);
        items.forEach(function (product) {
          grid.appendChild(createProductCard(product));
        });
      });
    });
}
