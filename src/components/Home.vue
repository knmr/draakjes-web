<template>
	<div class="home container-xl">
		<h3>Installed CLI Plugins</h3>
		<div>
			<p>
				Suspendisse efficitur enim eget justo convallis elementum. Donec et tortor erat. Nulla ut
				rutrum turpis. Aliquam purus augue, bibendum et finibus at, commodo ac tellus. Nunc ut leo
				sodales, congue nisi eget, volutpat libero. Phasellus suscipit neque eros, in tristique orci
				consequat ut. Donec ut tristique sapien, quis vestibulum tellus. Curabitur pellentesque
				iaculis neque vel tincidunt.
			</p>
			<p>
				Donec tortor magna, posuere eu hendrerit nec, iaculis posuere dolor. In ultrices commodo
				turpis sed facilisis. Pellentesque sollicitudin blandit consequat. Morbi et leo ac nunc
				condimentum dignissim maximus at lorem. Ut leo diam, facilisis at tristique sit amet, commodo
				eu quam. Nam at sem condimentum, rutrum arcu in, luctus purus. Donec accumsan urna velit, id
				viverra tellus cursus eu. Sed faucibus, dolor in facilisis placerat, tortor lectus mollis
				eros, eu varius ex lacus sit amet lacus. Quisque fermentum diam in consequat posuere.
				Pellentesque auctor elit eu congue lobortis. In tempor dolor et tincidunt tincidunt. Proin sit
				amet lacinia nulla. Curabitur id congue nisi, gravida efficitur nisl.
			</p>
			<p>
				Vestibulum a erat aliquet, volutpat nibh eget, elementum ante. Sed et aliquet arcu, quis
				venenatis massa. Mauris ac eros a nisl pellentesque fringilla vel quis nulla. Donec non
				placerat erat. In blandit non erat ut dictum. Morbi sit amet magna velit. Nullam a facilisis
				orci.
			</p>
			<p>
				Vestibulum malesuada ex sed urna varius, id elementum purus pharetra. Integer sodales nulla
				interdum, varius turpis et, dictum magna. Ut eu felis lacinia, pretium mauris eu, aliquam
				urna. Mauris a scelerisque augue, ut sodales sapien. Nam blandit purus sed libero maximus, non
				efficitur dolor mollis. Praesent sit amet nunc eget sem interdum dignissim in non nulla. Nam
				quis metus rhoncus arcu hendrerit lobortis. Quisque tristique rhoncus risus.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Home',
	props: {
		msg: String,
	},
});
</script>

<style lang="scss">
// @import "./styles/app.scss";
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
