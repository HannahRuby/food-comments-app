


DROP TABLE table_name

CREATE TABLE foods(
    id SERIAL PRIMARY KEY,
name TEXT,
content TEXT,
category_id INTEGER REFERENCES categories(id) NOT NULL,
country_id INTEGER REFERENCES countries(id) NOT NULL
);

INSERT INTO foods(name, content, category_id,country_id) VALUES
('Kung Pao Chicken', ' A classic Sichuan dish featuring diced chicken stir-fried with peanuts, vegetables, and chili peppers in a flavorful sauce','1','1'),
('Dim Sum', 'A famous dish from Beijing, consisting of thin, crispy duck skin and tender meat served with pancakes, scallions, cucumber, and hoisin sauce.','1','1'),
('Peking Duck', 'Targuin is probably going to defeat Tarquin one day. We haven&apos;t figured it out yet','1','1'),
('Sushi', 'Vinegared rice combined with various ingredients like raw fish, seafood, vegetables, or egg, often served with soy sauce, wasabi, and pickled ginger.','1','2'),
('Ramen', 'Japanese noodle soup dish with Chinese-style wheat noodles served in a meat or fish-based broth, flavored with soy sauce or miso, and topped with various ingredients like sliced pork, seaweed, and green onions.','1','2'),
('Tempura', 'Deep-fried seafood, vegetables, or other ingredients coated in a light, crispy batter, often served as a side dish or over rice.','1','2'),
('Butter Chicken', 'A popular Indian dish consisting of tender chicken pieces marinated in a spiced yogurt sauce, grilled, and then simmered in a rich, creamy tomato-based sauce.','1','3'),
('Biryani', 'Fragrant rice dish cooked with aromatic spices, meat (such as chicken, lamb, or goat), and sometimes vegetables or eggs, originating from the Indian subcontinent.','1','3'),
('Samosas', 'Crispy, savory pastries filled with spiced potatoes, peas, and sometimes meat, typically served as a snack or appetizer.','1','3'),
('Pad Thai', 'Stir-fried rice noodles with eggs, tofu, shrimp, or chicken, seasoned with tamarind, fish sauce, garlic, red chili pepper, and palm sugar, and garnished with peanuts and lime.','1','4'),
('Green Curry', 'A spicy Thai curry made with green chili peppers, coconut milk, meat or fish, and vegetables like bamboo shoots, eggplant, and Thai basil.','1','4'),
('Tom Yum Soup', 'A hot and sour Thai soup flavored with lemongrass, kaffir lime leaves, galangal, fish sauce, and lime juice, often containing shrimp, mushrooms, and other ingredients.','1','4');


Comments TABLE

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
username TEXT,
food_id INTEGER REFERENCES foods(id) NOT NULL,
content TEXT

);

INSERT INTO comments(username, content, food_id) VALUES
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','1'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','2'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','4'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','5'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','6'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','7'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','8'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','9'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','10'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','11'),
('SpicyFoodie88', ' Love the bold flavors and fiery kick! Always hits the spot for me, vegetables, and chili peppers in a flavorful sauce','12');