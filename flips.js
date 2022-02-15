import { createRequire } from 'module';
import { coinFlips, countFlips } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number'];
const number = args['number'] || 1;


console.log(coinFlips(number));
console.log(countFlips(coinFlips(number)));