class PlayerModel {

    constructor(playerNumber, amountOfDice) {
        this.playerNumber = playerNumber;
        this.showPlayer(this.playerNumber);
        this.dice = [];
        this.addDie(amountOfDice, playerNumber);
    }

    addDie(amountOfDice, playerNumber) {
        for (var i = 0; i < amountOfDice; i++) {
            this.dice.push(new DieModel(i + 1, playerNumber));
        }
    }

    showPlayer(playerNumber) {
        var player = new PlayerView();
        player.createBoxes(playerNumber);
    }
}