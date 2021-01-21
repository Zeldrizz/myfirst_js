var name = prompt('Введи своё имя: ');
console.log('Тебя зовут ' + name);
alert('Открой консоль ' + name);

var surname = prompt('Введи свою фамилию: ');
console.log('Твоя фамилия ' + surname);
alert('Открой консоль ' + name + ' ' +  surname);

var birthYear = prompt('Введи год своего дня рождения  ');
console.log('Ты родился в ' + birthYear + ' году');
alert('Хочешь фокус?');

var currentYear = 2021;
var age = currentYear - birthYear;

console.log('Тебе ' + age + ' лет');
alert('Тебе ' + age + ' лет!');