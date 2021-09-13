<template>
	<div class="container container--sm">
		<div class="wrap">
			<div class="hoverboard" ref="hoverboard">
				<div 
					v-for="i in SQUARES_NUMBER" 
					:key="i" 
					@mouseover="setColor"
					@mouseleave="removeColor"
					class="square"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/runtime-core'

export default {
	setup() {
		const colors = ['#da434d', '#66a4f9', '#78e479', '#4cf9f5', '#bf67f1', '#f76ebd']
		const SQUARES_NUMBER = 810
		const DEFALUT_SQUARES_BG = '#945a7a52'

		const hoverboard = ref(null)

		const setColor = ({ target }) => {
			const randomColor = getRandomColor()
			
			target.style.backgroundColor = randomColor
			target.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
		}

		const removeColor = ({ target }) => {
			target.style.backgroundColor = DEFALUT_SQUARES_BG
			target.style.boxShadow = `0 0 2px ${DEFALUT_SQUARES_BG}`
		}

		const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

		return { hoverboard, SQUARES_NUMBER, setColor, removeColor }
	}
}
</script>

<style lang="scss" src="@/assets/styles/views/examples/Hoverboard.scss" scoped></style>
