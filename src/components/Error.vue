<template>
	<div class="content__block error">
		{{message}}
	</div>
</template>

<script>
	export default {
		name: 'Error',
		props: {
			message: String
		},
		mounted() {
			this.$store.commit('unshowExtraContentBox')
		},
	}
</script>

<style>
	.error {
		padding: 100px;
		font-size: 25px;
		text-align: center;
	}
</style>