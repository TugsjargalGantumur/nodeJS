const http = require("http");

const PORT = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello Pineconers");
});

server.listen(PORT, () => {
  console.log(`Server is running at on port http://localhost:${PORT}`);
});
