// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calcArea = (a, b) => a * b;

console.log(calcArea(2, 5));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const cyrcleArea = (r) => Math.PI * Math.pow(r, 2);

console.log(cyrcleArea(2));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (r, h) => 2 * Math.PI * r * (r + h);

console.log(cylinderArea(3, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

const logArrayItems = (array) => {
    for (const item of array) {
        console.log(item);
    }
};

logArrayItems(["hello", "world", 1, 2, true, null]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

const renderPWithText = (text) => {
    document.write(`<p>${text}</p>`);
};

renderPWithText("Hello");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

const renderUL = (liText) => {
    document.write(`
        <ul>
            <li>${liText}</li>
            <li>${liText}</li>
            <li>${liText}</li>
        </ul>
        `);
};

renderUL("li text ");

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

const renderULWithLI = (liText, liQuantity) => {
    let ulContent = "";

    for (let i = 0; i < liQuantity; i++) {
        ulContent += `<li>${liText}</li>`;
    }

    document.write(`<ul>${ulContent}</ul>`);
};

renderULWithLI("li text1", 2);
renderULWithLI("li text2", 5);
renderULWithLI("li text3", 3);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

const renderULFromArray = (array) => {
    let ulContent = "";

    for (let i = 0; i < array.length; i++) {
        ulContent += `<li>${array[i]}</li>`;
    }

    document.write(`<ul>${ulContent}</ul>`);
};

renderULFromArray(["hello", "world", 1, 2, true, null]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

const peopleArray = [
    {
        id: 0,
        name: "Alex",
        age: 32,
    },
    {
        id: 1,
        name: "Sam",
        age: 23,
    },
    {
        id: 2,
        name: "Ana",
        age: 33,
    },
];

const renderPeople = (peopleArray) => {
    for (const persone of peopleArray) {
        document.write(
            `<div class="persone">id-${persone.id} name-${persone.name} age-${persone.age}</div>`
        );
    }
};

renderPeople(peopleArray);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const minValue = (arrayOfNumbers) => {
    let minValue = arrayOfNumbers[0];

    for (const number of arrayOfNumbers) {
        if (number < minValue) {
            minValue = number;
        }
    }

    return minValue;
};

console.log(minValue([32, 0, -1, -23, 74, -1, 234, 71, 0, 5, 92, 43, 72]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const arraySum = (arrayOfNumbers) => {
    let sum = 0;

    for (const number of arrayOfNumbers) {
        sum += number;
    }

    return sum;
};

console.log(arraySum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    const value1 = arr[index1];
    const value2 = arr[index2];

    arr[index1] = value2;
    arr[index2] = value1;

    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let value = 0;

    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            value = sumUAH / currencyValue.value;
        }
    }

    return parseInt(value);
};

console.log(
    exchange(
        10000,
        [
            { currency: "USD", value: 25 },
            { currency: "EUR", value: 42 },
        ],
        "USD"
    )
);
console.log(
    exchange(
        10000,
        [
            { currency: "USD", value: 25 },
            { currency: "EUR", value: 42 },
        ],
        "EUR"
    )
);
