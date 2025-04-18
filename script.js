let cart = [];

function addToCart(button) {
  const product = button.parentElement;
  const name = product.getAttribute('data-name');
  const price = parseFloat(product.getAttribute('data-price'));
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  const address = document.getElementById('address').value;
  if (!address || cart.length === 0) {
    alert('Please enter your address and add items to your cart.');
    return;
  }

  alert(`Order placed! Your items will be delivered to ${address} shortly.`);
  cart = [];
  renderCart();
  document.getElementById('address').value = '';
}
