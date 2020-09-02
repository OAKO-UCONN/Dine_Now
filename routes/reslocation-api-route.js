const express = reuire("express");
const db = require("../public");
const router = express.Router();
const bodyParser = require("body-parser");
const request = require("http");

router.use(bodyParser.urlencoded({ extend: true }));

getLocation();

function getLocation() {
  router.get("/api/reslocation/:id", function(req, res) {
    db.Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });
}
//should work if the table for the Restaurants was maybe something like this
//just an example

//create table restaurant (
// name varchar(20),
// id auto_increment,
// primary key (id),
// lat int NOT NULL
// lng int NOT NULL
// )
//each res has its own unique id and the lat and lng placed in..since the restaurants have to be members of this app, then the lat and lng
//should be required in the DB

//the first function would get the info from the Tables table in the DB
//while the second would update whether the table is taken or not, so if we used a boolean it would just be
//true or false and we can set it to a default of false

viewTables();
function viewTables() {
  router.get("/api/seating", function(req, res) {
    db.Tables.findAll({
      where: {
        resName: req.body.resName,
      },
    }).then(function(dbTables) {
      res.json(dbTables);
    });
  });
}

reservetable();
function reservetable() {
  router.put("/api/reserve-table", function(req, res) {
    db.Tables.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function(dbTables) {
      res.json(dbTables);
    });
  });
}
