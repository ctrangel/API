const { error } = require("console");
const pool = require("../../db");
const queries = require("./queries");

const getInventory = (req, res) => {
  pool.query(queries.getInventory, (error, results) => {
    if (error) {
      console.error("Database connection error:", error.stack);
      res.status(500).send("Database connection error");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getInventoryById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getInventoryById, [id], (error, results) => {
    if (error) {
      console.error("Database connection error:", error.stack);
      res.status(500).send("Database connection error");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const addJar = (req, res) => {
  const { jartype } = req.body;
  pool.query(queries.addJar, [jartype], (error, results) => {
    if (error) {
      console.error("Database connection error:", error.stack);
      res.status(500).send("Database connection error");
    } else {
      const newJar = results.rows[0]; 
      res.status(201).json({
        message: "New jar added successfully!",
        data: newJar, 
      });
    }
  });
};

const updateInventory = (req, res) => {
  const { id, jartype } = req.body;
  pool.query(queries.updateInventory, [id, jartype], (error, results) => {
     if (error) {
       console.error("Database connection error:", error.stack);
       res.status(500).send("Database connection error");
     } else {
      res.status(200).send("Updated Inventory Successfully");
     }
    
  });
};

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
};
