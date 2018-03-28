import Web3 from 'web3'

let web3

if (typeof window !== 'undefinedt' && typeof window.web3 !== 'undefined') {
//we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider)
} else {
  //We are on the server OR the user is not running metask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/hGWKtiJNtJLQY1D2rCEt'
  )
  web3 = new Web3(provider)
}

export default web3
