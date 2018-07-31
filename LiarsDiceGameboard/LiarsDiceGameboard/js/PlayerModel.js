class PlayerModel {

    constructor(playerNumber, amountOfDice) {
        this.dice = [];
        this.playerNumber = playerNumber;
        this.addDie(amountOfDice);
       // this.showPlayer(this.playerNumber);
    }

    addDie(amountOfDice) {
        for (var i = 0; i < amountOfDice; i++) {
            this.dice.push(new DieModel());
        }
    }

    //showPlayer(playerNumber) {
    //    var player = new PlayerView();
    //    player.createBoxes(playerNumber);
    //}
}