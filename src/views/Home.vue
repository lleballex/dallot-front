<template>
	<h1>Home page</h1>
</template>

<script>
	export default {
		name: 'Home',
		created() {
			this.$router.push({name: 'Posts'})
		}
	}
</script>