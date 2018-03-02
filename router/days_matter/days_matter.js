var express = require("express");
var qs = require("querystring");
var bp = require("body-parser");
var router = express.Router();
router.use(bp.json());
router.use(bp.urlencoded({ extended: false }));

// router.use(express.static(__dirname + "./../../../mywebsite/test"));
router.post('/login', function(req, res, next) {
  console.log(req.body);

  res.json(JSON.stringify(req.body));
});