var players = {
    "player1": {
        "PlayerName": "Gracz1",
        "PlayerCash": 1500,
        "result": 0,
        "field": 0,
        "houses": 0,
        "hotels": 0,
        "prisonOut": 0,
        "prison": 0
    },
    "player2": {
        "PlayerName": "Gracz2",
        "PlayerCash": 1500,
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

var dropTogether = 0;
var splice = 1;
//Functions Setup Area
diceThrow = () => {
    gamesData["drop"]["1"] = Math.floor(Math.random() * 6) + 1;
    gamesData["drop"]["2"] = Math.floor(Math.random() * 6) + 1;
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
    hide("prison");
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

chestGet = () => {
    let x = (specialCards["chest"])[0];
    document.getElementById("chest_title").innerHTML = "Community Chest";
    document.getElementById("chest_content").innerHTML = (specialCards["cards"])[x];

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
        if (players[who]["prisonOut"] < 2) {
            players[who]["prisonOut"]++;
            //document.getElementById("prison" + mark + players[who]["prisonOut"]).style.display = "block";
            document.getElementById("prison" + mark + players[who]["prisonOut"]).innerHTML = "asasdgfsd";
        }

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
        if (players[who]["prisonOut"] < 2) {
            players[who]["prisonOut"]++;
            //document.getElementById("prison" + mark + players[who]["prisonOut"]).style.display = "block";
            document.getElementById("prison" + mark + players[who]["prisonOut"]).innerHTML = "asasdgfsd";
        }

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

showCard = (ID) => {
    //Substracting Name from ID
    var nameID = ID.slice(0, 1);
    var fieldID = ID.slice(1, 3);

    if (fieldID == 5 || 15 || 25 || 35) {
        document.getElementById(nameID + "_card_show_title").style.color = "white";
    } else if (fieldID != 5 || 15 || 25 || 35) {
        document.getElementById(nameID + "_card_show_title").style.color = "black";
    }
    document.getElementById(nameID + "_card-show-title-area").style.backgroundColor = property[fieldID]["color"];

    document.getElementById(nameID + "_card_show_title").innerHTML = property[fieldID]["name"];


    document.getElementById(nameID + "_rent").innerHTML = property[fieldID]["price_default"];
    document.getElementById(nameID + "_one_house_rent").innerHTML = property[fieldID]["house_price"] * 1;
    document.getElementById(nameID + "_two_house_rent").innerHTML = property[fieldID]["house_price"] * 2;
    document.getElementById(nameID + "_three_house_rent").innerHTML = property[fieldID]["house_price"] * 3;
    document.getElementById(nameID + "_four_house_rent").innerHTML = property[fieldID]["house_price"] * 4;
    document.getElementById(nameID + "_hotel_rent").innerHTML = property[fieldID]["hotel_price"] * 1;
}

goToPrison = (player_who) => {
    var mark = "";
    var color = "";
    if(player_who == "player1"){
        color = "#ca1a1a";
        mark = "A";
        mark2 = "a";
    } else if(player_who == "player2"){
        color = "#33b6df";
        mark = "B";
        mark2 = "b";
    }
    players[player_who]["prison"] = 3;
    players[player_who]["result"] = 10;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
        players[player_who]["field"] = players[player_who]["result"];
        gamesData["field_Id"][mark] = players[player_who]["field"] + mark2;
        document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
}

prison = (player_who) => {
    show("prison");
    document.getElementById("prison_turn_left").innerHTML = players[player_who]["prison"];
}

prisonCard = () => {
    var player_who = "";
    if(gamesData["turn"] % 39 == 1){
        player_who = "player1";
    } else if(gamesData["turn"] % 39 == 0){
        player_who = "player2";
    }

    if(players[player_who]["prisonOut"] != 0){
        players[player_who]["prisonOut"]--;
        players[player_who]["prison"] = 0;
        alert("Użyto karty");
        pass();
    }
    else{
        alert("Nie posiadasz karty");
    }
    console.log("CARD");
}

prisonDice = () => {
    var player_who = "";
    if(gamesData["turn"] % 39 == 1){
        player_who = "player1";
    } else if(gamesData["turn"] % 39 == 0){
        player_who = "player2";
    }
    diceThrow();
    console.log(gamesData["drop"]["1"]);
    console.log(gamesData["drop"]["2"]);
    if(gamesData["drop"]["1"] == gamesData["drop"]["2"]){
        players[player_who]["prison"] = 0;
        alert("Wychodzisz z więzienia");
        pass();
    }
    else{
        players[player_who]["prison"]--;
        pass();
    }
}

prisonPay = () => {
    var player_who = "";
    if(gamesData["turn"] % 39 == 1){
        player_who = "player1";
        money = "money_1";
    } else if(gamesData["turn"] % 39 == 0){
        player_who = "player2";
        money = "money_2";
    }
    players[player_who]["PlayerCash"] -= 50;
    document.getElementById(money).innerHTML = players[player_who]["PlayerCash"];
    alert("Wykupiłeś się z więzienia");
    players[player_who]["prison"] = 0;
    console.log(players[player_who]["prison"]);
    console.log("PAY");
    pass();
}

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

isOwned = (player_who) => {
    var fieldOwn = players[player_who]["field"];
    var owner = " ";
    if ((property[fieldOwn]["own"]) != " ") {
        if ((property[fieldOwn]["own"]) == player_who) {
            //upgrade();
            console.log("You own that");
        } else {
            document.getElementById("payment").style.display = "block";
            owner = property[fieldOwn]["own"];
        }
        //Pay
    } else if ((property[fieldOwn]["own"]) == " ") {
        document.getElementById("info").style.display = "block";
        document.getElementById("color").style.backgroundColor = property[fieldOwn]["color"];
        document.getElementById("title").innerHTML = property[fieldOwn]["name"];
        document.getElementById("cost").innerHTML = property[fieldOwn]["value"];
        //Buy or Pass
    }
}

//Pay if field is owned
pay = () => {
    var player_who = (gamesData["turn"] - 1) % 2;
    var standing = " ";
    var owner = " ";
    if (player_who == 1) {
        standing = "player1"
        standingCash = "money_1";
        owner = "player2";
        ownerCash = "money_2";
    } else if (player_who == 0) {
        standing = "player2";
        standingCash = "money_2";
        owner = "player1";
        ownerCash = "money_1";
    }
    var toPay = 0;
    var whichField = players[standing]["field"];

    toPay = (property[whichField]["price_default"]) + (property[whichField]["house"] * property[whichField]["house_price"]) + (property[whichField]["hotel"] * property[whichField]["hotel_price"]);
    players[standing]["PlayerCash"] -= toPay;
    players[owner]["PlayerCash"] += toPay;
    document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(ownerCash).innerHTML = players[owner]["PlayerCash"];
    pass();
}

getCard = (field) => {
    if (gamesData["turn"] % 2 == 0) {
        var mark = "A";
    } else if (gamesData["turn"] % 2 == 1) {
        var mark = "B";
    }
    var cardID = mark + field;
    console.log(cardID);
    document.getElementById(cardID).style.backgroundColor = property[field]["color"];

}
//Free field buy option
buy = () => {
    var player_who = (gamesData["turn"] - 1) % 2;
    var standing = " ";
    if (player_who == 1) {
        standing = "player1";
        standingCash = "money_1";
    } else if (player_who == 0) {
        standing = "player2";
        standingCash = "money_2";
    }
    var fieldOn = players[standing]["field"];
    var price = property[fieldOn]["value"];
    if (players[standing]["PlayerCash"] >= price) {
        players[standing]["PlayerCash"] -= price;
        property[fieldOn]["own"] = standing;
        document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
        getCard(fieldOn);
        alert("Kupiono");
        pass();
    } else if (players[standing]["PlayerCash"] < price) {
        alert("No money u poor retard");
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
    } 
    
    else if (gamesData["turn"] % 2 == 0) {
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