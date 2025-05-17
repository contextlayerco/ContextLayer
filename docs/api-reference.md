## API Reference

The **Context Layer** platform exposes a variety of APIs to interact with its decentralized architecture, enabling developers to build and integrate intelligent, context-aware AI agents on Ethereum. This section will guide you through the core APIs, how to use them, and their functionality.

### Base URL

The base URL for all Context Layer API calls is:

```
https://api.contextlayer.co
```

### Authentication

To use the **Context Layer** APIs, you must authenticate your requests using an API key. You can generate your API key by logging into the platform and visiting the API Key management section.

Add the following header to each API request:

```
Authorization: Bearer <your-api-key>
```

### API Endpoints

#### Get Blockchain Data

* **Endpoint**: `/api/v1/blockchain/data`
* **Method**: `GET`
* **Description**: Fetches real-time data from the Ethereum blockchain to provide context to AI agents.
* **Parameters**:

  * `block`: (optional) The block number to query. If not provided, the latest block data is returned.
  * `events`: (optional) A boolean indicating whether to include events in the response.
* **Response**:

```json
{
  "status": "success",
  "data": {
    "block_number": 12345678,
    "transactions": [...],
    "events": [...]
  }
}
```

#### Submit Transaction

* **Endpoint**: `/api/v1/blockchain/transaction`

* **Method**: `POST`

* **Description**: Submit a transaction to the Ethereum blockchain. This can be triggered by an AI agent based on context-driven decisions.

* **Body Parameters**:

  * `from_address`: The address from which the transaction is sent.
  * `to_address`: The address of the recipient.
  * `value`: The amount of Ether to send (in Wei).
  * `gas_limit`: The gas limit for the transaction.
  * `data`: Optional. Additional data for smart contract interaction.

* **Response**:

```json
{
  "status": "success",
  "transaction_hash": "0x1234567890abcdef"
}
```

#### Get AI Agent Status

* **Endpoint**: `/api/v1/agents/{agent_id}/status`

* **Method**: `GET`

* **Description**: Retrieves the current status of a specific AI agent.

* **Parameters**:

  * `agent_id`: The unique identifier of the AI agent.

* **Response**:

```json
{
  "status": "success",
  "agent": {
    "id": "agent123",
    "status": "active",
    "last_interaction": "2025-05-17T15:30:00Z",
    "tasks_completed": 45
  }
}
```

#### Submit AI Agent Decision

* **Endpoint**: `/api/v1/agents/{agent_id}/decision`
* **Method**: `POST`
* **Description**: Submit a decision made by an AI agent to perform a specific task.
* **Body Parameters**:

  * `decision`: The action that the agent has decided to take. This could be interacting with a DeFi protocol, triggering a governance proposal, etc.
* **Response**:

```json
{
  "status": "success",
  "message": "Decision submitted successfully"
}
```

#### Get Smart Contract Data

* **Endpoint**: `/api/v1/smart_contract/{contract_address}/data`

* **Method**: `GET`

* **Description**: Fetches the state data of a specific smart contract on Ethereum.

* **Parameters**:

  * `contract_address`: The address of the smart contract on Ethereum.

* **Response**:

```json
{
  "status": "success",
  "data": {
    "balance": 1000000000000000000,
    "owner": "0xabcdef1234567890"
  }
}
```

### Error Handling

All API responses include a `status` field that indicates whether the request was successful. In the case of an error, the response will contain an error message and a specific error code.

* **Error Response Example**:

```json
{
  "status": "error",
  "message": "Invalid API Key",
  "code": 401
}
```

### Rate Limits

To ensure the availability and performance of the **Context Layer** APIs, we enforce rate limits for all requests. The rate limits are:

* **Requests per minute**: 60
* **Requests per day**: 1000

If you exceed the rate limit, you will receive an HTTP `429 Too Many Requests` status with a message indicating the remaining available requests.

### Webhooks

For real-time updates and interactions, you can use **Webhooks** to listen to specific events such as transactions, AI agent decisions, or smart contract interactions.

To set up a webhook, send a `POST` request to the `/api/v1/webhooks` endpoint with the following body:

```json
{
  "url": "https://your-webhook-url.com",
  "events": ["transaction", "agent_decision"]
}
```

You will receive notifications to the specified URL whenever one of the selected events occurs.

