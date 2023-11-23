const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname,'public')));

const products = [
    { id: 1, name: 'Product 1', price: 2000 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 5000 },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/cart', (req, res) =>{
    const cart = req.session.cart || [];

    res.json(cart);
})

app.post('/add-to-cart/:productId', (req, res) =>{
    const productId = parseInt(req.params.productId);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({message: '상품을 찾을 수 없습니다.'});
    }

    const cart = req.session.cart || [];
    //선택한 상품 담기
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price
    })

    res.json({message: '상품이 장바구니에 추가되었습니다.', cart});
});

app.get('/', (req, res) => {
    console.log('index페이지');
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

app.listen(port, () => {
    console.log(`서버 ${port}`);
    
})
