<template>
  <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>
</template>

<page-query>
query Pc {
  posts: allPost (sortBy: "id", order: DESC){
    edges {
      node {
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>



<style>
.card {
  padding: 20px;
  background: #FFF;
}
</style>

