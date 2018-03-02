let mysql = require("../../utils/days_matter_mysql");
let crypto = require("../../utils/crypto");

// router.use(express.static(__dirname + "./../../../mywebsite/test"));
let login = function(req, res, next) {
  return new Promise(function(resolve, reject) {
    let name = req.body.name;
    let pwd = crypto.md5(req.body.pwd);
    console.log(name);
    console.log(pwd);
    mysql
      .query("select uid from time_users where uname=? and upwd=?", [name, pwd])
      .then(function(res) {
        console.log("success login");
        console.log(res);
        resolve(res);
      })
      .catch(function(err) {
        console.log("fail login");
        console.log(err);
        reject(err);
      });
  });
};

let register = function(req, res, next) {
  let name = req.body.name;
  let pwd = crypto.md5(req.body.pwd);
  mysql
    .query("insert into time_users values(?,?,?);", [null, name, pwd])
    .then(function(res) {
      console.log("success reg");
      console.log(res);
    })
    .catch(function(err) {
      console.log("fail reg");
      console.log(err);
    });
};

module.exports = {
  login: login,
  register: register
};
