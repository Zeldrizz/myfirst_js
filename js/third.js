alert('Привет!');
alert('Хочешь фокус?');

var seconds = prompt('Введи любое количество секунд');
console.log('Ты ввел ' + seconds + ' секунд');
var minutes = seconds / 60 ;
console.log('Получилось ' + minutes + ' минут');
var hours = minutes / 60;
console.log('Получилось ' + hours + ' часов');
var days = hours / 24;
console.log('Получилось ' + days + ' суток');

alert('Из ' + seconds + ' секунд, ' + 'получилось ' + minutes + ' минут, ' + 'вышло ' + hours + ' часов,' + ' и получилось ' + days + ' суток!');

// alert('Из ' + seconds + ' секунд, ' + 'получилось ' + minutes + ' минут, ' + 'вышло почти ' + (Matth.ceil(hours)) + ' часов,' + ' и получилось почти ' + (Matth.ceil(days)) + ' суток!');