# Interview Tasks

Below are potential tasks to assess the candidate's skills during the interview. Choose one or more based on the role requirements and candidate's experience level.

## Basic Tasks (15 minutes)

1. **Delete Endpoint**: Implement a DELETE endpoint at `/api/items/:id` that removes an item by ID.

2. **Update Endpoint**: Implement a PUT endpoint at `/api/items/:id` that updates an existing item.

3. **Query Parameters**: Add support for filtering items by name using a query parameter (`/api/items?name=searchterm`).

## Intermediate Tasks (20 minutes)

4. **Error Handling**: Implement a global error handling middleware that catches errors and returns appropriate responses.

5. **Data Validation**: Add more robust validation for creating and updating items (e.g., field length, required fields, data types).

6. **Pagination**: Implement pagination for the GET all items endpoint with `page` and `limit` query parameters.

## Advanced Tasks (25-30 minutes)

7. **New Resource**: Add a new resource type (e.g., Categories) with a one-to-many relationship to Items, and implement CRUD endpoints.

8. **Basic Authentication**: Implement a simple authentication system with middleware that checks for an API key in the request headers.

9. **Rate Limiting**: Add a basic rate limiting middleware that restricts the number of requests from a single client.

## Bonus Extensions

If the candidate completes the main tasks quickly, consider these extended challenges:

- Add proper request logging with timestamps and request details
- Implement sorting of items by different fields
- Add a search endpoint that searches across multiple fields
- Implement a simple caching mechanism for GET requests
