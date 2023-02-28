var dices = [];
var categories = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];
function rollDice() {
    for (var i = 0; i < 5; i++) {
        dices.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(dices);
}
rollDice();
