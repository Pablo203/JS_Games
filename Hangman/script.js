var password = "PASSWORD";
var word = password.toLowerCase();
var letter;
var letters = [];
var field = [];
var i = 1;
var not_right = 1;
var pass = [];
var life = 12;

//Wpisanie hasła w tablicę
for (let i = 0; i < word.length; i++) {
    pass[i] = word.charAt(i);
}


//Wyświetlanie odpowiedniej ilości pól w haśle
function password_fields() {
    for (let i = 0; i < word.length; i++) {
        field = "<div class='pass_word' id=" + i + ">&nbsp;&nbsp;_</div>";
        document.getElementById("pass").innerHTML += field;
    }
}
onload = password_fields();

function letter_print(letter) {
    //Podmienianie liter w haśle
        var temp = 0;
        letters[i - 1] = letter.toLowerCase();
        document.getElementById(letters[i-1]).disabled = true;
        for (var a = 0; a < pass.length; a++) {
            if (letters[i - 1] == pass[a]) {
                document.getElementById(a).innerHTML = pass[a];
                console.log(letters[i - 1]);
                console.log(pass[a]);
                temp++;
                if(temp == 1)
                {
                    life++;
                    console.log(life);
                }
            }
        }
        if ((not_right % 18) != 0) {
            document.getElementById("missed_letters").innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;" + letters[i - 1]);
            temp = 1;
            not_right++;
            life--;
            console.log(life);
            i++;
        } else if ((not_right % 18) == 0) {
            document.getElementById("missed_letters").innerHTML += "<br><br>";
            temp = 1;
            not_right++;
            life--;
            console.log(life);
            i++;
        }
        i++;
}