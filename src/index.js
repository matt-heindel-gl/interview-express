const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middleware
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

/**
 * In-memory data store
 */
const items = [
  { id: 1, name: "Item 1", description: "This is the first item" },
  { id: 2, name: "Item 2", description: "This is the second item" },
];

/**
 * Routes
 */
// GET all items
app.get("/api/items", async (request, response) => {
  response.json(items);
});

// GET a single item by ID
app.get("/api/items/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return response.status(404).json({ message: "Item not found" });
  }

  response.json(item);
});

// POST a new item
app.post("/api/items", (request, response) => {
  const { name, description } = request.body;

  if (!name || !description) {
    return response
      .status(400)
      .json({ message: "Name and description are required" });
  }

  const newId =
    items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  const newItem = { id: newId, name, description };

  items.push(newItem);
  response.status(201).json(newItem);
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
