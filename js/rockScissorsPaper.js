function rockScissorsPaper() {
    const game = ["камень", "ножницы", "бумага"];
    
    for (; ;) {
        const randomIndex = Math.floor(Math.random() * game.length);
        const machine = game[randomIndex];
        
        const user = prompt("Выберите: Камень, Бумага, Ножницы").toLowerCase().trim();

        if (user === null) {
            alert('До встречи, еще увидемся!');
            break;
        } else if (user.trim() === '') {
            alert('Пустая строка! Выберите чем будете ходить: ');
            continue;
        }

        if (!game.includes(user)) {
            alert("Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага");
            continue;
        }

        if (user === machine) {
            result = "Ничья!";
        } else if (
            (user === "камень" && machine === "ножницы") ||
            (user === "ножницы" && machine === "бумага") ||
            (user === "бумага" && machine === "камень")
        ) {
            result = "Вы победили!";
        } else {
            result = "Компьютер победил!";
        }

        alert(`Ваш выбор: ${user} \nВыбор компьютера: ${machine} \n${result}`);

        const repeat = confirm('Сыграть еще раз?');

        if (repeat) {
            continue;
        } else {
            alert('До встречи, еще увидемся!');
            break;
        }
    }
}