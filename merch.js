// merch.js
// Cart logic for ATHLO merch

document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const merchItems = document.querySelectorAll('.merch-item');

  merchItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Evitar que el click en el botón no dispare la redirección
      if (e.target.classList.contains('add-to-cart')) return;
      const product = item.querySelector('h3').textContent.trim();
      window.location.href = `producto.html?producto=${encodeURIComponent(product)}`;
    });
  });

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    let cart = JSON.parse(localStorage.getItem('athlo_cart') || '[]');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) {
      if (total > 0) {
        badge.textContent = total;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }
  updateCartBadge();

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Para que no dispare el click del merch-item
      const product = btn.getAttribute('data-product');
      const img = btn.getAttribute('data-img');
      // Ahora la talla viene del atributo data-size
      const size = btn.getAttribute('data-size') || 'M';
      let cart = JSON.parse(localStorage.getItem('athlo_cart') || '[]');
      // Check if product+size already in cart
      const idx = cart.findIndex(item => item.product === product && item.size === size);
      if (idx !== -1) {
        cart[idx].qty += 1;
      } else {
        cart.push({ product, img, size, qty: 1 });
      }
      localStorage.setItem('athlo_cart', JSON.stringify(cart));
      btn.textContent = '¡Agregado!';
      btn.classList.add('bounce');
      updateCartBadge();
      setTimeout(() => {
        btn.textContent = '🛒';
        btn.classList.remove('bounce');
      }, 1200);
    });
  });

  // Cart link click (optional: redirect to carrito.html)
  const cartLink = document.querySelector('.cart-link');
  if (cartLink) {
    cartLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'carrito.html';
    });
  }
}); 