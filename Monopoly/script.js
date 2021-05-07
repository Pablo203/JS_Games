var file = "test.json";
fetch(file)
.then(x => x.text())
.then(y => JSON.parse(y))
.then(z => console.log(z))
//document.getElementById("asd").innerHTML = y