// ************************************** Jar table queries ************************************** //
// jar table quereies
const getInventory = "SELECT * FROM jar";

const getInventoryById = "SELECT * FROM jar WHERE id = $1";

const addJar =
  "INSERT INTO jar (jartype, location_id, status_id, quantity) VALUES ($1, $2, $3, $4) RETURNING *";

const updateInventory =
  "UPDATE jar SET jartype = $1, location_id = $2, status_id = $3, quantity = $4 WHERE id = $5 RETURNING *";

const deleteInventory = "DELETE FROM jar WHERE id = $1";

// filter jar table
const filterInventoryBylocation = "SELECT * FROM jar WHERE location_id = $1";

const filterInventoryByStatus = "SELECT * FROM jar WHERE status_id = $1";

const filterInventoryByType = "SELECT * FROM jar WHERE jartype = $1";

const filterInventoryByQuantity = "SELECT * FROM jar WHERE quantity = $1";

//complete report

const getCompleteInventoryReport =
  "SELECT jar.id, jar.jartype, jar.quantity, inventory_locations.name AS location_name, inventory_status.status AS status FROM jar INNER JOIN inventory_locations ON jar.location_id = inventory_locations.id INNER JOIN inventory_status ON jar.status_id = inventory_status.id;";

//************************************************************************************************ //

//********************************* iventory_location table **************************************//

const getInventoryLocation = "SELECT * FROM inventory_locations";

const getInventoryLocationById =
  "SELECT * FROM inventory_locations WHERE id = $1";

const addInventoryLocation =
  "INSERT INTO inventory_locations (name, description, location) VALUES ($1, $2, $3) RETURNING *";

const updateInventoryLocation =
  "UPDATE inventory_locations SET name = $1, description = $2, location = $3 WHERE id = $4 RETURNING *";

const deleteInventoryLocation = "DELETE FROM inventory_locations WHERE id = $1";

//************************************************************************************************ //

//********************************* inventory_status table **************************************//

const getAllInventoryStatuses = "SELECT * FROM inventory_status";

const getInventoryStatusById = "SELECT * FROM inventory_status WHERE id = $1";

const addInventoryStatus =
  "INSERT INTO inventory_status (status, description) VALUES ($1, $2) RETURNING *";

const updateInventoryStatus =
  "UPDATE inventory_status SET status = $1, description = $2 WHERE id = $3 RETURNING *";

const deleteInventoryStatus = "DELETE FROM inventory_status WHERE id = $1";

//************************************************************************************************ //
// ***********************************login queries***********************************************//
const getUserByUsername = "SELECT * FROM users WHERE username = $1";

const getUserById = "SELECT * FROM users WHERE id = $1";

const addUser =
  "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";

const updateUser =
  "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *";

const deleteUser = "DELETE FROM users WHERE id = $1";

//************************************************************************************************ //

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
  deleteInventory,
  filterInventoryBylocation,
  filterInventoryByStatus,
  filterInventoryByType,
  filterInventoryByQuantity,
  getCompleteInventoryReport,
  getInventoryLocation,
  getInventoryLocationById,
  addInventoryLocation,
  updateInventoryLocation,
  deleteInventoryLocation,
  getAllInventoryStatuses,
  getInventoryStatusById,
  addInventoryStatus,
  updateInventoryStatus,
  deleteInventoryStatus,
  getUserByUsername,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
