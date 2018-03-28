//compiler spits out 2 compiled files
//we make a new folder build where we can store compiled contracts. Steps 1-4 below
// we will delete build folder
// read campaign.sol from the contracts folder
// compile both contracts with solidity compiler
// write output to the build directory
// this ensures the most up to date build contracts exist

const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')


const buildPath = path.resolve(__dirname, 'build')
//below line deletes folder and contents
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
//below gets content of the solidity file
const source = fs.readFileSync(campaignPath, 'utf8')
// below compiles the code and we only want the 2 contracts. output is an object
console.log(solc.compile(source, 1));
const output = solc.compile(source, 1).contracts


//below creates the build folder
fs.ensureDirSync(buildPath)

// for in loop to iterate over the 2 keys in an object
for (let contract in output) {
//JsonSync writes a JSON file and takes 2 arguments
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '')+ '.json'),
    output[contract]
  )
}
