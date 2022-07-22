'use strict'

const allFood = [];
const parentEl = document.getElementById("menu");

function Food(FoodID, FoodName, foodtype, Price) {
    this.FoodID = FoodID;
    this.FoodName = FoodName;
    this.foodtype = foodtype;
    this.Price = Price

    allFood.push(this)

}

Food.prototype.printMenu = function () {
    const tr = document.createElement('tr'); 
    const table = document.getElementById("myTable");
    table.appendChild(tr)
    for (let i =0 ; i <allFood.length ; i++ ) {
        tr.innerHTML = `<td> ${allFood[i].FoodID}</td><td> ${allFood[i].FoodName}</td><td> ${allFood[i].foodtype}</td><td> ${allFood[i].Price}</td>`
    }
}
const form = document.getElementById("formID");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let FoodID = Math.floor(1000 + Math.random() * 9000)
    let FoodName = event.target.FoodName.value;
    let foodtype = event.target.foodtype.value;
    let Price = event.target.Price.value;

    const newFood = new Food(FoodID, FoodName, foodtype, Price);

    newFood.printMenu();
}