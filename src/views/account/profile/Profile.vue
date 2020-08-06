<template>
	<div class="profile">
		<ProfileCard class="profile__card" />
		<div class="profile__card content__block">
			<ProfileMenu />
			<div class="profile__overview">
				<div class="profile__overview-block">
					<div class="profile__overview-title">
						Популярные посты
					</div>
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
</template>

<script>
	import '@/assets/css/account/profile.css'

	export default {
		name: 'Profile',
		components: {
			ProfileCard: () => import('@/components/account/ProfileCard.vue'),
			ProfileMenu: () => import('@/components/account/ProfileMenu.vue')
		},
		data: () => ({
			posts: null
		}),
		async created() {
			var result = await this.$store.dispatch('getUserOverview', {
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