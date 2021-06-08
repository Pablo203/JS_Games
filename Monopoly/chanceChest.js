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
            document.getElementById("prison" + mark + players[who]["prisonOut"]).innerHTML = "Wyjdź z więzienia";
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
        var fieldOn = players[who]["field"] % 39;
        if (fieldOn == 7) {
            players[who]["result"] = 12;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            hide("chance");
            isOwned(who);
            console.log(players[who]["result"]);
            console.log("Power Plant");
        } else if(fieldOn == 22) {
            players[who]["result"] = 27;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            hide("chance");
            isOwned(who);
            console.log(players[who]["result"]);
            console.log("Water Works");
        } else if(fieldOn == 36){
            players[who]["result"] = 12;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            console.log(players[who]["result"]);
            players[who]["PlayerCash"] += 200;
            document.getElementById(which).innerHTML = players[who]["PlayerCash"];
            hide("chance");
            isOwned(who);
            console.log("Power Plant");
        }

    } else if (number == 21) {
        console.log("21");
        var fieldOn = players[who]["field"] % 39;
        if (fieldOn == 7) {
            players[who]["result"] = 15;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            hide("chance");
            isOwned(who);
            console.log(players[who]["result"]);
            console.log("Railroad W");
        } else if(fieldOn == 22) {
            players[who]["result"] = 25;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            hide("chance");
            isOwned(who);
            console.log(players[who]["result"]);
            console.log("Railroad N");
        } else if(fieldOn == 36){
            players[who]["result"] = 5;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = "#FFFFFF";
            players[who]["field"] = players[who]["result"];
            gamesData["field_Id"][mark] = players[who]["field"] + mark2;
            document.getElementById(gamesData["field_Id"][mark]).style.backgroundColor = color;
            console.log(players[who]["result"]);
            players[who]["PlayerCash"] += 200;
            document.getElementById(which).innerHTML = players[who]["PlayerCash"];
            hide("chance");
            isOwned(who);
            console.log("Railroad S");
        }
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