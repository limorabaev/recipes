<template>
<section class="recipes-page">
    <h1>Recipe page</h1>
    <recipeList :recipes="recipes"/>
    <!-- <pre v-for = "recipe in recipes" :key = "recipe.recipe_id">{{recipe}}</pre> -->
    <!-- <recipes-list :recipes="recipes" v-if = "isRecipesLoaded"/> -->
</section>
</template>

<script>
import recipeList from "@/cmps/recipe-list.vue";

export default {
    name: 'recipesPage',  

    async created(){
        var query = this.$route.query;
        var searchTerm = query.searchTerm;
        await this.$store.dispatch({ type: 'loadRecipes', searchTerm });
        console.log(this.$store.getters.recipes);

    },

    components: {
        recipeList
    },
    computed: {
    recipes() {
      return this.$store.getters.recipes;
    }
  }
};
</script>

<style lang="scss"></style>