// dom.js

let days = ['일', '월', '화', '수', '목', '금', '토'];
// function loadPage() {
//     let $table = document.createElement("table");
//     $table.setAttribute('border', '1');
//     let $tr = document.createElement("tr");
//     for (let day of days) {
//         let $th = document.createElement("th"); //element = tag를 말한다
//         let text = document.createTextNode(day);
//         $th.appendChild(text);
//         $tr.appendChild($th);
//     }
//     $table.appendChild($tr);
//     document.getElementById("bdy").appendChild($table);
// }


//forEach로 돌려보기
function loadPage() {
    let $table = document.createElement("table");
    $table.setAttribute('border', '1');
    let $tr = document.createElement("tr");
    days.forEach(function(a,b,c){
        console.log(a, b, c);
        
    })
        $th.appendChild($text);
        $tr.appendChild($th);
    }
    $table.appendChild($tr);
    document.getElementById("bdy").appendChild($table);

