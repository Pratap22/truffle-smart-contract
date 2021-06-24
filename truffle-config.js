const HDWalletProvider = require("@truffle/hdwallet-provider");

require("dotenv").config();

module.exports = {
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://rinkeby.infura.io/v3/" + process.enc.INFURA_API_KEY
        );
      },
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
