
<template>
  <Layout>
    <div class="pcs">
      <div class="pc" v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2>
          <g-link :to="`pc/${edge.node.title}`">{{ edge.node.title }}</g-link>
        </h2>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Pc {
  posts: allPc {
    edges {
      node {
        id
        title
        descriptrion
        score
        processor
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'PC'
  },
  methods: {
    shortenText(text) {
      return text.slice(0,300) + '...'
    }
  }
}
</script>

<style scoped>
.pcs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pc {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px 20px;
  margin: 20px 5px;
  width: 300px;
}
.img-wrapper {
  width: 100%;
  text-align: center;
}
.img-wrapper img {
  height: 200px;
}
.pc-footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
