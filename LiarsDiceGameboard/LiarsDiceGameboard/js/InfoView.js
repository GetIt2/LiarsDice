﻿class InfoView {

    constructor() {

    }

    createBox() {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = "box8";
        document.getElementById("item8").style.gridArea = "2/2/4/4";
        box.style.padding = "2% 0% 2% 8%";
        box.style.textAlign = "center";
        box.style.paddingTop = "5%";

        box.innerHTML = "Previous player: previous player <br /> " +
            "Highest bid = 3 [Die.Value] <br /> <br />" +
            "player" + "'s turn <br />" +
            "{Wait/Bidding/Calling Lie} <br /> <br />" +
            "Next Player: next player <br />";

        document.getElementsByClassName("grid-item")[7].appendChild(box);

    }
}