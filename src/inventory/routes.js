const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get('/', controller.getInventory);
router.get('/:id', controller.getInventoryById);
router.post('/', controller.addJar);

module.exports = router;
