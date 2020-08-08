<template>
	<div>
		<h1>Home page</h1>
		<Loading />
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {
			Loading: () => import('@/components/Loading.vue')
		}
	}
</script>