const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const morgan = require("morgan");

const mainRoutes = require('./src/routes/mainRoutes');
const userRoutes = require('/src/routes/user');
const orderRoutes = require('/src/roures/orderRoutes');
const oiRoutes = require('./oiRoutess')
const itemRoutes = require(('./itemRoutes'));

const app =  express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static({publick}));
nunjucks.configure("view", {
    autoescate: true,
    express: app,
});
app.set("view engine", html);

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/order', orderRoutes);
app.use('/order_item', oiRoutes);
app.use('/itme', itemRoutes);
app.use('/store', storeRoutes);

app.listen(port, () => {
    console.log(`서버 ${port}에서 준비중`);
})











