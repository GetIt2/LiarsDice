
var gridElements = 13;
var playerDice = 5;

document.body.style.margin = "0";
document.body.style.position = "absolute"
document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";
var div = document.createElement("div");
div.className = 'grid-container';
document.body.appendChild(div);
for (let i = 0; i < gridElements; i++) {
    var div = document.createElement("div");
    div.className = 'grid-item';
    div.id = "item" + (i + 1);
    document.getElementsByClassName("grid-container")[0].appendChild(div);
    var div = document.createElement("div");
    div.className = 'player';
    div.id = "player" + (i + 1);
    document.getElementsByClassName("grid-item")[i].appendChild(div);
    var div = document.createElement("div");
    div.className = 'boxes';
    div.id = "box" + (i + 1);
    document.getElementsByClassName("player")[i].appendChild(div);
    var div = document.createElement("div");
    div.style.gridTemplateColumns = "auto auto auto";
    div.className = 'dice';
    document.getElementsByClassName("boxes")[i].appendChild(div);
    for (var y = 0; y < playerDice; y++) {
        var img = document.createElement("img");
        img.className = "die die" + y;
        img.src = "images/dice-face-" + (y + 1) + ".png";
        var column =
            y < 3 ? 1 + y * 2 :
                y == 3 ? 2 :
                4;

        img.style = "grid-column: " + column + " / span 2;";
        document.getElementsByClassName("dice")[i].appendChild(img);
    }
}

document.getElementById("item8").innerHTML = "Previous player: Player.Name <br /> " +
    "Highest bid = 3 [Dice.Value] <br /> <br />" +
    "Current Player.Name's turn <br />" +
    "{Wait/Bidding/Calling Lie} <br /> <br />" +
    "Next Player: Player.Name <br />";
