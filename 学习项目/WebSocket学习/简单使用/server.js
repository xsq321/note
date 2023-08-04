const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("前端连接进来了");

  ws.on("message", (data) => {
    console.log("后端接收到来自前端的数据：", data);
    ws.send("服务器数据");
  });

  ws.on("close", () => {
    console.log("前端断开连接");
  });
});
