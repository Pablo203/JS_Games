dataJSON = () => {
    var file = "test.json";
    var which = "third";
    var h = "property.green." + which + ".value";
    fetch(file)
        .then(x => x.text())
        .then(y => JSON.parse(y))
        .then(z => console.log(y.property.pink))
}
//document.getElementById("asd").innerHTML = y
var field;
var resultA = 0;
var resultB = 0;
var field_id_A = "0a";
var field_id_B = "0b";
var turn = 1;
document.getElementById(field_id_A).style.backgroundColor = "#ca1a1a";
document.getElementById(field_id_B).style.backgroundColor = "#33b6df";
move = () => {
    var drop = Math.floor(Math.random() * 6) + 1;
    if (turn % 2 == 1) {
        resultA += drop;
        field = resultA % 39;
        document.getElementById(field_id_A).style.backgroundColor = "#FFFFFF";
        field_id_A = field + "a";
        document.getElementById(field_id_A).style.backgroundColor = "#ca1a1a";
    } else {
        resultB += drop;
        field = resultB % 39;
        document.getElementById(field_id_B).style.backgroundColor = "#FFFFFF";
        field_id_B = field + "b";
        document.getElementById(field_id_B).style.backgroundColor = "#33b6df";
    }
    turn++;
}