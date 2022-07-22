'use strict'


function getFoodData () {
    
    const allFood = JSON.parse(localStorage.getItem("allFood"));
    const tr = document.createElement('tr'); 
    const table = document.getElementById("myTable");
    table.appendChild(tr)
    for (let i =0 ; i <allFood.length ; i++ ) {
        tr.innerHTML = `<td> ${allFood[i].FoodID}</td><td> ${allFood[i].FoodName}</td><td> ${allFood[i].foodtype}</td><td> ${allFood[i].Price}</td>`
    }
    
}

getFoodData()