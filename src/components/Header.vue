<template>
  <div class="header">

    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/pc">PC</g-link>
      <g-link class="nav__link" to="/builder">Builder</g-link>
      <g-link class="nav__link" to="/slayer">slayer</g-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style lang="sass">
	.header
		width: 400px
		height: 100%
		display: flex
		align-items: center

	.nav
		display: flex
		flex-direction: column



</style>

