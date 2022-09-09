const drinkInfo = document.querySelector('#drink-info');
let description = document.getElementById('description');
let hot = document.getElementById('hot');
let cold = document.getElementById('cold');
let drink = document.getElementById('drinks').value;
const descriptionLabel = "Description:";

let latte = {
    description: "Latte's are a coffee beverage made with espresso and steamed milk.",
    hot: "A latte is made with any optional syrup flavors, two shots and the rest steamed milk.",
    cold: "An ice latte is made the same way with steamed milk substituted for cold milk."
};

let cappucino = {
    description: "Similar to a latte, cappucino's contain a more frosty "
}

let breve = {
    description: "A breve is the same as a latte only with half and half substitued for the milk."
}

if (drink === "latte") {
    description.textContent = descriptionLabel + " " + latte.description;
    hot.textContent = latte.hot;
    cold.textContent = latte.cold;
}