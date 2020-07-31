<template>
  <div class="messages">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'MessageContainer',
});
</script>
