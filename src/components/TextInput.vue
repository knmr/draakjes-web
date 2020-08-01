<template>
	<div class="input-wrapper" :class="{'has-focus' : hasFocus, 'has-value' : !!value}">
		<input
			@input="handleInput"
			@focus="hasFocus = true"
			@blur="hasFocus = false"
			v-model="value"
			:placeholder="placeholder"
		/>
		<a class="button" :href="!!value ? '#' : undefined" @click="save">
			<Check />
		</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Check from '../icons/Check.vue';
export default Vue.extend({
	components: {
		Check,
	},
	props: {
		label: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			hasFocus: false,
			value: '',
		};
	},
	name: 'TextInput',
	methods: {
		handleInput(e: InputEvent) {
			this.$emit('input', e);
		},
		save() {
			console.log('save');
			this.$emit('save');
		},
	},
});
</script>

<style lang="scss">
@import '../styles/settings.scss';
.input-wrapper {
	position: relative;
	background: white;
	padding: 10px 20px;
	border-radius: 21px;
	width: 100%;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */
	// border: 1px black solid;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
	&.has-focus {
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
	}
	&.has-value {
		box-shadow: 0 0 0 1px #67d1e0;
		&.has-focus {
			box-shadow: 0 0 3px 1px #67d1e0;
		}
		.button {
			background: #67d1e0;
		}
	}
	input {
		width: 100%;
		min-height: 20px;
	}
	.button {
		position: absolute;
		right: 0;
		top: 0;
		min-width: 40px;
		border-top-right-radius: 21px;
		border-bottom-right-radius: 21px;
		height: 100%;
		text-decoration: none;
		color: white;
		text-align: center;
		transition: all 0.2s;
		background: rgba(0, 0, 0, 0.2);
		padding: 10px 5px;
		box-sizing: border-box;
		svg {
			width: 20px;
		}
	}
}
</style>
