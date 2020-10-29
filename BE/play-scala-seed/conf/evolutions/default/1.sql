#
--- !Ups

create table "doctor"
(
  "firstName" varchar not null,
  "lastName" varchar not null,
  "specialist" varchar not null,
  "address" varchar not null,
  "designation" varchar not null,
  "phoneNo" int not null
);

#
--- !Downs

drop table "doctor"
if exists;