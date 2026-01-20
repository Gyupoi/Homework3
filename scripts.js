let password = 'пароль';

let question = prompt("Введите пароль");

if (question === password) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}



let c = prompt("введите число");

(c >= 0 && c <= 10) ? console.log("Верно") : console.log("Неверно");



let d = prompt("введите первое число");

let e = prompt("введите второе число");

(d > 100 || e > 100) ? console.log("Верно") : console.log("Неверно");



let a = '2';

let b = '3';

alert(+a + +b);



let monthNumber = prompt("Введите номер месяца");

monthNumber = Number(monthNumber);

if (monthNumber > 13) {
    console.log("Неверный номер месяца. Программа не выполняется.");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Сезон: зима");
            break;

        case 3:
        case 4:
        case 5:
            console.log("Сезон: весна");
            break;

        case 6:
        case 7:
        case 8:
            console.log("Сезон: лето");
            break;

        case 9:
        case 10:
        case 11:
            console.log("Сезон: осень");
            break;

        default:
            console.log("Такого месяца не существует.");
    }
}