<template>
<router-link :to="'/recipe/'+recipe.recipe_id">

  <div v-if="recipe" class="recipe-preview card" >
    <div class ="img-container">
      <img :src="recipe.image_url" />
      
    </div>
    <div class= "content"> <h3 class = "recipe-title">{{recipe.title}}</h3>
        <p class = "recipe-publisher">by {{recipe.publisher}}</p>
    </div>
       
  </div>
</router-link>

</template>

<script>
export default {
  props: {
    recipe: Object
  }
};
</script>