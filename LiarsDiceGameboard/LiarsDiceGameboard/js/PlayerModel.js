class PlayerModel {

    constructor(playerNumber, amountOfDice) {
        this.playerNumber = playerNumber;
        this.showPlayer(this.playerNumber);
        this.dice = [];
        this.addDie(amountOfDice);
    }

    addDie(amountOfDice) {
        for (var i = 0; i < amountOfDice; i++) {
            this.dice.push(new DieModel(i));
        }
    }

    showPlayer(playerNumber) {
        var player = new PlayerView();
        player.createBoxes(playerNumber);
    }
}