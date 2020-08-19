<template>
	<div class="profile">
		<ProfileCard :username="username" class="profile__card" />
		<div class="profile__card content__block">
			<ProfileMenu :username="username" />
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
</template>

<script>
	import '@/assets/css/account/profile.css'

	export default {
		name: 'ProfilePosts',
		props: ['username'],
		data: () => ({
			posts: null,
			errorMessage: ''
		}),
		components: {
			ProfileCard: () => import('@/components/account/ProfileCard.vue'),
			ProfileMenu: () => import('@/components/account/ProfileMenu.vue')
		},
		created() {
			this.$store.dispatch('getUserPosts', {
				username: this.username
			}).then(result => {
				if(result.success) this.posts = result.posts
				else this.errorMessage = result.message
			})
		}
	}
</script>