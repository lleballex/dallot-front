<template>
	<div v-if="this.$store.getters.isUserAuthenticated" class="profile">
		<ProfileCard class="profile__card" />
		<div class="profile__card content__block">
			<ProfileMenu />
			<div class="profile__overview">
				<div class="profile__overview-block">
					<div class="profile__overview-items">
						<div
							v-for="post in posts"
							:key="post.id"
							class="profile__overview-item"
						>
							<router-link :to="{name: 'Post', params: {'id': post.id}}">
								{{post.title}}
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Error v-else message="Для доступа к этой странице тебе нужно авторизоваться" />
</template>

<script>
	import '@/assets/css/account/profile.css'

	export default {
		name: 'ProfilePosts',
		data: () => ({
			posts: null
		}),
		components: {
			ProfileCard: () => import('@/components/account/ProfileCard.vue'),
			ProfileMenu: () => import('@/components/account/ProfileMenu.vue'),
			Error: () => import('@/components/Error.vue')
		},
		async created() {
			if(!this.$store.getters.isUserAuthenticated) return

			var result = await this.$store.dispatch('getUserPosts', {
				id: this.$store.getters.userId
			})
			if(result.success) {
				this.posts = result.posts
			} else {
				this.$store.commit('showNotification', {
					message: result.message,
					type: 'error'
				})
			}
		}
	}
</script>