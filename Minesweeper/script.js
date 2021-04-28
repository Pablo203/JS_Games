var size = 0;
var fields_id = [];
var fields_id_help = 0;
//Bomb function variables
var x, y = 0;
var bomb_number = 0;
var bomb_used = [];
//Variables to win
var to_win = 0;
var clear = 0;
//Wyświetlenie planszy i przypisanie ID do pól
board = (mode) => {
    //Przypisanie wartości z pola formularza z wielkością planszy
    size = mode;
    to_win = size * size;
    //Choosing font size depending on board size
    var text_size = 0;
    if (size == 8) {
        text_size = 20;
    } else if (size == 14) {
        text_size = 12;
    } else {
        text_size = 10;
    }
    //Ustawienie odpowiedniej siatki Grida
    document.getElementById("mine").style = "grid-template-columns: repeat(" + size + " ," + (100 / size) + "%); grid-template-rows: repeat(" + size + " ," + (100 / size) + "%);"

    //Wyświetlenie odpowiedniej liczby pól  i = kolumny, j = rzędy
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            document.getElementById("mine").innerHTML += "<button class='field btn-light' id='[" + j + " ," + i + "]' onclick='console.log(this.id);  field_check(this.id);' style='font-size:" + text_size + "px; font-weight: bold;'>[" + j + " ," + i + "]</button>";
            //Wpisanie wartości indeksu do tablicy
            fields_id[fields_id_help] = "[" + j + " ," + i + "]";
            fields_id_help++;
        }
    }
    return size, to_win;
}

//Losowanie pól z bombami (Doczepianie do ID " bomb")
bombs = (much) => {
    var made_field = [];
    var used = 0;
    bomb_number = much;
    console.log(to_win);
    to_win -= bomb_number;
    console.log(to_win);

    //Wykonywanie pętli tyle razy ile jest bomb
    for (let i = 0; i < bomb_number; i++) {
        var used = 0;
        made_field[i] = "[" + 0 + " ," + 0 + "]";
        //Losowanie x,y pola dla bomby
        x = Math.floor(Math.random() * size);
        y = Math.floor(Math.random() * size);
        //Wpisywanie wylosowanych współrzędnych
        made_field[i] = "[" + x + " ," + y + "]";

        //Sprawdzenie czy pole jest już wykorzystane
        for (let h = 0; h < bomb_used.length; h++) {
            if (made_field[i] == bomb_used[h]) {
                used = 1;
            } else {
                used = 0;
            }
        }

        //Jeśli nie jest wykorzystane
        if (used == 0) {
            bomb_used[i] = "[" + x + " ," + y + "]";

            //Sprawdzenie czy nie wykorzystane pole ma wartość "bomb" w ID
            //Jeśli ma losuje jeszcze raz, jeśli nie dodaje id bomb i losuje dalej
            if ((document.getElementById(bomb_used[i] + " bomb"))) {
                i--;
            } else {
                document.getElementById(bomb_used[i]).id += " bomb";
                console.log(bomb_used[i]);
            }
        }

    }
    return to_win;
}

//Sprawdzanie czy w pobliżu są bomby
bombs_nearby = (ID) => {
    //Wyznaczanie granicy planszy
    margin_bottom = 0;
    margin_top = size;
    var temp = 0;
    var checking_id;
    //Wyciąganie współrzędnych X i Y z ID
    x = parseFloat(ID.charAt(1));
    y = parseFloat(ID.charAt(4));
    //Sprawdzanie pól dookoła wybranego pola
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            //Tworzenie współrzędnych które będą sprawdzane
            checking_id = "[" + (x + i) + " ," + (y + j) + "]";

            if ((((x + i) >= margin_bottom) && ((y + j) >= margin_bottom)) && (((x + i) < margin_top) && ((y + j) < margin_top))) {
                //Jeśli wartość pola się nie zgadza np([4, 2] != [4, 2] bomb) zwiększa temp
                if (document.getElementById(checking_id) == null) {
                    temp++;
                }
            }
        }
    }
    //Wyświetlanie liczby bomb dookoła wybranego pola i dopasowanie do niego koloru
    switch (temp) {
        case 0:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: white;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 1:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: blue;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 2:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: green;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 3:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: grey;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 4:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: purple;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 5:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: maroon;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 6:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: turquoise;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 7:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: black;";
            document.getElementById(ID).innerHTML = temp;
            break;
        case 8:
            document.getElementById(ID).style = "background-color: #c5c5c5; color: #aaaaaa;";
            document.getElementById(ID).innerHTML = temp;
            break;
    }
}

field_check = (ID) => {
    var bomb = "bomb";
    //Jeśli w polu będzie bomba
    if (ID.includes(bomb)) {
        //Wyłącza pola
        var a = document.getElementsByClassName("field");
        document.getElementById("info").innerHTML = "Allahu Akbar";
        for (let k = 0; k < a.length; k++) {
            a[k].disabled = true;
        }
    } else {
        //Jeśli nie ma bomby zmienia kolor na zielony i wyłącza pole
        var field_good_color = document.getElementById(ID).style = "background-color: #79ff74;";
        document.getElementById(ID).disabled = true;
        bombs_nearby(ID);
    }
    clear++;
    console.log(clear);
    win();
    return clear;
}

win = () => {
    //Jeśli wszystkie pola są odkryte i nie trafiono bomby Wygrana
    if (to_win == clear) {
        document.getElementById("info").innerHTML = "Wygrałeś"
        var a = document.getElementsByClassName("field");
        for (let k = 0; k < a.length; k++) {
            a[k].disabled = true;
        }
    }
}