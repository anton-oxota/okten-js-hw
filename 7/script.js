const usersData = [
    {
        id: 1,
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890"
    },
    {
        id: 2,
        name: "Jane",
        surname: "Smith",
        email: "jane.smith@example.com",
        phone: "+0987654321"
    },
    {
        id: 3,
        name: "Alice",
        surname: "Johnson",
        email: "alice.johnson@example.com",
        phone: "+1122334455"
    },
    {
        id: 4,
        name: "Bob",
        surname: "Brown",
        email: "bob.brown@example.com",
        phone: "+5566778899"
    },
    {
        id: 5,
        name: "Charlie",
        surname: "Davis",
        email: "charlie.davis@example.com",
        phone: "+6677889900"
    },
    {
        id: 6,
        name: "Emily",
        surname: "Clark",
        email: "emily.clark@example.com",
        phone: "+2233445566"
    },
    {
        id: 7,
        name: "Frank",
        surname: "Miller",
        email: "frank.miller@example.com",
        phone: "+9988776655"
    },
    {
        id: 8,
        name: "Grace",
        surname: "Wilson",
        email: "grace.wilson@example.com",
        phone: "+3322114455"
    },
    {
        id: 9,
        name: "Henry",
        surname: "Taylor",
        email: "henry.taylor@example.com",
        phone: "+8877665544"
    },
    {
        id: 10,
        name: "Ivy",
        surname: "Anderson",
        email: "ivy.anderson@example.com",
        phone: "+1100223344"
    }
];

// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const arrayOfUsers = usersData.map((user) => new User(user.id, user.name, user.surname, user.email, user.phone));
console.log(arrayOfUsers);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const arrayWithPairId = arrayOfUsers.filter((user) => user.id % 2 === 0);
console.log(arrayWithPairId);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedArrayOfUsers = arrayOfUsers.sort((a, b) => a.id - b.id);
console.log(sortedArrayOfUsers);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

const clientsData = [
    {
        id: 1,
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        order: ["Laptop"]
    },
    {
        id: 2,
        name: "Jane",
        surname: "Smith",
        email: "jane.smith@example.com",
        phone: "+0987654321",
        order: ["Tablet", "Smartwatch", "Bluetooth Speaker"]
    },
    {
        id: 3,
        name: "Alice",
        surname: "Johnson",
        email: "alice.johnson@example.com",
        phone: "+1122334455",
        order: ["Monitor", "Keyboard", "Mouse", "Smartphone", "Headphones"]
    },
    {
        id: 4,
        name: "Bob",
        surname: "Brown",
        email: "bob.brown@example.com",
        phone: "+5566778899",
        order: ["Camera", "Tripod", "Memory Card"]
    },
    {
        id: 5,
        name: "Charlie",
        surname: "Davis",
        email: "charlie.davis@example.com",
        phone: "+6677889900",
        order: ["Printer", "Ink Cartridges"]
    },
    {
        id: 6,
        name: "Emily",
        surname: "Clark",
        email: "emily.clark@example.com",
        phone: "+2233445566",
        order: ["Smart TV", "Soundbar", "Streaming Device"]
    },
    {
        id: 7,
        name: "Frank",
        surname: "Miller",
        email: "frank.miller@example.com",
        phone: "+9988776655",
        order: ["Fitness Tracker", "Wireless Earbuds", "Sports Watch", "Scanner"]
    },
    {
        id: 8,
        name: "Grace",
        surname: "Wilson",
        email: "grace.wilson@example.com",
        phone: "+3322114455",
        order: ["VR Headset", "Gaming Console", "Gaming Controller"]
    },
    {
        id: 9,
        name: "Henry",
        surname: "Taylor",
        email: "henry.taylor@example.com",
        phone: "+8877665544",
        order: ["Drone", "Extra Batteries", "Propeller Guards", "Smart Home Hub", "Security Camera", "Smart Light Bulbs"]
    },
    {
        id: 10,
        name: "Ivy",
        surname: "Anderson",
        email: "ivy.anderson@example.com",
        phone: "+1100223344",
        order: []
    }
];

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const arrayOfClients = clientsData.map((client) => new Client(client.id, client.name, client.surname, client.email, client.phone, client.order));
console.log(arrayOfClients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedArrayOfClientByOrder = arrayOfClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedArrayOfClientByOrder);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);

            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driverObject) {
        this.driver = driverObject;
    }
}

const car1 = new Car("TT", "Audi", 2020, 320, 3.2);
car1.drive();
car1.info();

car1.increaseMaxSpeed(400);
car1.changeYear(2023);
car1.addDriver({
    name: 'Sam',
    age: 45,
})

console.log(car1);


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);

            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driverObject) {
        this.driver = driverObject;
    }
}

const car2 = new CarClass("TT", "Audi", 2020, 320, 3.2);
car2.drive();
car2.info();

car2.increaseMaxSpeed(400);
car2.changeYear(2023);
car2.addDriver({
    name: 'Sam',
    age: 45,
})

console.log(car2);

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const girlsData = [
    { name: "Emma", age: 26, shoeSize: 37 },
    { name: "Olivia", age: 27, shoeSize: 39 },
    { name: "Ava", age: 28, shoeSize: 37 },
    { name: "Sophia", age: 29, shoeSize: 36 },
    { name: "Isabella", age: 30, shoeSize: 39 },
    { name: "Mia", age: 31, shoeSize: 37 },
    { name: "Amelia", age: 32, shoeSize: 38 },
    { name: "Harper", age: 33, shoeSize: 39 },
    { name: "Evelyn", age: 34, shoeSize: 37 },
    { name: "Abigail", age: 35, shoeSize: 39 }
];


class Cinderelle {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const arrayOfCinderelles = girlsData.map((girl) => new Cinderelle(girl.name, girl.age, girl.shoeSize))

class Prince {
    constructor(name, age, shoeSize) {
        this.nama = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince("Aboba", 30, 38)

const rightCinderelle = arrayOfCinderelles.find((cinderelle) => prince.shoeSize === cinderelle.footSize);
console.log(rightCinderelle);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.myFilter = function (callback) {
    const finded = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            finded.push(this[i])
        }
    }
    return finded
}