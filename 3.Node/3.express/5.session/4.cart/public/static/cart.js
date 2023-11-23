const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    fetch ('/products')
    .then((response) => response.json())
    .then((products) => displayProduct(products));
});

function displayProduct(products) {
    const productTableBody = document.querySelector('#productTable tbody');
    console.log(productTableBody);

    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button data-product-id="${productId}" onclick='addToCart()'>담기</button></td>
        `;
        productTableBody.appendChild(row);
    });
}

function addToCart(productId) {
    const productId = button.getAttribute('data-product-id');
    fetch(`/add-to-cart/${productId}`, { method: 'POST' })
    .then((response) => response.json())
    .then((data) => {
        alert(data.message);
        fetch('/cart')
        .then((response) => response.json())
        .then((cart) => displayCart(cart));
    });
}

function displayCart(cart) {
    const cartTableBody = document.querySelector('#cartTable tbody');
    cartTableBody.innerHTML = '';

    cart.forEach((item) => {
        cart.innerHTML =`
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
        `

    })
}

// 미션2. 버튼을 클릭하면 원하는 URI가 호출된다.
// 1. 버튼에 액션 추가
// 2. 함수를 통해서 fetch 를 호출한다. 