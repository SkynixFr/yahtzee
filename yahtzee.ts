let dices: number[] = [];
const categoriesPoints: { [key: string]: number } = {
	Ones: 1,
	Twos: 2,
	Threes: 3,
	Fours: 4,
	Fives: 5,
	Sixes: 6
};
export function rollDice() {
	for (let i = 0; i < 5; i++) {
		dices.push(Math.floor(Math.random() * 6) + 1);
	}
}

export function calculateScore(dices: number[], category: string) {
	let score: number = 0;

	for (let i = 0; i < dices.length; i++) {
		if (dices[i] === categoriesPoints[category]) {
			score += categoriesPoints[category];
		}
	}
	return score;
}
