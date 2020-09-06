
--
-- SELECT * FROM igg6j8h96feu1o6q; --


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

CREATE TABLE Table(
     id int AUTO_INCREMENT primary key,
     numTables int NOT NULL,
    reserveTable BOOLEAN DEFAULT FALSE,
    -- figrue out how to set default
    restaraunt_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT restaraunt_id  FOREIGN KEY(restaraunt_id) REFERENCES Restaraunt(id) ON DELETE CASCADE,
    CONSTRAINT user_id FOREIGN KEY(user_id) REFERENCES User(id) ON DELETE CASCADE
);



INSERT INTO Restaraunt(Name, lat, lng) VALUES("Boston Market",41.161563,-73.417751,),("Ren Dumpling House",41.161563,-73.417751),("Outback Steakhouse",41.161563,-73.417751),("Pokeworks",41.161563,-73.417751);

