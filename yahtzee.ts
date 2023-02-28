let dices: number[] = [];
let categories = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];

function rollDice() {
	for (let i = 0; i < 5; i++) {
		dices.push(Math.floor(Math.random() * 6) + 1);
	}
	console.log(dices);
}
//rollDice();

export default function calculateScore(dices: number[], category: string) {
	let score: number = 0;
	for (let i = 0; i < 5; i++) {
		if (category === 'Ones') {
			score += 1;
		}
	}
	return score;
}
