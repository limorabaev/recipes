<template>
  <div v-if="recipes" class="recipe-list">
        <recipe-preview v-for = "recipe in recipes" :key = "recipe.recipe_id" :recipe="recipe"/>
  </div>
</template>

<script>
import recipePreview from "@/cmps/recipe-preview.vue";

export default {
  props: {
    recipes: Array
  },
  components: {
    recipePreview
  }
};
</script>