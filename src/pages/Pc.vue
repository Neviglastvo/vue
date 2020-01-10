
<template>
  <Layout>
    <div class="pcs">
      <g-link
        class="pc-card"
        :to="`pc/${edge.node.id}`"
        :key="edge.node.id"
        v-for="edge in $page.posts.edges"
      >
        {{ edge.node.title }}
        <!-- {{ edge.node.videocard }} -->
        <!-- {{ edge.node.score }} -->
        <!-- {{ edge.node.descriptrion }} -->
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query PC {
  posts: allpc {
    edges {
      node {
        id
        title
      }
    }
  }
}


</page-query>

<script>
export default {
  metaInfo: {
    title: "PC"
  },
  methods: {
    shortenText(text) {
      return text.slice(0, 10) + "...";
    }
  }
};
</script>

<style scoped>
.pcs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pc-card {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.5);
  padding: 0 15px 20px;
  margin: 20px 5px;
  width: 300px;
  color: #000;
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
