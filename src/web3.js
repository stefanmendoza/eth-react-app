const Web3 = require('web3');

const INFURA_WS_URL = "wss://mainnet.infura.io/ws/v3/9c14386d257444e480caa1bc85f8ffd4"
const web3 = new Web3(new Web3.providers.WebsocketProvider(INFURA_WS_URL));

export default web3