create database TrainTicketBooking;
use TrainTicketBooking;
create table User(
First_Name varchar(100),
Last_Name varchar(100),
Email varchar(100),
Password_user varchar(100),
City varchar(100),
Mobile_number int(10)
);
create table Train(
Train_no int,
Train_name varchar(100),
Source_place varchar(100),
Dest_place varchar(100),
Arrival_time time,
Depature_time time,
Date_of_journey date);

create table Ticket(
Train_no int,
PNR int,
Source_place varchar(100),
Dest_place varchar(100),
Arrival_time time,
Depature_time time,
Distance int,
Class varchar(50),
Fare int);

create table Payment(
User_Name varchar(100),
Recipt_no int,
PaymentType varchar(100),
Bank varchar(100),
Pin int
);

create table Class(
Train_no int,
Class_Type varchar(100),
Fare int);











