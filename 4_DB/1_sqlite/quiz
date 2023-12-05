-- 1. 미국에 살지 않는 고객
SELECT firstName||" "||LastName AS FullName, customerId, country FROM customers WHERE Country!="USA";


-- 2. 브라질 고객만 표시
 SELECT firstName||" "||LastName AS FullName FROM customers WHERE Country="Brazil";


-- 3. 브라질 고객의 송장(invoice)_풀네임, 송장 id, 송장 날짜, 청구 국가
SELECT customers.firstName||" "||customers.LastName AS FullNmae, invoices.invoiceId, invoices.invoiceDate, invoices.BillingCountry  
FROM customers JOIN invoices 
ON customers.customerId = invoices.customerId WHERE customers.Country="Brazil";


-- 4. 판매 대리인인 직원만 표시
SELECT firstName||" "||LastName AS Agent FROM employees WHERE title="Sales Support Agent";


-- 5. 송장 테이블에서 청구 국가의 고유/고유 목록을 표시 
SELECT DISTINCT BillingCountry FROM invoices;


-- 6. 각 판매 에이전트와 연결된 송장을 표시_영업 에이전트 FullName 포함 
SELECT e.firstName||" "||e.LastName AS Agent, i.* 
FROM invoices i JOIN customers c JOIN employees e 
ON i.CustomerId=c.CustomerId AND c.SupportRepId = e.EmployeeId 
WHERE e.title="Sales Support Agent";


   -- Natural join: 자동으로 두 테이블 간 일치하는 열(동일한 이름&데이터 유형) 찾아서 반환해줌
   SELECT e.firstName||" "||e.LastName AS Agent, i.invoiceId 
   FROM invoices i NATURAL JOIN customers c JOIN employees e 
   ON c.SupportRepId = e.EmployeeId 
   WHERE e.title="Sales Support Agent";


-- 7. 모든 송장 및 고객에 대한 송장 합계, 고객 이름, 국가, 판매 대리점 이름을 표시
SELECT i.Total, c.firstName||" "||c.LastName AS customerName, c.country, e.firstName||" "||e.LastName AS Agent 
FROM invoices i NATURAL JOIN customers c JOIN employees e 
ON c.SupportRepId = e.EmployeeId;


-- 8. 2009년과 2011년에 몇 개의 인보이스가 있었습니까?
SELECT count(*) FROM invoices WHERE invoiceDate LIKE "2009%";
SELECT count(*) FROM invoices WHERE invoiceDate LIKE "2011%";
   -- 합칠 수 있는지 찾아보기


-- 9. 각 연도의 총 매출은 얼마입니까?
SELECT strftime("%Y", invoiceDate) AS year, SUM(Total) AS Total FROM invoices GROUP BY year;


-- 10. InvoiceLine 테이블을 보고 Invoice ID 37에 대한 라인 항목 수를 계산하는 쿼리를 제공합니다.
SELECT count(InvoiceLineId) FROM invoice_items WHERE InvoiceID=37;


-- 11. InvoiceLine 테이블을 보고 각 Invoice에 대한 라인 항목 수를 계산하는 쿼리를 제공합니다.
SELECT InvoiceID, count(InvoiceLineId) FROM invoice_items GROUP BY InvoiceID;


-- 12. 각 송장 라인 항목에 구매한 트랙 이름을 포함하는 쿼리를 제공합니다.
SELECT InvoiceLineId, Name FROM invoice_items NATURAL JOIN tracks;


-- 13. 구매한 트랙 이름과 아티스트 이름을 포함하는 쿼리를 각 송장 라인 항목과 함께 제공합니다.
   -- 싹 NATURAL JOIN 하면 tracks의 name이랑 artists의 name이 join 되는 문제 발생,,
   -- SELECT i.InvoiceLineId, t.name as trackName, a.name as AlbumName FROM invoice_items i NATURAL JOIN tracks t NATURAL JOIN albums Natural JOIN artists a;

SELECT InvoiceLineId, trackName, name AS artistName
FROM (SELECT InvoiceLineId, AlbumId, TrackId, tracks.name AS trackName FROM invoice_items NATURAL JOIN tracks) NATURAL JOIN (SELECT * FROM albums NATURAL JOIN artists);

SELECT i.InvoiceLineId, t.name AS trackName, a.name AS AlbumName 
FROM invoice_items i JOIN tracks t JOIN albums JOIN artists a 
ON i.TrackId = t.TrackId AND t.AlbumId = albums.AlbumId AND albums.ArtistId = a.ArtistId;


-- 14. 국가별 송장 수를 표시하는 쿼리를 제공합니다.
SELECT BillingCountry, COUNT(InvoiceID) FROM invoices GROUP BY BillingCountry;


-- 15. 각 재생 목록의 총 트랙 수를 표시하는 쿼리를 제공합니다. 재생 목록 이름은 결과 테이블에 포함되어야 합니다.
SELECT playlists.Name, COUNT(TrackId) 
FROM playlists NATURAL JOIN playlist_track
GROUP BY playlists.Name;


