

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



var gridElements = 13;
var playerDice = 5;

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

document.body.style.margin = "0";
document.body.style.position = "absolute";
document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";
var button = document.createElement("button");
var div = document.createElement("div");
div.className = 'grid-container';
div.style.display = "grid";
div.style.gridTemplateColumns = "25% 25% 25% 25%";
div.style.backgroundColor = "black";
div.style.gap = "8px";
div.style.padding = "10px";
div.style.paddingRight = "34px";
div.style.width = "82%";
div.style.margin = "auto";
div.style.marginTop = "3%";
document.body.appendChild(div);
for (let i = 0; i < gridElements; i++) {
    var div = document.createElement("div");
    div.className = 'grid-item';
    div.id = "item" + (i + 1);
    div.style.backgroundColor = "green";
    div.style.fontSize = "175%";
    div.style.textAlign = "center";
    div.style.color = "whitesmoke";
    document.getElementsByClassName("grid-container")[0].appendChild(div);
    var div = document.createElement("div");
    div.className = 'player';
    div.id = "player" + (i + 1);
    document.getElementsByClassName("grid-item")[i].appendChild(div);
    var div = document.createElement("div");
    div.className = 'boxes';
    div.id = "box" + (i + 1);
    div.style.padding = "2% 0% 2% 8%";
    document.getElementsByClassName("player")[i].appendChild(div);
    var div = document.createElement("div");
    div.style.display = "grid";
    div.style.gridTemplateColumns = "auto auto auto";
    div.className = 'dice';
    document.getElementsByClassName("boxes")[i].appendChild(div);
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
// Her skjer det ;)


/*var docRef2 = db.collection("6986").doc("Player0");
docRef2.get().then(function (doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    }
});*/

/*db.collection("cities").where("Player0", "==", "nickname")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });*/

// Noe sånt tror jeg...

var Player = "abc";
document.getElementById("item8").innerHTML = "Previous player: Player.Name <br /> " +
    "Highest bid = 3 [Dice.Value] <br /> <br />" +
    Player + "'s turn <br />" +
    "{Wait/Bidding/Calling Lie} <br /> <br />" +
    "Next Player: Player.Name <br />";
document.getElementById("item8").style.gridArea = "2/2/4/4";
document.getElementById("item8").style.textAlign = "center";
document.getElementById("item8").style.paddingTop = "5%";

var board = new BoardModel(1);
board.addPlayer();
console.log(board.playerDice);