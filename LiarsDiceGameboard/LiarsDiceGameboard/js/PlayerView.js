class PlayerView {
    constructor() {
    }

    createBoxes(playerNumber) {
        var box = document.createElement("div");
        box.className = "boxes";
        if (playerNumber <= 7) box.id = `box${playerNumber}`;
        else if (playerNumber > 7) box.id = `box${playerNumber + 1}`;
        if (playerNumber <= 7) document.getElementsByClassName("grid-item")[playerNumber - 1].appendChild(box);
        else if (playerNumber > 7) document.getElementsByClassName("grid-item")[playerNumber].appendChild(box);

        var player;
        if (playerNumber <= 7) {
            player = document.getElementById(`box${playerNumber}`);
            switch (playerNumber) {
                case 1:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 2:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 3:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 4:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 5:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 6:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 7:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
            }
        }
        else if (playerNumber > 7) {
            player = document.getElementById(`box${playerNumber + 1}`);
            switch (playerNumber) {
                case 8:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 9:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 10:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 11:
                    player.innerHTML = `Player ${playerNumber}`;
                    break;
                case 12:
                    player.innerHTML = `Player ${playerNumber}`;
            }
        }


        var dice = document.createElement("div");
        dice.className = "dice";
        dice.style.display = "grid";
        dice.style.visibility = "hidden";
        dice.style.gridTemplateColumns = "auto auto auto";
        console.log(playerNumber, document.getElementsByClassName("boxes"));
        if (playerNumber <= 7) document.getElementsByClassName("boxes")[playerNumber - 1].appendChild(dice);
        else if (playerNumber > 7) document.getElementsByClassName("boxes")[playerNumber].appendChild(dice);

    }
}