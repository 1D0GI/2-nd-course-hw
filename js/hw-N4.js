// 1
const lessNum = (a, b) => (a > b) ? console.log(a = b) : console.log(b = a);

lessNum(14, 45);

// 2
const evenAnOddNum = a => (a % 2 == 0) ? console.log('Число четное') : console.log('Число нечетное')

evenAnOddNum(15);

// 3
const squareNum1 = (a) => console.log(a ** 2);

squareNum1(4);

const squareNum2 = (a) => {
    a **= 2;
    return a;
}

console.log(squareNum2(8));

// 4
function userAge() {
    age = prompt('Приветствую, введите свой возраст')

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

userAge();

// 5
const mult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        alert('Одно или оба значения не являются числом');
    } else {
        let result = a * b;
        return result;
    }
}

console.log(mult(3, 7));

// 6
function cubeNum(n) {
    if (isNaN(n)) {
        alert('Переданный параметр не является числом')
    }
    for (; n <= 10; n++) {
        console.log(n + ' в кубе равняется ' + n ** 3);
    }
}

cubeNum(0);

// 7
const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 7,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const pi = 3.14;

function getArea() {
    let S = (this.radius ** 2) * pi;
    return S;
}

function getPerimeter() {
    let P = Math.floor((this.radius * 2) * pi);
    return P;
}

console.log('Площадь круга = ' + circle1.getArea());
console.log('периметр окружности = ' + circle1.getPerimeter());
console.log('Площадь круга = ' + circle2.getArea());
console.log('периметр окружности = ' + circle2.getPerimeter());