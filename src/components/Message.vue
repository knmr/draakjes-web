<template>
  <div
    class="message"
    :class="{ me: msg.isMe }"
  >
    <div>
      <div class="name-time">
        <div
          v-if="!msg.isMe"
          class="name"
        >{{ msg.name }}</div>
        <div class="time">{{ getTime }}</div>
      </div>
      <span>{{ msg.message }}</span>
    </div>
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
	mounted() {
		this.$emit('message');
	},
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
			background: $light-blue;
			.name-time {
				color: black;
			}
		}
	}
	> div {
		white-space: pre-wrap;
		position: relative;
		margin-top: 2px;
		margin-bottom: 2px;
		border-radius: 7.5px;
		background: white;
		word-break: break-word;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		max-width: 90%;
		padding: 6px 7px 8px 9px;
		text-align: left;
		min-width: 95px;
		> span.text {
			margin-right: 5px;
		}
		> .name-time {
			display: flex;
			width: 100%;
			color: $red;
			font-weight: bold;
			font-size: 15px;
			.name {
				text-align: left;
				width: 70%;
			}
			.time {
				flex-grow: 1;
				text-align: right;
				width: 30%;
				min-width: 95px;
			}
		}
		> .time {
			display: inline-block;
			font-size: 15px;
			position: absolute;
			right: 0;
			bottom: 0;
			padding: 2px;
		}
	}
}
</style>
