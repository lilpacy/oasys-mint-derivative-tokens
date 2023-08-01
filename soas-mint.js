const ethers = require('ethers')

const abi = require('./soas-abi.json')
const provider = new ethers.providers.JsonRpcProvider('https://rpc.testnet.oasys.games')
const sOASAddress = '0x5200000000000000000000000000000000000002'

const main = async () => {
  const _since = await provider.getBlockNumber()
  const since = (await provider.getBlock(_since)).timestamp + 1_000_000_000
  const until = since + 1_000_000_000
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(sOASAddress, abi, signer)
  const tx = await contract.mint(
    '0xD75F45a1922869fEE15f87EC5451772c087347D9',
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
