// 1
let a = 10;
alert(a);
a = 20;
alert(a);

// 2
let yearReleaseIPhone = "9 января 2007 года";
alert(yearReleaseIPhone);

// 3
let nameCreatorJS = "Брендан Эйх";
alert(nameCreatorJS);

// 4 
let numOne = 10;
let numTwo = 2;
alert(numOne + numTwo);
alert(numOne - numTwo);
alert(numOne * numTwo);
alert(numOne / numTwo);

// 5
let degrees = 2;
let result = degrees**5;
alert(result);

// 6 
b = 9;
c = 2;
alert(b % c);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// 8
let age = prompt("Сколько вам лет?");
alert(age);

// 9
let user = {
    name: "Igor",
    age: 18,
    isAdmin: true
};

// 10
let yourName = prompt("Как тебя зовут?");
alert(`Привет, ${yourName}`);

// Доп.зд.
let number = prompt("Загадайте любое число");
let newNum = number * 2;
alert(newNum);
let newNumTwo = newNum + 10;
alert(newNumTwo);
let newNumThree = newNumTwo / 2;
alert(newNumThree);
let newNumFour = newNumThree - number;
alert(`Ответ равен ${newNumFour}`);
