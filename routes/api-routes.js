// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();

// Getting sequelize for database
const db = require("../models");

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Create new burger
router.post("/burgers", function(req, res) {

  db.Burger.create({
    name: req.body.name,
    eaten: false
  })
  .then(function(dbBurger) {

    res.json(dbBurger);

  });

});

router.put("/burgers", function(req, res) {
    db.Burger.update(
        {
            eaten: true
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(function(dbBurger) {

        res.json(dbBurger);
    
      });
});

router.delete("/burgers", function(req, res) {
    db.Burger.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(function(dbBurger) {

        res.json(dbBurger);
    
      });
});


// Export module

module.exports = router;