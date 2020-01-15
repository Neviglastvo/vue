<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
// import Footer from "~/components/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    // Footer
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.layout__content{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.header {
  width: 100%;
  max-width: 400px;
  display: flex;
}

.nav__link {
  margin-left: 20px;
}
</style>

<style lang="sass">
.home-links
  a
    margin-right: 3rem
    &:last-child
      color: red

.logo
  fill: #fff
  width: 40px
  height: 40px

</style>
