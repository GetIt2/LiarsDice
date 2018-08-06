class InfoView {

    constructor() {

    }

    createBox() {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = "box8";
        document.getElementById("item8").style.gridArea = "2/2/4/4";
        box.style.textAlign = "center";
        box.style.paddingTop = "7%";
        box.style.fontSize = "125%";
        var playerNumber = 5;
        box.innerHTML = `Previous player: Player ${playerNumber - 1} <br />`  +
            "Highest bid = 3 [Die.Value] <br /> <br />" +
            `Player ${playerNumber}'s turn <br />` +
            "{Wait/Bidding/Calling Lie} <br /> <br />" +
            `Next Player: Player ${playerNumber + 1} <br />`;

        document.getElementsByClassName("grid-item")[7].appendChild(box);

    }
}