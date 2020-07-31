<template>
	<div class="messages-loading">
		<div>
			<div class="lds-heart">
				<div></div>
			</div>
			<div class="loading">
				loading messages
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'MessagesLoading',
});
</script>
<style lang="scss">
.messages-loading {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	> div {
		text-align: center;
	}
	.lds-heart {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
		transform: rotate(45deg);
		transform-origin: 40px 40px;
	}
	.lds-heart div {
		top: 32px;
		left: 32px;
		position: absolute;
		width: 32px;
		height: 32px;
		background: #e65c62;
		animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.lds-heart div:after,
	.lds-heart div:before {
		content: ' ';
		position: absolute;
		display: block;
		width: 32px;
		height: 32px;
		background: #e65c62;
	}
	.lds-heart div:before {
		left: -24px;
		border-radius: 50% 0 0 50%;
	}
	.lds-heart div:after {
		top: -24px;
		border-radius: 50% 50% 0 0;
	}
	@keyframes lds-heart {
		0% {
			transform: scale(0.95);
		}
		5% {
			transform: scale(1.1);
		}
		39% {
			transform: scale(0.85);
		}
		45% {
			transform: scale(1);
		}
		60% {
			transform: scale(0.95);
		}
		100% {
			transform: scale(0.9);
		}
	}
	@keyframes blink {
		0% {
			opacity: 0.2;
		}
		20% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}

	.loading span {
		animation-name: blink;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}

	.loading span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading span:nth-child(3) {
		animation-delay: 0.4s;
	}
}
</style>
