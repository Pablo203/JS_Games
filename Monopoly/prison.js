goToPrison = (player_who) => {
    var mark = "";
    var color = "";
    if (player_who == "player1") {
        color = "#ca1a1a";
        mark = "A";
        mark2 = "a";
    } else if (player_who == "player2") {
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
    if (gamesData["turn"] % 39 == 1) {
        player_who = "player1";
    } else if (gamesData["turn"] % 39 == 0) {
        player_who = "player2";
    }

    if (players[player_who]["prisonOut"] != 0) {
        players[player_who]["prisonOut"]--;
        players[player_who]["prison"] = 0;
        alert("Użyto karty");
        pass();
    } else {
        alert("Nie posiadasz karty");
    }
    console.log("CARD");
}

prisonDice = () => {
    var player_who = "";
    if (gamesData["turn"] % 39 == 1) {
        player_who = "player1";
    } else if (gamesData["turn"] % 39 == 0) {
        player_who = "player2";
    }
    diceThrow();
    console.log(gamesData["drop"]["1"]);
    console.log(gamesData["drop"]["2"]);
    if (gamesData["drop"]["1"] == gamesData["drop"]["2"]) {
        players[player_who]["prison"] = 0;
        alert("Wychodzisz z więzienia");
        pass();
    } else {
        players[player_who]["prison"]--;
        pass();
    }
}

prisonPay = () => {
    var player_who = "";
    if (gamesData["turn"] % 39 == 1) {
        player_who = "player1";
        money = "money_1";
    } else if (gamesData["turn"] % 39 == 0) {
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