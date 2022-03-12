//search button er modde enter key press kore kaj korano.
const searchBtn = document.getElementById("button-search");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keypress", function (event) {
    // event.preventDefault();
    console.log('key press', event.key)
    if (event.key == 'Enter') {
        console.log('click')
        searchBtn.click();
    }
});




const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}
//search result ke dekhano
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';



    meals.forEach(meal => {
        // console.log(meal);
        // dynamic kore food guloke niye asha
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 7)}</p>
                </div>
            </div>
        `;
        // div take searchResult er majhe appendChild kora
        searchResult.appendChild(div);
    });
}
// async er maddome fetch ke bikolpo vabe kaj kora jay
//tobe paramator hisebe dite hobe async ke
const loadMealDetail = async mealId => {
    //console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
}
// meal info:
const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');

    mealDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>

                <p class="card-text">${meal.strInstructions.slice(0, 7)}</p>
            </div>
    `;
    mealDetails.appendChild(div);
}