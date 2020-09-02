
--
-- SELECT * FROM igg6j8h96feu1o6q; --
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



