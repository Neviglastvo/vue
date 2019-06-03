<template>
  <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
    <!-- <h1>{{ $page.post.title }}</h1> -->
  </div>

</template>

<page-query>
query Pc {
  post {
    id
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

