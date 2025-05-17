# Web3 Integration

The **Context Layer** platform is designed to seamlessly integrate with Web3 technologies, specifically the Ethereum blockchain. This section provides an overview of how to integrate Web3 components into your applications, interact with smart contracts, and interact with decentralized systems.

Web3 integration enables the connection between **Context Layer** AI agents and the decentralized ecosystem, allowing real-time data processing, smart contract interactions, and decentralized decision-making.

## 1. **Web3 Overview**

Web3 refers to a decentralized internet where applications are powered by blockchain technologies, such as Ethereum. It enables trustless interactions, allowing users and systems to interact directly with decentralized applications (dApps) without the need for intermediaries.

- **Ethereum Blockchain**: Ethereum provides the foundational infrastructure for decentralized applications, using smart contracts to execute code in a secure and trustless manner.
- **Web3.js**: A JavaScript library that allows interaction with the Ethereum blockchain. Web3.js enables the creation of dApps that can send transactions, query blockchain data, and interact with smart contracts.
- **MetaMask**: A popular browser extension and mobile app that acts as a bridge between users and Ethereum. It allows users to interact with dApps securely.

## 2. **Integrating Web3 with Context Layer**

In order to enable AI agents to interact with Ethereum, **Context Layer** utilizes Web3 components to enable real-time interactions and decisions. Below are the main integration points and steps for integrating Web3 functionality into your applications.

### 2.1 **Using Web3.js in Your Application**

Web3.js is the most common library used to interact with Ethereum. It provides all the necessary methods for interacting with the Ethereum blockchain, such as sending transactions, querying smart contract states, and managing accounts.

1. **Install Web3.js**

To use Web3.js in your application, install the package via npm or yarn:

```bash
npm install web3
# or
yarn add web3
````

2. **Initialize Web3.js**

To initialize Web3.js, you need to create a Web3 instance, which will interact with the Ethereum network:

```javascript
import Web3 from 'web3';

// Initialize Web3.js with the provider
const web3 = new Web3(window.ethereum);

// Request account access
async function connectWallet() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// Example usage: Get the current account
web3.eth.getAccounts().then((accounts) => {
  console.log("Current account: ", accounts[0]);
});
```

3. **Interacting with Smart Contracts**

Web3.js allows you to interact with Ethereum smart contracts by calling functions and sending transactions. Below is an example of how to interact with a smart contract:

```javascript
const contractABI = [...] // ABI of the smart contract
const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Address of the contract

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call a function on the contract
contract.methods.someFunction().call().then((result) => {
  console.log(result);
});

// Send a transaction to the contract
contract.methods.someFunctionWithArgs('arg1', 'arg2').send({ from: accounts[0] })
  .on('transactionHash', (hash) => {
    console.log("Transaction Hash:", hash);
  })
  .on('receipt', (receipt) => {
    console.log("Transaction Receipt:", receipt);
  });
```

### 2.2 **Interacting with Context Layer Protocol**

The **Context Layer Protocol** enables AI agents to access blockchain data and make context-aware decisions. AI agents can interact with the Ethereum blockchain using Web3.js, trigger smart contract actions, and send transactions in response to blockchain events.

* **AI Agent Blockchain Interaction**: AI agents use Web3.js to interact with smart contracts and send transactions based on the context of blockchain data.
* **Real-Time Data Processing**: AI agents can listen for events on the blockchain, such as price changes, transaction confirmations, and governance proposals, and take actions based on this data.

### 2.3 **Web3 Wallet Integration**

For decentralized applications that require user interactions, wallet integration is essential. **MetaMask** is commonly used for this purpose, allowing users to interact with the Ethereum blockchain securely.

1. **Integrating MetaMask with Web3.js**

To use MetaMask as a wallet for Web3.js, you need to initialize Web3 with the `window.ethereum` provider:

```javascript
if (window.ethereum) {
  const web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      console.log("MetaMask connected with account: ", accounts[0]);
    });
}
```

2. **Sending Transactions with MetaMask**

Once MetaMask is connected, you can send transactions directly from the user's wallet:

```javascript
web3.eth.sendTransaction({
  from: accounts[0],
  to: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
  value: web3.utils.toWei('0.1', 'ether'),
}).then((receipt) => {
  console.log("Transaction receipt: ", receipt);
});
```

### 2.4 **Using Decentralized Storage (IPFS)**

In addition to Ethereum, decentralized storage systems like IPFS (InterPlanetary File System) are commonly used to store off-chain data such as AI model files or other important data.

* **IPFS Integration**: You can upload data to IPFS using libraries like `ipfs-http-client` and retrieve data for use in smart contracts or AI agents.

```bash
npm install ipfs-http-client
```

```javascript
import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

// Upload a file to IPFS
async function uploadFile(file) {
  const added = await ipfs.add(file);
  console.log("File uploaded to IPFS: ", added.path);
}

// Example usage:
const file = new File(["Hello World"], "hello.txt", { type: "text/plain" });
uploadFile(file);
```

## 3. **Best Practices for Web3 Integration**

When building Web3-enabled applications with **Context Layer**, following best practices ensures that the application is secure, efficient, and easy to maintain:

* **Secure Web3 Interactions**: Always ensure that interactions with smart contracts are secure. Use tools such as [Remix IDE](https://remix.ethereum.org/) to test and deploy smart contracts in a secure environment.
* **Gas Optimization**: Minimize gas fees by writing efficient smart contracts and using Ethereum’s gas estimation tools to optimize transaction costs.
* **Handling User Transactions**: Ensure that the user experience is smooth when interacting with Ethereum. Use MetaMask or other Web3 wallets to manage user accounts and send transactions securely.

Web3 integration is essential for leveraging the power of the Ethereum blockchain in decentralized applications. By using Web3.js and interacting with Ethereum smart contracts, you can build powerful, context-aware AI applications on the **Context Layer** platform.

For further information, check out the [API Reference](./api-reference.md) and [Development Guide](./development-guide.md).

```
