var calcul = " ";
var mark;

function count(mark) {
    if (mark == "=") {
        calcul = eval(calcul);
        document.getElementById("calculations").innerHTML = calcul;
    } 
    else{
        calcul += mark;
        document.getElementById("calculations").innerHTML = calcul;
    }
}

function cls(){
    calcul = "&nbsp;&nbsp;";
    document.getElementById("calculations").innerHTML = calcul;
    calcul = " ";
}