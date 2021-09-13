import { createStore } from 'vuex'
import profile from './modules/profile'

export default createStore({
	state: {
		appSetup: false
	},
	getters: {
		appSetup(state) {
			return state.appSetup
		}
	},
	mutations: {
		toggleAppSetup(state) {
			state.appSetup = !state.appSetup
		}
	},
	actions: {
	},
	modules: {
		profile
	}
})
