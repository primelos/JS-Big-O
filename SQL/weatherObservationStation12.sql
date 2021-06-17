-- Query the list
-- of CITY names from STATION that do not start
-- with vowels and do not
-- end
-- with vowels. Your result cannot contain duplicates.

select distinct CITY
from STATION
where not
(CITY like '%A' or
    CITY like '%E' or
    CITY like '%I' or
    CITY like '%O' or
    CITY like '%U') and not 
 (CITY like 'A%' or
    CITY like 'E%' or
    CITY like 'I%' or
    CITY like 'O%' or
    CITY like 'U%');