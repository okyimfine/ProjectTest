const express = require("express");
const path = require("path");
const app = express();

// Serve static HTML (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Simple backend API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend (Render)!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
