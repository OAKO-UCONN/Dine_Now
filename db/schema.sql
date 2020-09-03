
--
-- SELECT * FROM igg6j8h96feu1o6q; --

CREATE TABLE RestarauntTables (
    RestaurantTables int NOT NULL,
    Sanitized varchar(255),
    Booked varchar(255),
    Seats varchar(255),
    RestarantNameName varchar(255),
    OutdoorIndoorTable varchar(255),
-- Address Info --
    Addresss varchar(255),
    Zip varchar(255),
    City varchar(255),
    County varchar(255),
    States varchar(255),
    Country varchar(255)
);




CREATE TABLE User(
    id int AUTO_INCREMENT
    primary key(id)
    name VARCHAR (200) NOT NULL 
);

CREATE TABLE Tables(
     id int AUTO_INCREMENT
    primary key(id)
     Tables int NOT NULL,
    reserveTable BOOLEAN DEFAULT FALSE 
    -- figrue out how to set default
    user_id
    CONSTRAINT user_id FOREIGN KEY(user_id) REFERENCES User(id) ON DELETE CASCADE
)

CREATE TABLE Restaraunt (
    id int AUTO_INCREMENT
    primary key(id)
    Sanitized varchar(255),
    RestarantName varchar(255),
    OutdoorIndoorTable varchar(255),
    lat int NOT NULL,
    lng int NOT NULL,
    table_id
    CONSTRAINT table_id FOREIGN KEY(table_id) REFERENCES Table(id) ON DELETE CASCADE
    
);

INSERT INTO User (name) VALUES();
INSERT INTO Tables (reserveTable, Tables, user_id) VALUES();
INSERT INTO Restaraunt(RestarantName, OutdoorIndoorTable, Sanitized, table_id) VALUES()



