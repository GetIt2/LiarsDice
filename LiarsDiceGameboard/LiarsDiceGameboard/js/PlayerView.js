class PlayerView {
    constructor() {
    }

    createBoxes(playerNumber) {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = `box${playerNumber}`;
        box.style.padding = "2% 0% 2% 8%";
        if (playerNumber < 7) document.getElementsByClassName("grid-item")[playerNumber].appendChild(box);
        else if (playerNumber > 7) document.getElementsByClassName("grid-item")[playerNumber+1].appendChild(box);


        var dice = document.createElement("div");
        dice.className = "dice";
        dice.style.display = "grid";
        dice.style.gridTemplateColumns = "auto auto auto";
        if (playerNumber < 7) document.getElementsByClassName("boxes")[playerNumber].appendChild(dice);
        else if (playerNumber > 7) document.getElementsByClassName("boxes")[playerNumber].appendChild(dice);
    }
}