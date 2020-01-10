
<template>
  <Layout>
    <div class="pcs">
      <div
        class="pc-card"
        v-for="edge in $page.items.edges"
        :id="edge.node.id"
        :key="edge.node.id"
      >
        {{ edge.node.title }}
        {{ edge.node.videocard }}
        <!-- {{ edge.node.score }} -->
        <!-- {{ edge.node.descriptrion }} -->
        <g-link :to="edge.node.path">{{ edge.node.path }}</g-link>
      </div>

      <Pager :info="$page.items.pageInfo"/>

    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  items: allPC (perPage: 1, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        videocard
        path
      }
    }
  }
}
</page-query>

<script>

import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "PC"
  },
  methods: {
    shortenText(text) {
      return text.slice(0, 10) + "...";
    }
  },
  components: {
    Pager
  }
};
</script>

<style scoped>
.pcs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.pc-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.5);
  padding: 0 15px 20px;
  margin: 20px 5px;
  width: 50%;
  color: #000;
}

.pc-card a {
  color: #000
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
