class DiceModel {


    constructor() {
        this.dice = new DieModel[5];

    }

    getDice() {
        for (var i = 0; i < this.dice.length; i++) {
            this.dice[i] = new DieModel();
        }
    }

}