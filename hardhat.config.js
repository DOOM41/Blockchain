require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      chainId: 97,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
};
