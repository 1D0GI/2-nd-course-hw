// 1
let hi = 0;
while (hi < 2) {
    console.log('Привет');
    hi++;
}

// 2
console.log('Числа от 1 до 5:');
for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('-------------');

// 3
console.log('Числа от 7 до 22:');
for (a = 1; a <= 22; a++) {
    if (a >= 1 && a <= 6) {
        continue;
    }
    console.log(a);
}
console.log('-------------');

console.log('\n');

// 4
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
}

for (key in obj) {
    console.log(key, obj[key]);
}

console.log('\n');

// 5
let n = 1000
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Колличество вхождений: ${num}`);

console.log('\n');

// 6
let friday = 5;
while (friday < 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
    friday += 7;
}

console.log('\n');

// 7
let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    console.log(k);
    iterations++;
}
console.log(`Колличество итераций: ${iterations}`);

console.log('\n');

// 8 
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let numMonths = 0
for (let keyMonths in months) {
    numMonths++;
    console.log(`Месяц: ${months[keyMonths]} ${numMonths}-й в году`)
};

console.log('\n');

// 9
const book = {
    Название: 'Гарри Поттер',
    Автор: 'Джоан Кэтлин Роулинг',
    Год_издания: 1997,
    Жанр: 'Фэнтези'
}
for (let keyBook in book) {
    console.log(book[keyBook])
};

console.log('\n');

// 10
let random = [12, 3, 0, -16, 45, 14, -4, 125, 7, -37];
minNum = random[0];
for (i = 0; i < random.length; i++) {
    if (random[i] < minNum) {
        minNum = random[i];
    }
}
console.log(minNum);