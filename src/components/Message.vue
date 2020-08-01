<template>
	<div class="card message" :class="{ me: msg.isMe, tail: addTail }" :data-uid="msg.uid">
		<div class="card-header">
			<div class="name">{{ msg.name }}</div>
			<div class="time">{{ getTime }}</div>
		</div>
		<div class="card-content">{{ msg.message }}</div>
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
		return {
			addTail: false,
		};
	},
	name: 'Message',
	mounted() {
		this.$emit('message');
		this.initAddTail();
	},
	methods: {
		initAddTail() {
			const el = this.$el as HTMLElement;
			const previous = this.$el.previousElementSibling as HTMLElement;
			if (!previous) {
				this.addTail = true;
				return;
			}
			if (previous.dataset) {
				this.addTail = previous.dataset.uid !== el.dataset.uid;
			}
		},
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
	&:hover {
		transform: scale(1.1);
	}

	&.card {
		.card-header {
			color: rgba(0, 0, 0, 0.4);
			height: 20px;
			line-height: 20px;
			padding: 10px 15px 0 15px;
			.name {
				float: left;
			}
			.time {
				float: right;
				font-size: 12px;
			}
		}
		.card-content {
			padding-top: 0px;
		}
	}
	background: white;
	word-wrap: break-word;
}
</style>
