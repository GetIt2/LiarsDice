class PlayerModel {
    constructor(amountOfDice) {
        this.dice = [];
        this.addDie(amountOfDice);
    }
    addDie(amountOfDice) {
        for (var i = 0; i < amountOfDice; i++) {
            this.dice.push(new DieModel());
        }
    }
}