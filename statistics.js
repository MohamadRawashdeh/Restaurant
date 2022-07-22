'use strict'
const table = document.getElementById('myTable')

 function render (item) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const foodId = document.createElement('td');
    foodId.textContent = item.FoodID; 
    tr.appendChild(foodId);

     const FoodName = document.createElement('td');
     FoodName.textContent = item.FoodName; 
     tr.appendChild(FoodName);

     const foodtype = document.createElement('td');
     foodtype.textContent = item.foodtype; 
     tr.appendChild(foodtype);

;
    const price = document.createElement('td');
    price.textContent = `${item.Price} JD`;
    tr.appendChild(price);

}


function getFoodData () {   
    const allFood = JSON.parse(localStorage.getItem("allFood")); 
    for (let i =0 ; i <allFood.length ; i++ ) {
        render(allFood[i])
    }
    
}

getFoodData()