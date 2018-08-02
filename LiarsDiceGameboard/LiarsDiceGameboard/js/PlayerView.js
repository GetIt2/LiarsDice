class PlayerView {
    constructor() {
    }

    createBoxes(playerNumber) {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = `box${playerNumber}`;
        if (playerNumber <= 7) box.id = `box${playerNumber}`;
        if (playerNumber > 7) box.id = `box${playerNumber + 1}`;
        box.style.padding = "2% 0% 2% 8%";
        if (playerNumber <= 7) document.getElementsByClassName("grid-item")[playerNumber - 1].appendChild(box);
        else if (playerNumber > 7) document.getElementsByClassName("grid-item")[playerNumber].appendChild(box);


        var dice = document.createElement("div");
        dice.className = "dice";
        dice.style.display = "grid";
        dice.style.gridTemplateColumns = "auto auto auto";
        console.log(playerNumber, document.getElementsByClassName("boxes"));
        if (playerNumber <= 7) document.getElementsByClassName("boxes")[playerNumber - 1].appendChild(dice);
        else if (playerNumber > 7) document.getElementsByClassName("boxes")[playerNumber].appendChild(dice);

       
    }
}