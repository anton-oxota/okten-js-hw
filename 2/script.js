// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arrayWitchDiffValues = [
    "Hello",
    "World",
    123,
    NaN,
    true,
    false,
    undefined,
    null,
    { name: "Alex" },
    ["red", "green", "blue"],
];

console.log(
    arrayWitchDiffValues[0],
    arrayWitchDiffValues[1],
    arrayWitchDiffValues[2],
    arrayWitchDiffValues[3],
    arrayWitchDiffValues[4],
    arrayWitchDiffValues[5],
    arrayWitchDiffValues[6],
    arrayWitchDiffValues[7],
    arrayWitchDiffValues[8],
    arrayWitchDiffValues[9]
);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: "JavaScript: Definitive Guide",
    pageCount: 706,
    genre: "Education",
};
const book2 = {
    title: "JavaScript Design Patterns",
    pageCount: 296,
    genre: "Programming",
};
const book3 = {
    title: "JavaScript for Kids",
    pageCount: 336,
    genre: "Code",
};

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book4 = {
    title: "JavaScript: Definitive Guide",
    pageCount: 706,
    genre: "Education",
    authors: [
        {
            name: "David Flanagan",
            age: 39,
        },
    ],
};
const book5 = {
    title: "JavaScript Design Patterns",
    pageCount: 296,
    genre: "Programming",
    authors: [
        {
            name: "Addy Osmani",
            age: 38,
        },
    ],
};
const book6 = {
    title: "JavaScript for Kids",
    pageCount: 336,
    genre: "Code",
    authors: [
        {
            name: "Nick Morgan",
            age: null, // Can't find his age
        },
    ],
};

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    { name: "Star01", password: "jY7#2p" },
    { name: "Nova22", password: "rM4!8x" },
    { name: "Hexa5", password: "qT6&9z" },
    { name: "LunaX", password: "uW5@3k" },
    { name: "Blaze9", password: "aL2*4v" },
    { name: "EchoZ", password: "tG8^7y" },
    { name: "Miro7", password: "bH1$5c" },
    { name: "Zephyr", password: "wF3#9j" },
    { name: "Orion8", password: "lP6&2n" },
    { name: "KiloY", password: "kN4@8r" },
];

console.log(
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password
);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

const temperature = [
    [-4, 0, 1],
    [-3, 5, 2],
    [1, 4, -3],
    [3, 0, 4],
    [-3, 0, 5],
    [6, 6, 6],
    [1, 5, 0],
];

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = +prompt("Entep your number");

if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = +prompt("Enter current minutes from 0 to 59");

switch (parseInt(time / 15)) {
    case 0:
        console.log("Перша чверть");
        break;
    case 1:
        console.log("Друга чверть");
        break;
    case 2:
        console.log("Третя чверть");
        break;
    case 3:
        console.log("Четверта чверть");
        break;

    default:
        console.log("Incorrect value");
        break;
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = +prompt("Enter current day from 1 to 31");

if (day >= 1 && day < 10) {
    console.log("Перша декада");
} else if (day >= 10 && day < 20) {
    console.log("Друга декада");
} else if (day >= 20 && day <= 31) {
    console.log("Третя декада");
} else {
    console.log("Incorrect value");
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const dayOfWeek = +prompt("Enter number day of week from 1 to 7");

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Incorrect value");
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const num_1 = +prompt("Enter number 1");
const num_2 = +prompt("Enter number 2");

if (num_1 > num_2) {
    console.log(num_2);
} else if (num_2 > num_1) {
    console.log(num_2);
} else {
    console.log("This numbers are equal");
}

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
// тобто ті, які приводиться до false, а це 0 null undefined і тд).

{
    let x = "<Enter any type of variable>";
    x = !!x ? x : "default";
    console.log(x);
}

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

const coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}
