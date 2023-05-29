-- CREATE DATABASE IF NOT EXISTS readthebook;
-- CREATE SCHEMA IF NOT EXISTS "readthebook-schema";
--
-- CREATE TYPE cart_status AS ENUM ('OPEN', 'ORDERED');

-- Fill 'carts' table with fake data
INSERT INTO
    carts (id, user_id, created_at, updated_at, status)
VALUES
    ('c16fcfd6-4551-4c8f-8d95-f4799824faec','3a84b2b3-21e3-4097-ba47-07433c652f48', '2022-07-22', '2023-02-22', 'OPEN'),
    ('660da13f-dabb-4b10-85c5-7948bc073ea5','74ae6087-3325-4e52-a9e6-26fd1ed81eec', '2022-03-21', '2023-02-22', 'ORDERED'),
    ('a8486499-324b-4910-a07d-4a3d7c4c131a','96e83799-59f7-41ad-9edd-703a35156892', '2022-06-20', '2023-02-22', 'OPEN');

-- Fill 'cart_items' table with fake data
INSERT INTO
    cart_items (id, cart_id, product_id, count)
VALUES
    ('5ecc9031-f42c-4dfa-be4a-8a077fda3b86','c16fcfd6-4551-4c8f-8d95-f4799824faec','7567ec4b-b10c-48c5-9345-fc73c48a80aa', 2),
    ('5a9d0fbb-27a9-4c68-a3e5-6b63b82d1b11','660da13f-dabb-4b10-85c5-7948bc073ea5','7567ec4b-b10c-48c5-9345-fc73c48a80a1', 4),
    ('f209e2af-5607-40c8-8a13-f036b2f6c32c','a8486499-324b-4910-a07d-4a3d7c4c131a','7567ec4b-b10c-48c5-9445-fc73c48a80a2', 999);