-- 16. 모든 트랙을 표시하지만 ID는 표시하지 않는 쿼리를 제공합니다. 결과에는 앨범 이름, 미디어 유형 및 장르가 포함되어야 합니다.
SELECT t.Name AS TrackName, m.Name AS Media, g.Name AS Genre 
FROM tracks t JOIN media_types m JOIN genres g 
ON t.MediaTypeId = m.MediaTypeId AND t.GenreId = g.GenreId;


-- 17. 모든 송장을 표시하지만 송장 라인 항목의 수를 포함하는 쿼리를 제공합니다.
SELECT COUNT(InvoiceLineId), invoices.*  FROM invoices Natural JOIN invoice_items GROUP BY InvoiceId;


 -- 18. 판매 대리점별 총 매출을 조회하는 쿼리를 제공한다.
 SELECT e.firstName||" "||e.LastName AS Agent, SUM(total) 
 FROM invoices i JOIN customers c JOIN employees e 
 ON i.CustomerId = c.CustomerId AND c.SupportRepId = e.EmployeeId 
 WHERE title="Sales Support Agent"
 GROUP BY e.EmployeeID;


-- 19. 2009년 가장 많은 매출을 올린 판매원은?
SELECT Agent, MAX(Total)
FROM 
   (SELECt e.firstName||" "||e.LastName AS Agent, SUM(i.total) as Total
   FROM invoices i JOIN customers c JOIN employees e 
   ON i.CustomerId = c.CustomerId AND c.SupportRepId = e.EmployeeId 
   WHERE i.invoiceDate LIKE "2009%" AND e.Title = "Sales Support Agent"
   GROUP BY e.employeeId);

-- 20. 전체 판매 실적이 가장 많은 판매 대리점은?
SELECT Agent, MAX(Total)
FROM (
   SELECT e.firstName||" "||e.LastName AS Agent, SUM(i.total) as Total
   FROM invoices i JOIN customers c JOIN employees e 
   ON i.CustomerId = c.CustomerId AND c.SupportRepId = e.EmployeeId 
   WHERE e.Title = "Sales Support Agent"
   GROUP BY e.employeeId);

-- 21. 각 판매 대리점에 할당된 고객 수를 보여주는 쿼리를 제공한다.
SELECT e.firstName||" "||e.LastName AS Agent, COUNT(i.CustomerId)
FROM invoices i JOIN customers c JOIN employees e 
ON i.CustomerId = c.CustomerId AND c.SupportRepId = e.EmployeeId 
WHERE e.Title = "Sales Support Agent"
GROUP BY e.employeeId;

-- 22. 국가별 총 매출을 보여주는 쿼리를 제공한다.
SELECT BillingCountry, SUM(total) FROM invoices GROUP BY BillingCountry;


-- 23. 고객이 가장 많이 지출한 국가는 어디입니까?
SELECT BillingCountry, SUM(total) AS Total FROM invoices GROUP BY BillingCountry
ORDER BY Total DESC
LIMIT 1 ; 

SELECT BillingCountry, MAX(total)
FROM (
   SELECT BillingCountry, SUM(total) AS Total FROM invoices GROUP BY BillingCountry);


-- 24. 2013년 가장 많이 구매한 트랙을 보여주는 쿼리를 제공합니다.

SELECT t.Name, COUNT(*) AS Total
FROM invoices i JOIN invoice_items i_i ON i.InvoiceId = i_i.InvoiceId
JOIN tracks t ON i_i.TrackId = t.TrackId
WHERE invoiceDate LIKE "2013%"
GROUP BY t.Name
ORDER BY Total DESC
LIMIT 5;


-- 25. 가장 많이 구매한 상위 5곡을 보여주는 쿼리를 제공합니다.
SELECT t.Name, COUNT(t.Name) AS Total
FROM invoices i JOIN invoice_items i_i ON i.InvoiceID = i_i.InvoiceId
JOIN tracks t ON i_i.TrackId = t.TrackId
GROUP BY t.Name
ORDER BY Total DESC
LIMIT 5;


-- 26. 가장 많이 팔린 3명의 아티스트를 보여주는 쿼리를 제공합니다.
SELECT a.Name, COUNT(i_i.Quantity) AS Total
FROM invoices i JOIN invoice_items i_i ON i.InvoiceID = i_i.InvoiceId
JOIN tracks t ON i_i.TrackId = t.TrackId
JOIN albums ON t.AlbumId = albums.Albumid
JOIN artists a ON albums.ArtistId = a.ArtistId
GROUP BY a.ArtistId
ORDER BY Total DESC
LIMIT 3;

-- 27. 가장 많이 구매한 Media Type을 보여주는 쿼리를 제공한다.
SELECT m.Name, COUNT(i_i.Quantity) AS Total
FROM invoices i JOIN invoice_items i_i ON i.InvoiceID = i_i.InvoiceId
JOIN tracks t ON i_i.TrackId = t.TrackId
JOIN media_types m ON t.MediaTypeId = m.MediaTypeId
GROUP BY m.MediaTypeId
ORDER BY Total DESC
LIMIT 1;