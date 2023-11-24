const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// req.body <-- 위 내용을 파싱해 채워줌
// app.use(express.static('public/static'))
app.use(express.static(path.join(__dirname, 'public')));

// 라우터
app.get('/cartBox', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cartBox.html'));
})


app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true
}));


const products = [
    { id: 1, name: 'Product 1', price: 2000 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 5000 },
    { id: 4, name: 'Product 4', price: 1500 },
    { id: 5, name: 'Product 5', price: 3000 },
];

app.get('/products', (req, res) => {
    // 상품정보 요청
    res.json(products);
});


// 장바구니1.동일 페이지
app.get('/cart', (req, res) =>{
    const cart = req.session.cart || [];

    res.json(cart);
})

// 장바구니2.분리 페이지
app.get('/cartBox', (req, res) => {
    const cartBox = req.session.cartBox || [];
    console.log('분리페이지');

    res.json(cartBox);
})

app.post('/add-to-cart/:productId', (req, res) =>{
    const productId = parseInt(req.params.productId);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({message: '상품을 찾을 수 없습니다.'});
    }

    // 세션에서 장바구니 데이터 가져오기
    const cart = req.session.cart || [];

    // 이미 장바구니에 있는지 확인하기
    const existingItem = cart.find((item) => item.id === productId);

    if  (existingItem) {
        existingItem.quantity += 1; // 이미 있는 상품이면 수량 증가
    } else {
        //선택한 상품 담기
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
    }

    // 업데이트된 장바구니 데이터를 세션에 저장
    req.session.cart = cart;
    res.json({message: '상품이 장바구니에 추가되었습니다.', cart});
});

// 상품 수량을 업데이트하는 라우트

// 상품을 장바구니에서 제거하는 라우트

app.listen(port, () => {
    console.log(`서버 ${port}`);
    
})
