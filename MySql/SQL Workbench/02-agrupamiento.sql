/*
Consulta con agrupamiento
Agrupan resultados con el mismo valor
*/

SELECT * FROM inventory GROUP BY store_id; 

SELECT * FROM rental GROUP BY customer_id;

-- selecciona el country_id y el numero de ciudades que tiene cada pais agrupado por pais
SELECT country_id, COUNT(city_id) AS 'total_de_ciudades' FROM city GROUP BY country_id;

SELECT * FROM city WHERE country_id = 6;

-- selecciona el country_id y el numero de ciudades que tiene cada pais agrupado por pais que tenga más de dos ciudades
SELECT country_id, COUNT(city_id) AS 'total_de_ciudades' FROM city GROUP BY country_id HAVING total_de_ciudades > 2;

-- seleccionar el pais que tiene más ciudades (DESC - descendente ASC - ascendente)
SELECT country_id, COUNT(city_id) AS 'total_de_ciudades' FROM city GROUP BY country_id ORDER BY total_de_ciudades DESC LIMIT 1;

-- seleccionar pelicula de mayor duracion
SELECT * FROM film ORDER BY length DESC LIMIT 1;