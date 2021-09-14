<template>
	<div class="wrap-aimgame">
		<div class="pre-score">
			Предыдущий счёт <strong>{{ prevStats.score }}</strong>
			<br>
			Предыдущее время <strong>{{ prevStats.time }}</strong>
		</div>
		<div class="screen" ref="screen">
			<h1 style="font-size: 50px;color: #ffa9f394">Aim Game</h1>
			<button @click.prevent="screens[0].classList.add('up')" class="btn-start">Начать игру</button>
		</div>

		<div class="screen" ref="screen">
			<h1 style="color: #ffc">Выберите время</h1>
			<ul class="time-list">
				<li v-for="sec in seconds" :key="sec">
					<button @click="chooseTime(sec)" class="time-btn">{{ sec }} сек</button>
				</li>
			</ul>
		</div>

		<div class="screen" ref="screen">
			<h3 style="color: bisque;">Осталось {{ !time ? '00:00' : timeLeft }}</h3>
			<div @click="clickToCircle" class="board" ref="board">
				<div v-if="isFinishGame" class="finish-game">
					<h1 style="color: mediumpurple;">Счёт: {{score}}</h1>
					<button class="btn-reload" @click="reloadGame">Заново</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
	setup() {
		const circleColors = ['#d04646', '#3d76f5', '#1cab1c', '#d2d223', '#b74cb7', '#cacaca']
		const seconds = [10, 20, 30, 60]
		const time = ref(0)
		const score = ref(0)
		const gTimer = ref(null)
		const timeLeft = ref('00:00')
		const isFinishGame = ref(false)
		const board = ref(null)

		// stats
		const prevTime = ref(0)
		const prevStats = reactive({
			score: 0,
			time: 0
		})

		const screens = ref(null)
		onMounted(() => {
			screens.value = Array.from(document.querySelectorAll('.screen'))
		})

		const chooseTime = sec => {
			prevTime.value = sec

			time.value = +sec
			time.value = time.value +1
			startGame()
		}

		const clickToCircle = e => {
			if (e.target.classList.contains('circle')) {
				score.value++

				e.target.remove()
				createRandomCircle()
			}
		}

		const startGame = () => {
			screens.value[1].classList.add('up')
			gTimer.value = setInterval(gameTimer, 1000)
			createRandomCircle()
		}

		const reloadGame = () => {
			prevStats.score = score.value
			prevStats.time = prevTime.value

			// reset
			time.value = 0
			score.value = 0
			gTimer.value = null

			isFinishGame.value = false

			screens.value.forEach(item => item.classList.remove('up'))
			screens.value[0].classList.add('up')

			document.querySelectorAll('.circle').forEach(item => item.remove())
		}

		const gameTimer = () => {
			if (time.value === 0) {
				isFinishGame.value = true
				clearInterval(gTimer.value)
			} 
			else {
				timeLeft.value = time.value < 11 ? `00:0${--time.value}` : `00:${--time.value}`
			}
		}

		const createRandomCircle = () => {
			const circle = document.createElement('div')
			const size = getRandomNumber(10, 60)
			const randomColor = getRandomColor()
			const {width, height} = board.value.getBoundingClientRect()
			const x = getRandomNumber(0, width - size - 12) // box-shadow 12 +2
			const y = getRandomNumber(0, height - size - 12) // box-shadow 12 +2

			circle.classList.add('aimgame', 'circle')
			circle.style.width = `${size}px`
			circle.style.height = `${size}px`
			circle.style.top = `${y}px`
			circle.style.left = `${x}px`
			circle.style.background = randomColor
			circle.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`

			board.value.append(circle)
		}

		const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)
		const getRandomColor = () =>  circleColors[Math.floor(Math.random() * circleColors.length)]

		return {
			time, score, gTimer, seconds, screens, board, timeLeft, isFinishGame,
			chooseTime, clickToCircle, startGame, gameTimer, prevStats,
			createRandomCircle, getRandomNumber, getRandomColor, reloadGame
		}
	}
}
</script>

<style lang="scss" src="@/assets/styles/views/examples/Aimgame.scss" scoped></style>
<style>
.aimgame.circle {
	background: linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%);
	position: absolute;
	border-radius: 50%;
	cursor: pointer;
}
</style>
