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
FirstPage();

//New Game page
function FirstPage() {
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
    document.getElementById("mainContainer").appendChild(greeting);

    var newGameButton = document.createElement("div");
    newGameButton.class = "buttons";
    newGameButton.id = "newGameButton";
    newGameButton.style.backgroundColor = "darkgreen";
    newGameButton.style.border = "none";
    newGameButton.style.padding = "0.5em";
    newGameButton.style.margin = "auto";
    newGameButton.style.width = "20%";
    newGameButton.innerHTML = "Start new game!";
    newGameButton.style.fontSize = "30px";
    newGameButton.style.textAlign = "center";
    newGameButton.style.color = "white";
    newGameButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    newGameButton.style.cursor = "pointer";
    newGameButton.onclick = function () { CreateNewGame(); };
    document.getElementById("mainContainer").appendChild(newGameButton);

    var gameBoardButton = document.createElement("div");
    gameBoardButton.class = "buttons";
    gameBoardButton.innerHTML = "Jump to board";
    gameBoardButton.style.backgroundColor = "darkgreen";
    gameBoardButton.style.border = "none";
    gameBoardButton.style.padding = "0.5em";
    gameBoardButton.style.margin = "auto";
    gameBoardButton.style.marginTop = "1em";
    gameBoardButton.style.width = "20%";
    gameBoardButton.innerHTML = "Go to board";
    gameBoardButton.style.fontSize = "30px";
    gameBoardButton.style.textAlign = "center";
    gameBoardButton.style.color = "white";
    gameBoardButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    gameBoardButton.style.cursor = "pointer";
    gameBoardButton.onclick = function () { CreateNewBoard(); };
    document.getElementById("mainContainer").appendChild(gameBoardButton);
}

function CreateNewGame() {

    document.getElementById("mainContainer").innerHTML = "";

    //Make new game id
    databaseId = new Uint16Array(1);
    window.crypto.getRandomValues(databaseId);

    var gameCodeMessage = document.createElement("div");
    gameCodeMessage.id = "gameCodeMessage";
    gameCodeMessage.innerHTML = `Game code: ${databaseId}`;
    gameCodeMessage.style.fontSize = "40px";
    gameCodeMessage.style.margin = "auto";
    gameCodeMessage.style.marginTop = "2em";
    gameCodeMessage.style.textAlign = "center";
    gameCodeMessage.style.color = "darkgreen";
    document.getElementById("mainContainer").appendChild(gameCodeMessage);

    var numberOfRows = 4;
    var numberOfCells = 3;

    var playerListTable = document.createElement("table");
    playerListTable.id = "playerListTable";
    playerListTable.style.alignContent = "center";
    playerListTable.style.backgroundColor = "bisque";
    playerListTable.style.border = "0.2em darkgrey";
    playerListTable.style.color = "black";
    playerListTable.style.width = "85vw";
    playerListTable.style.height = "60vh";
    playerListTable.style.margin = "5vw";
    document.getElementById("mainContainer").appendChild(playerListTable);

    for (var i = 0; i < numberOfRows; i++) {
        var row = playerListTable.insertRow(i);
        for (var j = 0; j < numberOfCells; j++) {
            var cell = row.insertCell(j);
            cell.style.padding = "2em";
            cell.innerHTML = "Cell " + j;
        }
    }

    var gameBoardButton = document.createElement("div");
    gameBoardButton.class = "buttons";
    gameBoardButton.innerHTML = "Jump to board";
    gameBoardButton.style.backgroundColor = "darkgreen";
    gameBoardButton.style.border = "none";
    gameBoardButton.style.padding = "0.5em";
    gameBoardButton.style.margin = "auto";
    gameBoardButton.style.marginTop = "1em";
    gameBoardButton.style.width = "20%";
    gameBoardButton.innerHTML = "Go to board";
    gameBoardButton.style.fontSize = "30px";
    gameBoardButton.style.textAlign = "center";
    gameBoardButton.style.color = "white";
    gameBoardButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    gameBoardButton.style.cursor = "pointer";
    gameBoardButton.onclick = function () { CreateNewBoard(); };
    document.getElementById("mainContainer").appendChild(gameBoardButton);
}

//Board with players
function CreateNewBoard() {

    document.getElementById("mainContainer").innerHTML = "";

    var gridElements = 13;
    var playerDice = 5;
    var numberOfPlayers = 12;

    document.body.style.margin = "0";
    document.body.style.position = "absolute";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#006900"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var board = new BoardModel(numberOfPlayers, gridElements, playerDice);
}