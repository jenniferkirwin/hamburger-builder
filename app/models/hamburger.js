// ===========================================================================
// Dependencies
// ===========================================================================

const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
const Hamburger = sequelize.define("hamburger", {
  hamburger_name: {
    type: Sequelize.STRING
  },
  eaten: {
    type: Sequelize.BOOLEAN
  }
});

// Syncs with DB
Hamburger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Hamburger;
