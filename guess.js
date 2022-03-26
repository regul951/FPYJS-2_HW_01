outerGuess: while (true) {
    let n = Math.floor(Math.random() * 1000);
    console.log(n);

    let m = 0;

    m = prompt('Введите число: ');

    while (m !== n || m !== 'q') {
        if (m === 'q') {
            break outerGuess;
        } else if (isNaN(m)) {
            alert('Это не число! Попробуйте еще раз.');
            m = prompt('Введите число: ');
        } else if (m < n) {
            alert('Введенное число меньше, попробуйте еще раз!');
            m = prompt('Введите число: ');
        } else if (m > n) {
            alert('Введенное число больше, попробуйте еще раз!');
            m = prompt('Введите число: ');
        } else if (m == n) {
            alert('Верно! Сыграйте еще раз.');
            break;
        }
    }
}