const {ethers} = require("hardhat")

const bn = (number) => {
    return ethers.utils.parseEther(String(number));
}

const n = (bigNumber) => {
    return ethers.utils.formatEther(bigNumber);
}

module.exports = {
    bn, n
}