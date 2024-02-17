const { Router } = require("express");
const controller = require("./controller");
const router = Router();

// regular routes on jar table
router.get("/", controller.getInventory);
router.get("/:id", controller.getInventoryById);
router.post("/", controller.addJar);
router.put("/", controller.updateInventory);

//filter routes on jar table
router.get("/location/:locationId", controller.getInventoryByLocation);
router.get("/status/:statusId", controller.getInventoryByStatus);
router.get("/type/:jartype", controller.getInventoryByType);

// regular routes on inventory_location table
router.get("/inventory-locations", controller.getAllInventoryLocations);
router.get("/inventory-locations/:id", controller.getInventoryLocationById);
router.post("/inventory-locations", controller.addInventoryLocation);
router.put("/inventory-locations/:id", controller.updateInventoryLocation);
router.delete("/inventory-locations/:id", controller.deleteInventoryLocation);

// Routes for inventory_status
router.get('/statuses', controller.getAllStatuses);
router.get('/statuses/:id', controller.getStatusById);
router.post('/statuses', controller.addStatus);
router.put('/statuses/:id', controller.updateStatus);
router.delete('/statuses/:id', controller.deleteStatus);

module.exports = router;


