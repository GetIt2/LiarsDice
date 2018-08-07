class DieModel {

    constructor(dieNumber, playerNumber) {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.dieNumber = dieNumber;
        this.ShowDie(this.dieNumber, playerNumber);
    }

    ShowDie(dieNumber, playerNumber) {
        var dieView = new DieView(this.value);
        dieView.GetDieFace(dieNumber, playerNumber);
    }
}