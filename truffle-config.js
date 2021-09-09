const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const web3 = new Web3();

require("dotenv").config();
module.exports = {
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://${process.env.NETWORK || "rinkeby"}.infura.io/v3/${
            process.env.INFURA_API_KEY
          }`
        );
      },
      network_id: process.env.NETWORK_ID || 4,
      gasPrice: web3.utils.toWei("100", "gwei"),
      skipDryRun: true,
    },
  },
};
