import Vue from 'vue'
import Vuex from 'vuex'
import recipeService from '@/services/recipe.service.js';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: '',
    recipes: [],
    currRecipe: null
  },
  getters: {
    recipes(state) {
      return state.recipes;
  },
    searchTerm(state){
      return state.recipes;
    },
    currRecipe(state){
      return state.currRecipe;
    }
  },

  mutations: {
    setRecipes(state, { recipes }) {
      state.recipes = recipes.recipes;
  },
  setCurrRecipe(state, { recipe }) {
    state.currRecipe = recipe;
}
  },
  actions: {
    async loadRecipes(context, {searchTerm}) {
      // const query = `https://forkify-api.herokuapp.com/api/search?q=${context.getters.searchTerm}`
      // console.log(context.getters.filterBy)
      console.log('search term', searchTerm);
      const recipes = await recipeService.getRecipes(searchTerm);
      context.commit({ type: 'setRecipes', recipes });
      return recipes;
  },
    async loadRecipe(context, {recipeId}){
      console.log('inside load', recipeId)
      const recipe = await recipeService.getRecipe(recipeId);
      context.commit({ type: 'setCurrRecipe', recipe });
      return recipe;
    }
  },
  modules: {
  }
})
