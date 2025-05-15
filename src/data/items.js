// In-memory data store
const items = [
  { id: 1, name: "Item 1", description: "This is the first item" },
  { id: 2, name: "Item 2", description: "This is the second item" },
  { id: 3, name: "Item 3", description: "This is the third item" },
];

/**
 * Calculate the next ID for the items collection
 * @param {Array} items - Collection of items with id property
 * @returns {number} - Next ID (max + 1 or 1 if empty)
 */
const getNextId = (items) => {
  return items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
};

/**
 * Get all to-do items
 * @returns {Array} All items
 */
const getAllItems = () => {
  return items;
};

/**
 * Get a single to-do item by ID
 * @param {number} id Item ID
 * @returns {Object|undefined} Item if found, undefined otherwise
 */
const getItemById = (id) => {
  return items.find((item) => item.id === id);
};

/**
 * Create a new to-do item
 * @param {Object} itemData Item data (name, description)
 * @returns {Object} Newly created item
 */
const createItem = (itemData) => {
  const newItem = {
    id: getNextId(items),
    ...itemData,
  };

  items.push(newItem);
  return newItem;
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
};
