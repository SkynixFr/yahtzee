import { describe, expect, test } from '@jest/globals';
import Yahtzee from './yahtzee';

describe('GetPointsFromRoll', () => {
	test('Vérification 1 = 1*nombre de dé =1', () => {
		//Arrange
		const dice = [1, 1, 1, 2, 3];
		const category = 'Ones';
		const expectedScore = 3;

		//Act
		const actualScore = Yahtzee.calculateScore(dice, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});
