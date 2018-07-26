class PlayerModel {
    constructor(amountOfDice) {
        this.dice = [];
        this.addDie(amountOfDice);
        this.showPlayer();
    }
    addDie(amountOfDice) {
        for (var i = 0; i < amountOfDice; i++) {
            this.dice.push(new DieModel());
        }
    }
    showPlayer() {
        var player = new PlayerView();
        player.addBoxes();
    }
}