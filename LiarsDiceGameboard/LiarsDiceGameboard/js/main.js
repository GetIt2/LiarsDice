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
var numberOfPlayers = 12;

document.body.style.margin = "0";
document.body.style.position = "absolute";
document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";

//New stuff with classes
var board = new BoardModel(numberOfPlayers, gridElements, playerDice);
//console.log(board.players);

// BOARD VIEW

// PLAYER VIEW

// DIE VIEW

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

