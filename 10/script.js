"use strict";

// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputAgeValue = +event.target.age.value;

    if (inputAgeValue < 18) alert("Too young!");
    else alert("Everything fine");
});

// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const priceElement = document.querySelector(".price");
const price = localStorage.getItem("price") ?? "100 UAH";

priceElement.textContent = price;

setTimeout(() => {
    const [priceValue] = priceElement.innerHTML.split(" ");
    const newPrice = `${+priceValue + 10} UAH`;
    localStorage.setItem("price", newPrice);
}, 10 * 1000);

// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

const array = [];

// Creating array with 100 items
for (let i = 0; i < 100; i++) {
    array.push(`Item ${i + 1}`);
}

class Pagination {
    #ITEMS_ON_PAGE = 10;
    #paginationContainer = document.querySelector(".pagination-box");
    #currentPage = 1;
    #totalPages;
    #data = [];

    constructor(data) {
        this.#totalPages = Math.ceil(data.length / this.#ITEMS_ON_PAGE);
        this.#data = this.#transformData(data);
        this.#changePageHandler();
        this.#render();
    }

    #transformData(data) {
        const transformedArray = [];

        for (let i = 0; i < this.#totalPages; i++) {
            const sliceStart = i * this.#ITEMS_ON_PAGE;
            const sliceEnd = i * this.#ITEMS_ON_PAGE + this.#ITEMS_ON_PAGE;

            transformedArray.push(data.slice(sliceStart, sliceEnd));
        }

        return transformedArray;
    }

    #clearContainer() {
        this.#paginationContainer.innerHTML = "";
    }

    #createButton(buttonText, goToPage) {
        return `<button data-go-to="${goToPage}">${buttonText}</button>`;
    }

    #createButtonsElement() {
        if (this.#currentPage > 1 && this.#currentPage < this.#totalPages)
            return `
            ${this.#createButton("Prev", this.#currentPage - 1)}
            ${this.#createButton("Next", this.#currentPage + 1)}
        `;

        if (this.#currentPage === 1)
            return this.#createButton("Next", this.#currentPage + 1);

        if (this.#currentPage === this.#totalPages)
            return this.#createButton("Prev", this.#currentPage - 1);
    }

    #createItemsList() {
        const elementsList = this.#data[this.#currentPage - 1]
            .map((item) => `<li>${item}</li>`)
            .join("");

        return elementsList;
    }

    #render() {
        this.#clearContainer();
        this.#paginationContainer.insertAdjacentHTML(
            "afterbegin",
            this.#createItemsList()
        );
        this.#paginationContainer.insertAdjacentHTML(
            "beforeend",
            this.#createButtonsElement()
        );
    }

    #changePageHandler() {
        this.#paginationContainer.addEventListener("click", (e) => {
            const button = e.target.closest("button");

            if (!button) return;

            this.#currentPage = +button.dataset.goTo;

            this.#render();
        });
    }
}

new Pagination(array);
