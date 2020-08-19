<template>
	<ul class="profile__menu">
		<li>
			<router-link :to="{name: 'Profile'}" exact>
				Основное
			</router-link>
		</li>
		<li>
			<router-link :to="{name: 'ProfilePosts'}" exact>
				Посты
			</router-link>
		</li>
		<li v-if="showPersonal">
			<router-link :to="{name: 'ProfilePersonal'}" exact>
				Данные
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'ProfileMenu',
		props: {
			username: String
		},
		data: () => ({
			showPersonal: false
		}),
		created() {
			if(this.$store.getters.username == this.username)
				this.showPersonal = true
		}
	}
</script>

<style>
	.profile__menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 15px;
		border-bottom: 1px solid #ccc;
	}

	.profile__menu > li > a {
		padding: 17px 17px 15px 17px;
		display: block;
		text-decoration: none;
		color: #000;
		border-bottom: 2px solid #fff;
		transition: .3s;
	}

	.profile__menu > li > a:hover {
		border-bottom: 2px solid #ccc;
	}

	.profile__menu > li > a.active {
		border-bottom: 2px solid #ff5252;
		font-weight: 500; 
	}
</style>