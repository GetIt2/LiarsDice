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

function NewGame() {
    databaseId = new Uint16Array(1);
    window.crypto.getRandomValues(databaseId);
    console.log("GameSessionID:");
    for (var i = 0; i < databaseId.length; i++) {
        console.log(databaseId[i]);

        db.collection(databaseId[i].toString()).doc("GameRules").set({
            AmountOfPlayers: 2,
            AmountOfPlayersAllowed: 12,
            TotalDiceCount: 0,
            GameSessionOpen: true,
            IsBossMode: false
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

        console.log("Starts new game, shows screen, generate Game code: " + databaseId[i] + " generates new game session in firebase.");
        var ws = document.getElementById('WelcomeScreen');
        ws.innerHTML += "Hello everyone! You can now join the gamesession with ID: " + databaseId[i];
        //Når man trykker på NewGame så blir det generert en ny GameSession i Firebase.
        //GameSession er enten open/closed. Closed etter at runden har startet.
    }
}

function StartNewGame() {
    console.log("Starts game, change window to players table");
    PlayerTable.style.display = "block";
    //Når man trykker på StartNewGame så blir GameSession satt til closed, og runden begynner med alle spillere som har joinet.
}

function GetInfo() {
    var docRef = db.collection("418").doc("GameRules");
    docRef.get().then(function(doc) {
        var amountOfPlayers = doc.data().AmountOfPlayers;
        console.log("AmountOfPlayers:", amountOfPlayers);
    });
}

function EndGame() {
    console.log("Ends game, returns players to main menu, cleans up Firebase session");
    EndTheGame.style.display = "block";

    db.collection(databaseId.toString()).doc("GameRules").delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    setTimeout(function () {
        history.go(0);
        console.log("Done!");
    }, 1000);

    //////////////////////

    db.collection(databaseId.toString()).doc("Player0").delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    setTimeout(function () {
        history.go(0);
        console.log("Done!");
    }, 1000);
}

function DeleteSessions() {
    db.collection("17519").doc("GameRules").delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    setTimeout(function () {
        history.go(0);
        console.log("Done!");
    }, 1000);
}

function players() {
    db.collection(databaseId.toString()).doc("Player" + [0]).set({
        Nickname: "Bjarne",
        isAlive: true,
        isBoss: false,
        TotalDie: 5,
        CalledOutLie: false,
        TotalNumberOf1s: 0,
        TotalNumberOf2s: 0,
        TotalNumberOf3s: 0,
        TotalNumberOf4s: 0,
        TotalNumberOf5s: 0,
        TotalNumberOf6s: 0
    });
}

function players() {
    db.collection(databaseId.toString()).doc("Player" + [0]).set({
        Nickname: "Bjarne",
        isAlive: true,
        isBoss: false,
        TotalDie: 5,
        CalledOutLie: false,
        TotalNumberOf1s: 0,
        TotalNumberOf2s: 0,
        TotalNumberOf3s: 0,
        TotalNumberOf4s: 0,
        TotalNumberOf5s: 0,
        TotalNumberOf6s: 0
    });
}


function CloseGameSession() {
    db.collection("1337").doc("GameRules").update({
        GameSessionOpen: false
    });
}


