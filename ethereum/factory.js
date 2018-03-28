import web3 from './web3'

import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x13283B793e980860567E8cf44B37B1e89154fBBd'
)

export default instance
