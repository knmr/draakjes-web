<template>
	<div class="message-input">
		<span
			:id="sendId"
			class="textarea"
			role="textbox"
			contenteditable
			@keydown="onKeyDown"
			@keyup="onKeyUp"
		></span>
		<a class="button" @click="send">
			<PaperPlane />
		</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import PaperPlane from '../icons/PaperPlane.vue';
export default Vue.extend({
	data() {
		const sendId = `send-input-${Date.now()}`;
		return {
			sendId,
			shiftPressed: false,
			hasValue: false,
		};
	},
	components: {
		PaperPlane,
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
		send() {
			const sendInput = document.getElementById(this.sendId);
			if (!sendInput) return;
			const text = sendInput.innerText;
			if (text && !/^\s*$/.test(text)) {
				this.$emit('send', text);
			}
			sendInput.innerText = '';
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
	.textarea {
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
		// margin: 1px 1px 1px 5px;
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
