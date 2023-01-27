let a;
a = 10;
alert(a);
a = 20;
alert(a);


let relis;
relis = `Год выпуска первого iPhone`;
alert(`${relis} 2007год`);

let Name;
Name = `Мультипарадигменный язык программирования`;
alert(`JS- ${Name}`);

let NumberOne = 10;
let NumberTwo = 2;
result1 = NumberOne + NumberTwo;
alert(result1);
result1 = NumberOne - NumberTwo;
alert(result1);
result1 = NumberOne * NumberTwo;
alert(result1);
result1 = NumberOne / NumberTwo;
alert(result1);

let NumberA = 2;
let NumberB = 5;
result2 = NumberA ** NumberB;
alert(result2);

let c = 9;
let b = 2;
result3 = c % b;
alert(result3);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt('Сколько вам лет?');
alert(`Ваш возраст: ` + age);
/*
const user = {
    name: 'Василий',
    age: 30,
    isAdmin: true,
}
let name = String('Василий');
age = Number(30);
let isAdmin = Boolean('true');
user[cityOfRresidence] = 'Владивосток'; // "Добавление свойства объекту"
user.age = 32; // "Изменение свойства объекту"
delete user.cityOfRresidence; // "Удаление свойства объекта"
*/
let infoName = prompt(`Ваше имя?`);
infoAge = prompt(`Ваш возраст`);
alert(`Ваше имя: ${infoName}, Ваш возраст: ${infoAge}`);

let userName = prompt('Как ваше имя?');
alert(`Ваше имя: ${userName}`);
alert(`Привет ${userName}!`);