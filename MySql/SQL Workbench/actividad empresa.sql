CREATE SCHEMA Empresa;
USE Empresa;

CREATE TABLE worker(id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
ALTER TABLE worker ADD COLUMN first_name VARCHAR(255) NOT NULL;
ALTER TABLE worker ADD COLUMN last_name VARCHAR(255) NOT NULL;
ALTER TABLE worker ADD COLUMN salary INT NOT NULL;
ALTER TABLE worker ADD COLUMN start_date DATE NOT NULL;
ALTER TABLE worker ADD COLUMN departament VARCHAR(255) NOT NULL;

INSERT INTO worker(first_name, last_name,salary,start_date, departament) VALUES
('Monika','Arora', 100000, '2014-02-20', 'HR'),
('Santiago','Carrillo', 80000, '2014-06-11', 'Admin'),
('Ian','Smth', 300000, '2014-02-20', 'HR'),
('Boyd','Ndonga', 500000, '2014-02-20', 'Admin'),
('Vivek','bhati', 500000, '2014-06-11', 'Admin'),
('Elise','Guimares', 200000, '2014-06-11', 'Account'),
('Barrack','Obama', 75000, '2014-01-20', 'Account'),
('Vivian','muyu', 90000, '2014-04-11', 'Admin');

CREATE TABLE bonus(id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
ALTER TABLE bonus ADD COLUMN bonus_date DATE NOT NULL;
ALTER TABLE bonus ADD COLUMN bonus_amount INT NOT NULL;

INSERT INTO bonus(bonus_date, bonus_amount) VALUES
('2016-02-20', 5000),
('2016-06-11', 3000),
('2016-02-20', 4000),
('2016-02-20', 4500),
('2016-06-11', 3500);

CREATE TABLE title(id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
ALTER TABLE title ADD COLUMN job_title VARCHAR(255) NOT NULL;
ALTER TABLE title ADD COLUMN affected_from INT NOT NULL;

INSERT INTO title(job_title, affected_from) VALUES
('Manager', 5000),
('Executive', 3000),
('Executive', 4000),
('Manager', 4500),
('Asst. Manager', 3500),
('Executive', 4000),
('Lead', 4500),
('Lead', 3500);