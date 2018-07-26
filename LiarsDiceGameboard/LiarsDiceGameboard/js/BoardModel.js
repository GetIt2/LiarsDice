class BoardModel {

    constructor(playerAmount, gridElements) {
        this.players = [];
        this.addPlayers(playerAmount);
        this.showBoard(gridElements);
    }

    addPlayers(playerAmount) {
        for (var i = 0; i < playerAmount; i++) {
            this.players.push(new PlayerModel(5));
        }
    }

    showBoard(gridElements) {
        var board = new BoardView(gridElements);
        board.createGrid();
        return board;
    }
}

