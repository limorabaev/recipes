<template>
<header>
  <search />
  <a href = "https://forkify-api.herokuapp.com/phrases.html">A list of availble search queries ></a>
</header>  
</template>

<script>
import search from "@/cmps/search.vue";

export default {
    name: 'homePage',  

    components: {
        search
    }
};
</script>

<style lang="scss"></style>