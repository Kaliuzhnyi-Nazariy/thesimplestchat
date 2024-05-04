const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.broadcast.emit("New member added!");
  //   console.log("new frontend connected!");
});

httpServer.listen(3001);
