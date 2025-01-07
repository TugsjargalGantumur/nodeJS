const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { items } = require("./data");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("GET request received at '/' path");
});

app.get("/items", (request, response) => {
  response.status(200).json(items);
});

app.get("/items/:id", (request, response) => {
  const { id } = request.params;

  const item = items.find((item) => String(item.id) === id);

  if (!item) {
    response.status(404).json({
      error: "Item not found",
    });
  }

  response.status(200).json(item);
});

app.post("/items", (request, response) => {
  const { name, description, category } = request.body;

  if (!name || !description || !category) {
    response.status(400).json({
      error: "Please provide name, description and category",
    });
  }

  const newItem = {
    id: uuidv4(),
    name,
    description,
    category,
  };

  items.push(newItem);

  response.status(201).json(items);
});

app.put("/items/:id", (request, response) => {
  const { id } = request.params;
  const { name, description, category } = request.body;

  const item = items.find((item) => String(item.id) === id);

  if (!item) {
    response.status(404).json({
      error: "Item not found",
    });
  }

  if (!name && !description && !category) {
    response.status(400).json({
      error: "Please provide name, description or category",
    });
  }

  item.name = name || item.name;
  item.description = description || item.description;
  item.category = category || item.category;

  response.status(200).json(item);
});

app.delete("/items/:id", (request, response) => {
  const { id } = request.params;

  const item = items.find((item) => String(item.id) === id);

  if (!item) {
    response.status(404).json({
      error: "Item not found",
    });
  }

  items.splice(items.indexOf(item), 1);
  response.status(200).json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
