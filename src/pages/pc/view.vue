<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>PC VIEW</h1>

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
