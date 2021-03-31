var dollarString = prompt("Qual o valor em dolar você deseja converter?");
var dollarInt = parseFloat(dollarString);


var valueReal = dollarInt * 5.5
var realFixed = valueReal.toFixed(2)

alert(realFixed);