// import "../styles/globals.css";

// import merge from "lodash/merge";
// import "@rainbow-me/rainbowkit/styles.css";

// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
//   midnightTheme,
// } from "@rainbow-me/rainbowkit";

// import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import {infuraProvider} from "wagmi/providers/infura";
// import { FunctionFragment } from "ethers/lib/utils";

// const { chains, provider } = configureChains(
//   [chain.sepolia],
//   [infuraProvider({ apiKey: "c285808037fb4d4bac7e081597376da8", priority: 1 })]
// );

// const { connectors } = getDefaultWallets({
//   appName: "Custom Dex",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   providers,
// });

// const myTheme = merge(midnightTheme(), {
//   colors :{
//     accentColor: "#18181b",
//     accentColorForeground: "#fff",
//   }
// });

// function MyApp ({ Component, pageProps }){
//   return (
//     <WagmiConfig client = {wagmiClient} >
//       <RainbowKitProvider chains={chains} theme={myTheme}>
//         <Component {...pageProps} />
//       </RainbowKitProvider>
//     </WagmiConfig>
//   )
// }

// export default MyApp;



import "../styles/globals.css";

import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { FunctionFragment } from "ethers/lib/utils";

// Sepolia chain configuration
const sepolia = {
  id: 11155111, // Sepolia chain ID
  name: 'Sepolia',
  network: 'sepolia',
  nativeCurrency: {
    name: 'Sepolia ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://sepolia.infura.io/v3/c285808037fb4d4bac7e081597376da8',
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [sepolia],
  [
    infuraProvider({ apiKey: "c285808037fb4d4bac7e081597376da8", priority: 1 }),
    jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors :{
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  }
});

function MyApp ({ Component, pageProps }){
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp;




