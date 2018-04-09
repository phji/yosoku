require('babel-register');
require('babel-polyfill');

const testRPC = require('./providers/testrpc');

const truffleOptions = {
  networks: {
    test: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      provider: testRPC,
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

module.exports = truffleOptions;
