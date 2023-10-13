require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/hp2tJEACEpm3efLZDKYl2vuqjroPvXsi',
      accounts: ['37905ff1fc2c9d0cb1c9d9302b81793143fd69284f5ed07e3992384ccacc0517'],
    },
  },
};