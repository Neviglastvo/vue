<div id="components-demo">
	<button-counter></button-counter>
</div>

<script>
	Vue.component('button-counter', {
		data: function () {
			return {
				count: 0
			}
		},
		template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
	})

	new Vue({ el: '#components-demo' })

	export default {
	  components: {
	    ComponentA,
	    ComponentC
	  },
	  // ...
	}
</script>
