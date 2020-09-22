var students = [];

students.push("김현동");// push는 뒤에 추가
students.push("김현동");// push는 뒤에 추가
students[1] = "김도은" // 주소값으로 추가
students.unshift("김다희"); // 앞에추가

// students.pop(); // 뒤에서 부터 제거
// students.shift(); // 앞에서 부터 제거
students.splice(1,0, "이광호", "동광희");

for(student of students) {
    console.log(student);
}
console.log("--------------------------")
var newStud = students.slice(0, 4); // 첫번째 indexm  두번쨰 index
for(student of newStud) {
    console.log(student);
}

students.sort();
for(student of students) {
    console.log(student);
}
var numbers = [4,6,2,9,1,10,100];
numbers.sort(function(a, b) {
    console.log(a, b)
    return a-b; // -값 => 오름차순 4 - 6 = -2

});
for(num of numbers) {
    console.log(num);
}