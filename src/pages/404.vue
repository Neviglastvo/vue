<template>
  <Layout>

    <h1>wow, 404</h1>

  </Layout>
</template>


<script>
import Pin from '~/assets/icons/pinPaper.svg';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
      Pin
  }
}

</script>






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
