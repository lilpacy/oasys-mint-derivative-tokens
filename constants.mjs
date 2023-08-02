// https://github.com/oasysgames/oasys-validator/blob/72aafde1f7484fbe20589b5f67b528947ba11fa5/contracts/oasys/contracts.go#L25
export const wOASAddress = '0x5200000000000000000000000000000000000001';
// https://github.com/oasysgames/oasys-validator/blob/72aafde1f7484fbe20589b5f67b528947ba11fa5/contracts/oasys/contracts.go#L29
export const sOASAddress = '0x5200000000000000000000000000000000000002';

export const mainnetRpc = 'https://rpc.mainnet.oasys.games';
export const mainnetChain = {
  id: 248,
  name: 'Oasys',
  network: 'oasys',
  nativeCurrency: {
    decimals: 18, // Assuming Oasys uses 18 decimal places. Change this if it's different.
    name: 'Oasys', // Assuming the native currency's name is Oasys. Change this if it's different.
    symbol: 'OAS', // Assuming the native currency's symbol is OSY. Change this if it's different.
  },
  rpcUrls: {
    public: { http: ['https://rpc.mainnet.oasys.games'] },
    default: { http: ['https://rpc.mainnet.oasys.games'] },
  },
  blockExplorers: {
    etherscan: { name: 'OasysScan', url: 'https://scan.oasys.games/' },
    default: { name: 'OasysScan', url: 'https://scan.oasys.games/' },
  },
  contracts: {
    // If there are any specific contracts for Oasys, add them here.
    // For example:
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
};

export const testnetRpc = 'https://rpc.testnet.oasys.games';
export const testnetChain = {
  id: 9372,
  name: 'Oasys Testnet',
  network: 'oasysTestnet',
  nativeCurrency: {
    decimals: 18, // Assuming Oasys Testnet uses 18 decimal places. Change this if it's different.
    name: 'Oasys Testnet', // Assuming the native currency's name is Oasys Testnet. Change this if it's different.
    symbol: 'OAS', // Assuming the native currency's symbol is TOSY. Change this if it's different.
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.oasys.games'] },
    default: { http: ['https://rpc.testnet.oasys.games'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'OasysScan Testnet',
      url: 'https://scan.testnet.oasys.games/',
    },
    default: {
      name: 'OasysScan Testnet',
      url: 'https://scan.testnet.oasys.games/',
    },
  },
  contracts: {
    // If there are any specific contracts for Oasys Testnet, add them here.
    // For example:
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
};
