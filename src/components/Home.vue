<template>
  <div class="home container-xlarge">
    <div class="row">
      <div class="stats col">.</div>
      <div class="chat col">
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
        <div
          v-else-if="isLoggedIn"
          class="card"
        >
          <div class="card-content">
            <MessageContainer
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
            <MessageInput @send="sendMessage" />
          </div>
        </div>
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

.home .row > div {
	--cols-per-row: 1;
}

@media (min-width: 768px) {
	.home .row > div.col {
		--cols-per-row: 2;
	}
}
</style>
