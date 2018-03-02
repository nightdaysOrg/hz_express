const config = require("../config/config");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: config.mysql.limit,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: "days_matter",
  port: config.mysql.port
});

// sql为语句,parmas为参数,用[]括起来
let query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      } else {
        connection.query(sql, params, (err, result) => {
          connection.release();
          if (err) {
            return reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

module.exports = {
  query: query
};
