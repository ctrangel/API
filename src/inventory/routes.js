const { Router } = require("express");
const controller = require("./controller");
const router = Router();

// regular routes on jar table
router.get("/", controller.getInventory);
router.get("/:id", controller.getInventoryById);
router.post("/", controller.addJar);
router.put("/", controller.updateInventory);
router.get("/complete-inventory-report", controller.getCompleteInventoryReport);


//filter routes on jar table
router.get("/location/:locationId", controller.getInventoryByLocation);
router.get("/status/:statusId", controller.getInventoryByStatus);
router.get("/type/:jartype", controller.getInventoryByType);
router.get("/quantity/:quantity", controller.getInventoryByQuantity);

// regular routes on inventory_locations table
router.get("/locations", controller.getAllInventoryLocations);
router.get("/locations/:id", controller.getInventoryLocationById);
router.post("/locations", controller.addInventoryLocation);
router.put("/locations/:id", controller.updateInventoryLocation);
router.delete("/locations/:id", controller.deleteInventoryLocation);

// Routes for inventory_status
router.get('/statuses', controller.getAllStatuses);
router.get('/statuses/:id', controller.getStatusById);
router.post('/statuses', controller.addStatus);
router.put('/statuses/:id', controller.updateStatus);
router.delete('/statuses/:id', controller.deleteStatus);

module.exports = router;


