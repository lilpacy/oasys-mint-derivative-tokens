import ethers from 'ethers'

import abi from './woas-abi.json' assert { type: "json" };
import { wOASAddress } from './constants.mjs'

const provider = new ethers.providers.JsonRpcProvider('https://rpc.mainnet.oasys.games')

const main = async () => {
  const _since = await provider.getBlockNumber()
  const since = (await provider.getBlock(_since)).timestamp + 1_000_000_000
  const until = since + 1_000_000_000
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(wOASAddress, abi, signer)
  const tx = await contract.deposit({value: ethers.utils.parseEther("1")})
  return tx.hash
}

main().then(console.log).catch(console.error)
