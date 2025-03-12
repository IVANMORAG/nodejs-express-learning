const Server = require("./server/server");

const PORT = process.env.PORT || 3003;
const server = new Server(PORT);

server.start();