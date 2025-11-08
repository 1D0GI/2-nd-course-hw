const guessNum = () => {
    let randomNum = Math.ceil(Math.random() * 100);
    let user = prompt('Угадай число от 1 до 100');

    for (; ;) {
        if (randomNum < user) {
            user = prompt('Загаданное число меньше твоего!');
        } else if (randomNum > user) {
            user = prompt('Загаданное число больше твоего!');
        } else {
            alert('Ураа! Ты угадал число!');
            break;
        }
    }
}