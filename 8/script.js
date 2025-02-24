// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

const myObject = {
    name: 'Example Object',
    nestedObject: {
        property1: 'value1',
        property2: 'value2',
        nestedArray: [1, 2, 3, 4, 5],
        nestedFunction: function () {
            console.log('Hello from the nested function!');
        }
    },
    arrayWithObjects: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ],
    mainFunction: function () {
        console.log('Hello from the main function!');
    }
};

function fullObjectCopy(object) {
    const newObject = Array.isArray(object) ? [] : {};

    for (const key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            newObject[key] = fullObjectCopy(object[key])
        } else {
            newObject[key] = object[key]
        }
    }

    return newObject
}

const copy = fullObjectCopy(myObject);

console.log(myObject);
myObject.arrayWithObjects[0].id = Math.random();
myObject.nestedObject.nestedArray[0] = Math.random();

console.log(copy);

// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

const transformedArray = coursesAndDurationArray.map((course, index) => ({ ...course, id: index }))
console.log(transformedArray);