function reverseText() {
    for (;;) {
        let user = prompt('Введите текст: ');
    
        if (user === null) {
            alert('До встречи, еще увидемся!');
            break;
        } else if (user.trim() === '') {
            alert('Пустая строка! Введите текст который нужно перевернуть: ');
            continue;
        }
    
        let userArr = user.split('').reverse().join('');
    
        alert(userArr);
        // break;
    }
}