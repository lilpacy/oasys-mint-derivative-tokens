import ethers from 'ethers'

import abi from './soas-abi.json' assert { type: "json" };
import { mainnetRpc, sOASAddress, testnetRpc } from './constants.mjs'

const network = process.argv.includes('--network=mainnet') ? 'mainnet' : 'testnet';
const rpc = network === 'mainnet' ? mainnetRpc : testnetRpc;
console.log(`Using ${network} RPC: ${rpc}`)

const provider = new ethers.providers.JsonRpcProvider(rpc)

const main = async () => {
  const _since = await provider.getBlockNumber()
  const since = (await provider.getBlock(_since)).timestamp + 1_000_000_000
  const until = since + 1_000_000_000
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(sOASAddress, abi, signer)
  const publicAddress = process.env.PUBLIC_ADDRESS
  console.log(`Minting SOAS for ${publicAddress}`)
  const tx = await contract.mint(
    publicAddress,
    since,
    until,
    {
      value: ethers.utils.parseEther("1"),
      gasLimit: 10_000_000
    }
  )
  return tx.hash
}

main().then(console.log).catch(console.error)
