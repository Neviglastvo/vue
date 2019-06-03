<!-- src/templates/pc.vue -->

<template>
  <Layout >
    <div class="pc-card">
      <h1>{{ $page.pc.title }}</h1>
      <p >{{ $page.pc.id }}</p>
      <p v-html="$page.pc.content"></p>
    </div>
  </Layout>
</template>

<page-query>
query Pc ($id: String!) {
  post: pc (id: $id) {
    id
    title
    descriptrion
    score
    processor
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.pc.title
    }
  }
}
</script>
