/**
 * Created by yosuk on 2/23/2017.
 */

// Array to hold the currently added products
var fruit = [];

// Array to hold the prices
var prices = [];

var total = 0.0;

function display() {
    var table = document.getElementById('totalTable');

    // for (var i; i = 0; i < prices.length) {
    //     table.appendChild('<tr><td>' + fruit[i] + '</td><td>' + prices[i] + '</td>');
    // }

    for (i = 0; i < fruit.length; i++) {
        var tr = document.createElement('TR');
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(fruit[i]));
        tr.appendChild(td);
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(prices[i]));
        tr.appendChild(td);
        table.appendChild(tr);
        total += prices[i];
    }
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    td.appendChild(document.createTextNode('Total'));
    tr.appendChild(td);
    var td = document.createElement('TD');
    td.appendChild(document.createTextNode(total));
    tr.appendChild(td);
    table.appendChild(tr);

    //document.write("<p>The total is:</p> <br>total");
    //var totalHTML = document.getElementById('total');
    //totalHTML.innerHTML('<p>The total is:</p> <br>' + total);

}
