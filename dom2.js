//dom2.js

let bdy =document.getElementsByTagName("body");

let hong = {
    name: "홍길동",
    age: 25,
    hobby: "독서" //hong에 이름, 나이, 취미를 넣어줌
}
let $table = document.createElement("table");
$table.setAttribute("border","1");
let $tr, $td, $text;


for(let field in hong)//hong의 field를 가지고 오는것 
{
    $tr = document.createElement("tr");
console.log(`field: ${field}, value: ${hong[field]}`);
$td = document.createElement("td");
$text = document.createTextNode(field);
$td.appendChild($text);
$tr.appendChild($td);

$td = document.createElement("td");
$text = document.createTextNode(hong[field]);
$td.appendChild($text);
$tr.appendChild($td)

$table.appendChild($tr);
}

let bdy = document.getElementsByTagName("body");
bdy[0].appendChild($table);
