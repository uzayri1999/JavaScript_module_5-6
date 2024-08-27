// Задание 5.10.4
/*
const name = prompt(`Введите свое имя`);
const year = prompt(`Введите свой год рождения`);
let date = new Date();
let age = date.getFullYear() - year;
const ageOstatok = age % 10;

if (isNaN(age) || name.trim() ==="") {
    alert (`Год не число или пустое имя`);
} else {
    if (age === 11 || age === 12 || age === 13 || age === 14) {
        alert (`${name}: ${age} лет`);
    } else {
        switch (ageOstatok) {
            case 1:
                alert (`${name}: ${age} год`);
                break;
            case 2:
                alert (`${name}: ${age} года`);
                break;
            case 3:
                alert (`${name}: ${age} года`);
                break;
            case 4:
                alert (`${name}: ${age} года`);
                break;
            default:
                alert (`${name}: ${age} лет`);
        }
    }
}
    */