<template>
	<div class="retrowave-bg"></div>

	<div class="setup-wrap">
		<button
			v-if="!appSetup"
			@click="toggleAppSetup"
			class="btn-setup"
		>Нажми на меня</button>
	</div>

	<div v-if="appSetup" class="wrap-dark">
		<TheNavigation @off-app="offApp" />
		<router-view />
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import TheNavigation from '@/components/TheNavigation'

export default {
	setup() {
		const store = useStore()

		const toggleAppSetup = ({ target }) => {
			target.disabled = true
			target.classList.add('is-active')
			target.textContent = '♡ (⌒▽⌒)♡'

			setTimeout(() => store.commit('toggleAppSetup'), 5000)
		}

		const offApp = () => store.commit('toggleAppSetup')

		return {
			toggleAppSetup, offApp,
			appSetup: computed(() => store.getters.appSetup)
		}
	},
	components: { TheNavigation }
}
</script>

<style lang="scss">
.setup-wrap {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	z-index: -3;
}
.btn-setup {
	min-width: 300px;
	border: 0;
	padding: 20px 40px;
	border-radius: 20px;
	cursor: pointer;
	position: relative;

	margin-top: 50px;

	background-color: var(--purple-light);
	color: #dadada;
	font-weight: bold;
	text-shadow: 0 0 10px #dadada;

	transition: box-shadow 2s;
	animation: btn-shadow 2s infinite;

	&.is-active {
		box-shadow: 0 0 15px var(--purple-light);

		position: relative;
		overflow: hidden;

		transition: opacity .5s;
		animation: hide 5s;
		animation-fill-mode: forwards;

		&:after {
			position: absolute;
			content: '';
			background-image: url('~@/assets/img/pchela.png');
			width: 16px;
			height: 16px;
			right: -100%;
			transition: right .5s;
			animation: move 4s;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}
	}
}

@keyframes move {
	from { right: -100% }
	to { right: 100% }
}
@keyframes hide {
	0% {opacity: 1; transform: scale(1);}
	80% {opacity: 1; transform: scale(1);}
	100% {opacity: 0; transform: scale(0);}
}
@keyframes btn-shadow {
	0% {box-shadow: 0 0 15px var(--purple-light);}
	50% {box-shadow: 0 0 0px var(--purple-light);}
	100% {box-shadow: 0 0 15px var(--purple-light);}
}
</style>
