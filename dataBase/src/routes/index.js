const { Router } = require("express");
const { validateModel } = require("../middlewares");
const controllers = require("../controllers");

const router = Router();

router.get("/:model", validateModel, controllers.getModel);

router.get("/:model/:id", validateModel, controllers.getModelById);

router.post("/:model", validateModel, controllers.createModel);

module.exports = router;