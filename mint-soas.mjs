import { soasAbi } from './soas-abi.mjs';
import {
  mainnetChain,
  mainnetRpc,
  sOASAddress,
  testnetChain,
  testnetRpc,
} from './constants.mjs';
import {
  createPublicClient,
  createWalletClient,
  getContract,
  http,
  parseEther,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const network = process.argv.includes('--network=mainnet')
  ? 'mainnet'
  : 'testnet';
const rpc = network === 'mainnet' ? mainnetRpc : testnetRpc;
const chain = network === 'mainnet' ? mainnetChain : testnetChain;
console.log(`Using ${network} RPC: ${rpc}`);

const account = privateKeyToAccount('0x' + process.env.PRIVATE_KEY);
const publicAddress = process.env.PUBLIC_ADDRESS;

const publicClient = createPublicClient({
  account,
  // chain,
  transport: http(rpc),
});
const walletClient = createWalletClient({
  account,
  chain,
  transport: http(rpc),
});

const contract = getContract({
  address: sOASAddress,
  abi: soasAbi,
  walletClient,
});

const main = async () => {
  const _since = await publicClient.getBlockNumber();
  const since =
    (await publicClient.getBlock(_since)).timestamp + 1_000_000_000n;
  const until = since + 1_000_000_000n;
  console.log(`Minting SOAS for ${publicAddress}`);

  const hash = await contract.write.mint([publicAddress, since, until], {
    value: parseEther('1'),
  });
  return hash;
};

main().then(console.log).catch(console.error);
