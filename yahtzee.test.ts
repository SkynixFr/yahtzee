import { describe, expect, test } from '@jest/globals';
import { calculateScore } from './yahtzee';

describe('GetPointsFromRoll', () => {
	test('Vérification du calcul des dès de valeur 1', () => {
		//Arrange
		const dices = [1, 1, 1, 2, 3];
		const category = 'Ones';
		const expectedScore = 3;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul des dès de valeur 2', () => {
		//Arrange
		const dices = [1, 1, 2, 2, 3];
		const category = 'Twos';
		const expectedScore = 4;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul des dès de valeur 3', () => {
		//Arrange
		const dices = [1, 3, 2, 2, 3];
		const category = 'Threes';
		const expectedScore = 6;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});
