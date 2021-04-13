var word = "Password";
var letter;
var letters = [];
var field = [];
var i = 1;
var pass = [];

//Wpisanie hasła w tablicę
for(let i = 0; i<word.length; i++){
    pass[i] = word.charAt(i);
    console.log(pass[i]);
}


//Wyświetlanie odpowiedniej ilości pól w haśle
function password_fields(){
    for(let i=0; i<word.length; i++){
        console.log(i);
        field="<div class='pass_word' id="+i+">&nbsp;&nbsp;_</div>";
        document.getElementById("pass").innerHTML += field;
    }
}
onload=password_fields();


//Wyświetlanie użytych wcześniej liter
function letter_print(letter) {
    if ((i % 18) != 0) {
        letters[i-1] = letter;
        document.getElementById("missed_letters").innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;" + letters[i-1]);
        i++;
    }
    else if(i%18 == 0)
    {
        document.getElementById("missed_letters").innerHTML += "<br><br>";
        i++;
    }
}