<template>
	<div class="page">
		<div class="row">
			<div class="stats col">.</div>
			<div class="chat col">
				<h1>Latest comments</h1>
				<div v-if="needsDisplayName">
					<div>Name:</div>
					<input id="username" v-model="newDisplayName" placeholder="Your name" />
					<button type="button" @click="setName">Set name</button>
				</div>
				<MessageContainer :id="chatId" @scroll.native="onScroll">
					<MessageComponent
						v-for="(msg, index) in displayMessages"
						:key="index"
						:msg="msg"
						@message="onNewMessage"
					/>
				</MessageContainer>
				<MessageInput @send="sendMessage" />
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import MessageInput from './MessageInput.vue';
import MessageComponent from './Message.vue';
import MessageContainer from './MessageContainer.vue';
import { db, auth } from '../storage/firebase';
import { debounce } from 'lodash';

export default Vue.extend({
	components: {
		MessageInput,
		MessageComponent,
		MessageContainer,
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
			autoScroll: true,
		};
	},
	firebase: {
		messages: db.ref('messages').limitToLast(100),
	},
	mounted() {
		this.loginAnonymous();
	},
	methods: {
		onScroll: debounce(function(e) {
			if (e.target.scrollHeight - e.target.scrollTop === e.target.offsetHeight) this.autoScroll = true;
			else this.autoScroll = false;
		}, 50),
		onNewMessage() {
			this.debouncedScroll();
		},
		debouncedScroll: debounce(function() {
			this.scrollChatDown();
		}, 50),
		scrollChatDown(force = false) {
			const chatDiv = document.getElementById(this.chatId);
			if (chatDiv && (force || this.autoScroll)) {
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
				this.autoScroll = true;
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

@media (min-width: 768px) {
	.stats {
		--cols-per-row: 1.42857143;
	}
	.chat {
		--cols-per-row: 3.333333;
	}
}

.chat {
	padding-top: 60px;
	background-color: $light-cream;
	display: flex;
	flex-flow: column;

	.message-container {
		flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
		&::-webkit-scrollbar {
			width: 4px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 2px;
			background: rgba(0, 0, 0, 0.2);
		}
	}
	.message-input {
		max-height: 140px;
	}

	> h1 {
		width: 80%;
		margin: 0 auto;
	}

	.message {
		width: 80%;
		margin: 20px auto 0 auto;
	}
}
</style>
