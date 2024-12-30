const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (request, response) => {
  response.send("GET request recieved at '/' path");
});

app.post("/", (request, response) => {
  response.send("Post request recieved at '/' path");
});

app.put("/", (request, response) => {
  response.send("PUT request recieved at '/' path");
});

app.delete("/", (request, response) => {
  response.send("DELETE request recieved at '/' path");
});

app.listen(PORT, () => {
  console.log(`Server is running at on port http://localhost:${PORT}`);
});
