// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6rc6jRwbtmlVXWHfUFl9tsPc3H4KMXig",
    authDomain: "getgameliarsdice1.firebaseapp.com",
    databaseURL: "https://getgameliarsdice1.firebaseio.com",
    projectId: "getgameliarsdice1",
    storageBucket: "getgameliarsdice1.appspot.com",
    messagingSenderId: "857617741254"
};

firebase.initializeApp(config);
var db = firebase.firestore();
var firestore = firebase.firestore();
var settings = { timestampsInSnapshots: true };
firestore.settings(settings);
var databaseId;

function testFirebase() {
    //GameRules
    var docRef1 = db.collection("6986").doc("GameRules");
    docRef1.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
    //Player0 
    var docRef2 = db.collection("6986").doc("Player0");
    docRef2.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

// BODY

var gridElements = 13;
var playerDice = 5;

document.body.style.margin = "0";
document.body.style.position = "absolute";
document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";

//New stuff with classes
var board = new BoardModel(1, gridElements);
//console.log(board.players);

// BOARD VIEW

// PLAYER VIEW

for (let i = 0; i < gridElements; i++) {

    //var box = document.createElement("div");
    //box.className = "boxes";
    //box.id = `box${i}`;
    //box.style.padding = "2% 0% 2% 8%";
    //document.getElementsByClassName("grid-item")[i].appendChild(box);

    var div = document.createElement("div");
    div.style.display = "grid";
    div.style.gridTemplateColumns = "auto auto auto";
    div.className = "dice";
    document.getElementsByClassName("boxes")[i].appendChild(div);

    // DIE VIEW

    for (var y = 0; y < playerDice; y++) {
        var img = document.createElement("img");
        img.className = "die";
        //div.style.width = "90%";
        img.src = "images/dice-face-" + (y + 1) + ".png";
        var column =
            y < 3 ? 1 + y * 2 :
                y === 3 ? 2 :
                    4;

        img.style = "grid-column: " + column + " / span 2;";
        document.getElementsByClassName("dice")[i].appendChild(img);
    }
}

// INFO

var player = "abc";
document.getElementById("item8").innerHTML = "Previous player: Player.Name <br /> " +
    "Highest bid = 3 [Die.Value] <br /> <br />" +
    player + "'s turn <br />" +
    "{Wait/Bidding/Calling Lie} <br /> <br />" +
    "Next Player: Player.Name <br />";
document.getElementById("item8").style.gridArea = "2/2/4/4";
document.getElementById("item8").style.textAlign = "center";
document.getElementById("item8").style.paddingTop = "5%";

