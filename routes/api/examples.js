const router = require("express").Router();
const comedianController = require("../../controllers/comedianController");

router.route("/").get(comedianController.findAll);

module.exports = router;
