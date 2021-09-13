<template>
	<div class="container container--lg">
		<div class="flex-wrap">
			<div class="about">
				<div class="photo photo--container">
					<img src="@/assets/img/itsme.jpeg" alt="Eto ya" class="photo__image">
				</div>
				<div class="about__info">
					<div class="about__name">Александр Суетов</div>
					<div class="about__text">
						Дата рождения <span class="about__text-value">05.05.1998</span>
					</div>
					<div class="about__text">
						Локация <span class="about__text-value">Россия, г.Краснодар</span>
					</div>
					<div class="about__social">
						<ul class="about__social-list">
							<li v-for="item in socials" :key="item.tag" class="about__social-item">
								<a :href="item.link" class="about__social-link" target="_blank">
									<img :src="item.icon" class="about__social-icon" />
									<span class="about__social-text">{{ item.title }}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="skill">
				<div class="skill__dev">
					<div class="skill__card">
						<div class="skill__card-title">Front-End</div>
						<div class="skill__card-text">Vue js 3(vue-cli, vuex), webpack, pure js, jQuery <br>
						Вёрстка (scss, БЭМ, bootstrap 4+, flex, grids ...), табличная верстка</div>
					</div>
					<div class="skill__card">
						<div class="skill__card-title">Back-End</div>
						<div class="skill__card-text">Базовые знания PHP (когда-то знал принципы ООП, MVC), mysql CRUD</div>
					</div>
				</div>
				<div class="skill__examples">
					<div v-for="work in works" :key="work.title" class="skill__card">
						<div class="skill__card-title">{{ work.title }}</div>
						<div v-for="example in work.examples" :key="example.title" class="skill__card-example">
							<app-link :to="example.demo" class="skill__card-link">{{ example.title }}</app-link>
							(<app-link :to="example.source" class="skill__card-link--source">source</app-link>)
							<div class="skill__card-text">- {{ example.text }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import AppLink from '@/components/AppLink'

export default {
	setup() {
		const store = useStore()

		return {
			socials: computed(() => store.getters.socials),
			works: computed(() => store.getters.works)
		}
	},
	components: { AppLink }
}
</script>

<style lang="scss" src="@/assets/styles/views/Profile.scss" scoped></style>
