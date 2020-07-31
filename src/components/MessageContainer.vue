<template>
	<div class="message-container">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'MessageContainer',
});
</script>
<style lang="scss">
.message-container {
	padding-top: 20px;
	padding-bottom: 20px;
}
</style>
