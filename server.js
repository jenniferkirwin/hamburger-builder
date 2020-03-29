// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const express = require("express");
const exphbs = require("express-handlebars");


// Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Getting sequelize for database
const db = require("./models");

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using static directory
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Test Code
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// const hamburgers = {
//   hamburger: [
//     {
//       id: 1,
//       hamburger_name: "Hamburger 1",
//       eaten: true
//     },
//     {
//       id: 2,
//       hamburger_name: "Hamburger 2",
//       eaten: false
//     }
//   ]
// }




// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
app.get("/", function(req, res) {

  db.Burger.findAll({
    attributes: ["id", "name", "eaten"],
    raw: true
  })
  .then(function(dbBurger) {

    const hamburgers = {
      hamburger: dbBurger
    }
    console.log(hamburgers);
    
    res.render("index", hamburgers);
  });

});

// Connects to database and starts the server
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  db.Burger.create({
    name: "Burger 1",
    eaten: false
  });
  
  db.Burger.create({
    name: "Burger 2",
    eaten: false
  });
  
  db.Burger.create({
    name: "Burger 3",
    eaten: true
  });

});
