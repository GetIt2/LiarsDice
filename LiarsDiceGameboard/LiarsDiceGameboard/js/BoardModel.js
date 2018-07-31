class BoardModel {

    constructor(playerAmount, gridElements, playerDice) {
        this.showBoard(gridElements);
        this.players = [];
        this.addPlayers(playerAmount, playerDice);
        this.addInfo();
    }

    addPlayers(playerAmount, playerDice) {
        for (var i = 0; i < playerAmount; i++) {
            this.players.push(new PlayerModel(i, playerDice));
        }
    }

    addInfo() {
        var info = new InfoModel();
        info.showInfo();
    }

    showBoard(gridElements) {
        var board = new BoardView(gridElements);
        board.createGrid();
        return board;
    }
}

