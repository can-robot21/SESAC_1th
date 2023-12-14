const express = require('express');
const nunjucks = require('nunjucks');
const { join } = require('path');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoscape: true,
    express: app,
});

app.set('view engine', 'html');

// app.get('/', (req, res) => {
//     // DB접속
//     const db = new sqlite3.Database('mydb.db');
//     console.log('DB접속');

//     db.all('SELECT * FROM "orders"', (err, rows) => {
//         if (err) {
//             console.log('DB접속 실패', err);
//         } else {
//             console.log(rows);
//             res.render('monthly_revenue', {rows: rows});

//         }
//         // DB 접속 종료
//         db.close();
//     });
// });
    // ===========================
app.get('/', (req, res) => {
    // DB 접속
    const db = new sqlite3.Database('mydb.db');

    db.all('SELECT 
        strftim('%Y-%m', 'orders'.'OrderAt') AS YearMonth,
        SUM(items.UnitPrice) AS MonthlyRevenue        
        FROM 
            "order"
        JOIN 
            "orderitems" ON "orders"."Id" = "orderitems"."OrderId"
        JOIN
            "items" ON "orderitems"."ItemId" = "itemss"."Id"
        WHERE
            "orders"."OrderAt" >= date('now, '-1 year')
        // GROUP BY 
        //     strftim()
        // ORDER BY
        
        '
        , (err, rows) => {
            if (err) {
                console.log('DB 접속 실패')


            } else {
                console.log(rows);
                const labels = jSON.stringfy(rows.map((row) => row.YearMonth);
                const revenues = JSON.stringfy(rows.map((row) => row.MonthlyRevenue));
                res.render('monthly_revenue', { rows: rows}); // 쿼리 결과 전달
            }
        })
        // DB 종료
        db.close();
});

 app.listen(port, () =>{
    console.log('서버 레디');
 })

