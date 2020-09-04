
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

<<<<<<< HEAD

use `igg6j8h96feu1o6q`;


CREATE TABLE User(
    id int AUTO_INCREMENT NOT NULL primary key,
    name VARCHAR (200) NOT NULL 
);

CREATE TABLE Restaraunt (
    id int AUTO_INCREMENT NOT NULL primary key,
    Sanitized BOOLEAN,
   Name varchar(255),
    OutdoorIndoorTable varchar(255),
    lat DECIMAL(10, 8) NOT NULL,
    lng DECIMAL(11, 8) NOT NULL
);

CREATE TABLE Tables(
     id int AUTO_INCREMENT primary key,
     numTables int NOT NULL,
    reserveTable BOOLEAN DEFAULT FALSE,
    -- figrue out how to set default
    restaraunt_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT restaraunt_id  FOREIGN KEY(restaraunt_id) REFERENCES Restaraunt(id) ON DELETE CASCADE,
    CONSTRAINT user_id FOREIGN KEY(user_id) REFERENCES User(id) ON DELETE CASCADE
);



INSERT INTO Restaraunt(Name, lat, lng) VALUES("Boston Market",41.161563,-73.417751),("Ren Dumpling House",41.161563,-73.417751),("Outback Steakhouse",41.161563,-73.417751),("Pokeworks",41.161563,-73.417751);


=======
>>>>>>> 67a2be7d98603582149700dfbf6cdadc0c3fccc8
