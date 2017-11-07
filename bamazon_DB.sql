DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  item_id VARCHAR(100) NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price VARCHAR(100) NULL,
  stock_quantity VARCHAR(1000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#3245','Nike-Hyperdunks','atheltic shoe wear','100','50');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#2531','Nike-Basketball Shorts','atheltic undergarment','50','100');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#1532','Nike-Basketball','Sports Equipment','20','500');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#9034','Nike-Hyperquickness','atheltic shoe wear','130','40');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#2345','Nike-Muscle Shirt','atheltic wear','30','900');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#8756','Nike-Ankle socks','atheltic wear','10','999');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#4562','Nike-Lebrons','atheltic shoe wear','180','50');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#9046','Nike-Air','atheltic shoe wear','65','200');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#8895','Nike-Mouth Guard','athletic wear','10','989');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) values('#5785','Nike-sweat band','atheltic wear','10','898');

SELECT * FROM products;