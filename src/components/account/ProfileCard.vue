<template>
	<div class="content__block">
		<img src="@/assets/imgs/user.png" class="profile__img">
		<div class="profile__username">
			{{this.$store.getters.username}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProfileCard'
	}
</script>

<style>
	.profile__img {
		width: 100%;
	}

	.profile__username {
		margin: 15px 0 0 0;
		font-size: 19px;
		font-weight: 300;
	}
</style>