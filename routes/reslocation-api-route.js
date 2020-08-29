const express = reuire("express");
const path = require("path");
const public = require("../public/cityweather");
const router = express();
const bodyParser = require("body-parser");
const { request } = require("http");
const { json } = require("body-parser");

router.use(bodyParser.urlencoded({ extend: true }));
let map;

router.get("/api/restaurant", function(req,res){
    db.Restaurant.findAll({}).then(function(dbRestaurant){
        res.json(dbRestaurant)
    })
}

