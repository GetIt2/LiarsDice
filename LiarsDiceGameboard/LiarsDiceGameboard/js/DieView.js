class DieView {
    constructor() {
        this.number = DieModel.number;
    }
    GetDieFace() {
        var img = document.createElement("img");
        img.className = "die";
        
        switch (this.number) {
            case 1:
                img.src = "dice-face-1.png";
                break;
            case 2:
                img.src = "dice-face-2.png";
                break;
            case 3:
                img.src = "dice-face-3.png";
                break;
            case 4:
                img.src = "dice-face-4.png";
                break;
            case 5:
                img.src = "dice-face-5.png";
                break;
            case 6:
                img.src = "dice-face-6.png";
                break;
        }

        var column =
            y < 3 ? 1 + y * 2 :
                y === 3 ? 2 :
                4;
        img.style = `grid-column: ${column} / span 2;`;
    }
}