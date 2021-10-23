const Web3 = require('web3');
require('dotenv').config();

console.log('working..');
const token = process.env.TOKEN;

const url = `https://mainnet.infura.io/v3/${token}`;

const web3 =  new Web3(url);

web3.eth.getBlockNumber().then(res => console.log(res));
