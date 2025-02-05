// * #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
const hello = "hello";
const domen = "owu";
const tld1 = "com";
const region = "ua";

console.log(hello);
console.log(domen);
console.log(tld1);
console.log(region);

const number_1 = 1;
const number_2 = 10;
const number_3 = -999;
const number_4 = 123;
const number_5 = 3.14;
const number_6 = 2.7;
const number_7 = 16;

console.log(number_1);
console.log(number_2);
console.log(number_3);
console.log(number_4);
console.log(number_5);
console.log(number_6);
console.log(number_7);

const boolenTrue = true;
const boolenFalse = false;

console.log(boolenTrue);
console.log(boolenFalse);

// #6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName = "Anton";
const middleName = "Pavlovych";
const lastName = "Ohota";

// const person = lastName + " " + firstName + " " + middleName;
const person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// #4N0y5tufA
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100;
let b = "100";
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const promptFirstName = prompt("What is your first name ?");
const promptLastName = prompt("What is your last name ?");
const promptMiddletName = prompt("What is your middle name ?");

console.log(`${promptLastName} ${promptFirstName} ${promptMiddletName}`);
