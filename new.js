const Units= require('cryptocurrency-unit-convert')
const convertedETH = Units.convertETH('1', 'btc', 'eth')

console.log(convertedETH);