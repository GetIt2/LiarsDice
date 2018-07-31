class PlayerView {
    constructor() {
    }

    createBoxes(playerNumber) {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = `box${playerNumber}`;
        box.style.padding = "2% 0% 2% 8%";
        document.getElementsByClassName("grid-item")[1].appendChild(box);
    }
}