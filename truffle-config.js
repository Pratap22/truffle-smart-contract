const HDWalletProvider = require("@truffle/hdwallet-provider");

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
      gas: 3500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
