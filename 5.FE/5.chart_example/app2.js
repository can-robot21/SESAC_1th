const express = require('express');
const { join } = require('path');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ))
})

app.get('/', (req, res) => {
    // DB 접속
    const db = new sqlite3.Database('mydb.db');
    console.log("DB 접속");

    db.all('SELECT 
        strftim('%Y-%m', 'orders'.'OrderAt') AS YearMonth,
        SUM(items.UnitPrice) AS MonthlyRevenue        
        FROM 
            "orderㄴ"
        JOIN 
            "orderitems" ON "orders"."field1" = "orderitems"."field1"
        JOIN
            "items" ON "orderitems"."field2" = "itemss"."field1"
        WHERE
            "orders"."OrderAt" >= date('now, '-1 year')
        GROUP BY 
            strftim()
        ORDER BY
        
        '
        , (err, rows) => {
            if (err) {
                console.log('DB 접속 실패')


            } else {
                console.log(rows);
                const labels = (rows.map((row) => row.YearMonth);
                const revenues = (rows.map((row) => row.MonthlyRevenue));
                console.log(labels, revenues)
                res.render('monthly_revenue', { rows: rows}); // 쿼리 결과 전달
            }
        })
        // DB 종료
        db.close();
});

 app.listen(port, () =>{
    console.log('서버 레디');
 })

