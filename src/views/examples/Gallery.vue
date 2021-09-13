<template>
	<div class="wrap">
		<div 
			v-for="(image, idx) in images" 
			:key="image.title" 
			@click="selectImage"
			:ref="image => { if (image) imagesElemets[idx] = image }"
			class="image" :style="`background-image: url('${image.src}');`"
			:class="{sega: image.title === 'Sega'}"
		>
			<h3>{{ image.title }}</h3>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
	setup() {
		const images = [
			// { src: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80', title: 'Moon' },
			// { src: 'https://images.unsplash.com/photo-1517052269751-4ae3ad86cc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80', title: 'NASA' },
			// { src: 'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80', title: 'Rocket' },
			// { src: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80', title: 'Galaxy' },
			// { src: 'https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80', title: 'Stars' }
			{ src: require('@/assets/img/retrowave-gallery/china.jpg'), title: 'China' },
			{ src: require('@/assets/img/retrowave-gallery/giamela.jpg'), title: 'Sandwiches' },
			{ src: require('@/assets/img/retrowave-gallery/super-car.jpg'), title: 'Super car' },
			{ src: require('@/assets/img/retrowave-gallery/tv-sega.jpg'), title: 'Sega' },
			{ src: require('@/assets/img/retrowave-gallery/tv-smile.jpg'), title: 'Smile' }
		]
		const imagesElemets = ref([])

		const selectImage = ({ target }) => {
			imagesElemets.value.forEach(item => item.classList.remove('active'))
			target.classList.add('active')
		}

		return { images, selectImage, imagesElemets}
	}
}
</script>

<style lang="scss" scoped>
.wrap {
	display: flex;
	align-items: center;
	width: calc(100% - 140px);
	height: 100%;
	padding: 0 20px;
	margin: 0 auto;
}

.image {
	position: relative;
	height: 80vh;
	border-radius: 20px;
	margin: 10px;
	cursor: pointer;
	color: #fff;
	flex: 1;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: all .5s ease-in-out;
	box-shadow: 0 0 10px var(--primary);
}
.image:first-child {margin-left: 0;}
.image:last-child {margin-right: 0;}
.image.active {flex: 10;}
.active.sega {background-position: 100% -100px;}

.image h3 {
	position: absolute;
	left: 20px;
	bottom: 20px;
	font-size: 24px;
	margin: 0;
	opacity: 0;
}
.image.active h3 {
	opacity: 1;
	transition: opacity .3s ease-in .5s;
}

</style>
