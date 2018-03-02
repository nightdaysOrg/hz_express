// 配置
var config = require("./config/config");
// 模块
var express = require("express");
var http = require("http");
var https = require("https");
var fs = require("fs");

// Routes列表
var test = require("./router/test");
var zy = require("./router/zhangyan");
var da

// 创建应用
var app = express();

const privateKey = fs.readFileSync(config.key, "utf8");
const certificate = fs.readFileSync(config.cert, "utf8");
const credentials = {
  key: privateKey,
  cert: certificate
};

//跨域支持
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 设置目录
app.use("/test", test);
app.use("/zy", zy);
// app.use(express.static(__dirname + config.static));

app.get("/", function(req, res) {
  res.send("Hello World");
});

// https服务器
var server = https.createServer(credentials, app);

// 监听端口
server.listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("CAT`S Server Start Port At : ", port);
});
