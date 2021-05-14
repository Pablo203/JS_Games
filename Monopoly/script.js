var players = {
    "player1": {
        "PlayerName": "Gracz1",
        "PlayerCash": 1500,
        "result": 0,
        "field": 0,
        "houses": 0,
        "hotels": 0
    },
    "player2": {
        "PlayerName": "Gracz2",
        "PlayerCash": 1500,
        "result": 0,
        "field": 0,
        "houses": 0,
        "hotels": 0
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

var dropTogether = 0;
var splice = 1;
//Functions Setup Area
diceThrow = () => {
    gamesData["drop"]["1"] = Math.floor(Math.random() * 1) + 3;
    gamesData["drop"]["2"] = Math.floor(Math.random() * 1) + 4;
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
    hide("chance");
    hide("chest");
    hide("tax");
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
//shuffleArray(specialCards["chance"]);

chestGet = () => {
    let x = (specialCards["chest"])[0];
    document.getElementById("chest_title").innerHTML = "Community Chest";
    document.getElementById("chest_content").innerHTML = (specialCards["cards"])[x];
    console.log((specialCards["cards"])[x]);
    chest_action();
    firstCardToLast(specialCards["chest"]);
}

chest_action = () => {
    //Local variables Setup
    var which = " ";
    var which1 = " ";
    var who = "";
    var turn = gamesData["turn"];
    var number = (specialCards["chest"])[0];
    var mark = "";
    var color = "";
    console.log(turn + " turn");
    //Local variables setup 2
    if (turn % 2 == 1) {
        which = "money_1";
        which1 = "money_2";
        who = "player" + 1;
        who2 = "player" + 2;
        mark = "A";
        mark2 = "a";
        color = "#ca1a1a";
    } else if (turn % 2 == 0) {
        which = "money_2";
        which1 = "money_1";
        who = "player" + 2;
        who2 = "player" + 1;
        mark = "B";
        mark2 = "b";
        color = "#33b6df";
    }
    //Cards actions
    if (number == 1) {
        console.log("1");
        players[who]["result"] = 0;
        players[who]["PlayerCash"] += 200;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 2) {
        console.log("2");
        players[who]["PlayerCash"] += 200;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 3) {
        console.log("3");
        players[who]["PlayerCash"] -= 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 4) {
        console.log("4");
        players[who]["PlayerCash"] += 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 5) {
        console.log("5");


    } else if (number == 6) {
        console.log("6");
        players[who]["result"] = 10;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 7) {
        console.log("7");
        players[who]["PlayerCash"] += 50;
        players[who2]["PlayerCash"] -= 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(which1).innerHTML = players[who2]["PlayerCash"];

    } else if (number == 8) {
        console.log("8");
        players[who]["PlayerCash"] += 100;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 9) {
        console.log("9");
        players[who]["PlayerCash"] += 20;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 10) {
        console.log("10");
        players[who]["PlayerCash"] += 10;
        players[who2]["PlayerCash"] -= 10;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(which1).innerHTML = players[who2]["PlayerCash"];

    } else if (number == 11) {
        console.log("11");
        players[who]["PlayerCash"] += 100;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 12) {
        console.log("12");
        players[who]["PlayerCash"] -= 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 13) {
        console.log("13");
        players[who]["PlayerCash"] -= 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 14) {
        console.log("14");
        players[who]["PlayerCash"] += 25;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 15) {
        console.log("15");
        let to_pay = (players[who]["houses"] * 40) + (players[who]["hotels"] * 115);
        players[who]["PlayerCash"] -= to_pay;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        console.log(to_pay);

    } else if (number == 16) {
        console.log("16");
        players[who]["PlayerCash"] += 100;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    }
}

chanceGet = () => {
    let x = (specialCards["chance"])[0];
    document.getElementById("chance_title").innerHTML = "Chance";
    document.getElementById("chance_content").innerHTML = (specialCards["cards"])[x];
    console.log((specialCards["cards"])[x]);
    chance_action();
    firstCardToLast(specialCards["chance"]);
}

chance_action = () => {
    //Local variables Setup
    var which = " ";
    var which1 = " ";
    var who = "";
    var turn = gamesData["turn"];
    var number = (specialCards["chance"])[0];
    var mark = "";
    var color = "";
    console.log(turn + " turn");
    //Local variables setup 2
    if (turn % 2 == 1) {
        which = "money_1";
        which1 = "money_2";
        who = "player" + 1;
        who2 = "player" + 2;
        mark = "A";
        mark2 = "a";
        color = "#ca1a1a";
    } else if (turn % 2 == 0) {
        which = "money_2";
        which1 = "money_1";
        who = "player" + 2;
        who2 = "player" + 1;
        mark = "B";
        mark2 = "b";
        color = "#33b6df";
    }
    //Cards actions
    if (number == 17) {
        console.log("17");
        players[who]["result"] = 0;
        players[who]["PlayerCash"] += 200;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 18) {
        console.log("18");
        players[who]["result"] = 24;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 19) {
        console.log("19");
        players[who]["result"] = 11;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 20) {
        console.log("20");
        

    } else if (number == 21) {
        console.log("21");


    } else if (number == 22) {
        console.log("22");
        players[who]["PlayerCash"] += 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 23) {
        console.log("23");
        players[who]["PlayerCash"] += 50;
        players[who2]["PlayerCash"] -= 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(which1).innerHTML = players[who2]["PlayerCash"];

    } else if (number == 24) {
        console.log("24");
        players[who]["result"] -= 3;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 25) {
        console.log("25");
        players[who]["result"] = 10;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 26) {
        let to_pay = (players[who]["houses"] * 25) + (players[who]["hotels"] * 100);
        players[who]["PlayerCash"] -= to_pay;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        console.log(to_pay);

    } else if (number == 27) {
        console.log("27");
        players[who]["PlayerCash"] -= 15;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 28) {
        console.log("28");
        players[who]["result"] = 5;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 29) {
        console.log("29");
        players[who]["result"] = 39;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[who]["field"] = players[who]["result"];
        gamesData["field_Id"][mark] = players[who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;

    } else if (number == 30) {
        console.log("30");
        players[who]["PlayerCash"] -= 50;
        players[who2]["PlayerCash"] += 50;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];
        document.getElementById(which1).innerHTML = players[who2]["PlayerCash"];

    } else if (number == 31) {
        console.log("31");
        players[who]["PlayerCash"] += 150;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    } else if (number == 32) {
        console.log("32");
        players[who]["PlayerCash"] += 100;
        document.getElementById(which).innerHTML = players[who]["PlayerCash"];

    }
}

is_special = (player_who) => {
    //Checking if field is in any corner. If not takes every element from arrays and compare it with actual field
    if (players[player_who]["field"] == 10) {
        console.log("Prison Field");
    } else if (players[player_who]["field"] == 20) {
        pass();
    }
    //Go to Jail 30
    else if (players[player_who]["field"] == 30) {
        console.log("Go to jail");
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

isOwned = (player_who) => {
    //document.getElementById("info").style.display = "block";
    //document.getElementById("payment").style.display = "block";
    var fieldOwn = players[player_who]["field"];
    var owner = " ";
    if((property[fieldOwn]["own"]) != " "){
        document.getElementById("payment").style.display = "block";
        owner = property[fieldOwn]["own"];
        //Pay
    }
    else if((property[fieldOwn]["own"]) == " "){
        document.getElementById("info").style.display = "block";
        //Buy or Pass
    }
}

//Pay if field is owned
pay = () => {
    var player_who = (gamesData["turn"]-1) % 2;
    var standing = " ";
    var owner = " ";
    if(player_who == 1){
        standing = "player1"
        standingCash = "money_1";
        owner = "player2";
        ownerCash = "money_2";
    }
    else if(player_who == 0){
        standing = "player2";
        standingCash = "money_2";
        owner = "player1";
        ownerCash = "money_1";
    }
    var toPay = 0;
    var whichField = players[standing]["field"];

    toPay = (property[whichField]["price_default"]) + (property[whichField]["house"] * property[whichField]["house_price"]) + (property[whichField]["hotel"] * property[whichField]["hotel_price"]);
    console.log(gamesData["turn"]);
    console.log(standing);
    console.log(owner);
    players[standing]["PlayerCash"] -= toPay;
    players[owner]["PlayerCash"] += toPay;
    document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(ownerCash).innerHTML = players[owner]["PlayerCash"];
    pass();
}

//Free field buy option
buy = () => {
    var player_who = gamesData["turn"] % 2;
    var standing = " ";
    var owner = " ";
    if(player_who = 1){
        standing = "player1";
        standingCash = "money_1";
    }
    else if(player_who = 0){
        standing = "player2";
        standingCash = "money_2";
    }
    var fieldOn = players[standing]["field"];
    var price = property[fieldOn]["value"];
    if(players[standing]["PlayerCash"] >= price){
        players[standing]["PlayerCash"] -= price;
        property[fieldOn]["own"] = standing;
        document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
        alert("Kupiono")
        console.log(property[fieldOn]);
        pass();
    }
    else if(players[standing]["PlayerCash"] < price){
        console.log("Nie masz hajsu biedaku");
        alert("No money");
        pass();
    }
}

move = () => {
    //Dissapearing middle box and shows info box 
    document.getElementById("community_chest").style.display = "none";
    document.getElementById("knefel").style.display = "none";
    document.getElementById("ask").style.display = "none";
    
    //Throwing dice and summing it
    diceThrow();
    gamesData["drop"]["sum"] = gamesData["drop"]["1"] + gamesData["drop"]["2"];
    dropTogether = gamesData["drop"]["sum"];
    //Tells whos player turn it is depending on turn % 2
    if (gamesData["turn"] % 2 == 1) {
        //Jumping through fields and if field id = 0 (start) adding money
        for (let i = 0; i < dropTogether; i++) {
            players["player1"]["result"]++;
            if ((players["player1"]["result"] % 39) == 0) {
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

        is_special("player1");
        isOwned("player1");
        console.log("Move function end 1")
        gamesData["turn"]++;
        console.log(gamesData["turn"] + " po zwiekszeniu tury");
    } else if (gamesData["turn"] % 2 == 0) {
        //Jumping through fields and if field id = 0 (start) adding money
        for (let i = 0; i < dropTogether; i++) {
            players["player2"]["result"]++;
            if ((players["player2"]["result"] % 39) == 0) {
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

        is_special("player2");
        isOwned("player2");
        console.log("Move function end 2");
        gamesData["turn"]++;
        console.log(gamesData["turn"] + " po zwiekszeniu tury");
    }
}