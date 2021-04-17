var password = "abc";
var word = password.toLowerCase();
var letter;
var letters = [];
var field;
var i = 1;
var used = 1;
var pass = [];
var life = 13;
var guessed = 0;
/*var myPass = JSON.parse(passes);
console.log(myPass);*/

//Wpisanie hasła w tablicę
function pass_array() {
    for (let i = 0; i < word.length; i++) {
        pass[i] = word.charAt(i);
    }
}
onload = pass_array();

//Wyświetlanie odpowiedniej ilości pól w haśle
function password_fields() {
    for (let i = 0; i < word.length; i++) {
        field = "<div class='pass_word' id=" + i + ">&nbsp;&nbsp;_</div>";
        document.getElementById("pass").innerHTML += field;
    }
}
onload = password_fields();

function btnDisable() {
    var x = document.getElementsByClassName("alphabet_btn");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    document.getElementById("new_game_btn").style.display = "inline";
}

function btnEnable() {
    var x = document.getElementsByClassName("alphabet_btn");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled =false;
    }
    document.getElementById("new_game_btn").style.display = "none";
}

function letter_print(letter) {
    //Podmienianie liter w haśle
    var temp = 0;
    letters[i - 1] = letter.toLowerCase();
    document.getElementById(letters[i - 1]).disabled = true;
    for (var a = 0; a < pass.length; a++) {
        if (letters[i - 1] == pass[a]) {
            document.getElementById(a).innerHTML = pass[a];
            guessed++;
            temp++;
            if (temp == 1) {
                life++;
            }
        }
    }
    //Liczenie miejsca w użytych literach
    if ((used % 18) != 0) {
        document.getElementById("missed_letters").innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;" + letters[i - 1]);
        temp = 1;
        used++;
        life--;
        i++;
    } else if ((used % 18) == 0) {
        document.getElementById("missed_letters").innerHTML += "<br><br>";
        temp = 1;
        used++;
        life--;
        i++;
    }
    document.getElementById("hangman_img").src = life + ".png";
    i++;
    //Warunki kończące grę
    if (life == 0) {
        document.getElementById("info2").innerHTML = "You hanged a man!";
        btnDisable();
    } else if (guessed == word.length) {
        document.getElementById("info2").innerHTML = "You saved a man!";
        btnDisable();
    }
}

function new_game() {
    document.getElementById("info2").innerHTML = " ";
    document.getElementById("missed_letters").innerHTML = " ";
    document.getElementById("pass").innerHTML = " ";
    for(let i; i<letters.length; i++){
        letters[i] = 0;
    }
    life = 13;
    guessed = 0;
    pass_array();
    password_fields();
    btnEnable();
}