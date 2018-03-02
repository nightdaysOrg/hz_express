var express = require("express");
var router = express.Router();

router.use("/", express.static(__dirname + "./../../../mywebsite/ZY"));

module.exports = router;
