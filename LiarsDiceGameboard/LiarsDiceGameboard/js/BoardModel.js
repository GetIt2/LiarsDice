class BoardModel {

    constructor(playerAmount) {
        this.players = [];
        this.addPlayers(playerAmount);
    }
    addPlayers(playerAmount) {
        for (var i = 0; i < playerAmount; i++) {
            this.players.push(new PlayerModel(5));
        }
    }
}

