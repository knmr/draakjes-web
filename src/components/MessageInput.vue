<template>
	<div class="message-input">
		<input v-if="setupName" v-model="name" placeholder="What is your name?" class="name" />
		<span
			v-else
			:id="sendId"
			class="textarea"
			role="textbox"
			contenteditable
			@keydown="onKeyDown"
			@keyup="onKeyUp"
		></span>
		<a class="button" @click="send">
			<Check v-if="setupName" />
			<PaperPlane v-else />
		</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import PaperPlane from '../icons/PaperPlane.vue';
import Check from '../icons/Check.vue';
export default Vue.extend({
	data() {
		const sendId = `send-input-${Date.now()}`;
		return {
			sendId,
			shiftPressed: false,
			hasValue: false,
			name: '',
		};
	},
	props: {
		setupName: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		PaperPlane,
		Check,
	},
	name: 'MessageInput',
	methods: {
		onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Shift') {
				this.shiftPressed = true;
			} else if (e.key === 'Enter' && !this.shiftPressed) {
				e.preventDefault();
				e.stopPropagation();
				this.send();
			}
		},
		onKeyUp(e: KeyboardEvent) {
			if (e.key === 'Shift') {
				this.shiftPressed = false;
			}
		},
		getValue(): string {
			let value = '';
			if (this.setupName) {
				return this.name;
			} else {
				const sendInput = document.getElementById(this.sendId);
				if (sendInput) {
					value = sendInput.innerText;
					sendInput.innerText = '';
				}
			}
			return value;
		},
		send() {
			const text = this.getValue();
			if (text && !/^\s*$/.test(text)) {
				if (this.setupName) this.$emit('saveName', text);
				else this.$emit('send', text);
			}
		},
	},
});
</script>

<style lang="scss">
@import '../styles/settings.scss';
.message-input {
	border-bottom-left-radius: $default-border-radius;
	border-bottom-right-radius: $default-border-radius;
	padding: 10px;
	background: #ff6e6a;
	display: flex;
	align-items: flex-end;
	// input.name {
	// 	width: 100%;
	// 	border-radius: 21px;
	// 	background: white;
	// }
	.textarea,
	input.name {
		background: white;
		width: 100%;
		max-height: 30vh;
		resize: none;
		padding: 10px 10px;
		border-radius: 21px;
		overflow: hidden;
		min-height: 20px;
		line-height: 20px;
		overflow-y: auto;
	}
	a.button {
		svg {
			width: 20px;
		}
		height: 20px;
		min-width: 40px;
		padding: 10px 5px;
		text-decoration: none;
		color: white;
		text-align: center;
		transition: all 0.2s;
		&:hover {
			color: #ffb5b2;
		}
	}
}
</style>
