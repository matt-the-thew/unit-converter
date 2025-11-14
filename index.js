const buttonEl = document.getElementById("input-btn");
const metersToFeetResult = document.getElementById("meter-feet-result");
const feetToMetersResult = document.getElementById("feet-meter-result");
const gallonsToLitersResult = document.getElementById("gallon-liter-result");
const litersToGallonsResult = document.getElementById("liter-gallon-result");
const kilogramsToPoundsResult = document.getElementById("kilogram-pound-result");
const poundsToKilogramsResult = document.getElementById("pound-kilogram-result");
const userInputEl = document.getElementById("input")
let userInput;

buttonEl.addEventListener("click", function() {
    userInput = userInputEl.value;
    console.log(userInput);
    renderUserInput();
})

userInputEl.addEventListener("keyup", function(event){
    if (event.key === "Enter")
    {
        userInput = userInputEl.value;
        renderUserInput(userInput);
    }
})

function renderUserInput()
{
    userInput = userInputEl.value;
    metersToFeetResult.innerHTML = 
    `
    ${userInput} meters = ${ calcMetersToFeet(userInput)} feet
    `
    feetToMetersResult.innerHTML = 
    `
    ${userInput} feet = ${ calcFeetToMeters(userInput) } meters
    `
    litersToGallonsResult.innerHTML =
    `
    ${userInput} liters = ${ calcLitersToGallons(userInput) } gallons
    `
    gallonsToLitersResult.innerHTML = 
    `
    ${userInput} gallons = ${ calcGallonsToLiters(userInput) } liters
    `
    kilogramsToPoundsResult.innerHTML = 
    `
    ${userInput} kilograms = ${ calcKilogramsToPounds(userInput) } pounds
    `
    poundsToKilogramsResult.innerHTML = 
    `
    ${userInput} pounds = ${ calcPoundsToKilograms(userInput) }
    `
}


function calcMetersToFeet(input) 
{
    return Math.round(input * 3.28084 * 100) / 100;
}

function calcFeetToMeters(input) 
{
    return Math.round(input * 0.3048 * 100) / 100;
}

function calcGallonsToLiters(input) 
{
    return Math.round(input * 3.78541 * 100) / 100;
}

function calcLitersToGallons(input) 
{
    return Math.round(input * 0.264172 * 100) / 100;
}

function calcKilogramsToPounds(input) 
{
    return Math.round(input * 2.20462 * 100) / 100;
}

function calcPoundsToKilograms(input) 
{
    return Math.round(input * 0.453592 * 100) / 100;
}