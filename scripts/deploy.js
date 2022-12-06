const hre = require("hardhat");

async function main() {
  const DOOMToken = await hre.ethers.getContractFactory("Token");
  const doomToken = await DOOMToken.deploy();
  await doomToken.deployed();

  console.log('Token address', doomToken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
