let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.dataset.product;
        const price = parseFloat(this.dataset.price);

        cart.push({ product, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product} added to your cart!`);
    });
});

if (document.getElementById('cart-items')) {
    const cartItemsDiv = document.getElementById('cart-items');
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.product} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout-btn')?.addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
});
