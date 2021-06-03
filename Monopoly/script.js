var players = {
    "player1": {
        "PlayerName": "Gracz1",
        "PlayerCash": 3000,
        "result": 0,
        "field": 0,
        "houses": 0,
        "hotels": 0,
        "prisonOut": 0,
        "prison": 0
    },
    "player2": {
        "PlayerName": "Gracz2",
        "PlayerCash": 3000,
        "result": 0,
        "field": 0,
        "houses": 0,
        "hotels": 0,
        "prisonOut": 0,
        "prison": 0
    }
}

var gamesData = {
    "turn": 1,
    "drop": {
        "1": 0,
        "2": 0,
        "sum": 0
    },
    "field_Id": {
        "A": "0a",
        "B": "0b"
    }
}

var tempObj = {
    "fieldsCount" : 0
}
//Functions Setup Area

/*sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}*/

diceThrow = () => {
    gamesData["drop"]["1"] = Math.floor(Math.random() * 1) + 1;
    gamesData["drop"]["2"] = Math.floor(Math.random() * 1) + 2;
}

diceChange = () => {
    var diceValue1 = gamesData["drop"]["1"];
    var diceValue2 = gamesData["drop"]["2"];
    console.log(diceValue1);
    console.log(diceValue2);
    document.getElementById("dice_1_" + diceValue1).style.display = "block";
    document.getElementById("dice_2_" + diceValue2).style.display = "block";
}

shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

firstCardToLast = (arr) => {
    var temp = arr.shift();
    arr.push(temp);
}

//Passing turn
pass = () => {
    document.getElementById("community_chest").style.display = "block";
    document.getElementById("knefel").style.display = "block";
    document.getElementById("ask").style.display = "block";
    document.getElementById("info").style.display = "none";
    document.getElementById("payment").style.display = "none";
    document.getElementById("dice_1").style.display = "block";
    document.getElementById("dice_2").style.display = "block";
    hide("chance");
    hide("chest");
    hide("tax");
    hide("prison");
    hide("upgrade");
}

//Special Fields Operations
show = (word) => {
    document.getElementById(word + "_box").style.display = "block";
    document.getElementById(word + "_box_title").style.display = "block";
    document.getElementById(word + "_box_content").style.display = "block";
    document.getElementById(word + "_box_pass").style.display = "block";
}

hide = (word) => {
    document.getElementById(word + "_box").style.display = "none";
    document.getElementById(word + "_box_title").style.display = "none";
    document.getElementById(word + "_box_content").style.display = "none";
    document.getElementById(word + "_box_pass").style.display = "none";
}

//Setup Area

//Wyświetlenie początkowego stanu gotówki
document.getElementById("money_1").innerHTML = players["player1"]["PlayerCash"];
document.getElementById("money_2").innerHTML = players["player2"]["PlayerCash"];

//Wyświetlenie początkowej lokalizacji pionków
document.getElementById(gamesData["field_Id"]["A"]).style.backgroundColor = "#ca1a1a";
document.getElementById(gamesData["field_Id"]["B"]).style.backgroundColor = "#33b6df";

//Przetasowanie talii
shuffleArray(specialCards["chest"]);
shuffleArray(specialCards["chance"]);


is_special = (player_who) => {
    //Checking if field is in any corner. If not takes every element from arrays and compare it with actual field
    if (players[player_who]["field"] == 10) {
        console.log("Prison Field");
        pass();
    } else if (players[player_who]["field"] == 20) {
        pass();
    }
    //Go to Jail 30
    else if (players[player_who]["field"] == 30) {
        //console.log("Go to jail");
        goToPrison(player_who);
        pass();
    } else if (players[player_who]["field"] == 0) {
        console.log("Start");
        pass();
    }
    /*else if(field == )*/
    for (x in specialCards["fields"]["chances"]) {
        if (specialCards["fields"]["chances"][x] == players[player_who]["field"]) {
            show("chance");
            chanceGet();
        }
    }
    for (x in specialCards["fields"]["chests"]) {
        if ((specialCards["fields"]["chests"])[x] == players[player_who]["field"]) {
            show("chest");
            chestGet();
        }
    }
    for (x in specialCards["fields"]["taxes"]) {
        if ((specialCards["fields"]["taxes"])[x] == players[player_who]["field"]) {
            show("tax");
        }
    }
}


move = () => {
    diceThrow();
    diceChange();
    //Dissapearing middle box and shows info box 
    document.getElementById("community_chest").style.display = "none";
    document.getElementById("knefel").style.display = "none";
    document.getElementById("ask").style.display = "none";
    document.getElementById("dice_1").style.display = "none";
    document.getElementById("dice_2").style.display = "none";

    //Throwing dice and summing it
    gamesData["drop"]["sum"] = gamesData["drop"]["1"] + gamesData["drop"]["2"];
    var dropTogether = gamesData["drop"]["sum"];
    //Tells whos player turn it is depending on turn % 2

    if (gamesData["turn"] % 2 == 1) {
        if (players["player1"]["prison"] != 0) {
            prison("player1");
        } else {
            //Jumping through fields and if field id = 0 (start) adding money
            for (let i = 0; i < dropTogether; i++) {
                players["player1"]["result"]++;
                if ((players["player1"]["result"] % 39) == 0) {
                    alert("START");
                    players["player1"]["PlayerCash"] += 200;
                    document.getElementById("money_1").innerHTML = players["player1"]["PlayerCash"];
                }
            }
            //Adds result from jumping to field and dissapears pawn from previous place
            players["player1"]["field"] = (players["player1"]["result"]) % 39;
            document.getElementById(gamesData["field_Id"]["A"]).style.backgroundColor = "#FFFFFF";
            //Gets new field id and showing pawn
            gamesData["field_Id"]["A"] = players["player1"]["field"] + "a";
            document.getElementById(gamesData["field_Id"]["A"]).style.backgroundColor = "#ca1a1a";
            isOwned("player1");
            is_special("player1");
            gamesData["turn"]++;
        }
    } else if (gamesData["turn"] % 2 == 0) {
        if (players["player2"]["prison"] != 0) {
            prison("player2");
            console.log("PRISON 2");
        } else {
            //Jumping through fields and if field id = 0 (start) adding money
            for (let i = 0; i < dropTogether; i++) {
                players["player2"]["result"]++;
                if ((players["player2"]["result"] % 39) == 0) {
                    alert("START");
                    players["player2"]["PlayerCash"] += 200;
                    document.getElementById("money_2").innerHTML = players["player2"]["PlayerCash"];
                }
            }
            //Adds result from jumping to field and dissapears pawn from previous place
            players["player2"]["field"] = (players["player2"]["result"]) % 39;
            document.getElementById(gamesData["field_Id"]["B"]).style.backgroundColor = "#FFFFFF";
            //Gets new field id and showing pawn
            gamesData["field_Id"]["B"] = players["player2"]["field"] + "b";
            document.getElementById(gamesData["field_Id"]["B"]).style.backgroundColor = "#33b6df";
            isOwned("player2");
            is_special("player2");
            gamesData["turn"]++;
        }
    }
}

//onload = sold();
hideMain = () => {
    document.getElementById("community_chest").style.display = "none";
    document.getElementById("knefel").style.display = "none";
    document.getElementById("ask").style.display = "none";
    document.getElementById("dice_1").style.display = "none";
    document.getElementById("dice_2").style.display = "none";
    show("upgrade");
}
//onload = hideMain();