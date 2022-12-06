require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    testnet: {
      url: "https://bsctestapi.terminet.io/rpc",
      chainId: 97,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
};
