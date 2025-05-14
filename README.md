# REST API Interview Challenge

A minimal Express REST API for coding interviews. This project serves as a starting point for candidates to demonstrate their skills by extending the API functionality.

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

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /              | Welcome message   |
| GET    | /api/items     | Get all items     |
| GET    | /api/items/:id | Get item by ID    |
| POST   | /api/items     | Create a new item |

## Sample Requests

```bash
# Get all items
curl http://localhost:3000/api/items

# Get item by ID
curl http://localhost:3000/api/items/1

# Create a new item
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"New Item","description":"Description"}' \
  http://localhost:3000/api/items
```

## Interview Tasks

See [TASKS.md](TASKS.md) for potential features the candidate can implement during the interview.
