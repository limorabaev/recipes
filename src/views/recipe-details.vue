<template>
<section class="recipe-details">
    <div v-if="currRecipe" class="recipe-desc"> 
        <h1>{{currRecipe.title}}</h1>
        <p>by {{currRecipe.publisher}}</p>
        <h3>Ingredients:</h3>
        <ul>
            <li v-for = "ing in currRecipe.ingredients" :key = ing>{{ing}}</li>
        <!-- <p>{{currRecipe.ingredients}}</p> -->
        </ul>
    </div>
    <div class = "img-container" v-if="currRecipe">
        <img :src = currRecipe.image_url />
    </div>
    <!-- <pre>{{currRecipe}}</pre> -->

</section>
</template>

<script>
// import recipeList from "@/cmps/recipe-list.vue";

export default {
    name: 'recipesDetails',  

    async created(){
       var recipeId = this.$route.params.id;
        await this.$store.dispatch({ type: 'loadRecipe', recipeId });
        console.log(recipeId);

    },


    computed: {
    currRecipe() {
      return this.$store.getters.currRecipe;
    }
  }
};
</script>

<style lang="scss"></style>