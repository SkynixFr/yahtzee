import { describe, expect, test } from '@jest/globals';
import {
	calculateScore,
	calculateScoreTOFandFOF,
	calculateScoreFH,
	calculateScoreSS,
	calculateScoreLS
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
		const actualScore = calculateScoreTOFandFOF(dices, 3);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul de la combinaison Four of a kind', () => {
		//Arrange
		const dices = [1, 1, 1, 4, 1];
		const expectedScore = 8;

		//Act
		const actualScore = calculateScoreTOFandFOF(dices, 4);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul de la combinaison Full House', () => {
		//Arrange
		const dices = [1, 1, 1, 3, 3];
		const expectedScore = 25;

		//Act
		const actualScore = calculateScoreFH(dices);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
	test('Vérification du calcul de la combinaison Small Straight', () => {
		//Arrange
		const dices = [2, 3, 4, 5, 2];
		const expectedScore = 30;

		//Act
		const actualScore = calculateScoreSS(dices);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});

	test('Vérification du calcul de la combinaison large Straight', () => {
		//Arrange
		const dices = [2, 3, 4, 5, 6];
		const expectedScore = 40;

		//Act
		const actualScore = calculateScoreLS(dices);

		//Assert
		expect(actualScore).toEqual(expectedScore);
	});
});
