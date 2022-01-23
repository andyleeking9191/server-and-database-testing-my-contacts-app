-- create extension if not exists "uuid-ossp";
-- the above command will enable postgres to auto generate a uuid.

CREATE DATABASE "Mycontacts";

CREATE TABLE profile (
    profile_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    street_num SMALLINT,
    street_name VARCHAR(255),
    city_name VARCHAR(255),
    zip_code SMALLINT,
    country VARCHAR(255),
    profile_img_large VARCHAR(255) 
);

INSERT INTO profile (first_name, last_name, email, profile_img_large)
VALUES ('john', 'doe', 'johndoe@yahoo.com', 'link');