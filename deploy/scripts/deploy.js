// const hre = require("hardhat");

// async function main() {
//     const CustomDex = await hre.ethers.getContractFactory("CustomDex");
//     const customDex = await CustomDex.deploy();

//     await customDex.deployed();
//     console.log("Namaste");
//     console.log(` CustomDex: ${customDex.address}`);

// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//     });
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());
  
    const CustomDex = await ethers.getContractFactory("CustomDex");
    const customDex = await CustomDex.deploy();
  
    console.log("Contract deployed to address:", customDex.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  