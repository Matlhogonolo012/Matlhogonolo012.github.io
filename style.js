
  export const addToCart = document.querySelector('.add-to-cart');
  const quantity = document.querySelector('.numOFItems');
  const cartBody = document.querySelector('.items-in-cart-body');
  export const cartNotification = document.querySelector('.cart-notification');
  export let amount = 0;
  const cartIcon = document.querySelector('.main-cart');
  const itemsInCart = document.querySelector('.items-in-cart');
  const userAmount = document.querySelector('.amount-dynamic');
  const userBill = document.querySelector('.calculated-amount');
  const mainBody = document.querySelector('.main');
  const header = document.querySelector('header');
  const thumbnails = document.querySelectorAll('.carousel-indicators');
  
 
  const updateQuantity = function () {
    numOFItems.textContent = amount;
  };
  
  minus.addEventListener('click', function () {
    if (amount === 0) return;
    amount--;
    updateQuantity();
  });
  plus.addEventListener('click', function () {
    amount++;
    updateQuantity();
  });
  
  export const emptyCartView = function () {
    if (amount === 0) {
      cartNotification.classList.add('hidden');
      cartBody.style.padding = '50px';
      cartBody.style.textAlign = 'center';
      cartBody.textContent = 'Your cart is empty';
    }
  };
  export const updateCartView = function () {
    if (amount > 0) {
      const cartBody = document.querySelector('.items-in-cart-body');
      cartBody.style.padding = '0px';
      cartBody.textContent = '';
      cartBody.insertAdjacentHTML(
        'afterbegin',
        `<div class="items-in-cart-body-main ">
        <img src="./images/image-product-1-thumbnail.jpg" alt="product thumbnail">
        <div>
          <p>Fall Limited Edition Sneakers</p>
          <div>$125 x <span class="amount-dynamic">${amount}</span> <span class="bold calculated-amount"> = $${
          125 * amount
        }.00</span></div>
        </div>
          <img class="delete-icon hi" src="./images/icon-delete.svg" alt="icon-delete">
        </div>
        <button type="button" class="checkout">Checkout</button>`
      );
      const deleteCartIcon = document.querySelector('.delete-icon');
      deleteCartIcon.addEventListener('click', function () {
        amount = 0;
        emptyCartView();
        cartBody.textContent = 'You have nothing in your cart';
        updateQuantity();
      });
    }
  };
  
  export const renderCartView = function () {
    emptyCartView();
    updateCartView();
  };
const init = function () {
  itemsInCart.classList.add('hidden');
  renderCartView();
};
init();
addToCart.addEventListener('click', function () {
  renderCartView();
  cartNotification.classList.remove('hidden');
  cartNotification.textContent = amount;
});

cartIcon.addEventListener('click', function () {
  itemsInCart.classList.toggle('hidden');
});
[minusAmount, addAmount].forEach(operator =>
  operator.addEventListener('click', function () {
    itemsInCart.classList.add('hidden');
  })
);
