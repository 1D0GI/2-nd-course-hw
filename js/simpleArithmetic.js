function simpleArithmetic(oneRandomNum, twoRandomNum) {
    oneRandomNum = Math.floor(Math.random() * 20);
    twoRandomNum = Math.floor(Math.random() * 20);
    
    const myLetters = ['+', '-', '*', '/'];
    let randomTask = '';
    const randomIndex = Math.floor(Math.random() * myLetters.length);
    randomTask += myLetters[randomIndex];
    console.log(randomTask);


    for (; ;) {
        let user = prompt(`${oneRandomNum} ${randomTask} ${twoRandomNum} = `);

        if (user === null) {
            alert('До встречи, еще увидемся!');
            break;
        } else if (user.trim() === '') {
            alert('Пустая строка! Введите получившийся ответ:');
            continue;
        }

        user = +user;
        let shouldExit = false;

        switch (randomTask) {
            case '+':
                result = oneRandomNum + twoRandomNum;

                if (result === user) {
                    alert('ура молодец');
                    shouldExit = true;
                }
                alert('неверно, попробуй еще раз');

                break;
            case '-':
                result = oneRandomNum - twoRandomNum;
                
                if (result === user) {
                    alert('ура молодец');
                    shouldExit = true;
                }
                alert('неверно, попробуй еще раз');

                break;
            case '*':
                result = oneRandomNum * twoRandomNum;

                if (result === user) {
                    alert('ура молодец');
                    shouldExit = true;
                }
                alert('неверно, попробуй еще раз');

                break;
            case '/':
                result = oneRandomNum / twoRandomNum;

                if (result === user) {
                    alert('ура молодец');
                    shouldExit = true;
                }
                alert('неверно, попробуй еще раз');
                
                break;
            default:
                break;
        }
        
        if (shouldExit) {
            break;
        }
    }
}