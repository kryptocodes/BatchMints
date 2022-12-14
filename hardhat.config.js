require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');
require('dotenv').config();
console.log(process.env.BSCSCAN_KEY);

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
/*task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});*/

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true
    }
  },
  networks: {
    testnet: {
      url:""//
     // accounts: []
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_KEY
  },
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    only: [':$erc721'],
    spacing: 2,
    pretty: true,
  }
};
