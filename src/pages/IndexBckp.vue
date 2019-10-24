<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <font-awesome :icon="['fab', 'github']"/>
    <font-awesome :icon="['fab', 'twitter']"/>

    <Pin class="logo" />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

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
