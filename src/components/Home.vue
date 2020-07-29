<template>
  <div class="home container-xl">
    <div>name:</div>
    <input
      v-model="sender"
      placeholder="Your name"
    >
    <div>Message:</div>
    <input
      v-model="text"
      placeholder="Your message"
    >
    <div>
      <button
        type="button"
        @click="sendMessage"
      >Send message!</button>
    </div>
    <div>
      <h3>Messages</h3>
      <p
        v-for="(msg, index) in messages"
        :key="index"
      >{{msg.sender}} - {{msg.text}}</p>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../storage/firebase';
export default Vue.extend({
	name: 'Home',
	data: () => ({ messages: [], sender: '', text: '' }),

	firebase: {
		messages: db.ref('messages'),
	},
	methods: {
		sendMessage() {
			const newChild = db.ref('messages').push();
			const dbValue = { sender: this.sender, text: this.text, timestamp: Date.now() };
			console.log(dbValue);
			newChild.set(dbValue);
		},
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
