CREATE SCHEMA tienda;  -- crea una base o schema

-- CREATE DATABASE Nombre;

USE tienda; -- seleccionar una base

-- comentario de una sola linea
/*
comentario multilinea
*/

DROP SCHEMA nombre; -- eliminar base/schema

-- crear una tabla
-- debemos agregar por lo menos una columna con la PK

CREATE TABLE Productos(id int NOT NULL auto_increment, primary key(id));

-- agregar columna
ALTER TABLE Productos ADD COLUMN Nombre varchar(255) NOT NULL; 

ALTER TABLE Productos ADD COLUMN precio int not null AFTER id;

-- renombrar table
ALTER TABLE productos RENAME inventarios;

-- MOSTRAR TABLAS
USE tienda; -- SELECCIONAR PRIMERO LA BASE
SHOW TABLES;

-- eliminar tabla
DROP TABLE inventarios;


CREATE TABLE productos(id int NOT NULL auto_increment, primary key(id));


-- cambiar nombre y tipo de column

ALTER TABLE productos CHANGE COLUMN nombre precio INT NOT NULL;

ALTER TABLE productos DROP COLUMN precio;