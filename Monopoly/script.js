//http://ministranciniewiadom.99e.pl/JS_Games/Monopoly/index.html
//Setup Area Start
var special = [0, 10, 20, 30];
var chances = [7, 22, 36];
var chests = [2, 17, 33];
var taxes = [4, 38];
var community_chest = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
var chance_cards = ['17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'];
var money_1 = 1500;
var money_2 = 1500;
var drop1, drop2;
document.getElementById("money_1").innerHTML = money_1;
document.getElementById("money_2").innerHTML = money_2;
var field;
var resultA = 0;
var resultB = 0;
var field_id_A = "0a";
var field_id_B = "0b";
var turn = 1;
var splice = 1;
document.getElementById(field_id_A).style.backgroundColor = "#ca1a1a";
document.getElementById(field_id_B).style.backgroundColor = "#33b6df";

shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(community_chest);
shuffleArray(chance_cards);
console.log(community_chest);
change = (arr) => {
    var temp = arr.shift();
    arr.push(temp);
}
//Setup Area End

diceThrow = () => {
    drop1 = Math.floor(Math.random() * 1) + 1;
    drop2 = Math.floor(Math.random() * 1) + 1;
    return drop1, drop2;
}

//Passing turn Function
pass = () => {
    document.getElementById("community_chest").style.display = "block";
    document.getElementById("knefel").style.display = "block";
    document.getElementById("ask").style.display = "block";
    document.getElementById("info").style.display = "none";
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

//If field is property fetching data and displaying it
dataJSON = (id) => {
    var file = "data.json";
    const prop = "property";
    const col = "color";
    const tag = "name";
    const price = "value";
    const owned = "own";
    var number = id;
    if (number != (0 || 10 || 20 || 30 || 7 || 22 || 36 || 2 || 17 || 33 || 4 || 38)) {
        fetch(file)
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(z => document.getElementById("color").style.backgroundColor = (z[prop][number][col]))
        fetch(file)
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(z => document.getElementById("title").innerHTML = (z[prop][number][tag]))
        fetch(file)
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(z => document.getElementById("cost").innerHTML = (z[prop][number][price]))
        fetch(file)
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(z => document.getElementById("own").innerHTML = (z[prop][number][owned]))
    }
}

chest_action = (cash, cash_2, number, turn) => {
    var which = " ";
    var which1 = " ";
    if (turn % 2 == 1) {
        which = "money_1";
        which1 = "money_2";
    } else if (turn % 2 == 0) {
        which = "money_2";
        which1 = "money_1";
    }
    if (number == 1) {
        console.log("1");
        field = 0;
        cash += 200;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 2) {
        console.log("2");
        cash += 200;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 3) {
        console.log("3");
        cash -= 50;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 4) {
        console.log("4");
        cash += 50;
        document.getElementById(which).innerHTML = cash
    } else if (number == 5) {
        console.log("5");

    } else if (number == 6) {
        console.log("6");

    } else if (number == 7) {
        console.log("7");
        cash += 50;
        cash_2 -= 50;
        document.getElementById(which).innerHTML = cash;
        document.getElementById(which1).innerHTML = cash_2;
    } else if (number == 8) {
        console.log("8");
        cash += 100;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 9) {
        console.log("9");
        cash += 20;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 10) {
        console.log("10");
        cash += 10;
        cash_2 -= 10;
        document.getElementById(which).innerHTML = cash;
        document.getElementById(which1).innerHTML = cash_2;
    } else if (number == 11) {
        console.log("11");
        cash += 100;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 12) {
        console.log("12");
        cash -= 50;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 13) {
        console.log("13");
        cash -= 50;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 14) {
        console.log("14");
        cash += 25;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 15) {
        console.log("15");

    } else if (number == 16) {
        console.log("16");
        cash += 100;
        document.getElementById(which).innerHTML = cash;
    }
    money_1 = cash;
    money_2 = cash_2;
}
//Chests cards Actions
chestJSON = (element, cash, cash_2, turn) => {
    var file = "cards.json";
    var number = element;
    document.getElementById("chest_title").innerHTML = "Community Chest";
    fetch(file)
        .then(x => x.text())
        .then(y => JSON.parse(y))
        .then(z => document.getElementById("chest_content").innerHTML = (z[number]))
    //FUCKING BIG IF
    change(community_chest);
    chest_action(cash, cash_2, number, turn);
}



//Chance Cards Actions
chanceJSON = (element, cash, cash_2, turn) => {
    var file = "cards.json";
    var number = element;
    document.getElementById("chance_title").innerHTML = "Chance";
    fetch(file)
        .then(x => x.text())
        .then(y => JSON.parse(y))
        .then(z => document.getElementById("chance_content").innerHTML = (z[number]))
    //FUCKING BIG IF
    change(community_chest);
    chance_action(cash, cash_2, number, turn);
    console.log(field);
}

chance_action = (cash, cash_2, number, turn) => {
    var which = " ";
    var which1 = " ";
    if (turn % 2 == 1) {
        which = "money_1";
        which1 = "money_2";
    } else if (turn % 2 == 0) {
        which = "money_2";
        which1 = "money_1";
    }
    if (number == 17) {
        console.log("17");
        field = 0;
        cash += 200;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 18) {
        console.log("18");

        document.getElementById(which).innerHTML = cash;
    } else if (number == 19) {
        console.log("19");

    } else if (number == 20) {
        console.log("20");

    } else if (number == 21) {
        console.log("21");

    } else if (number == 22) {
        console.log("22");
        cash += 50;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 23) {
        console.log("23");
    } else if (number == 24) {
        console.log("24");
    } else if (number == 25) {
        console.log("25");
    } else if (number == 26) {
        console.log("26");
    } else if (number == 27) {
        console.log("27");
        cash -= 15;
        document.getElementById(which).innerHTML = cash;
    } else if (number == 28) {
        console.log("28");
    } else if (number == 29) {
        console.log("29");
    } else if (number == 30) {
        console.log("30");
        cash -= 50;
        cash_2 += 50;
        document.getElementById(which).innerHTML = cash;
        document.getElementById(which).innerHTML = cash_2;
    } else if (number == 31) {
        console.log("31");
        cash += 150;
    } else if (number == 32) {
        console.log("32");
        cash += 100;
        document.getElementById(which).innerHTML = cash;
    }
    money_1 = cash;
    money_2 = cash_2;
    console.log(field);
}

//Checking if field is special
is_special = (field, player, player2, result, turn) => {
    if (field == 10) {
        console.log("Prison Field");
    } else if (field == 20) {
        pass();
    }
    //Go to Jail 30
    else if (field == 30) {
        console.log("Go to jail");
    }
    /*else if(field == )*/
    for (x in chances) {
        if (chances[x] == field) {
            show("chance");
            chanceJSON(chance_cards[0], player, player2, turn);
        }
    }
    for (x in chests) {
        if (chests[x] == field) {
            show("chest");
            chestJSON(community_chest[0], player, player2, result, turn);
        }
    }
    for (x in taxes) {
        if (taxes[x] == field) {
            show("tax");
        }
    }
}

//Turn function
move = () => {
    //Middle box change
    document.getElementById("community_chest").style.display = "none";
    document.getElementById("knefel").style.display = "none";
    document.getElementById("ask").style.display = "none";
    document.getElementById("info").style.display = "block";
    diceThrow();
    //Showing two dices results
    drop = drop1 + drop2;
    //Checking who's turn it is
    if (turn % 2 == 1) {
        //Jumping through fields
        for (let i = 0; i < drop; i++) {
            resultA++;
            //If jumped field was Start add cash
            if ((resultA % 39) == 0) {
                money_1 += 200;
                document.getElementById("money_1").innerHTML = money_1;
            }
        }
        field = resultA % 39;
        //If field is special taking action
        is_special(field, money_1, money_2, turn);
        //Pawn place change
        document.getElementById(field_id_A).style.backgroundColor = "#FFFFFF";
        field_id_A = field + "a";
        //Substracting id number from whole id
        if (field < 10) {
            splice = 1;
        } else {
            splice = 2;
        }
        document.getElementById(field_id_A).style.backgroundColor = "#ca1a1a";
        var field_id = field_id_A.slice(0, splice);
        dataJSON(field_id);
    } else {
        //Jumping through fields
        for (let i = 0; i < drop; i++) {
            resultB++;
            //If jumped field was Start add cash
            if ((resultB % 39) == 0) {
                money_2 += 200;
                document.getElementById("money_2").innerHTML = money_2;
            }
        }
        field = resultB % 39;
        //If field is special taking action
        is_special(field, money_2, money_1, resultB, turn);
        //Pawn place change
        document.getElementById(field_id_B).style.backgroundColor = "#FFFFFF";
        field_id_B = field + "b";
        //Substracting id number from whole id
        if (field < 10) {
            splice = 1;
        } else {
            splice = 2;
        }
        document.getElementById(field_id_B).style.backgroundColor = "#33b6df";
        var field_id = field_id_B.slice(0, splice);
        dataJSON(field_id);
    }
    turn++;
}