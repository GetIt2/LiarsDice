class BoardModel {


    constructor(playerAmount) {
        this.playerDice = new DiceModel[playerAmount];
        this.addPlayer() = function () {
            for (var i = 0; i < this.playerDice.length; i++) {
                this.playerDice[i] = new DiceModel();
            }
        }
    }

}
