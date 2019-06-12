CREATE DATABASE Bamazon;


USE Bamazon;


CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES  ('Nike Jordan 1 OG', 'Shoes',150.00 , 100),
		('Adidas Yeezy', 'Shoes', 250.00, 200),
		('Invicta Bolt Zues', 'Watches', 500.00, 50),
		('Invicta Sea Hunter', 'Watches', 600, 150),
		('Levis Jeans', 'Clothing', 39.99, 300),
		('Supreme Shirt', 'Clothing', 24.99, 40),
		('Deisel', 'Fragrance', 60.00, 30),
		('Creed', 'Fragrance', 160.00, 80),
		('Hair Brush', 'Cosmetics', 2.75, 100),
		('Vaseline Men Lotion', 'Cosmetics', 3.49, 100)