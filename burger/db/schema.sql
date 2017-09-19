-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id INT (11) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT false,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
