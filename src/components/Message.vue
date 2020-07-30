<template>
  <div class="message">
    <div>{{msg.message}}{{getTime}}</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { MessageInterface } from '../storage/definitions';

export default Vue.extend({
	props: {
		msg: {
			type: Object as PropType<MessageInterface>,
		},
	},
	data() {
		return {};
	},
	name: 'Message',
	mounted() {},
	computed: {
		getTime(): string {
			if (this.msg) {
				return `${this.msg.timestamp}`;
			}
			return '';
		},
	},
});
</script>

<style lang="scss">
@import '../styles/settings.scss';
.message {
	width: 100%;
	padding-right: 5%;
	padding-left: 5%;
	> div {
		max-width: 90%;
		padding: 6px 7px 8px 9px;
	}

	&.me {
		background: green;
	}
	background: red;
}
</style>
