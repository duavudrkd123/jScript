var sum = 0;
function aryFunc() {

    var numbers = [45, 28, 22, 10, 105];
    // numbers.forEach(function(val, idx, ary) {
    // console.log(val, idx, ary);
    // sum += val;
    // });
    numbers.forEach(callBackFunc);
    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}
function callBackFunc(v, i, a) {
    sum += v;
}
var num1 = 10;
var num1 = "hello";
console.log(num1);

// let num2 = 10; //let은 var보다 문법검사를 열심히 한다.
let num2 = "hello";
console.log(num2);

const num3 = 10;

//p1 ,2 ,3 데이터 만들어주고 persons 라는 배열에 값을 넣어주는것
let p1 = {
    name: "Hong",
    age: 20
}
let p2 = {
    name: "lang",
    age: 25
}
let p3 = {
    name: "choi",
    age: 30
}
let persons = [p1, p2, p3]; //배열을 출력해보는 것
persons.forEach(function (a, b, c) {
    // console.log(a, b, c);
    console.log(a.name + ', ' + a.age);
});

persons.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else return 1;
});

// numbers = [45,38,66,92,18,100]; //sort하는 방법
// numbers.sort(function(a, b){
//     return a-b;
// });
// numbers.forEach(function(a){
// console.log(a)
// });

persons.forEach(function (a, b, c) {
    return b.age - a.age;
});
persons.forEach((a, b, c) => {
    console.log('value: ${a.name}, age: ${a.age}, index: ${b.age}');
});
numbers = [0, 45, 38, 66, 92, 18, 100];
numbers.sort(function (a, b, c) {
 
    return a - b;
});
console.log(numbers[0]);

let newNum = numbers.map(function (a, b, c) {
    console.log(`a: ${a}, b: ${b},c: ${c}`);
    console
    return a * b; //인덱스랑 곱한거
});
console.log("aa" + newNum);

let theNew = newNum.filter(function (a, b, c) {
    
    return a > 0;
});
console.log(theNew);

let anotherNew = theNew.reduce((a, b, c) => {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    
    return (a > b) ? a : b;
}, 0);
console.log(anotherNew);
