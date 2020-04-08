create database fmx;

use fmx;

drop table users;

create table users (
	id_user int(11) not null auto_increment primary key,
    login varchar(100) not null,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    email varchar(100) not null,
    `password` varchar(255) not null
) engine=InnoDB;

insert into users (login ,first_name, last_name, email, `password`)
values ('gustavopsan', 'Gustavo', 'P. Santana', 'gustavopsantana4@gmail.com', 'editpro7');

select * from users;

create table fmxxx (
	`date` varchar(10) not null unique,
    id_form int(11) not null auto_increment primary key,
    autoconer decimal(6,3) not null,
    urdideira decimal(6,3) not null,
    fsg_eng decimal(6,3) not null,
    fcg_eng decimal(6,3) not null,
    fcg_tecelagem decimal(6,3) not null,
    res_picanol decimal(6,3) not null,
    res_itema decimal(6,3) not null,
    varreduras decimal(6,3) not null
) engine=InnoDB;

insert into fmxxx (`date`, autoconer, urdideira, fsg_eng, fcg_eng, fcg_tecelagem, res_picanol, res_itema, varreduras)
values ('2020-03-26', 10.160, 2.600, 17.520, 25.440, 75.200, 10.000, 14.700, 23.600);

select * from fmxxx;