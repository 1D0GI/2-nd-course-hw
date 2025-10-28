// 1
let password = 'пароль';
let enterPassword = prompt('Введите пароль: ');
(enterPassword === password) ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// 2
let c = 2;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

// 3
let d = 40;
let e = 120;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 4
let a = '2';
let b = '3';
alert((+a) + (+b));
// alert(Number(a) + Number(b));

// 5 
let monthNumber = +prompt('Введите месяц: ');
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
        break;
    default:
        alert('Ошибка')
        break
}


// доп 1
let anyNum = +prompt('Пожалуйста, введите любое число');
if (anyNum !== '' && anyNum % 2 === 0) {
    alert('Переменная является числом и оно четное');
} else if (anyNum % 2 === 1) {
    alert('Переменная является числом и оно нечетное');
} else {
    alert('Ошибка: введите число');
}

// 2
let clientOS = 1;
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}

// 3
let clientDeviceYear = 2010;
if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Рады преветствовать');
}