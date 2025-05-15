/**
 * Simple request logger middleware
 */
const logger = (request, response, next) => {
  const start = Date.now();

  // Log when the request completes
  response.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${request.method} ${request.url} - ${response.statusCode} - ${duration}ms`
    );
  });

  next();
};

module.exports = logger;
