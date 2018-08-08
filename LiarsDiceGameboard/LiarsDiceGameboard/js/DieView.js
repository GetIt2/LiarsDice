class DieView {

    constructor(value) {
        this.value = value;
    }

    GetDieFace(dieNumber, playerNumber) {
        var img = document.createElement("img");
        img.className = "die";

        dieNumber = dieNumber - 1;

        switch (this.value) {
            case 1:
                img.src = "images/dice-face-1.png";
                break;
            case 2:
                img.src = "images/dice-face-2.png";
                break;
            case 3:
                img.src = "images/dice-face-3.png";
                break;
            case 4:
                img.src = "images/dice-face-4.png";
                break;
            case 5:
                img.src = "images/dice-face-5.png";
                break;
            case 6:
                img.src = "images/dice-face-6.png";
        }

        var column =
            dieNumber < 3 ? 1 + dieNumber * 2 :
                dieNumber === 3 ? 2 :
                    4;
        img.style = `grid-column: ${column} / span 2;`;

        document.getElementsByClassName("dice")[playerNumber - 1].appendChild(img);
    }
}