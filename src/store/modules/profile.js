export default {
	state: {
		works: {
			js: {
				title: 'JavaScript',
				examples: [
					{ 
						title: 'aim game',
						text: 'aim игра, нажимай на кружочeк',
						demo: '/examples/aimgame', 
						source: 'https://jsfiddle.net/s0loparty/vefLh0zg/12/'
					},
					{ 
						title: 'hover board',
						text: 'интерактивная доска, наведи мышку :)',
						demo: '/examples/hoverboard', 
						source: 'https://jsfiddle.net/s0loparty/bz6v5nxc/29/'
					},
					{ 
						title: 'gallery',
						text: 'бомбезная галерея изображений',
						demo: '/examples/gallery', 
						source: 'https://jsfiddle.net/s0loparty/kdmh7109/3/'
					}
				]
			},
			vue: {
				title: 'JavaScript (vue js 3)',
				examples: [
					{ 
						title: 'weather app',
						text: 'приложение погоды',
						demo: 'https://weather-app-dth.pages.dev/', 
						source: 'https://github.com/s0loparty/vue-weather-app'
					},
					{ 
						title: 'todo list',
						text: 'приложение задач',
						demo: 'https://alabamaster.github.io/tasks-manager/dist/', 
						source: 'https://github.com/alabamaster/tasks-manager'
					},
					{ 
						title: 'dotabuff',
						text: 'бомбезная галерея изображений',
						demo: 'https://alabamaster.github.io/dotabuff/dist/', 
						source: 'https://github.com/alabamaster/dotabuff'
					}
				]
			},
			php: {
				title: 'PHP',
				examples: [
					{ 
						title: 'buffcs',
						text: 'онлайн магазин для игры Counter-Strike 1.6',
						demo: 'https://buffcs.csonelove.ru', 
						source: 'https://github.com/alabamaster/buffcs-shared'
					}
				]
			}
		},
		socials: [
			{ title: 'Вконтакте', link: 'https://vk.com/s0loparty', tag: 'vk', icon: require('@/assets/img/social/vk.png') },
			{ title: 'Telegram', link: 'https://telegram.im/s0loparty', tag: 'tg', icon: require('@/assets/img/social/tg.png') },
			{ title: 'GitHub', link: 'https://github.com/s0loparty', tag: 'github', icon: require('@/assets/img/social/github.png') },
			{ title: 'HH.RU', link: 'https://krasnodar.hh.ru/resume/8025ba07ff076ab7850039ed1f6c7049794954', tag: 'hhru', icon: require('@/assets/img/social/hh.png') },
			{ title: 'Instagram', link: 'https://www.instagram.com/s0loparty', tag: 'inst', icon: require('@/assets/img/social/inst.png') }
		],
	},
	getters: {
		socials(state) {
			return state.socials
		},
		works(state) {
			return state.works
		}
	}
}
