import ethers from 'ethers'

import abi from './woas-abi.json' assert { type: "json" };
import { mainnetRpc, testnetRpc, wOASAddress } from './constants.mjs'

const network = process.argv.includes('--network=mainnet') ? 'mainnet' : 'testnet';
const rpc = network === 'mainnet' ? mainnetRpc : testnetRpc;
console.log(`Using ${network} RPC: ${rpc}`)

const provider = new ethers.providers.JsonRpcProvider(rpc)

const main = async () => {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(wOASAddress, abi, signer)
  const tx = await contract.deposit({value: ethers.utils.parseEther("1")})
  return tx.hash
}

main().then(console.log).catch(console.error)
