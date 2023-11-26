document.addEventListener('DOMContentLoaded', () => {

    getCartFromAPI();

    const getCartFromAPI = () => {
        fetch('/cart')
            .then((response) => response.json())
            .then((cartData) => displayCart(cartData))
    }

    const getCartFromSessionStorage = () => {
        const cart = JSON.parse((sesionStorage.getItem('cart')) || [] );
        displayCartBox(cart);
    }

    const getCartFromLocalStorage = () => {
        const cart = JSON.parse((localStorage.getItem('cart')) || [] )
    }
    // fetch('/cart')
    //     .then((response) => response.json())
    //     .then((cart) => displayCartBox(cart));    
});

function displayCartBox(cart) {
    console.log(cart);
    const cartBoxTableBody = document.querySelector('#cartBoxTable tbody');
    const totalAmount = document.querySelector("#totalAmount");
    cartBoxTableBody.innerHTML = '';

    totalAmount = 0;
    
    cart.forEach((item) => {
        const row = document.createElement('tr');
        console.log('여기:',item);
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><button onclick = "increaseProduct">+</button><button onclick="decreaseProduct">-</button> ${item.quantity}</td>
            <td>${item.price}</td>
            <td><button onclick = "deleteProdect">삭제</button></td>
        `
        cartBoxTableBody.appendChild(row);
    });

    window.increateProduct = (productId) => {
        updateQuantity(product, 1);
    };

    window.decreateProduct = (productId) => {
        updateQuantity(product, -1);
    };

    const updateQuantity = (productId, change) => {
        fetch('/updateQuantity/${productId}?=${change}', { method: 'POST'})
            .then((response) => response.json())
            .then((cartData) => {
                sessionStorage.setItem('cart', JSON.stringify(cartData));
                displayCart(cartData);
            });
    }

    window.removeFromCart = (productId) => {
        fetch('/removeProduct/${productId}', { method: 'POST'})
            .then((response) => response.json())
            .then((cartData) => {
                sessionStorage.setItem('cart', JSON.stringify(cartData));
                displayCart(cartData);
            });
    }

}