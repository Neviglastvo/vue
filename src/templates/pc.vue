<template>
  <Layout>

    {{ $page.item.title }}
  </Layout>
</template>

<page-query>
query ($path: String!) {
  item: pc (path: $path) {
    id
    title
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'asd'
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
