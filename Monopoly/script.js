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
document.getElementById("balance_1").innerHTML = money_1;
document.getElementById("balance_2").innerHTML = money_2;
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
console.log(chance_cards);

change = (arr) => {
    var temp = arr.shift();
    arr.push(temp);
}
//Setup Area End

dice_throw = () =>{
    drop1 = Math.floor(Math.random() * 6) + 1;
    drop2 = Math.floor(Math.random() * 6) + 1;
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


show = (word) =>{
    document.getElementById(word + "_box").style.display = "block";
    document.getElementById(word + "_box_title").style.display = "block";
    document.getElementById(word + "_box_content").style.display = "block";
    document.getElementById(word + "_box_pass").style.display = "block";
}

hide = (word) =>{
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
    if(number != (0 || 10 || 20 || 30 || 7 || 22 || 36 || 2 || 17 || 33 || 4 ||38)){
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

chestJSON = (element) =>{
    var file = "cards.json";
    var number = element;
    document.getElementById("chest_title").innerHTML = "Community Chest";
    fetch(file)
        .then(x => x.text())
        .then(y => JSON.parse(y))
        .then(z => document.getElementById("chest_content").innerHTML = (z[number]))
    change(community_chest);
}

//Checking if field is special
is_special = (field) =>{
    if(field == 10){
        console.log("Prison Field");
    }
    else if(field == 20){
        pass();
    }
    //Go to Jail 30
    else if(field == 30){
        console.log("Go to jail");
    }
    /*else if(field == )*/
    for(x in chances){
        if(chances[x] == field){
            show("chance");
        }
    }
    for(x in chests){
        if(chests[x] == field){
            show("chest");
            chestJSON(community_chest[0]);
        }
    }
    for(x in taxes){
        if(taxes[x] == field){
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
    dice_throw();
    //Showing two dices results
    drop = drop1 + drop2;
    //Checking who's turn it is
    if (turn % 2 == 1) {
        //Jumping through fields
        for(let i = 0; i<drop; i++){
            resultA++;
            //If jumped field was Start add cash
            if((resultA%39) == 0){
                money_1 += 200;
                document.getElementById("balance_1").innerHTML = money_1;
                console.log("Start");
            }
        }
        field = resultA % 39;
        //If field is special taking action
        is_special(field);
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
    } 
    
    else {
        //Jumping through fields
        for(let i = 0; i<drop; i++){
            resultB++;
            //If jumped field was Start add cash
            if((resultB%39) == 0){
                money_2 += 200;
                document.getElementById("balance_2").innerHTML = money_2;
                console.log("Start");
            }
        }
        field = resultB % 39;
        //If field is special taking action
        is_special(field);
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