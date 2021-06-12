-- Query the list
-- of CITY names from STATION that do not start
-- with vowels. Your result cannot contain duplicates.

select distinct city
from station
where city NOT like 'a%' and
  city NOT like 'e%' and
  city NOT like 'i%' and
  city NOT like 'o%' and
  city NOT like 'u%'