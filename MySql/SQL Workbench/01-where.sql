/*
Where nos permite obtener valores a traves de campos especificos
*/

-- obtiene toda la informacion de la tabla
SELECT * FROM actor;

SELECT actor_id, first_name, last_name FROM actor;

/*
Operadores de comparación
Igual           =
Distinto        !=
Menor           <
Mayor           >
Menor o igual   <=
Mayor o igual   >=
Entre           between A and B
En              in
Es nulo         is null
No nulo         is not null
Como            like
No es como      not like
*/
-- solo las que se llaman penelope
SElECT * FROM actor WHERE first_name = 'Penelope';

-- solo las que no son penelope
SElECT * FROM actor WHERE first_name != 'Penelope';

-- selecciona todos los films con un id mayor a 50
SELECT * FROM film WHERE film_id > 50;

-- selecciona todos los films con un id mwnor o igual a 50
SELECT * FROM film WHERE film_id <= 50;

-- selleciona de la tabla customer todos los id par
SELECT * FROM customer WHERE customer_id % 2 = 0;

-- selecciona las peliculas con un rental_ratede 2.99 y una clasificacion pg-13
SELECT * FROM film WHERE rental_rate = 2.99 AND rating = 'PG-13';

-- selecciona todos los nombres que terminan con una e
SELECT * FROM actor WHERE first_name LIKE '%e';

-- selecciona todos los nombres que empiezan con un an
SELECT * FROM actor WHERE first_name LIKE 'an%';

-- selecciona a todas las personas que en su apellido tengan una letra n
SELECT * FROM actor WHERE last_name LIKE '%n%';

-- selecciona a los catores con un nombre o apellido que empieza con b
SELECT * FROM actor WHERE first_name LIKE 'b%' OR last_name LIKE 'b%';

-- selecciona a los actores cuyo nombre contenga una k_caracter_r
SELECT * FROM actor WHERE first_name LIKE '%k_r%';