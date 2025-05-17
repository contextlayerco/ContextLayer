const Web3 = require('web3');

// Web3 Setup
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

// Function to get the current block number
const getBlockNumber = async () => {
  const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
};

module.exports = {
  getBlockNumber,
};
