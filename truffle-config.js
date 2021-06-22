const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          //private keys array
          [process.env.WALLET_PRIVATE_KEY],
          //url to ethereum node
          "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
