import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '../views/home-page.vue';
import recipesPage from '../views/recipes-page.vue';
import recipeDetails from '../views/recipe-details.vue'



Vue.use(VueRouter)

const routes = [
  {
 
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/recipes',
    name: 'recipesPage',
    component: recipesPage
  },
  
  {
    path: '/recipe/:id',
    name: 'recipeDetails',
    component: recipeDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
