<template>
  <div class="message-input">
    <span
      :id="sendId"
      class="textarea"
      role="textbox"
      contenteditable
    ></span>
    <a
      class="button"
      @click="send"
    >
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
		};
	},
	components: {
		PaperPlane,
	},
	name: 'MessageInput',
	methods: {
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
$border-radius: 10px;
.message-input {
	width: 100%;
	display: flex;
	align-items: flex-end;
	.textarea {
		width: 100%;
		max-height: 30vh;
		resize: none;
		padding: 10px 10px;
		border-radius: $border-radius;
		border: 1px solid grey;
		background: white;
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
		margin: 1px 1px 1px 5px;
		border-radius: $border-radius;
		text-decoration: none;
		color: #ffffff;
		background-color: $red;
		text-align: center;
		transition: all 0.2s;
		&:hover {
			background-color: $orange;
		}
	}
}
</style>
