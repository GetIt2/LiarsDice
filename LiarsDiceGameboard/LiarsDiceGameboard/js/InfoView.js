class InfoView {

    constructor(playerNumber, dieNumber, dieValue) {
        this.playerNumber = playerNumber;
        this.dieNumber = dieNumber;
        this.dieValue = dieValue;
    }

    createBox() {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = "box8";
        document.getElementById("item8").style.gridArea = "2/2/4/4";
        box.style.textAlign = "center";
        box.style.paddingTop = "8vh";
        box.style.fontSize = "125%";

        var img = document.createElement("img");
        img.className = "infoDie";
        switch (this.dieValue) {
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

        box.innerHTML = `Previous player: Player ${this.playerNumber - 1} <br />` +
            `Highest bid = ${this.dieNumber} <span style="color: black"><b> ${this.dieValue/*img*/}'s</b></span> <br /> <br />` +
            `Player ${this.playerNumber}'s turn <br />` +
            "{Wait/Bidding/Calling Lie} <br /> <br />" +
            `Next Player: Player ${this.playerNumber + 1} <br />`;

        document.getElementsByClassName("grid-item")[7].appendChild(box);

    }
}