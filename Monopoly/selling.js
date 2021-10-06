sold = () => {
    show("sold");
    var player_who = (gamesData["turn"] - 1) % 2;
    var standing = " ";
    var many = 0;
    var idNum = 0;
    var toPay = 0;
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
    var whichField = players[standing]["field"];
    toPay = (property[whichField]["price_default"]) + (property[whichField]["house"] * property[whichField]["house_price"]) + (property[whichField]["hotel"] * property[whichField]["hotel_price"]);
    for (x in property) {
        if (property[x]["own"] == standing) {
            many++;
            document.getElementById("sold_box_pass").innerHTML += "<div class='sold-position'><div class='sell-text-area' id='" + idNum + "'></div><button class='sell-btn btn btn-danger' id='" + idNum + " 2' onclick='sell(this.id.slice(0, 2))'>Sell</button></div>";
            document.getElementById(idNum).innerHTML += property[x]["name"];
            tempObj["fieldsCount"]++;
        }
        idNum++;
    }
    var Height = 100 / many;
    var elements = document.querySelectorAll('.sold-position');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = Height + "%";
    }
    console.log(players[standing]["PlayerCash"] + " Hajs");
    console.log(toPay + " do zapłaty");
    console.log(tempObj["fieldsCount"] + " ilość posiadłości");
    if(tempObj["fieldsCount"] == 0 && players[standing]["PlayerCash"] < toPay){
        document.getElementById(standingCash).innerHTML = "BANKRUT";
    }


    console.log("SOLD");
}

sell = (ID) => {
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

    var firstID = parseInt(ID);
    if (parseInt(ID) < 10) {
        var secondID = ID + "2";
    } else if (parseInt(ID) >= 10) {
        var secondID = ID + " 2";
    }
    document.getElementById(firstID).style.display = "none";
    document.getElementById(secondID).style.display = "none";
    property[firstID]["own"] = " ";
    var soldCash = property[firstID]["price_default"] + (property[firstID]["house_price"] * property[firstID]["house"]) + (property[firstID]["hotel_price"] * property[firstID]["hotel"]);
    players[standing]["PlayerCash"] += soldCash;
    document.getElementById(standingCash).innerHTML = players[standing]["PlayerCash"];
    tempObj["fieldsCount"]--;
    if (players[standing]["PlayerCash"] >= toPay) {
        console.log("WORKING");
        pay();
        hide("sold");
    } else if(tempObj["fieldsCount"] == 0 && toPay > players[standing]["PlayerCash"]){
        document.getElementById(standingCash).innerHTML = "BANKRUT";
    }
    // Inaczej sprawdzić czy są jeszcze do sprzedania i jeśli pieniądze już się zgadzają zapłacić i oddać turę
}