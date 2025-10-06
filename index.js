// Simple entry point for Vercel
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static('.'));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
