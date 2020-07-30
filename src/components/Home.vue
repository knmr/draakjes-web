<template>
	<div class="home container-xlarge">
		<div class="chat">
			<div v-if="needsDisplayName">
				<div>name:</div>
				<input id="username" v-model="newDisplayName" placeholder="Your name" />
				<button type="button" @click="setName">Set name</button>
			</div>
			<div v-else-if="isLoggedIn">
				<div :id="chatId" class="messages">
					<MessageComponent v-for="(msg, index) in displayMessages" :key="index" :msg="msg" />
				</div>
				<MessageInput @send="sendMessage" />
			</div>
		</div>
		<div class="stats"></div>
	</div>
</template>

<script>
import Vue from 'vue';
import MessageInput from './MessageInput.vue';
import MessageComponent from './Message.vue';
import { db, auth } from '../storage/firebase';
import { Message, MessageInterface } from '../storage/definitions';

export default Vue.extend({
	components: {
		MessageInput,
		MessageComponent,
	},
	name: 'Home',
	data() {
		const chatId = `chat-${Date.now()}`;
		return {
			chatId,
			messages: [],
			newDisplayName: '',
			displayName: '',
			isLoggedIn: false,
			initialDataLoaded: false,
		};
	},
	firebase: {
		messages: db.ref('messages').limitToLast(100),
	},
	mounted() {
		this.loginAnonymous();
	},
	methods: {
		scrollChatDown() {
			const chatDiv = document.getElementById(this.chatId);
			if (chatDiv) {
				chatDiv.scrollTop = chatDiv.scrollHeight;
			}
		},
		sendMessage(message) {
			if (auth.currentUser && auth.currentUser.displayName) {
				const newChild = db.ref('messages').push();
				const dbValue = {
					uid: auth.currentUser.uid,
					name: auth.currentUser.displayName,
					message,
					timestamp: Date.now(),
				};
				newChild.set(dbValue);
				this.$nextTick(() => {
					this.scrollChatDown();
				});
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
<style lang="scss">
@import '../styles/settings.scss';
.chat {
	.messages {
		background: $orange;
		height: calc(80vh);
		padding-left: 5px;
		padding-right: 5px;
		overflow-y: scroll;
	}
}
.stats {
	background: purple;
}

.home > div {
	width: 100%;
}

@media (min-width: 768px) {
	.home > div {
		width: 50%;
	}
}
</style>
