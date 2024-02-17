const { error } = require("console");
const pool = require("../../db");
const queries = require("./queries");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Jar Table controls%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Get all inventory all the guuds this be the default
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

// Get inventory by id jar
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

// Add new jar to inventory
const addJar = (req, res) => {
  const { jartype, location_id, status_id, quantity } = req.body;
  pool.query(
    queries.addJar,
    [jartype, location_id, status_id, quantity],
    (error, results) => {
      if (error) {
        console.error("Database connection error:", error.stack);
        res.status(500).send("Database connection error");
      } else {
        res.status(201).json({
          message: "New jar added successfully!",
          data: results.rows[0],
        });
      }
    }
  );
};

// Update inventory for jar
const updateInventory = (req, res) => {
  const { id, jartype, location_id, status_id, quantity } = req.body;
  pool.query(
    queries.updateInventory,
    [jartype, location_id, status_id, quantity, id],
    (error, results) => {
      if (error) {
        console.error("Database connection error:", error.stack);
        res.status(500).send("Database connection error");
      } else {
        res.status(200).json({
          message: "Inventory updated successfully",
          data: results.rows[0],
        });
      }
    }
  );
};

// Filter inventory by location
const getInventoryByLocation = (req, res) => {
  const locationId = parseInt(req.params.locationId);
  pool.query(filterInventoryByLocation, [locationId], (error, results) => {
    if (error) {
      console.error("Error querying the database:", error.stack);
      res.status(500).send("Error querying the database");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

// Filter inventory by status
const getInventoryByStatus = (req, res) => {
  const statusId = parseInt(req.params.statusId);
  pool.query(filterInventoryByStatus, [statusId], (error, results) => {
    if (error) {
      console.error("Error querying the database:", error.stack);
      res.status(500).send("Error querying the database");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

// Filter inventory by type
const getInventoryByType = (req, res) => {
  const jartype = req.params.jartype; // Assuming jartype is a string
  pool.query(filterInventoryByType, [jartype], (error, results) => {
    if (error) {
      console.error("Error querying the database:", error.stack);
      res.status(500).send("Error querying the database");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getInventoryByQuantity = (req, res) => {
  const quantity = parseInt(req.params.quantity);
  pool.query(
    queries.filterInventoryByQuantity,
    [quantity],
    (error, results) => {
      if (error) {
        console.error("Error querying the database:", error.stack);
        res.status(500).send("Error querying the database");
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Inventory_location controls%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const getAllInventoryLocations = (req, res) => {
  pool.query(queries.getInventoryLocation, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results.rows);
  });
};

const getInventoryLocationById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getInventoryLocationById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results.rows);
  });
};

const addInventoryLocation = (req, res) => {
  const { name, description, location } = req.body;
  pool.query(
    queries.addInventoryLocation,
    [name, description, location],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(201).json(results.rows[0]);
    }
  );
};

const updateInventoryLocation = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, location } = req.body;
  pool.query(
    queries.updateInventoryLocation,
    [name, description, location, id],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(results.rows[0]);
    }
  );
};

const deleteInventoryLocation = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteInventoryLocation, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res
      .status(200)
      .json({ message: `Inventory location deleted with ID: ${id}` });
  });
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Inventory_Status Table controls%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const getAllStatuses = (req, res) => {
  pool.query(queries.getAllInventoryStatuses, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getStatusById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getInventoryStatusById, [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const addStatus = (req, res) => {
  const { status, description } = req.body;
  pool.query(
    queries.addInventoryStatus,
    [status, description],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(201).json(results.rows[0]);
      }
    }
  );
};

const updateStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const { status, description } = req.body;
  pool.query(
    queries.updateInventoryStatus,
    [status, description, id],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json(results.rows[0]);
      }
    }
  );
};

const deleteStatus = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteInventoryStatus, [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: `Status deleted with ID: ${id}` });
    }
  });
};

module.exports = {
  getInventory,
  getInventoryById,
  addJar,
  updateInventory,
  getInventoryByLocation,
  getInventoryByStatus,
  getInventoryByType,
  getInventoryByQuantity,
  getAllInventoryLocations,
  getInventoryLocationById,
  addInventoryLocation,
  updateInventoryLocation,
  deleteInventoryLocation,
  getAllStatuses,
  getStatusById,
  addStatus,
  updateStatus,
  deleteStatus,
};
