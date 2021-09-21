const Web3 = require('web3');

console.log('working..');

const url = 'https://mainnet.infura.io/v3/3a25827bef8e449d85750255d6521b3d';

const web3 =  new Web3(url);

web3.eth.getBlockNumber().then(res => console.log(res));