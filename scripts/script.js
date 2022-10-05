const drinkInfo = document.querySelector('#drink-info');
let description = document.getElementById('description');
let hot = document.getElementById('hot');
let cold = document.getElementById('cold');
let drinks = document.getElementById('drinks');
const descriptionLabel = "Description:";
let btn = document.getElementById('btn');

let latte = {
    description: "A type of coffee made with espresso and hot steamed milk, milkier than a cappuccino. (Google Oxford Language Definition)",
    hot: "A latte is made with any optional syrup flavors, two shots and the rest steamed milk.",
    cold: "An iced latte is made the same way with as hot but with steamed milk substituted for cold milk."
};

let cappucino = {
    description: "Coffee made with milk that has been frothed up with pressurized steam. (Google Oxford Language Definition)",
    hot: "A cappucino is made with any optional syrup flavors, two shots and the rest steamed milk.",
    cold: "An iced cappucino is made the same way with as hot but with steamed milk substituted for cold milk."
}

let breve = {
    description: "A breve is the same as a latte only with half and half substitued for the milk.",
    hot: "A breve is made with any optional syrup flavors, two shots and the rest steamed milk.",
    cold: "An iced breve is made the same way with as hot but with steamed milk substituted for cold milk."
}

let redEye = {
    description: "A red eye is brewed drip coffee combined with espresso.",
    hot: "A hot red eye will use hot drip coffee and then the desired amount of shots plus any cream, sugar, or syrup flavors requested by the customer.",
    iced: "An iced red eye will be the made the same way as hot with cold brew substituted for the drip coffe and ice added."
}

drinks.addEventListener('change', function() {
    let drink = drinks.value;
    console.log(drink);
    if (drink === "latte") {
        displayContent(latte);        
    } else if (drink === "cappucino") {
        displayContent(cappucino)
    } else if (drink === "breve") {
        displayContent(breve);
    } else if (drink === "redEye") {
        displayContent(redEye)
    }
});

function selectedDrink(value) {
    let drink = drinks.value;
    if (drink === "latte") {
        displayContent(latte);        
    } else if (drink === "cappucino") {
        displayContent(cappucino)
    } else if (drink === "breve") {
        displayContent(breve);
    } else if (drink === "redEye") {
        displayContent(redEye)
    }
};



function displayContent(drink) {
    description.textContent = descriptionLabel + " " + drink.description;
    hot.textContent = drink.hot;
    cold.textContent = drink.cold;
}

