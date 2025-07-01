"use strict";

const _URL = "https://dummyjson.com/recipes";

async function getAllRecipes() {
    const response = await fetch(_URL);

    if (!response.ok) throw new Error("Can't fetch recipes");

    return await response.json();
}

class RecipeView {
    #recipesContainer = document.querySelector(".recipe-container");
    #recipes;

    constructor(recipes) {
        this.#recipes = recipes;
        this.#render();
    }

    #createRecipeElement(recipeData) {
        const { name, cuisine, image, ingredients } = recipeData;

        return `
            <div class="recipe">
                <img src="${image}" alt="" class="recipe-img" />
                <div class="recipe-info">
                    <h2 class="recipe-name">${name}</h2>
                    <p class="recipe-cuisine">${cuisine}</p>

                    <h3>Ingredients</h3>
                    <ul class="recipe-ingredients">
                        ${this.#createIngredientsElement(ingredients)}
                    </ul>
                </div>
            </div>
        `;
    }

    #createIngredientsElement(ingredients) {
        return ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");
    }

    #render() {
        const recipes = this.#recipes
            .map((recipeData) => this.#createRecipeElement(recipeData))
            .join("");

        this.#recipesContainer.insertAdjacentHTML("beforeend", recipes);
    }
}

async function init() {
    const { recipes } = await getAllRecipes();

    new RecipeView(recipes);
}

init();
