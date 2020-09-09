// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { dirname } = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // Changed this to always redirect to homepage and user just presses login.
    //  The browser saves the login info. If this is not the case we can use local storage
    // and we can use localstorage to check if the user already created an account. But this may
    // cause problems if the user has many accounts, so the routes are set to always go to index.html
    if (req.user) {
      res.redirect("/index.html");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Changing this to redireect user to homepage first then they press the login button on the navbar.
  //This is just a backup. The Changes are above in app.get "/"
  /*
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  */

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/restaurants");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/restaurants", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurants.html"));
  });

  app.get("/members", (req, res) => {
    res.sendFile(__dirname, "../public/members.html");
  });
};
