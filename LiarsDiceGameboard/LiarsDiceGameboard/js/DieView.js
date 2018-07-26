class DieView {
    constructor() {
        this.number = DieModel.number;
    }
    GetDieFace() {
        switch (this.number) {
            case 1:
                return img.src = "dice-face-1.png";
            case 2:
                return img.src = "dice-face-2.png";
            case 3:
                return img.src = "dice-face-3.png";
            case 4:
                return img.src = "dice-face-4.png";
            case 5:
                return img.src = "dice-face-5.png";
            case 6:
                return img.src = "dice-face-6.png";

            default:
                return null;
        }
    }
}