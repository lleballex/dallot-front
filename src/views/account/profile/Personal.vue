<template>
	<div v-if="this.$store.getters.isUserAuthenticated" class="profile">
		<ProfileCard class="profile__card" />
		<div class="profile__card content__block">
			<ProfileMenu />
			<form @submit.prevent="updateUser" class="profile__fields profile__overview profile__overview-block">
				<div class="profile__field-block">
					<div class="profile__field-label">
						Логин
					</div>
					<input v-model="username" type="text" class="profile__field" required>
				</div>
				<div class="profile__field-block">
					<div class="profile__field-label">
						Email
					</div>
					<input v-model="email" type="email" class="profile__field" required>
				</div>
				<div class="profile__field-block">
					<div class="profile__field-label">
						Имя
					</div>
					<input v-model="name" type="text" class="profile__field">
				</div>
				<input class="profile__submit-btn" type="submit" value="Сохранить">
			</form>
		</div>
	</div>
	<Error v-else message="Для доступа к этой странице тебе нужно авторизоваться" />
</template>

<script>
	import '@/assets/css/account/profile.css'

	export default {
		name: 'ProfilePosts',
		data: () => ({
			username: '',
			email: '',
			name: ''
		}),
		components: {
			ProfileCard: () => import('@/components/account/ProfileCard.vue'),
			ProfileMenu: () => import('@/components/account/ProfileMenu.vue'),
			Error: () => import('@/components/Error.vue')
		},
		async created() {
			if(!this.$store.getters.isUserAuthenticated) return

			var result = await this.$store.dispatch('getUser', {
				id: this.$store.getters.userId
			})
			if(result.success) {
				this.username = result.user.username
				this.email = result.user.email
				this.name = result.user.first_name
			} else {
				this.$store.commit('showNotification', {
					message: result.message,
					type: 'error'
				})
			}
		},
		methods: {
			updateUser() {
				this.$store.dispatch('updateUser', {
					id: this.$store.getters.userId,
					username: this.username,
					email: this.email,
					name: this.name
				}).then(result => {
					if(result.success)
						this.$store.commit('setUserInfo', result.user)
					
					this.$store.commit('showNotification', {
						message: result.message,
						type: result.success ? 'success' : 'error'
					})
				})
			}
		}
	}
</script>

<style>
	.profile__fields {
		display: flex;
		flex-direction: column;
	}

	.profile__field-block {
		margin-top: 15px;
	}

	.profile__field-block:first-child {
		margin-top: 0;
	}

	.profile__field-label {
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 5px;
	}

	.profile__field {
		padding: 5px 10px;
		width: 100%;
		box-sizing: border-box;
		background: #f5fdff;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-family: 'Montserrat', sans-serif;
		font-size: 15px;
		transition: .2s;
	}

	.profile__field:focus {
		outline: none;
		box-shadow: 0 0 0 3px powderblue;
	}

	.profile__submit-btn {
		align-self: flex-start;
		padding: 9px 50px;
		margin-top: 15px;
		border: 1px solid #27ae60;
		background: #2ecc71;
		border-radius: 5px;
		font-family: 'Montserrat', sans-serif;
		font-size: 15px;
		color: #fff;
		transition: .2s;
	}

	.profile__submit-btn:hover {
		background: #27ae60;
		cursor: pointer;
	}

	.profile__submit-btn:focus {
		box-shadow: 0 0 0 3px #7bed9f;
		outline: none;
	}
</style>