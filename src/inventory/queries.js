const getInventory = "SELECT * FROM jar";

const getInventoryById = "SELECT * FROM wine WHERE id = $1";

const addJar = "INSERT INTO jar (jartype) VALUES ($1) RETURNING *";

const updateInventory = "UPDATE jar SET jartype = $2 WHERE id = $1";

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
};
