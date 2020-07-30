<template>
  <div class="home container-xlarge">
    <div v-if="needsDisplayName">
      <div>name:</div>
      <input
        id="username"
        v-model="newDisplayName"
        placeholder="Your name"
      />
      <button
        type="button"
        @click="setName"
      >Set name</button>
    </div>
    <div v-else-if="isLoggedIn">
      <div v-if="displayMessages && displayMessages.length > 0">
        <h3>Messages</h3>
        <MessageComponent
          v-for="(msg, index) in displayMessages"
          :key="index"
          :msg="msg"
        />
        <div>Message:</div>
        <MessageInput @send="sendMessage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MessageInput from './MessageInput.vue';
import MessageComponent from './Message.vue';
import { db, auth } from '../storage/firebase';
import { Message } from '../storage/definitions';
export default Vue.extend({
	components: {
		MessageInput,
		MessageComponent,
	},
	name: 'Home',
	data: () => ({
		messages: [] as Message[],
		newDisplayName: '',
		displayName: '',
		isLoggedIn: false,
	}),
	firebase: {
		messages: db.ref('messages').limitToLast(20),
	},
	mounted() {
		this.loginAnonymous();
	},
	methods: {
		sendMessage(message: string) {
			if (auth.currentUser && auth.currentUser.displayName) {
				const newChild = db.ref('messages').push();
				const dbValue = {
					uid: auth.currentUser.uid,
					name: auth.currentUser.displayName,
					message,
					timestamp: Date.now(),
				} as Message;
				newChild.set(dbValue);
			}
		},
		loginAnonymous() {
			auth.onAuthStateChanged((user) => {
				if (user) {
					this.displayName = user.displayName ?? '';
					this.isLoggedIn = true;
				} else {
					this.newDisplayName = '';
					this.displayName = '';
					this.isLoggedIn = false;
				}
			});
			auth.signInAnonymously().catch((_error) => {});
		},
		setName() {
			if (!this.newDisplayName) return;
			if (auth.currentUser)
				auth.currentUser
					.updateProfile({
						displayName: this.newDisplayName,
					})
					.then((_e) => {
						this.displayName = this.newDisplayName;
					})
					.catch((error) => {
						console.error(error);
					});
		},
	},
	computed: {
		displayMessages() {
			const myUid = auth && auth.currentUser ? auth.currentUser.uid : '';
			return this.messages.map((e) => {
				return {
					...e,
					time: new Date(e.timestamp).toLocaleTimeString(),
					date: new Date(e.timestamp).toLocaleDateString(),
					isMe: e.uid === myUid,
				};
			});
		},
		needsDisplayName() {
			return this.isLoggedIn && this.displayName === '';
		},
	},
});
</script>