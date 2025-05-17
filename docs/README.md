# Context Layer

A decentralized protocol for real-time decision-making on Ethereum blockchain.

---

## Features

- Real-time AI-powered decision-making for decentralized applications.
- Ethereum blockchain integration (ERC20).
- Scalable and modular architecture for AI models.

---

## Getting Started

To get started with the project, follow the setup instructions below.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Ethereum account (e.g., via MetaMask or Infura)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ContextLayer.git
   ```
2. Install the required dependencies:
```bash
cd ContextLayer
npm install
```
3. Create a `.env` file in the root directory and add your Ethereum credentials:
```bash
INFURA_PROJECT_ID=your_infura_project_id
PRIVATE_KEY=your_ethereum_private_key
```

---

## Usage

**1. Start the server:**
```
npm start
```

**2. The server will be available at** `http://localhost:3000`

**3. Check the status of the server by visiting`http://localhost:3000/status` It should return a simple message confirming the server is running:**
```json
{
  "status": "Server is running"
}
```

**4. Access Ethereum interaction endpoints (coming soon):**
If you have Ethereum interaction set up (e.g., using Web3.js or ethers.js), you will be able to access endpoints that interact with the Ethereum blockchain. These endpoints will be documented as we build them.

---

## Contributing

We welcome contributions to the project! If you'd like to contribute, please fork the repository and create a pull request with your proposed changes.

### Steps:
1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push the changes to your fork.
6. Create a pull request to the main repository.

Please make sure to follow the coding guidelines and write clear commit messages.

---

## License
This project is licensed under the Apache License 2.0.

---

## Roadmap

- [ ] Integrate AI decision-making with Ethereum smart contracts.
- [ ] Add user authentication via MetaMask.
- [ ] Implement decentralized data storage using IPFS.
- [ ] Set up automated testing for the project.

---

## API Reference

### `GET /status`

Returns a simple status message confirming the server is running.

**Example Response**:
```json
{
  "status": "Server is running"
}
```

### `GET /blocknumber`

Returns a simple status message confirming the server is running.

**Example Response**:
```json
{
  "blockNumber": 12837456
}
```
