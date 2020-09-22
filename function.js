console.log("여기여기....");

sum(10, 20);

function sum(num1, num2) {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}
function concat(str1, str2) {
    return str1 + str2;
}
var numbers = [3, 4, 2, 4, 5, 21];
function arySum() {
    var sum = 0;
    for (num of numbers) {
        sum += num;

    }
    return sum;
}
var mySum = function () {
    var sum = 0;
    for (num of numbers) {
        sum += num;
    }
    return sum;
}

function setBackgroundColor(element) {
    element.style.background = "aqua";
    element.style.color = "red";
}
function sumThis(num1, num2) {
    var sum = 0;
    var num2 = parseInt(document.getElementById("num2"));
    var num1 = parseInt(document.getElementById("num1"));
    result = num1 + num2;
    return result;
}