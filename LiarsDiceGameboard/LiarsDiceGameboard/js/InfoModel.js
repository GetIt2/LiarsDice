class InfoModel {

    constructor() {
        this.playerNumber = 5;
        this.dieNumber = 7;
        this.dieValue = 4;
    }

    showInfo() {
        var infoView = new InfoView(this.playerNumber, this.dieNumber, this.dieValue);
        infoView.createBox();
    }



}  