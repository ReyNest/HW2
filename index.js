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

const numberOne = 10;
const numberTwo = 2;
let result = numberOne + numberTwo;
alert(result);
let result1 = numberOne - numberTwo;
alert(result1);
let result2 = numberOne * numberTwo;
alert(result2);
let result3 = numberOne / numberTwo;
alert(result3);

let numberA = 2;
let numberB = 5;
let result4 = numberA ** numberB;
alert(result4);

let c = 9;
let b = 2;
let result5 = c % b;
alert(result5);

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

const user = {
    name: "Василий",
    age: 30,
    isAdmin: true,
}

let name = String('Василий');
age = Number(30);
let isAdmin = Boolean('true');
user["city of residence"] = "Владивосток"; // "Добавление свойства объекту"
user.age = 32; // "Изменение свойства объекту"
delete user.cityOfRresidence; // "Удаление свойства объекта"
console.log(user)
let infoName = prompt(`Ваше имя?`);
let infoAge = prompt(`Ваш возраст`);
alert(`Ваше имя: ${infoName}, Ваш возраст: ${infoAge}`);

let userName = prompt('Как ваше имя?');
alert(`Ваше имя: ${userName}`);
alert(`Привет ${userName}!`);