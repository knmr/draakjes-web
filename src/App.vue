<template>
	<div id="app">
		<Home />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home.vue';

export default Vue.extend({
	name: 'App',
	data() {
		return {
			menuItems: [],
		};
	},
	components: {
		Home,
	},
	mounted() {},
});
</script>

<style lang="scss">
#app {
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		.container {
			display: grid;
			grid-template-columns: 200px 1fr 200px;
			grid-template-rows: auto 1fr auto;
		}
	}
	font-family: 'Poppins', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 16px;
}
</style>
