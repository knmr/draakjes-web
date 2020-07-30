<template>
	<div class="message" :class="{me : msg.isMe}">
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
				return new Date(this.msg.timestamp).toLocaleTimeString(navigator.language, {
					hour: '2-digit',
					minute: '2-digit',
				});
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
	display: flex;
	flex-direction: row;
	&.me {
		text-align: right;
		flex-direction: row-reverse;
		align-self: flex-end;
		> div {
			background: green;
		}
	}
	> div {
		word-break: break-word;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		background: $red;
		max-width: 90%;
		padding: 6px 7px 8px 9px;
	}
}
</style>
