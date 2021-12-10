import { createRouter, createWebHashHistory } from 'vue-router'

import Examples from '@/views/examples/Examples'
import Aimgame from '@/views/examples/Aimgame'
import Gallery from '@/views/examples/Gallery'

const sanya = 'Александр Суетов |'

const routes = [
	{
		path: '/',
		name: 'profile',
		component: () => import('../views/Profile.vue'),
		meta: {
			title: `${sanya} Junior front-end developer`
		}
	},
	{
		path: '/examples',
		name: 'examples',
		component: Examples,
		children: [
			{ path: '', redirect: '/' },
			{ path: 'aimgame', name: 'aimgame', component: Aimgame, meta: {title: `${sanya} Aim Game`} },
			{ path: 'hoverboard', name: 'hoverboard', component: () => import('../views/examples/Hoverboard.vue'), meta: {title: `${sanya} Hover board`} },
			{ path: 'gallery', name: 'gallery', component: Gallery, meta: {title: `${sanya} Gallery`} },
		]
	},
	{ 
		path: '/:pathMatch(.*)*', 
		name: 404, 
		component: () => import('../views/404.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	linkActiveClass: 'is-active',
	routes,

	scrollBehavior(to, from, savedPosition) {
		const obj = { behavior: 'smooth', top: 0 }
		return savedPosition ?? obj
	}
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

export default router
