const express = require("express");
const itemsData = require("../data/items");

const router = express.Router();

// GET all items
router.get("/", async (request, response) => {
  response.json(itemsData.getAllItems());
});

// GET a single item by ID
router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const item = itemsData.getItemById(id);

  if (!item) {
    return response.status(404).json({ message: "Item not found" });
  }

  response.json(item);
});

// POST a new item
router.post("/", (request, response) => {
  const { name, description } = request.body;

  if (!name || !description) {
    return response
      .status(400)
      .json({ message: "Name and description are required" });
  }

  const newItem = itemsData.createItem({ name, description });

  response.status(201).json(newItem);
});

module.exports = { router };
