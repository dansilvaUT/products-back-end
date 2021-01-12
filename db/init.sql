CREATE TABLE product(
    product_id serial  PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(250),
    price INTEGER,
    image_url TEXT
)