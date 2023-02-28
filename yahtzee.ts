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

export function calculateScoreTOFandFOF(dices: number[], nbCount: number) {
	let score: number = 0;
	let counts: { [key: number]: number } = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0
	};

	for (let i = 0; i < dices.length; i++) {
		if (!counts[dices[i]]) {
			counts[dices[i]] = 1;
		} else {
			counts[dices[i]] += 1;
		}
	}

	for (const [count, value] of Object.entries(counts)) {
		if (value >= nbCount) {
			score = dices.reduce((sum: number, current: number) => sum + current);
		}
	}

	return score;
}
