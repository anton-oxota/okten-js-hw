// #dFeorS3m7u
// - Знайти та вивести довижину настyпних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const arrayOfPhrase = ['hello world', 'lorem ipsum', 'javascript is cool'];

arrayOfPhrase.forEach((phrase) => {
    console.log(`${phrase} has ${phrase.length} length`)
})

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

arrayOfPhrase.forEach((phrase) => {
    console.log(phrase.toUpperCase())
})

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const arrayOfBigPhrase = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

arrayOfBigPhrase.forEach((phrase) => {
    console.log(phrase.toLowerCase())
})

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str = ' dirty string   ';
console.log(str.trim());

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
    return str.split(' ');
}

console.log(stringToarray('Ревуть воли як ясла повні'))

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const arrayStringFromNumbers = numbers.map((number) => number.toString())
console.log(arrayStringFromNumbers)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11,21,3]

function sortNums(array, direction) {
    switch(direction) {
        case 'ascending':
            return array.sort((a, b) => a - b)
        case 'descending':
            return array.sort((a, b) => b - a)
        default:
            console.error('Invalid direction')
    }
}

console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration

const sortedByMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(sortedByMonthDuration)

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filteredByMoreThen5Month = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filteredByMoreThen5Month)

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const modifiedCoursesAndDurationArray = coursesAndDurationArray.map((course, index) => {
    return {
        ...course,
        id: index,
    }
})
console.log(modifiedCoursesAndDurationArray)

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//    value: '', // '6'-'10', 'ace','jack','queen','king'
//    color:'', // 'red','black'
// }

function createDeck() {
    const valuesArray = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']
    const newDeck = [];

    valuesArray.forEach(value => {
        newDeck.push(
            {
                value, 
                cardSuit: 'spade', 
                color:'black', 
            },
            {
                value, 
                cardSuit: 'club', 
                color:'black', 
            },
            {
                value, 
                cardSuit: 'diamond', 
                color:'red', 
            },
            {
                value, 
                cardSuit: 'heart', 
                color:'red', 
            },
    )
    })

    return newDeck
}

const myDeck = createDeck();

// - знайти піковий туз
const aceSpade = myDeck.find((card) => (card.value === 'ace' && card.cardSuit === 'spade'))
console.log(aceSpade, 'asdf')

// - всі шістки

const arrayOfSix = myDeck.filter((card) => card.value === 6)
console.log(arrayOfSix);

// - всі червоні карти

const arrayOfBlackCards = myDeck.filter((card) => card.color === 'black')
console.log(arrayOfBlackCards)

// - всі буби

const arrayOfDiamonds = myDeck.filter((card) => card.cardSuit === 'diamond')
console.log(arrayOfDiamonds)

// - всі трефи від 9 та більше

const arrayOfHighDiamonds = myDeck.filter((card) => {
    const codition = card.cardSuit === 'diamond' && (card.value >=9 || typeof card.value === 'string')
    return codition;
})
console.log(arrayOfHighDiamonds);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(
    myDeck.reduce((acc, curr) => {
        acc[`${curr.cardSuit}s`].push(curr);
        return acc        
    }, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    } )
)

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function findObjectsByModule(coursesArray, findingText) {
    return coursesArray.filter(course => course.modules.includes(findingText))
}

console.log(findObjectsByModule(coursesArray, 'sass'))
console.log(findObjectsByModule(coursesArray, 'docker'))
