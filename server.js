const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Load dataset
const salaryData = require('./salaryData.json');

// Define API route
app.get('/api/salary-data', (req, res) => {
  res.json(salaryData);
});

// Dynamic port for Heroku deployment
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
