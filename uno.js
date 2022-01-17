const ar = process.argv.slice(2);
const scoref = require(ar[0])

const lengF = Object.keys(scoref.finished).length;
console.log(`Players finished: ` + lengF + '\n');
for (let i = 0; i < lengF; i++){
	console.log(`User: ` + scoref['finished'][i]['name'] + '#' + scoref['finished'][i]['discriminator']); //User
	console.log(`ID: ` + scoref['finished'][i]['id']); //ID
	console.log(`Played cards: ` + scoref['finished'][i]['cardsPlayed']); //Cards
	console.log('------------------------------------');
}

const lengQ = Object.keys(scoref.quit).length;
console.log(`Players quit: ` + lengQ + '\n');
for (let i = 0; i < lengQ; i++){
	console.log(`User: ` + scoref['finished'][i]['name'] + '#' + scoref['quit'][i]['discriminator']); //User
	console.log(`ID: ` + scoref['quit'][i]['id']); //ID
	console.log(`Played cards: ` + scoref['quit'][i]['cardsPlayed']); //Cards
	console.log('------------------------------------');
}