const express = require('express');
const nunjucks = require('nunjucks');
const { getSeoulPopulationData } = require('./data');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');


app.get('/', (req, res) => {
    const seoulData = getSeoulPopulationData();
    // res.json(seoulData);
    res.render('population_map.html', { seoulData: JSON.stringify(seoulData) })
})

app.listen(port, (req, res) => {
    console.log('서버 레디');
})