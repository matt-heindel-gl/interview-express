# To-Do List REST API

A lightweight Express REST API for managing a to-do list. This application provides a simple interface to create, read, update, and delete to-do items.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server with hot reloading
npm run dev

# Or start in production mode
npm start
```

The server runs at http://localhost:3000

## API Endpoints

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| GET    | /api/items     | Get all to-do items     |
| GET    | /api/items/:id | Get to-do item by ID    |
| POST   | /api/items     | Create a new to-do item |

## Sample Requests

```bash
# Get all to-do items
curl http://localhost:3000/api/items

# Get to-do item by ID
curl http://localhost:3000/api/items/1

# Create a new to-do item
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Finish project","description":"Complete the final implementation"}' \
  http://localhost:3000/api/items
```
