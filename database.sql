CREATE DATABASE psit_college_map;

USE psit_college_map;

CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    lat DECIMAL(10, 8) NOT NULL,
    lng DECIMAL(11, 8) NOT NULL
);

INSERT INTO locations (name, lat, lng) VALUES
    ('Building A', 28.5355, 77.3910),
    ('Building B', 28.5360, 77.3920),
    ('Building C', 28.5370, 
