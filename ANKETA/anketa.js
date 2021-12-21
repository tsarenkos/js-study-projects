"use strict"

let firstName;
let surname;
let patronymic;
let age;

do {
    firstName = prompt('Введите ваше имя');
} while (firstName === '' || isFinite(firstName));

do {
    surname = prompt('Введите вашу фамилию');
} while (surname === '' || isFinite(surname));

do {
    patronymic = prompt('Введите ваше отчество');
} while (patronymic === '' || isFinite(patronymic));

do {
    age = parseInt(prompt('Введите ваш возраст в годах'));
} while (isNaN(age) || age < 0);

let isMale = confirm('Ваш пол - мужской?');
let gender = isMale ? 'мужской' : 'женский';
let retired = ((isMale && age >= 60) || (!isMale && age >= 55)) ? 'да' : 'нет';

alert(`ваше ФИО: ${surname + ' ' + firstName + ' ' + patronymic}
ваш возраст в годах: ${age}
ваш возраст в днях: ${age * 365}
через 5 лет вам будет: ${age + 5}
ваш пол: ${gender}
вы на пенсии: ${retired}`);