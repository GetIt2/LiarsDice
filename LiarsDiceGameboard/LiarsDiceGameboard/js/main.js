//firebase
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
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
var databaseId;

FirstPage();
console.log('hei');

function initFirebase(gameKey) {
    var game = db.collection(gameKey).doc("GameRules").set({
        AmountOfPlayers: 0,
        AmountOfPlayersAllowed: 12,
        GameSessionOpen: true,
        IsBossMode: false,
        TotalDiceCount: 0
    });
}

//function testFirebase() {
//    //GameRules
//    var docRef1 = db.collection("6986").doc("GameRules");
//    docRef1.get().then(function (doc) {
//        if (doc.exists) {
//            console.log("Document data:", doc.data());
//        } else {
//            // doc.data() will be undefined in this case
//            console.log("No such document!");
//        }
//    }).catch(function (error) {
//        console.log("Error getting document:", error);
//    });
//    //Player0 
//    var docRef2 = db.collection("6986").doc("Player0");
//    docRef2.get().then(function (doc) {
//        if (doc.exists) {
//            console.log("Document data:", doc.data());
//        } else {
//            // doc.data() will be undefined in this case
//            console.log("No such document!");
//        }
//    }).catch(function (error) {
//        console.log("Error getting document:", error);
//    });
//}

// Viewable pages

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
    gameBoardButton.onclick = function () { GetFirebaseInfoAndCreateNewBoard(); };
    document.getElementById("mainContainer").appendChild(gameBoardButton);
}

function CreateNewGame() {

    document.getElementById("mainContainer").innerHTML = "";

    //Make new game id
    databaseId = new Uint16Array(1);
    window.crypto.getRandomValues(databaseId);
    console.log("GameSessionID:");
    for (var y = 0; y < databaseId.length; y++) {
        console.log(databaseId[y]);
        initFirebase(databaseId[y].toString());
    }

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
function CloseGameSession() {
    db.collection(databaseId.toString()).doc("GameRules").update({
        GameSessionOpen: false
    });
    console.log(databaseId.toString());
}
//Board with players
function GetFirebaseInfoAndCreateNewBoard() {
    var docRef = db.collection("418").doc("GameRules");
    docRef.onSnapshot(function (doc) {
        var amountOfPlayers = doc.data().AmountOfPlayers;
        var totalDiceCount = doc.data().TotalDiceCount;
        console.log("AmountOfPlayers:", amountOfPlayers);
        for (let i = 0; i < 12; i++) {
            if (i > 7 && i < 7)
                document.body.innerHTML = "";
            CreateNewBoard(amountOfPlayers);
        }
    });
}
function CreateNewBoard(playerAmount) {

    document.getElementById("mainContainer").innerHTML = "";
    
    var gridElements = 13;
    var playerDice = 5;

    document.body.style.margin = "0";
    document.body.style.backgroundImage = "url(https://images.alphacoders.com/741/thumb-1920-74183.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "#422F17";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.onclick = function () { CloseGameSession(); };

    var board = new BoardModel(playerAmount, gridElements, playerDice);

    var diceVariable = document.getElementsByClassName("dice");

    function hideDice() {
        for (let i = 0; i < diceVariable.length; i++) {
            diceVariable[i].style.visibility = "hidden";
        }
    }

    function revealDice() {
        for (let i = 0; i < diceVariable.length; i++) {
            diceVariable[i].style.visibility = "visible";
        }
    }

    function endGame() {
        document.body.innerHTML = "Game Over";
        document.body.style.margin = "40vh 33vw";
        document.body.style.color = "green";
        document.body.style.textAlign = "center";
        document.body.style.fontSize = "7vw";
    }

    var buttonParent = document.createElement("ul");
    buttonParent.id = "motherOfButtons";
    buttonParent.listStyle = "none";
    buttonParent.width = "100%";
    buttonParent.height = "33px";
    buttonParent.margin = "0";
    buttonParent.padding = "0";
    buttonParent.whiteSpace = "nowrap";
    buttonParent.overflowX = "auto";
    buttonParent.overflowY = "hidden";

    var hideDiceButton = document.createElement("div");
    hideDiceButton.class = "buttons";
    hideDiceButton.innerHTML = "Hide Dice";
    hideDiceButton.style.backgroundColor = "darkgreen";
    hideDiceButton.style.margin = "auto";
    hideDiceButton.style.border = "none";
    hideDiceButton.style.borderBottomLeftRadius = "35px";
    hideDiceButton.style.borderTopRightRadius = "35px";
    hideDiceButton.style.padding = "0.5em";
    hideDiceButton.style.display = "inline-block";
    hideDiceButton.style.fontSize = "4vh";
    hideDiceButton.style.textAlign = "center";
    hideDiceButton.style.color = "white";
    hideDiceButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    hideDiceButton.style.cursor = "pointer";
    hideDiceButton.onclick = function () { hideDice(); };
    document.getElementsByClassName("grid-item")[7].appendChild(hideDiceButton);

    var revealDiceButton = document.createElement("div");
    revealDiceButton.class = "buttons";
    revealDiceButton.innerHTML = "Reveal Dice";
    revealDiceButton.style.backgroundColor = "darkgreen";
    revealDiceButton.style.margin = "0 " + screen.availWidth / 10000 + "vw";
    revealDiceButton.style.border = "none";
    revealDiceButton.style.borderTopRightRadius = "35px";
    revealDiceButton.style.borderTopLeftRadius = "35px";
    revealDiceButton.style.padding = "0.5em";
    revealDiceButton.style.display = "inline-block";
    revealDiceButton.style.fontSize = "4vh";
    revealDiceButton.style.textAlign = "center";
    revealDiceButton.style.color = "white";
    revealDiceButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    revealDiceButton.style.cursor = "pointer";
    revealDiceButton.onclick = function () { revealDice(); };
    document.getElementsByClassName("grid-item")[7].appendChild(revealDiceButton);
    
    var endGameButton = document.createElement("div");
    endGameButton.class = "buttons";
    endGameButton.innerHTML = "End Game";
    endGameButton.style.backgroundColor = "darkgreen";
    endGameButton.style.margin = "auto";
    endGameButton.style.border = "none";
    endGameButton.style.borderBottomRightRadius = "35px";
    endGameButton.style.borderTopLeftRadius = "35px";
    endGameButton.style.padding = "0.5em";
    endGameButton.style.display = "inline-block";
    endGameButton.style.fontSize = "4vh";
    endGameButton.style.textAlign = "center";
    endGameButton.style.color = "white";
    endGameButton.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    endGameButton.style.cursor = "pointer";
    endGameButton.onclick = function () { endGame(); };
    document.getElementsByClassName("grid-item")[7].appendChild(endGameButton);

    
}
