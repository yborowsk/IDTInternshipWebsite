
/**
 * Obtain an array of recipes whose mealId equals id.
 * @param {string} id - mealId of a recipe from MealDB 
 * @param {function(err, data)} callback - a callback function to be called after the http request
 */
function getRecipeById(id, callback){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => callback(null, data.meals))
    .catch(e => callback(e, null));
}

/**
 * Obtains an array of recipe categories.
 * @param {function(err, data)} callback - a callback function to be called after the http request
 */
function getListOfCategories(callback){
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => callback(null, data.categories))
    .catch(e => callback(e, null));
}

/**
 * Obtains an array of recipes whose mealName contains name
 * @param {string} name - recipe name you would like to query from MealDB
 * @param {function(err, data)} callback - a callback function to be called after the http request
 */
function searchRecipesByName(name, callback){

    let lowername = name.trim().toLowerCase()
    //lowername = lowername.replace(/\s++/g, '_')

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${lowername}`)
    .then(res => res.json())
    .then(data => callback(null, data.meals))
    .catch(e => callback(e, null));
}

/**
 * 
 * @param {string} ingredient - Obtains a list of recipes whose main ingrdient is ingrediant
 * @param {function(err, data)} callback - a callback function to be called after the http request
 */
function searchRecipesByMainIngredient(ingredient, callback){
    let loweri = ingredient.trim().toLowerCase()
    //loweri = loweri.replace(/\s++/g, '_');
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${loweri}`)
    .then(res => res.json())
    .then(data => callback(null, data.meals))
    .catch(e => callback(e, null));
}

/**
 * 
 * @param {string} ingredient - Obtains a list of recipes whose main ingrdient is ingrediant
 * @param {function(err, data)} callback - a callback function to be called after the http request
 */
 function searchRecipesByCategory(category, callback){
    let loweri = category.trim().toLowerCase()
    //loweri = loweri.replace(/\s++/g, '_');
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${loweri}`)
    .then(res => res.json())
    .then(data => callback(null, data.meals))
    .catch(e => callback(e, null));
}