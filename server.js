// ===========================================================================
// Dependencies
// ===========================================================================
const express = require("express");
const exphbs = require("express-handlebars");

const hamburger = [
  {
    hamburger_name: "Hamburger 1",
    eaten: true
  },
  {
    hamburger_name: "Hamburger 2",
    eaten: true
  }
]

// Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
app.get("/", function(req, res) {
  // connection.query("SELECT * FROM plans;", function(err, data) {
  //   if (err) {
  //     return res.status(500).end();
  //   }

  //   res.render("index", { plans: data });
  // });
  res.render("index", {hamburger});
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
