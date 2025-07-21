const express = require("express");
const path = require("path");
const app = express();

// Serve static file (index.html) directly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Backend API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend (no folders!)" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
