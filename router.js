const { Router } = require("express");
const router = Router();
const gui = require("./controllers/interface.controller");


router.use('/', gui);
module.exports = router;