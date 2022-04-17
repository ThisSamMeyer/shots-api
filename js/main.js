//The user will enter a cocktail. Get a cocktail name, photo, and 
// instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)

            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[i].strDrink
            document.querySelector('img').src = data.drinks[i].strDrinkThumb
            document.querySelector('h4').innerText = data.drinks[i].strInstructions

        }
    )
    .catch(err => {
        console.log(`error ${err}`)
    });
}
