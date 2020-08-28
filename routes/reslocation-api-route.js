const express = reuire("express");
const path = require("path");
const public = require("../public/cityweather");
const router = express();
const bodyParser = require("body-parser");
const { request } = require("http");
const { json } = require("body-parser");

router.use(bodyParser.urlencoded({ extend: true }));
let map;

router.get("/restaraunt-weather", function(req,res){
    
}


//try to have "res owners" input their location, get location from DB, then use
//a route and API to get the weather from that DB

//  create an object with key value pairs for
//  res location and google map location

const resLocation = {
res1: city1,
res2: city2,
res3: city3

}