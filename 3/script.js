// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`
        <div>div c довільним текстом всередині</div>
        `);
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом

for (let i = 0; i < 10; i++) {
    document.write(`
        <div>div c довільним текстом і індексом всередині ${i}</div>
        `);
}

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i < 20) {
    document.write(`
        <h1>20 блоків h1 c довільним текстом всередині</h1>
        `);
    i++;
}

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;

while (j < 20) {
    document.write(`
        <h1>20 блоків h1 c довільним текстом і індексом всередині ${j}</h1>
        `);
    j++;
}

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = [
    "html",
    "css",
    "javascript",
    "mysql",
    "mongodb",
    "react",
    "angular",
    "node.js",
];
let liElements = "";

for (const item of listOfItems) {
    liElements += `<li>${item}</li>`;
}

document.write(`<ul>${liElements}</ul>`);

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: "milk",
        price: 22,
        image: "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
    },
    {
        title: "juice",
        price: 27,
        image: "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
    },
    {
        title: "tomato",
        price: 47,
        image: "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
    },
    {
        title: "tea",
        price: 15,
        image: "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
    },
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title} image" class="product-image">
        </div>
        `);
}

// #4WrHwFTEop0
// є масив

//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    { name: "vasya", age: 31, status: false },
    { name: "petya", age: 30, status: true },
    { name: "kolya", age: 29, status: true },
    { name: "olya", age: 28, status: false },
    { name: "max", age: 30, status: true },
    { name: "anya", age: 31, status: false },
    { name: "oleg", age: 28, status: false },
    { name: "andrey", age: 29, status: true },
    { name: "masha", age: 30, status: true },
    { name: "olya", age: 31, status: false },
    { name: "max", age: 31, status: true },
];

document.write("<h2>- користувачі зі статусом true</h2>");

for (const user of users) {
    if (user.status) {
        document.write(`
            <div>name ${user.name} status - ${user.status}</div>            
            `);
    }
}

document.write("<h2>- користувачі зі статусом false</h2>");

for (const user of users) {
    if (!user.status) {
        document.write(`
            <div>name ${user.name} status - ${user.status}</div>            
            `);
    }
}
document.write("<h3>- користувачі старші за 30 років</h3>");

for (const user of users) {
    if (user.age > 30) {
        document.write(`
            <div>name ${user.name} age - ${user.age}</div>            
            `);
    }
}
