# Quick Start Guide

Welcome to the **Context Layer** Quick Start Guide! This guide will walk you through the essential steps to get up and running with **Context Layer** quickly. We’ll cover the installation process, basic configuration, and deploying your first AI agent.

## Prerequisites

Before starting, make sure you have the following:

* **Node.js** (version 14 or higher)
* **npm** (Node Package Manager)
* A basic understanding of **blockchain** concepts, particularly Ethereum
* An Ethereum wallet (e.g., MetaMask) for interacting with the blockchain

## Step 1: Install Dependencies

First, you need to clone the repository and install the required dependencies.

1. **Clone the Repository**

   ```bash
   git clone https://github.com/contextlayerco/contextlayer.git
   cd contextlayer
   ```

2. **Install Dependencies**

   Use npm to install the necessary dependencies:

   ```bash
   npm install
   ```

## Step 2: Set Up Environment Variables

To get the platform running, you need to configure environment variables for blockchain communication and other settings.

1. Create a `.env` file in the root of the project:

   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and configure the following:

   * **ETHEREUM\_RPC\_URL**: URL to connect to the Ethereum network (use an Infura or Alchemy endpoint)
   * **WALLET\_PRIVATE\_KEY**: Your Ethereum wallet’s private key (for transactions)
   * **CONTEXT\_LAYER\_API\_KEY**: Your Context Layer API key for interacting with the protocol

   Example:

   ```
   ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
   WALLET_PRIVATE_KEY=your_wallet_private_key
   CONTEXT_LAYER_API_KEY=your_api_key
   ```

## Step 3: Run the Local Development Server

Once you’ve set up the environment variables, start the local development server:

```bash
npm start
```

This command will initialize the **Context Layer** platform locally. Your setup should now be live at `http://localhost:3000`.

## Step 4: Deploy Your First AI Agent

1. **Create an AI Agent**: You can create and train your AI agent using the **ContextAI Lab** interface provided in the platform. The agent will need to be configured to interact with the Ethereum blockchain.

2. **Deploy the Agent**: After training the agent, you can deploy it using the provided deployment script:

   ```bash
   npm run deploy-agent
   ```

3. **Monitor Interactions**: Once deployed, the AI agent will start interacting with the Ethereum blockchain, processing data, and executing tasks.

## Step 5: Interact with Ethereum

To interact with the Ethereum blockchain, the platform will allow you to execute smart contract calls and send transactions from your deployed AI agents. You can do this directly through the **Context Layer Protocol** or via the web interface.

### Example Interaction: Trigger a DeFi Transaction

You can write a simple function in your AI agent to trigger a DeFi transaction:

```javascript
async function interactWithDeFiProtocol() {
    const contract = new web3.eth.Contract(abi, contractAddress);
    await contract.methods.executeTrade(tokenA, tokenB, amount).send({ from: walletAddress });
}
```

This function will execute a trade between two tokens on a decentralized exchange.

## Step 6: Monitor and Scale

Once your agent is deployed, you can monitor its performance and scale it using the **LayerMesh** infrastructure. The decentralized nature of **LayerMesh** ensures that the agent can scale to handle increased workload and optimize its performance.

---

**Congratulations! You’ve successfully set up the **Context Layer** platform and deployed your first AI agent. For more advanced features, check out the [Development Guide](./development-guide.md) to learn how to customize and extend the platform.**

---

