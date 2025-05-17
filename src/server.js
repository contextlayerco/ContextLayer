require('dotenv').config();
const express = require('express');
const Web3 = require('web3');
const app = express();
const port = process.env.PORT || 3000;

// Initialize Web3 with Infura
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

// Sample endpoint to check connection
app.get('/status', (req, res) => {
  res.send('Context Layer API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
