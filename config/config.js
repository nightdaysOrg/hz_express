const port = 3000;

const key = "/etc/nginx/conf/2_www.seaboats.cn.key";
const cert = "/etc/nginx/conf/1_www.seaboats.cn_bundle.crt";

// mysql
const mysql = {
  user: "root",
  password: "q13550007798",
  limit: 50,
  host: "172.27.16.14",
  port:"/run/mysqld/mysqld.sock"
};

// 静态主目录
const static = "./../../mywebsite";

module.exports = {
  port: port,
  static: static,
  key: key,
  cert: cert,
  mysql: mysql
};
