document.addEventListener('DOMContentLoaded', () => {
    fetch('/cart')
        .then((response) => response.json())
        .then((cart) => displayCartBox(cart));
});

function displayCartBox(cart) {
    console.log(cart);
    const cartBoxTableBody = document.querySelector('#cartBoxTable tbody');
    cartBoxTableBody.innerHTML = '';
    
    cart.forEach((item) => {
        const row = document.createElement('tr');
        console.log('여기:',item);
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        `
        cartBoxTableBody.appendChild(row);
    });
}