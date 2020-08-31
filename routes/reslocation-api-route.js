const express = reuire("express");
const db = require("../public");
const router = express.Router();
const bodyParser = require("body-parser");
const { request } = require("http");

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
//each res has its own unique id and the lat and lng placed in
