var password = {
    pass: " "
};
var word = {
    words: " ",
    long: " "
};
var words_guess = ["wilk", "ABC", "Kot", "Pies", "Samochód", "Ryś", "Czołg", "Koniczyna", "Osioł", "Pluszak"];
var to_rand = words_guess.length;
var choice = " ";

randed = (obj) => {
    var which = Math.floor(Math.random() * to_rand);
    obj.words = words_guess[which];
}

gamemode = (that) => {
    if (choice == " ") {
        if (confirm("You want to input word by yourself?")) {
            //Wpisanie hasła przez gracza
            that.words = prompt("Write down your word").toLowerCase();
            that.long = that.words.length;
            choice = "self";

        } else {
            //Losowanie hasła z tablicy
            randed(word);
            that.long = that.words.length;
            console.log(word.words);
            choice = "auto";
        }
    } else if (choice == "self") {
        that.words = prompt("Write down your word");
        that.long = that.words.length;
    } else if (choice == "auto") {
        randed(word);
        that.long = that.words.length;
    }
}

onload = gamemode(word);

var letter;
var letters = [];
var field;
var i = 1;
var used = 1;
var pass = [];
var life = 13;
var guessed = 0;


//Wpisanie hasła w tablicę i wyświetlanie pól w haśle
pass_array = (pass) => {
    for (let i = 0; i < word.long; i++) {
        pass[i] = word.words.charAt(i);
        if (pass[i] == " ") {
            field = "<div class = 'pass_word' id = " + i + ">&nbsp;</div>"
            document.getElementById("pass").innerHTML += field;
            guessed++;
        } else if (pass[i] != " ") {
            field = "<div class = 'pass_word' id=" + i + ">&nbsp;_</div>";
            document.getElementById("pass").innerHTML += field;
        }
    }
}
onload = pass_array(pass);

//Uruchamianie klawiatury
btnDisable = () => {
    var x = document.getElementsByClassName("alphabet_btn");
    for (let i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    document.getElementById("new_game_btn").style.display = "inline";
}

//Wyłączanie klawiatury
btnEnable = () => {
    var x = document.getElementsByClassName("alphabet_btn");
    for (let i = 0; i < x.length; i++) {
        x[i].disabled = false;
    }
    document.getElementById("new_game_btn").style.display = "none";
}

letter_print = (letter) => {
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
    document.getElementById("hangman_img").src = "img/" + life + ".png";
    i++;
    //Warunki kończące grę
    if (life == 0) {
        document.getElementById("info2").innerHTML = "You hanged a man!";
        btnDisable();
    } else if (guessed == word.long) {
        document.getElementById("info2").innerHTML = "You saved a man!";
        btnDisable();
    }
}

//Resetowanie ustawień i zmiennych do nowej gry
new_game = () => {
    document.getElementById("info2").innerHTML = " ";
    document.getElementById("missed_letters").innerHTML = " ";
    document.getElementById("pass").innerHTML = " ";
    for (let i; i < letters.length; i++) {
        letters[i] = 0;
    }
    for (let i; i < pass.length; i++) {
        pass[i] = 0;
    }
    life = 13;
    guessed = 0;
    word.words = " ";
    gamemode(word);
    pass_array(pass);
    document.getElementById("hangman_img").src = "img/13.png";
    btnEnable();
}