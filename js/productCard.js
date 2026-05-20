/* NUVEA — Product Card Component */

var PRODUCTS = {
  moda: [
    { id: 'nuvea-m1', img: 'data/moda/blazer-estructurado.webp', title: 'Blazer Estructurado',   desc: 'Corte italiano en lana fría. Entretela fusionada para una silueta impecable todo el día.',           price: 89900,  tag: 'Nuevo'     },
    { id: 'nuvea-m2', img: 'data/moda/vestido-lino.webp',        title: 'Vestido Lino Natural',   desc: 'Tejido de lino 100% lavado a piedra. Caída fluida y transpirable para el verano.',                 price: 67500,  tag: 'Destacado' },
    { id: 'nuvea-m3', img: 'data/moda/camisa-oxford.webp',       title: 'Camisa Oxford',          desc: 'Algodón peinado de dos capas, botones de nácar y espalda plisada para mayor libertad.',            price: 45000,  tag: 'Colección' },
    { id: 'nuvea-m4', img: 'data/moda/wool-blend.webp',          title: 'Pantalón Wool Blend',    desc: 'Mezcla de lana virgen y poliéster reciclado. Pinzas frontales y cierre invisible.',                 price: 72000,  tag: 'Nuevo'     },
    { id: 'nuvea-m5', img: 'data/moda/trench-coat.webp',         title: 'Trench Coat Clásico',    desc: 'Gabardina de algodón tratado al agua. Forro de acetato y correa regulable en cintura.',             price: 134000, tag: 'Destacado' },
    { id: 'nuvea-m6', img: 'data/moda/pima.jpg',                 title: 'Camiseta Premium Pima',  desc: 'Algodón Pima de fibra extralarga. Cuello redondo reforzado y teñido en prenda para mayor suavidad.', price: 28500,  tag: 'Colección' },
  ],
  electronica: [
    { id: 'nuvea-e1', img: 'data/electronica/auriculares.webp',  title: 'Auriculares Inalámbricos', desc: 'Cancelación activa de ruido de 35 dB. Hasta 30 hs de batería y carga rápida USB-C.',              price: 129900, tag: 'Nuevo'     },
    { id: 'nuvea-e2', img: 'data/electronica/ultrawide.webp',    title: 'Monitor Ultrawide 34"',    desc: 'Panel IPS curvo 3440×1440, 144 Hz. Cobertura DCI-P3 99% y ajuste completo de altura.',            price: 459000, tag: 'Destacado' },
    { id: 'nuvea-e3', img: 'data/electronica/teclado.jpg',       title: 'Teclado Mecánico',         desc: 'Switches lineales de 45 g de actuación. Retroiluminación RGB por tecla y cuerpo de aluminio.',    price: 87500,  tag: 'Colección' },
    { id: 'nuvea-e4', img: 'data/electronica/mouse.jpg',         title: 'Mouse Ergonómico Pro',     desc: 'Sensor óptico de 25.600 DPI, 7 botones programables y reposamuñecas desmontable.',                 price: 54000,  tag: 'Nuevo'     },
    { id: 'nuvea-e5', img: 'data/electronica/usb.jpg',           title: 'Hub USB-C 10 en 1',        desc: 'HDMI 4K, Ethernet 1 Gbps, SD/MicroSD, 3× USB-A y entrega de potencia 100 W passthrough.',         price: 38900,  tag: 'Colección' },
    { id: 'nuvea-e6', img: 'data/electronica/camara.jpg',        title: 'Cámara Mirrorless',        desc: 'Sensor APS-C de 26 MP, estabilización en 5 ejes y grabación en 4K/60fps. Cuerpo compacto.',       price: 698000, tag: 'Destacado' },
  ],
  hogar: [
    { id: 'nuvea-h1', img: 'data/hogar/lampara.jpg',  title: 'Lámpara de Piso Arco',   desc: 'Estructura de acero mate con pantalla articulada. Altura regulable de 160 a 195 cm.',             price: 154000, tag: 'Nuevo'     },
    { id: 'nuvea-h2', img: 'data/hogar/cojin.jpg',    title: 'Cojín Boucle Natural',   desc: 'Tejido boucle de lana reciclada. Relleno de fibra hollow siliconada. Cierre invisible.',         price: 28900,  tag: 'Colección' },
    { id: 'nuvea-h3', img: 'data/hogar/jarron.jpg',   title: 'Jarrón Cerámica Mate',   desc: 'Torneado a mano en grés de alta temperatura. Esmalte mate en tonos naturales únicos.',           price: 42500,  tag: 'Destacado' },
    { id: 'nuvea-h4', img: 'data/hogar/bandeja.jpg',  title: 'Bandeja Mármol Blanco',  desc: 'Mármol Carrara pulido a espejo. Bordes biselados y pies de goma antideslizantes.',               price: 56000,  tag: 'Nuevo'     },
    { id: 'nuvea-h5', img: 'data/hogar/espejo.jpg',   title: 'Espejo Oval Ratán',      desc: 'Marco tejido a mano en ratán natural. Cristal de 5 mm sin distorsión. Incluye instalación.',     price: 98000,  tag: 'Destacado' },
    { id: 'nuvea-h6', img: 'data/hogar/copas.jpg',    title: 'Set Copas Borosilicato', desc: 'Set de 4 copas en vidrio borosilicato resistente al calor. Volumen de 400 ml cada una.',          price: 34500,  tag: 'Colección' },
  ],
};

function createProductCard(product) {
  var root = _root();
  var card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML =
    '<div class="product-img">' +
      '<img src="' + root + product.img + '" alt="' + product.title + '" loading="lazy" />' +
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

function renderProducts(category) {
  var grid = document.querySelector('.products-grid');
  if (!grid) return;
  grid.innerHTML = '';
  var list = PRODUCTS[category] || [];
  for (var i = 0; i < list.length; i++) {
    grid.appendChild(createProductCard(list[i]));
  }
}
