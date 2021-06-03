var fieldsData = {
    standing : " ",
    standingCash : " ",
    field : 0
}

upgrade = () => {
    show("upgrade");
    var player_who = (gamesData["turn"]) % 2;
    var standing = " ";
    if (player_who == 1) {
        fieldsData["standing"] = "player1";
        fieldsData["standingCash"] = "money_1";
    } else if (player_who == 0) {
        fieldsData["standing"] = "player2";
        fieldsData["standingCash"] = "money_2";
    }
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    fieldsData["field"] = players[standing]["field"];
}

house1 = () => {
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    property[field]["house"] = 1;
    players[standing]["PlayerCash"] -= property[field]["house"] * property[field]["house_price"];
    document.getElementById(fieldsData["standingCash"]).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(fieldsData["field"] + " 1").style.display = " block";
    document.getElementById("house1Btn").disabled = "true";
    pass();
}

house2 = () => {
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    property[field]["house"] = 2;
    players[standing]["PlayerCash"] -= property[field]["house"] * property[field]["house_price"];
    document.getElementById(fieldsData["standingCash"]).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(fieldsData["field"] + " 1").style.display = " block";
    document.getElementById(fieldsData["field"] + " 2").style.display = " block";
    document.getElementById("house1Btn").disabled = "true";
    document.getElementById("house2Btn").disabled = "true";
    pass();
}

house3 = () => {
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    property[field]["house"] = 3;
    players[standing]["PlayerCash"] -= property[field]["house"] * property[field]["house_price"];
    document.getElementById(fieldsData["standingCash"]).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(fieldsData["field"] + " 1").style.display = " block";
    document.getElementById(fieldsData["field"] + " 2").style.display = " block";
    document.getElementById(fieldsData["field"] + " 3").style.display = " block";
    document.getElementById("house1Btn").disabled = "true";
    document.getElementById("house2Btn").disabled = "true";
    document.getElementById("house3Btn").disabled = "true";
    pass();
}

house4 = () => {
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    property[field]["house"] = 4;
    players[standing]["PlayerCash"] -= property[field]["house"] * property[field]["house_price"];
    document.getElementById(fieldsData["standingCash"]).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(fieldsData["field"] + " 1").style.display = " block";
    document.getElementById(fieldsData["field"] + " 2").style.display = " block";
    document.getElementById(fieldsData["field"] + " 3").style.display = " block";
    document.getElementById(fieldsData["field"] + " 4").style.display = " block";
    document.getElementById("house1Btn").disabled = "true";
    document.getElementById("house2Btn").disabled = "true";
    document.getElementById("house3Btn").disabled = "true";
    document.getElementById("house4Btn").disabled = "true";
    pass();
}

hotel = () => {
    var standing = fieldsData["standing"];
    var field = players[standing]["field"];
    property[field]["hotel"] = 1;
    players[standing]["PlayerCash"] -= property[field]["hotel_price"];
    document.getElementById(fieldsData["standingCash"]).innerHTML = players[standing]["PlayerCash"];
    document.getElementById(fieldsData["field"] + " 5").style.display = " block";
    document.getElementById("hotelBtn").disabled = "true";
    pass();
}