<template>
  <Layout>
    <div class="pc">
      <h2>
        <a :href="$page.pc.title">{{ $page.pc.title }}</a>
      </h2>
    </div>
  </Layout>
</template>

<page-query>
query Pc ($path: String!) {
  pc (path: $path) {
    id
    title
    descriptrion
    score
    processor
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Details'
  }
}
</script>

<style>
.Pc {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px 20px;
  margin: 20px 5px;
}
.img-wrapper {
  text-align: center;
}
.Pc-footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
