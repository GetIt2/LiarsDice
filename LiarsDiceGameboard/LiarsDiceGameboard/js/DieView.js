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
            case 2:
                img.src = "dice-face-2.png";
            case 3:
                img.src = "dice-face-3.png";
            case 4:
                img.src = "dice-face-4.png";
            case 5:
                img.src = "dice-face-5.png";
            case 6:
                img.src = "dice-face-6.png";
        }

        var column =
            y < 3 ? 1 + y * 2 :
                y === 3 ? 2 :
                4;
        img.style = `grid-column: ${column} / span 2;`;
    }
}