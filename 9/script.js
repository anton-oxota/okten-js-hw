"use strict";

// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const body = document.querySelector("body");

const divWrapBlock = document.createElement("div");
divWrapBlock.classList.add("wrap", "collapse", "alpha", "beta");
divWrapBlock.style.cssText = `
  background: pink;
  color: blue;
  font-size: 30px;
`;
divWrapBlock.textContent = "Hello Okten";
body.appendChild(divWrapBlock);

const divWrapBlockCopy = divWrapBlock.cloneNode(true);
body.appendChild(divWrapBlockCopy);

console.log(divWrapBlock, divWrapBlockCopy);

// #OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ulData = ["Main", "Products", "About us", "Contacts"];
const ulElement = document.createElement("ul");
ulData.forEach((data) => {
  const li = document.createElement("li");
  li.textContent = data;
  ulElement.appendChild(li);
});
body.appendChild(ulElement);

// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

coursesAndDurationArray.forEach((info) => {
  const block = document.createElement("div");
  block.textContent = `title - ${info.title} duration - ${info.monthDuration}`;
  body.appendChild(block);
});

// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

coursesAndDurationArray.forEach((info) => {
  const item = document.createElement("div");
  item.innerHTML = `
    <h1 class='heading'>${info.title}</h1>
    <p class='description'>${info.title}</p>
    `;
  body.appendChild(item);
});
