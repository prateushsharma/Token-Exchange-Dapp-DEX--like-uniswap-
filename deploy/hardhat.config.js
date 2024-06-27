// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
// const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_PRIVATE_KEY";
// module.exports = {
//   solidity: "0.8.0",
//   defaultNetwork: "matic",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//   },
// };
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_SEPOLIA_RPC = "https://sepolia.infura.io/v3/c285808037fb4d4bac7e081597376da8"; // Use your Infura project ID
const NEXT_PUBLIC_PRIVATE_KEY = "3c326b2ef0a8899bce095a492363ff06e3c5312a4825f71b452275e6851c50dc";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
