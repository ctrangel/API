const { error } = require("console");
const pool = require("../../db");
const queries = require("./queries");

const getInventory = (req, res) => {
  pool.query(queries.getInventory, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getInventoryById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getInventoryById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addJar = (req, res) => {
  const { id, jartype } = req.body;
  pool.query(queries.addJar, [id, jartype], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const updateInventory = (req, res) => {
  const { id, jartype } = req.body;
  pool.query(queries.updateInventory, [id, jartype], (error, results) => {
    if (error) throw error;
    res.status(200).send("Updated Inventory Successfully");
  });
};

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
};
