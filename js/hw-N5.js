// 1
const valueTen = [1, 5, 4, 10, 0, 3];

for (let i = 0; i <= valueTen.length; i++) {
    if (valueTen[i] === 0) break;
    console.log(valueTen[i]);
}

// 2
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 4) {
        index = i;
        break;
    }
}

console.log(index);

// 3
const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// 4
const multiArray = [];

for (let i = 0; i <= 2; i++) {
    const row = [];

    for (let j = 0; j < 3; j++) {
        row.push(1);
    }

    multiArray.push(row);
}

console.log(multiArray);

// 5 
const pushArray = [1, 1, 1];
const pushArrayTwo = [2, 2, 2];

pushArray.push(...pushArrayTwo);

console.log(pushArray);

// 6
const delStr = [9, 8, 7, 'a', 6, 5];

delStr.sort();
delStr.pop();

console.log(delStr);

// 7
const guessNumber = [9, 8, 7, 6, 5];

for (let i = 0; i <= guessNumber.length; i++) {
    let user = +prompt('Угадай есть ли число в массиве или нет');

    if (guessNumber.includes(user)) {
        alert('Угадал!');
        break;
    } else {
        alert('Не угадал!');
    }
}

// 8
const str = "abcdef";
const reversed = str.split('').reverse().join('');
console.log(reversed);

// 9
const multiArr = [[1, 2, 3], [4, 5, 6]];
const result = multiArr.reduce((acc, current) => acc.concat(current), []);
console.log(result);

// 10 
const array = [3, 5, 8, 2, 1, 4, 6, 7, 9, 0];
for (let i = 0; i < array.length - 1; i++) {
    console.log(`${array[i]} + ${array[i + 1]} = ${array[i] + array[i + 1]}`);
}

// 11 
const squareNum = (squareNumber) => {
    const square = squareNumber.map(j => j ** 2);
    return square;
}

console.log(squareNum([4, 6, 2, 8]));

// 12 
const lengthString = (arrStr) => {
    const arrStrLengths = arrStr.map(i => i.length);
    return arrStrLengths;
}

console.log(lengthString(['Привет', 'Мой', 'Друг']));

// 13
const negativeNumber = (num) => {
    const negativeNum = num.filter(i => i < 0);
    return negativeNum;
}

console.log(negativeNumber([4, -6, 2, -8, 32, -45, 1, 0]));

// 14 
const randomNumber = [];

for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    randomNumber.push(randomNum);
}

const sortNubmer = randomNumber.filter(i => i % 2 === 0);

console.log(randomNumber);
console.log(sortNubmer);

// 15
const reduceNumber = [];

for (let i = 0; i < 6; i++) {
    const reduceNum = Math.floor(Math.random() * 10);
    reduceNumber.push(reduceNum);
}

const arithmetMean = reduceNumber.reduce((i, j) => i + j, 0) / reduceNumber.length;

console.log(reduceNumber);
console.log(arithmetMean);