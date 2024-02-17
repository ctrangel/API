const getInventory = "SELECT * FROM jar";

const getInventoryById = "SELECT * FROM wine WHERE id = $1";

const addJar = "INSERT into jar (id,jartype) VALUES($1, $2, $3)";

const updateInventory = "UPDATE jar SET jartype = $2 WHERE id = $1";

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
};
