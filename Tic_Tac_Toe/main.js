//Ilość linijek: V1-414, V2-355, V3-231, V4-72
const O = "O";
const X = "X";
var t=0;

var turn = 1;
var win = 0;

var used=[0,0,0,0,0,0,0,0,0];
var field_value=[0,0,0,0,0,0,0,0,0];

document.getElementById("turn").innerHTML = "Tura: " + turn;

function is_win(){
    if ( //Win dla poziomych linii
        (field_value[0] == X && field_value[1] == X && field_value[2] == X) || (field_value[0] == O && field_value[1] == O && field_value[2] == O) ||(field_value[3] == X && field_value[4] == X && field_value[5] == X) || (field_value[3] == O && field_value[4] == O && field_value[5] == O) ||(field_value[6] == X && field_value[7] == X && field_value[8] == X) || (field_value[6] == O && field_value[7] == O && field_value[8] == O) ||

        //Win dla pionowych linii
        (field_value[0] == X && field_value[3] == X && field_value[6] == X) || (field_value[0] == O && field_value[3] == O && field_value[6] == O) ||(field_value[1] == X && field_value[4] == X && field_value[7] == X) || (field_value[1] == O && field_value[4] == O && field_value[7] == O) ||(field_value[2] == X && field_value[5] == X && field_value[8] == X) || (field_value[2] == O && field_value[5] == O && field_value[8] == O) ||

        //Win dla skosów
        (field_value[0] == X && field_value[4] == X && field_value[8] == X) || (field_value[0] == O && field_value[4] == O && field_value[8] == O) ||(field_value[2] == X && field_value[4] == X && field_value[6] == X) || (field_value[2] == O && field_value[4] == O && field_value[6] == O)) {
        document.getElementById("winner").innerHTML = "Wygrałeś";
        for(var i=0; i<9; i++){
            document.getElementById(i).disabled = true;
        }
    }
    else{
        if((used[0]==1) && (used[1]==1) && (used[2]==1) && (used[3]==1) && (used[4]==1) && (used[5]==1) && (used[6]==1) && (used[7]==1) && (used[8]==1)){
        document.getElementById("winner").innerHTML = "Remis";
        }
    }
}

function field(t) {
    if (used[t] == 0) {
        var z = turn % 2;
        if (z == 0) {
            document.getElementById(t).innerHTML = X;
            field_value[t] = X;
        } else if (z == 1) {
            document.getElementById(t).innerHTML = O;
            field_value[t] = O;
        }
        used[t] = 1;
        turn++;
        document.getElementById("turn").innerHTML = "Tura: " + turn;
        is_win();
    } else if (used[t] == 1) {
        document.getElementById("used-field").innerHTML = "Pole wykorzystane";
    }
}


function reset(){
    
    for(var i=0; i<9; i++){
        document.getElementById(i).innerHTML = " ";
        document.getElementById(i).disabled = false;
    }

    for(var i=0; i<used.length; i++)
    {
        used[i]=0;
        field_value[i]=0;
    }

    turn=1;
    document.getElementById("turn").innerHTML = "Tura: " + turn;
    document.getElementById("winner").innerHTML = " ";
    document.getElementById("used-field").innerHTML = " ";
}