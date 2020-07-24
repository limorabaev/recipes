<template>
<form class="search" @submit.prevent="searchClickedHandler">
    <input class="searchTerm" type= "text" placeholder="Search Recipe" v-model="searchStr"/>
    <button class="searchButton" @click.stop="searchClickedHandler()"><i class="fas fa-search"></i>

</button>

</form>
</template>

<script>

export default {
  data() {
    return {
      searchStr: ''
    };
  },
  methods: {
    searchClickedHandler(){
        this.$router.push({path: '/recipes', query: { searchTerm: this.searchStr}} )
        console.log(this.$router);


    }
  }
};
</script>