<template>
  <Layout>
    {{ $page.item.title }}
    {{ $page.item.descriptrion }}
    {{ $page.item.videocard }}
    {{ $page.item.processor }}
  </Layout>
</template>

<page-query>
query ($path: String!) {
  item: pc (path: $path) {
    title
    descriptrion
    videocard
    processor
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.item.title
    };
  }
};
</script>

<style>
.pc {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px 20px;
  margin: 20px 5px;
}

.pc a {
  color: #000
}
.img-wrapper {
  text-align: center;
}
.pc-footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
