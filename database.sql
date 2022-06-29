CREATE database_example IF NOT EXISTS database_example;

USE database_example;

DROP TABLE persons;

CREATE TABLE persons (
    id INT unsigned NOT NULL auto_increment,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT pk_persons PRIMARY KEY (id)
);
INSERT INTO `database_example`.`persons`
(
`name`,
`age`)
VALUES
('Alexandre', 50),
('Luiz', 30),
('Diego', 10);
