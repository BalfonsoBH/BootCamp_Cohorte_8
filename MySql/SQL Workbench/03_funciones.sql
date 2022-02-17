/*
MAX - obtener el valor maximo
MIN- valor minimo
AVG - promedio
SUM - suma
*/


SELECT * FROM film ORDER BY length DESC LIMIT 1;

SELECT *, MAX(length) FROM film;

-- obtiene la mayor duracion
SELECt MAX(length) FROM film;

SELECT MAx(RENTAL_RATE) FROM film;

-- obtiene la menor duracion
SELECT MIN(length) FROM film;

-- obtiene el promedio de duracion
SELECT AVG(length) FROM film;

-- obtiene el costo total de las pelliculas
SElect SUM(replacement_cost) FROM film;
