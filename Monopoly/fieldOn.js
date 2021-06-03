isOwned = (player_who) => {
    var fieldOwn = players[player_who]["field"];
    var owner = " ";
    if ((property[fieldOwn]["own"]) != " ") {
        if ((property[fieldOwn]["own"]) == player_who) {
            if (property[fieldOwn]["hotel"] != 1) {
                upgrade();
            } else{
                pass();
            }
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
    var houseCount = property[whichField]["house"];
    if (property[whichField]["house"] == 0 && property[whichField]["hotel"] == 0) {
        toPay = property[whichField]["price_default"];
    } else if (property[whichField]["house"] != 0 && property[whichField]["hotel"] == 0) {
        toPay = property[whichField]["house_price_pay_" + houseCount];
    } else if (property[whichField]["hotel"] != 0) {
        toPay = property[whichField]["hotel_price_pay"];
    }
    if (toPay <= players[standing]["PlayerCash"]) {
        players[standing]["PlayerCash"] -= toPay;
        players[owner]["PlayerCash"] += toPay;
        document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
        document.getElementById(ownerCash).innerHTML = players[owner]["PlayerCash"];
        pass();
    } else if (toPay > players[standing]["PlayerCash"]) {
        sold();
    }
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