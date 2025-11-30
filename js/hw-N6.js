// 1
function upperText(text) {
    return newText = text.toUpperCase();;
}

console.log(upperText('js'));

// 2
function secondElement(arr, str) {
    const lowerStr = str.toLowerCase();

    return arr.filter(str =>
        str.toLowerCase().startsWith(lowerStr)
    );
}

console.log(secondElement(['Привет', 'Хлеб', 'Мир', 'Жвачка', 'Мировозрение', 'Дую'], 'Мир'));

// 3
function roundNum(num) {
    let newNum1 = Math.floor(num);
    let newNum3 = Math.round(num);
    let newNum2 = Math.ceil(num);

    console.log(newNum1, newNum2, newNum3);
    return newNum1, newNum2, newNum3;
}

roundNum(32.58884);

// 4
function minMaxNumber(array) {
    const minNumber = Math.min(...array);
    const maxNumber = Math.max(...array);

    console.log(minNumber, maxNumber);
    return minNumber, maxNumber;
}

minMaxNumber([52, 53, 49, 77, 21, 32]);

// 5 
const randomNumber = (el => {
    return el = Math.floor(Math.random() * 10) + 1;;
})

console.log(randomNumber());

// 6
const randomNumSix = (random) => {
    const randomArray = [];

    for (i = 0; i <= (random / 2) - 1; i++) {
        const number = Math.floor(Math.random() * random);
        randomArray.push(number);
    };

    return randomArray;
}

console.log(randomNumSix(20));

// 7
const randomRangeNumbers = (firstRange, secondRange) => {
    return randomRange = Math.floor(Math.random() * (secondRange - firstRange + 1) + firstRange);
}

console.log(randomRangeNumbers(2, 8));

// 8
let now = new Date()
console.log(now.toLocaleDateString());

// 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate.toLocaleDateString());

// 10
function formatDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const someDate = new Date();
console.log(formatDate(someDate));
