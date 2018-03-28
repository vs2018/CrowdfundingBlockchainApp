import web3 from './web3'

import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC2c2A4e277800Ab8fC42F491B4561BB4daad158E'
)

export default instance
