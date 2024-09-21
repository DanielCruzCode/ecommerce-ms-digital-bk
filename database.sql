create table cart
(
    id     int auto_increment
        primary key,
    userId int not null
);

create table cartitem
(
    id        int auto_increment
        primary key,
    productId int not null,
    cartId    int not null,
    quantity  int not null
);

create table product
(
    id          int auto_increment
        primary key,
    type        enum ('EVENT', 'PRODUCT') not null,
    price       float                     not null,
    stock       int                       not null,
    thumbnail   varchar(255)              not null,
    description varchar(255)              not null
);

create table user
(
    id        int auto_increment
        primary key,
    firstName varchar(200) not null,
    lastName  varchar(200) not null
);

