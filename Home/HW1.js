class Per {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    get age() {
        return this._age
    }
    set age(value) {
        if(value <0)
        {
throw Error('나이는 -값이 될수 없다')
        } else
        this._age = value;
    }
    speak() {
        console.log(`${this.name}: hello`)
    }

}

const 평강 = new Per('평강', 4)
{
    console.log(평강.name);
    console.log(평강.age);
    평강.speak()
}