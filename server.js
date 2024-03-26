const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/calculateTax', (req, res) => {
  const { transactionAmount } = req.body;
  // Calculate tax (example: fixed rate of 10%)
  const taxAmount = transactionAmount * 0.1;
  res.json({ taxAmount });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
