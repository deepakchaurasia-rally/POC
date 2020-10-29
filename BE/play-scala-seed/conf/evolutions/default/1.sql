#--- !Ups

CREATE TABLE doctor(
  first_name VARCHAR,
  last_name VARCHAR,
  specialist VARCHAR,
  address VARCHAR,
  designation VARCHAR,
  phone_no bigint
);

INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('Deepak', 'Chaurasia', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('ABCD', 'XYZ', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('Ankit', 'Jain', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('Test', 'User', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('Optum', 'Global', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('Rally', 'Health', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('NewUser', 'Dummy', 'ENT', 'Noida', 'MD', 8130440808);
INSERT INTO doctor (first_name, last_name, specialist, address, designation, phone_no) VALUES ('UAT', 'FPC', 'ENT', 'Noida', 'MD', 8130440808);

#--- !Downs
DROP TABLE doctor;