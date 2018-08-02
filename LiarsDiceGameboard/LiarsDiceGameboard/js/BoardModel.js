class BoardModel {

    constructor(playerAmount, gridElements, playerDice) {
        this.showBoard(gridElements);
        this.players = [];
        this.addInfo();
        this.addPlayers(playerAmount, playerDice);
    }

    addPlayers(playerAmount, playerDice) {
        for (var i = 0; i < playerAmount; i++) {
            this.players.push(new PlayerModel(i + 1, playerDice));
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

