// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { dirname } = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/weather", (req, res) => {
    res.sendFile(__dirname, "../public/weather.html");
  });

  app.get("/viewseating", (req, res) => {
    res.sendFile();
  });

  //to view res tables, available and taken
  $(".viewSeating").on("click", function(event) {
    var tables = $(this).data("tables");
    $.ajax("/seating/" + tables, {
      method: "GET",
      type: JSON,
      data: {},
    });
  });
  //this ajax call is for when the user clicks a reserve button, it will reserve the chosen table
  $(".reserve").on("click", function(event) {
    var id = $(this).data("id");
    // var tableReserved = $(this).data("reserveTable"); //make reserveTable a boolean in the DB
    $.ajax("/reserve-table/" + id, {
      method: "PUT",
      data: {
        reserveTable: true,
      },
    })
      .then(function() {
        console.log("this table has been reserved");
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};
