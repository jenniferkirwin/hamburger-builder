// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require("express");
const exphbs = require("express-handlebars");

// For Express Routes
const basehtml = require("./routes/html-routes");
const apiroutes = require("./routes/api-routes");

// Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Getting sequelize for database
const db = require("./models");

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using static directory in HTML
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

app.use("/", basehtml);
app.use("/api", apiroutes);

// Connects to database then starts the server
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
