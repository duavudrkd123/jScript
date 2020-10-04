function log(ㄹㄹ) {
    console.log(ㄹㄹ)
}
log('이거 기본 함수');
// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder


function calculate(command, a, b) {
    //Switch로 만들기
    switch (command) {
        case 'addc':
            return a + b;
        case 'subc':
            return a - b;
        case 'divc':
            return a / b;
        case 'mulc':
            return a * b;
        case 'remc':
            return a % b;
        default:
            throw Error('잘못된 형식, add, sub, div, mul, rem중에 골라주세요.')

    }
    //if로 만들기    
    if (command == 'add') {
        return a + b;
    } else if (command == 'sub') {
        return a - b;
    } else if (command == 'div') {
        return a / b;
    } else if (command == 'mul') {
        return a * b;
    } else if (command == 'rem') {
        return a % b;
    } else {
        return '잘못된 형식, add, sub, div, mul, rem중에 골라주세요.'
    }
}



console.log(calculate('divc', 6, 3));