import { describe, expect, test } from '@jest/globals';
import {
	calculateScore,
	calculateScoreTOF,
	calculateScoreFOF
} from './yahtzee';

describe('Upper section combinations', () => {
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

	test('Vérification du calcul des dès de valeur 4', () => {
		//Arrange
		const dices = [4, 4, 4, 4, 5];
		const category = 'Fours';
		const expectedScore = 16;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul des dès de valeur 5', () => {
		//Arrange
		const dices = [1, 3, 5, 2, 3];
		const category = 'Fives';
		const expectedScore = 5;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul des dès de valeur 6', () => {
		//Arrange
		const dices = [1, 6, 6, 6, 3];
		const category = 'Sixes';
		const expectedScore = 18;

		//Act
		const actualScore = calculateScore(dices, category);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});

describe('Lower section combinations', () => {
	test('Vérification du calcul de la combinaison Three of a kind', () => {
		//Arrange
		const dices = [1, 1, 1, 2, 3];
		const expectedScore = 8;

		//Act
		const actualScore = calculateScoreTOF(dices);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul de la combinaison Four of a kind', () => {
		//Arrange
		const dices = [1, 1, 1, 4, 1];
		const expectedScore = 8;

		//Act
		const actualScore = calculateScoreFOF(dices);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});
