import web3 from './web3'

import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xfA8b010a3107d15f761fA6e68F579D4771E00681'
)

export default instance
