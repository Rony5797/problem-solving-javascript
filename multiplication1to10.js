for (var i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}