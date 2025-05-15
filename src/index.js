const startServer = require("./server");

const PORT = process.env.PORT || 3000;
const app = startServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
