<template>
	<div class="container container--sm">
		<div class="wrap">
			<h1>Whoops!</h1>
			<h2>Page not found :(</h2>
			<router-link to="/" class="getback">Get back</router-link>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.wrap {
	font-family: 'Press Start 2P', cursive;
	color: #fff;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
}
.getback {
	color: var(--primary);
}
</style>
