import axios from 'axios';

export default {
    getRecipes,
    getRecipe
}

async function getRecipes(searchTerm){
    var query = `https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`
    const result = await axios.get(query);
    return result.data;
}

async function getRecipe(recipeId){
    var query = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
    const result = await axios.get(query);
    return result.data.recipe;
}