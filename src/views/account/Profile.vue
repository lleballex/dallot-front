<template>
	<div class="profile">
		<div class="profile__card content__block">
			<img src="@/assets/imgs/user.png" class="profile__img">
			<div class="profile__username">
				{{this.$store.getters.username}}
			</div>
		</div>
		<div class="profile__card content__block">
			<ul class="profile__menu">
				<li class="active">
					Основное
				</li>
				<li>
					Посты
				</li>
				<li>
					Личное
				</li>
			</ul>
			<div class="profile__overview">
				<div class="profile__overview-block">
					<div class="profile__overview-title">
						Популярные посты
					</div>
					<div class="profile__overview-items">
						<div class="profile__overview-item">
							Hello world! First overview item
						</div>
						<div class="profile__overview-item">
							Bye bye world! Second overview item
						</div>
						<div class="profile__overview-item">
							Bye bye world! Second overview item
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Profile'
	}
</script>

<style scoped>
	.profile {
		display: flex;
	}

	.profile__card:first-child {
		width: 30%;
		margin-right: 20px;
	}

	.profile__card:last-child {
		width: 100%;
		padding: 0;
	}


	/* first profile card */

	.profile__img {
		width: 100%;
	}

	.profile__username {
		margin: 15px 0 0 0;
		font-size: 19px;
		font-weight: 300;
	}


	/* last profile card */

	.profile__menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 15px;
		border-bottom: 1px solid #ccc;
	}

	.profile__menu > li {
		padding: 17px 17px 15px 17px;
		border-bottom: 2px solid #fff;
		transition: .3s border-color;
	}

	.profile__menu > li:hover {
		border-bottom: 2px solid #ccc;
		cursor: pointer;
	}

	.profile__menu > li.active {
		border-bottom: 2px solid #ff5252;
		font-weight: 500;
	}

	.profile__overview {
		padding: 0 15px 15px 15px;
	}

	.profile__overview-block {
		margin-top: 20px;
	}

	.profile__overview-title {
		font-size: 16px;
		margin-bottom: 10px;
	}

	.profile__overview-items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.profile__overview-item {
		width: calc(50% - 7.5px);
		margin-bottom: 15px;
		border: 1px solid #ccc;
		box-sizing: border-box;
		border-radius: 5px;
		padding: 15px;
		font-size: 15px;
	}

	/*.profile__overview-item:last-child,
	.profile__overview-item:nth-last-child(2) {
		margin-bottom: 0;
	}*/
</style>