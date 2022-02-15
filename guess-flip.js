import { createRequire } from 'module';
import { flipACoin } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['call'];
const call = args['call'];

if(call == null){
    console.log('Error: no input. \n Usage: node guess-flip --call=[heads|tails]')
}
else if(call == 'heads' || call == 'tails'){
    console.log(flipACoin(call))
}else{
    console.log('Error: incorrect input. \n Usage: node guess-flip --call=[heads|tails]')
}