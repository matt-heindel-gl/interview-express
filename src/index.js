const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory data store for the interview
const items = [
  { id: 1, name: "Item 1", description: "This is the first item" },
  { id: 2, name: "Item 2", description: "This is the second item" },
];

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Interview API" });
});

// GET all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// GET a single item by ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// POST a new item
app.post("/api/items", (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Name and description are required" });
  }

  const newId =
    items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  const newItem = { id: newId, name, description };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
