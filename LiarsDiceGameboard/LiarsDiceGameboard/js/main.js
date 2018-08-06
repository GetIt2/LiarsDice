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

// Viewable pages
var databaseId;
CreatNewGame();

//New Game page
function CreatNewGame() {
    document.body.style.margin = "0";
    document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var greeting = document.createElement("div");
    greeting.id = "greetingMessage";
    greeting.innerHTML = "Welcome to GET games Liar's dice!";
    greeting.style.fontSize = "40px";
    greeting.style.margin = "auto";
    greeting.style.marginTop = "20%";
    greeting.style.textAlign = "center";
    greeting.style.color = "darkgreen";
    document.body.appendChild(greeting);

    var newGameButton = document.createElement("div");
    newGameButton.id = "newGameButton";
    newGameButton.style.backgroundColor = "darkgreen";
    newGameButton.style.padding = "0.5em";
    newGameButton.style.margin = "auto";
    newGameButton.style.width = "20%";
    newGameButton.innerHTML = "Start new game!";
    newGameButton.style.fontSize = "30px";
    newGameButton.style.textAlign = "center";
    newGameButton.style.color = "black";
    document.body.appendChild(newGameButton);

    //Make new game id
    //databaseId = new Uint16Array(1);
    //window.crypto.getRandomValues(databaseId);

    //console.log(databaseId);

}

//Board with players
function CreateBoard() {

    var gridElements = 13;
    var playerDice = 5;
    var numberOfPlayers = 12;

    document.body.style.margin = "0";
    document.body.style.position = "absolute";
    document.body.style.backgroundImage = "url('images/Pirate background 2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var board = new BoardModel(numberOfPlayers, gridElements, playerDice);
}