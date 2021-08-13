const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`server is running port http://0.0.0.0:8080`);
});

io.on("connection", (socket) => {
    console.log("user Connected");
    socket.on("disconnect", () => {
        console.log("user Disconnected");
    });

    // setInterval(() => {
    //     socket.emit('call', new Date().toLocaleTimeString())
    // }, 1000);

    socket.on("call", (msg) => {
        console.log(msg);
        socket.emit("call", msg);
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
