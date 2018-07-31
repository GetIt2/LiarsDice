class DieModel {

    constructor(dieNumber) {
        this.number = Math.floor((Math.random() * 6) + 1);
        this.dieNumber = dieNumber;
        this.ShowDie(this.dieNumber);
    }

    ShowDie(dieNumber) {
        var dieView = new DieView(this.number);
        dieView.GetDieFace(dieNumber);
    }
}