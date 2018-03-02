var express = require("express");
var qs = require("querystring");
var bp = require("body-parser");
var crypto = require("../utils/crypto");
let user_info = require("./days_matter/user_info");
var router = express.Router();
router.use(bp.json());
router.use(bp.urlencoded({ extended: false }));

router.use(express.static(__dirname + "./../../../mywebsite/test"));

// router.get("/", function(req, res, next) {
//   // res.send("respond with a resource");
//   // console.log(req);
//   // console.log(req._parsedUrl);
//   console.log(req.query);
//   let obj = req.query;
//   res.send(obj);
// });

router.post("/login", function(req, res, next) {
  console.log(req.body);
  user_info.login(req, res, next).then(reso => {
    console.log(reso[0]);
    if (reso[0]) {
      let result = { isLogin: true, uid: reso[0].uid };
      // res.json(JSON.stringify(result));
      res.json(result);
    } else {
      let result = { isLogin: false, uid: null };
      // res.json(JSON.stringify(result));
      res.json(result);
    }
    // res.json(JSON.stringify(reso));
    // res.json(JSON.stringify(reso[0]));
  });
  // res.json(JSON.stringify(req.body));
});

router.post("/register", function(req, res, next) {
  user_info.register(req, res, next).then(reso => {
    console.log(reso);
  });
});

module.exports = router;
