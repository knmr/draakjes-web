<template>
  <div class="page">
    <div class="row">
      <div class="main col">
        <section id="history">
          <History />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </div>
      <div class="chat col">
        <h1>Latest comments</h1>
        <MessageContainer
          v-show="messagesLoaded"
          :id="chatId"
          @scroll.native="onScroll"
        >
          <MessageComponent
            v-for="(msg, index) in displayMessages"
            :key="index"
            :msg="msg"
            @message="onNewMessage"
          />
        </MessageContainer>
        <MessageInput
          v-show="messagesLoaded"
          @send="sendMessage"
          :setupName="needsDisplayName"
          @saveName="setName"
        />
        <MessagesLoading v-show="!messagesLoaded" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import MessageInput from './MessageInput.vue';
import MessageComponent from './Message.vue';
import MessageContainer from './MessageContainer.vue';
import MessagesLoading from './MessagesLoading.vue';
import History from './History.vue';
import Stats from './Stats.vue';
import { db, auth } from '../storage/firebase';
import { debounce } from 'lodash';

export default Vue.extend({
	components: {
		MessageInput,
		MessageComponent,
		MessageContainer,
		MessagesLoading,
		History,
		Stats,
	},
	name: 'Home',
	data() {
		const chatId = `chat-${Date.now()}`;
		return {
			chatId,
			messages: [],
			displayName: '',
			isLoggedIn: false,
			autoScroll: true,
			messagesLoaded: false,
		};
	},
	firebase: {
		messages: db.ref('messages').limitToLast(100),
	},
	mounted() {
		this.loginAnonymous();
		document.getElementById('main');
	},
	methods: {
		onScroll: debounce(function(e) {
			if (e.target.scrollHeight - e.target.scrollTop === e.target.offsetHeight) this.autoScroll = true;
			else this.autoScroll = false;
		}, 50),
		onNewMessage() {
			this.debouncedScroll();
			this.setMessagesLoaded();
		},
		setMessagesLoaded: debounce(function() {
			if (!this.messagesLoaded) {
				this.messagesLoaded = true;
			}
		}, 10),
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
					this.displayName = '';
					this.isLoggedIn = false;
				}
			});
			auth.signInAnonymously().catch((_error) => {});
		},
		setName(value) {
			if (!value) return;
			if (auth.currentUser)
				auth.currentUser
					.updateProfile({
						displayName: value,
					})
					.then((_e) => {
						this.displayName = value;
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
	.main {
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
	}
	.message-input {
		max-height: 140px;
	}
	h1,
	.message {
		width: 80%;
		margin: 0 auto;
	}

	> h1 {
		font-size: 1.5em;
	}

	.message {
		margin-top: 20px;
	}
}

.main {
	overflow-y: auto;
	scroll-snap-type: y mandatory;
	section {
		padding: 30px;
		height: 100%;
		box-sizing: border-box;
		scroll-snap-align: start;
		overflow: hidden;
		> * {
			height: 100%;
			overflow: hidden;
		}
	}
}
</style>
