CREATE SCHEMA Generations;
USE Generations;

CREATE TABLE cohorte(id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
ALTER TABLE cohorte ADD COLUMN nombre VARCHAR(255) NOT NULL;
ALTER TABLE cohorte ADD COLUMN edad INT NOT NULL;

-- agregar datos
INSERT INTO cohorte(nombre, edad) VALUES
('Pedro', 15),
('Ash Ketchup', 12),
('Patricio', 22);

-- mostrar los datos
SELECT * FROM cohorte; -- para latabla seleccionada por defecto

SELECT * FROM world.city; -- par mostrar una tabla no seleccionada

SELECT nombre FROM cohorte; 

SELECT CountryCode, Population FROM world.city;

SELECT Name AS  'Nombre de los paises' FROM world.country;

-- UPDATE - actualiza valores
UPDATE cohorte SET nombre = 'Juan'; -- si no se usa el where se corre el riesgo de cabiar todos los valores

UPDATE cohorte SET 
edad = 30,
nombre = 'Juan'
WHERE id = 3;

-- DELETE borrar un registro o toda la columna

DELETE FROM cohorte;  -- no usar sin el where

DELETE FROM cohorte WHERE id = 6 ;