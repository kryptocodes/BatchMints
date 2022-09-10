const {expect, assert} = require('chai')
const {ethers} = require('hardhat')
const { ga } = require('./helpers/address')
const { bn } = require('./helpers/bn')


describe("ERC721 Token Test Suite", async function() {
    let token
  

    before(async function() {
        
        const Token = await ethers.getContractFactory("erc721")
        token = await Token.deploy()
        await token.deployed()

     
     
    
       
    })



   


    


})