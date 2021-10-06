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
    document.getElementById(nameID + "_one_house_rent").innerHTML = property[fieldID]["house_price_pay_1"];
    document.getElementById(nameID + "_two_house_rent").innerHTML = property[fieldID]["house_price_pay_2"];
    document.getElementById(nameID + "_three_house_rent").innerHTML = property[fieldID]["house_price_pay_3"];
    document.getElementById(nameID + "_four_house_rent").innerHTML = property[fieldID]["house_price_pay_4"];
    document.getElementById(nameID + "_hotel_rent").innerHTML = property[fieldID]["hotel_price_pay"];

    document.getElementById(nameID + "_house_build").innerHTML = property[fieldID]["house_price"];
    document.getElementById(nameID + "_hotel_build").innerHTML = property[fieldID]["hotel_price"];
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