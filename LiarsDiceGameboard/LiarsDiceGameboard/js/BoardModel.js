class BoardModel {
    
    
    constructor(playerAmount) {
        this.playerDice = new DiceModel[playerAmount];

    }

     addPlayer() {
        for (var i = 0; i < this.playerDice.length; i++) {
            this.playerDice[i] = new DiceModel();
        }
    }
    
}
