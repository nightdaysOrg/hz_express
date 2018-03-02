let crypto = require("crypto");

let md5 = function(str) {
  let hasher = crypto.createHash("md5");
  hasher.update(str);
  str1 = hasher.digest("hex");
  return str1;
};

module.exports = {
  md5: md5,
  test: '123'
};
