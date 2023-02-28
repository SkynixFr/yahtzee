let dices: number[] = [];
let categories = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];

export function rollDice() {
	for (let i = 0; i < 5; i++) {
		dices.push(Math.floor(Math.random() * 6) + 1);
	}
}

export function calculateScore(dices: number[], category: string) {
	let score: number = 0;
	for (let i = 0; i < 5; i++) {
		if (category === 'Ones' && dices[i] === 1) {
			score += 1;
		}
		if (category === 'Twos' && dices[i] === 2) {
			score += 2;
		}
	}
	return score;
}
