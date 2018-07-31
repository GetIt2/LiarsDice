class BoardModel {

    constructor(playerAmount, gridElements) {
        this.showBoard(gridElements);
        this.players = [];
        this.addPlayers(playerAmount);
        this.addInfo();
    }

    addPlayers(playerAmount) {
        for (var i = 0; i < playerAmount; i++) {
            this.players.push(new PlayerModel(i, 5));
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

