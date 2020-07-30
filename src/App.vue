<template>
	<div id="app">
		<Navbar :items="menuItems" />
		<Home />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
	name: 'App',
	data() {
		return {
			menuItems: [],
		};
	},
	components: {
		Home,
		Navbar,
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
	font-family: 'Quicksand', sans-serif, Verdana, Geneva, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
	font-size: 20px;
}
</style>
