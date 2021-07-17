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