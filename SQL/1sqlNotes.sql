select id, productName supplierId
from product


select firstName, lastName, title
from employee

-- insert 2 rows 
insert into category
  (categoryname, description)
values
  ('electronics', 'anything thats uses electricity or batteries'),
  ('books', 'for those hungry for knowledge' )

-- like operator
-- starts with c has n somewher inside string and ends with s
select *
from category
where categoryName like ' c%n%s%'

update category set description = 'cool gadgets' where id = 9

delete from category where id = 7

select *
from category
order by categoryName, description desc

-- BLOG DATABASE
-- BLOG DATABASE
-- BLOG DATABASE
select contents as Quote, username as Author
from posts as p
  join users as u
  on p.user_id = u.id;

select u.username as Author, p.contents as Quote
from users as u
  left join posts as p
  on p.user_id = u.id;

select u.username as Author, p.contents as Quote
from users as u
  left join posts as p
  on p.user_id = u.id
where p.contents is NULL;

select distinct u.username as Author
from users as u
  left join posts as p
  on p.user_id = u.id
order by u.username;

-- Aggregation  
-- gets total posts for each user
select users.username as Author, count(*) as totalPosts
from posts
  join users
  on posts.user_id = users.id
group by user_id;


--insert into users (username)  values ('Carlos'), ('Ben');

select *
from posts;

select *
from users;

update posts set user_id = 5 where id = 12;

select distinct user_id
from posts;




-- SCHEMES DATABASE
-- SCHEMES DATABASE
-- SCHEMES DATABASE
SELECT
  sc.*,
  count(st.step_id) as number_of_steps
FROM schemes as sc
  JOIN steps as st
  ON sc.scheme_id = st.scheme_id
GROUP BY sc.scheme_id
ORDER BY sc.scheme_id ASC;

SELECT
  sc.scheme_name,
  st.*
FROM schemes as sc
  LEFT JOIN steps as st
  ON sc.scheme_id = st.scheme_id
WHERE sc.scheme_id = 2
ORDER BY st.step_number ASC;


-- NORTHWIND DATABASE USED
-- NORTHWIND DATABASE USED
-- NORTHWIND DATABASE USED

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT pr.id, pr.productName, ct.categoryName
FROM Product as pr join category as ct
  on pr.categoryid = ct.id;
on pr.categoryid = ct.categoryid
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select od.id, sh.companyname, od.orderdate
from [order] as od join shipper as sh on od.shipvia = sh.id
where od.orderDate < '2012-08-09'
;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select pr.productname, od.quantity
from orderdetail as od
  join product as pr
  on od.productid = pr.id
where od.orderid = '10251'
order by pr.productname asc;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id, c.companyname, e.lastname
from [order] as o
  join customer as c
  on o.customerid = c.id
  join employee as e
  on o.employeeid = e.id;