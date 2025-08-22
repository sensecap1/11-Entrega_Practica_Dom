const products = [
  {
    name: 'YSL Y Men EDP',
    brand: 'Yves Saint Laurent',
    price: 52.69,
    stars: 4.7,
    reviews: 421,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw558b18d6/images/1/7/170267_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/yves-saint-laurent-y-men-edp-15480.html'
  },
  {
    name: 'YSL Y Le Parfum',
    brand: 'Yves Saint Laurent',
    price: 99.95,
    stars: 4.6,
    reviews: 310,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw8cb0ea2c/images/1/9/195793_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/yves-saint-laurent-y-men-le-parfum-20839.html'
  },
  {
    name: 'YSL Y Men',
    brand: 'Yves Saint Laurent',
    price: 44.91,
    stars: 4.5,
    reviews: 280,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw94023874/images/2/0/202253_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/y-men-yves-saint-laurent-12764.html'
  },
  {
    name: 'Armani Stronger With You Intensely',
    brand: 'Armani',
    price: 42.61,
    stars: 4.7,
    reviews: 359,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw2f661d74/images/1/7/177542_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/armani-stronger-with-you-intensely-16646.html'
  },
  {
    name: 'Paco Rabanne FAME',
    brand: 'Paco Rabanne',
    price: 31.95,
    stars: 4.4,
    reviews: 512,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dwa83e1f5c/images/2/0/207544_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/paco-rabanne-fame-eau-de-parfum-25578.html'
  },
  {
    name: 'Valentino Born in Roma Donna Extradose',
    brand: 'Valentino',
    price: 52.93,
    stars: 4.8,
    reviews: 199,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dwf0247d97/images/2/2/227352_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/valentino-born-in-roma-donna-extradose-34084.html'
  },
  {
    name: 'Jean Paul Gaultier Ultra Male',
    brand: 'Jean Paul Gaultier',
    price: 49.95,
    stars: 4.6,
    reviews: 402,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw0d9f23a5/images/1/6/163883_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/jean-paul-gaultier-ultra-male-8708.html'
  },
  {
    name: 'Prada Paradoxe',
    brand: 'Prada',
    price: 42.90,
    stars: 4.5,
    reviews: 275,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw087a5d84/images/2/0/206940_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/prada-paradoxe-25501.html'
  },
  {
    name: 'Carolina Herrera Good Girl Blush',
    brand: 'Carolina Herrera',
    price: 55.95,
    stars: 4.6,
    reviews: 188,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dw264810e1/images/2/1/210718_3.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/carolina-herrera-good-girl-blush-26823.html'
  },
  {
    name: 'JPG Gaultier Divine Estuche',
    brand: 'Jean Paul Gaultier',
    price: 99.95,
    stars: 4.9,
    reviews: 92,
    seller: 'Paco Perfumerías',
    image: 'https://www.pacoperfumerias.com/dw/image/v2/BJBX_PRD/on/demandware.static/-/Sites-pacoper-master-catalog/default/dwde2483f9/images/2/2/223883_2.jpg?sw=702',
    url: 'https://www.pacoperfumerias.com/jean-paul-gaultier-divine-estuche-31047.html'
  }
];

const state = {
  search: '',
  brand: 'all',
  min: '',
  max: '',
  sort: 'none'
};

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function formatPrice(p) {
  return p.toFixed(2).replace('.', ',') + '€';
}
function starsToText(n) {
  const full = Math.round(n);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderFilters() {
  const filters = $('#filters');
  if (!filters) return;

  const brands = ['all', ...new Set(products.map(p => p.brand))];

  filters.innerHTML = `
    <h3>Filtrar</h3>
    <div>
      <label for="f-brand">Marca</label>
      <select id="f-brand">
        ${brands.map(b => `<option value="${b}">${b === 'all' ? 'Todas' : b}</option>`).join('')}
      </select>
    </div>
    <div>
      <label>Precio mínimo</label>
      <input id="f-min" type="number" min="0" placeholder="€">
    </div>
    <div>
      <label>Precio máximo</label>
      <input id="f-max" type="number" min="0" placeholder="€">
    </div>
    <div>
      <label for="f-sort">Ordenar</label>
      <select id="f-sort">
        <option value="none">Sin orden</option>
        <option value="price-asc">Precio ↑</option>
        <option value="price-desc">Precio ↓</option>
        <option value="stars-desc">Mejor valorados</option>
      </select>
    </div>
  `;

  $('#f-brand').addEventListener('change', e => { state.brand = e.target.value; update(); });
  $('#f-min').addEventListener('input', e => { state.min = e.target.value; update(); });
  $('#f-max').addEventListener('input', e => { state.max = e.target.value; update(); });
  $('#f-sort').addEventListener('change', e => { state.sort = e.target.value; update(); });
}

function renderProducts(list) {
  const ul = $('#product-list');
  if (!ul) return;

  if (!list.length) {
    ul.innerHTML = `<li><article class="product-card"><p>No hay resultados con los filtros aplicados.</p></article></li>`;
    return;
  }

  ul.innerHTML = list.map(p => `
    <li>
      <article class="product-card">
        <a href="${p.url}" target="_blank" rel="noopener" class="enlace-producto">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
        </a>

        <div class="product-meta">
          <span class="stars" aria-label="${p.stars} sobre 5">${starsToText(p.stars)}</span>
          <span>(${p.reviews})</span>
        </div>

        <p class="precio">${formatPrice(p.price)}</p>

        <a href="${p.url}" target="_blank" rel="noopener" class="carrito">Añadir <span class="icono-carrito">🛒</span></a>
      </article>
    </li>
  `).join('');
}

function applyFilters() {
  let out = [...products];

  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    out = out.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  }

  if (state.brand !== 'all') out = out.filter(p => p.brand === state.brand);

  const min = state.min !== '' ? Number(state.min) : -Infinity;
  const max = state.max !== '' ? Number(state.max) : Infinity;
  out = out.filter(p => p.price >= min && p.price <= max);

  if (state.sort === 'price-asc') out.sort((a,b)=> a.price - b.price);
  if (state.sort === 'price-desc') out.sort((a,b)=> b.price - a.price);
  if (state.sort === 'stars-desc') out.sort((a,b)=> b.stars - a.stars);

  return out;
}

function update() {
  renderProducts(applyFilters());
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts(products);

  const search = $('#search');
  if (search) {
    search.addEventListener('input', (e) => {
      state.search = e.target.value;
      update();
    });
  }
});
