'use strict'

const allFood = [];
const form = document.getElementById("formID");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let FoodID = Math.floor(1000 + Math.random() * 9000)
    let FoodName = event.target.FoodName.value;
    let foodtype = event.target.foodtype.value;
    let Price = event.target.Price.value;
    const obj = {};
    obj.FoodID = FoodID;
    obj.FoodName = FoodName;
    obj.foodtype = foodtype;
    obj.Price = Price;
    const getDataFromLocalStorage = JSON.parse(localStorage.getItem("allFood"));

    let newData = allFood;
    if (getDataFromLocalStorage) {
        newData = allFood.concat(getDataFromLocalStorage);
    }

    newData.push(obj)
    console.log("🚀 ~ file: app.js ~ line 18 ~ handleSubmit ~ allFood", newData)
    const allFoodJSON = JSON.stringify(newData);

    localStorage.setItem("allFood", allFoodJSON);
}