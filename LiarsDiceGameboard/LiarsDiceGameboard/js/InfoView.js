class InfoView {

    constructor() {

    }

    createBox() {
        var box = document.createElement("div");
        box.className = "boxes";
        box.id = "box8";
        box.style.padding = "2% 0% 2% 8%";
        document.getElementsByClassName("grid-item")[7].appendChild(box);

    }

    //createInfoWindow() {
    //    var player = "abc";
    //    document.getElementById("item8").innerHTML = "Previous player: Player.Name <br /> " +
    //        "Highest bid = 3 [Die.Value] <br /> <br />" +
    //        player + "'s turn <br />" +
    //        "{Wait/Bidding/Calling Lie} <br /> <br />" +
    //        "Next Player: Player.Name <br />";
    //    document.getElementById("item8").style.gridArea = "2/2/4/4";
    //    document.getElementById("item8").style.textAlign = "center";
    //    document.getElementById("item8").style.paddingTop = "5%";
    //}
}