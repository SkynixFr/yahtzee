import { describe, expect, test } from '@jest/globals';
import calculateScore from './yahtzee';

describe('GetPointsFromRoll', () => {
	test('Vérification 1 = 1*nombre de dé =1', () => {
		//Arrange
		const dices = [1, 1, 1, 2, 3];
		const category = 'Ones';
		const expectedScore = 3;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});
