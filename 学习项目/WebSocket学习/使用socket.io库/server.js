const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // 访问 localhost:3000 直接返回前端代码
});

io.on("connection", (socket) => {
  console.log("连接成功");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", "服务器发送数据：" + msg);
  });
  socket.on("disconnect", () => {
    console.log("断开连接");
  });
});

server.listen("3000", () => "服务器开启");
