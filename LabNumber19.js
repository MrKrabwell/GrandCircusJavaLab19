/**
 * Created by yosuk on 2/23/2017.
 */

var fruit = ["Apples", "Bananas", "Kiwi"];

fruit.push("Pear");

function display() {
    for (var i; i = 0; i < fruit.length) {
        document.write(fruit[i] + "<br>")
    }
}
