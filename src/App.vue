<template>
	<div id="app" class="container">
		<Navbar :items="menuItems" />
		<Home />
		<Mascot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Mascot from './components/Mascot.vue';

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
		Mascot,
	},
});
</script>

<style lang="scss">
#app {
	font-family: 'Quicksand', sans-serif, Verdana, Geneva, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
	font-size: 20px;
}
</style>
