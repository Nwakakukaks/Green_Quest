import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const accounts = [];
if (process.env.PRIVATE_KEY_1) {
  accounts.push(process.env.PRIVATE_KEY_1);
}
if (process.env.PRIVATE_KEY_2) {
  accounts.push(process.env.PRIVATE_KEY_2);
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    polygon_mumbai: { url: process.env.RPC_URL_MUMBAI || "", accounts: accounts },
    "5ireTestnet": {
      url: process.env.RPC_URL_5IRE_TESTNET || "",
      accounts: accounts,
    },
    mantleTestnet: {
      url: process.env.RPC_URL_MANTLE_TESTNET || "",
      accounts: accounts,
    },
    xdcTestnet: {
      url: process.env.RPC_URL_XDC_TESTNET || "",
      accounts: accounts,
    },
  },

};

export default config;
