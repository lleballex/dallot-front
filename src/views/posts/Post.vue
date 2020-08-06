<template>
	<div>
		<div v-if="post">
			<div class="content__block post">
				<div class="post__header">
					<div v-if="post.user.id == this.$store.getters.userId" class="post__options">
						<icon :icon="['far', 'dot-circle']" class="post__main-options-icon" />
						<ul class="post__options-menu">
							<li>
								<icon
									@click="deletePost"
									icon="trash"
									class="post__choose-options-icon"
								/>
							</li>
						</ul>
					</div>
					<div class="post__title">
						{{post.title}}
					</div>
					<Icons :post="post" class="post__info" />
				</div>
				<div class="post__body" v-html="post.content"></div>
			</div>
			<div v-if="comments" class="content__block">
				{{comments}}
			</div>
		</div>
		<Loading v-else />
	</div>
</template>

<script>
	import '@/assets/css/posts/post.css'

	export default {
		name: 'Post',
		props: ['id'],
		data: () => ({
			post: null,
			comments: null
		}),
		components: {
			Icons: () => import('@/components/posts/Icons.vue')
		},
		async created() {
			var result = await this.$store.dispatch('getPost', {
				id: this.id
			})
			if(result.success) this.post = result.post
			else {
				this.$store.commit('showNotification', {
					message: result.message,
					type: 'error'
				})
			}
			
			this.$store.commit('showExtraContentBox')

			result = await this.$store.dispatch('getComments', {
				post_id: this.id
			})
			if(result.success) this.comments = result.comments
			else {
				this.$store.commit('showNotification', {
					message: result.message,
					type: 'error'
				})
			}
		},
		beforeDestroy() {
			this.$store.commit('unshowExtraContentBox')
		},
		methods: {
			async deletePost() {
				var result = await this.$store.dispatch('deletePost', {
					id: this.post.id
				})
				this.$store.commit('showNotification', {
					message: result.message,
					type: result.success ? 'success' : 'error'
				})
				if(result.success) this.$router.push({name: 'Home'})

			}
		}
	}
</script>

<style>
	.post__header {
		position: relative;
	}

	.post__options {
		position: absolute;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		top: 5px;
		right: 5px;
	}

	.post__main-options-icon {
		color: #2e86de;
		font-size: 15px;
		transition: .2s;
	}

	.post__main-options-icon:hover {
		color: #0abde3;
	}

	.post__main-options-icon:hover + .post__options-menu,
	.post__options-menu:hover {
		opacity: 1;
	}

	.post__options-menu {
		display: flex;
		list-style: none;
		opacity: 0;
		padding: 0;
		margin: 0 5px 0 0;
		color: #fff;
		font-size: 14px;
		transition: .3s;
	}

	.post__options-menu > li {
		background: #9b59b6;
		transition: .2s;
	}

	.post__options-menu > li:hover {
		background: #8e44ad;
		cursor: pointer;
	}

	.post__options-menu > li:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.post__options-menu > li:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.post__choose-options-icon {
		display: block;
		padding: 4px 5px;
	}

	.post__info {
		position: absolute;
		bottom: 0;
		left: 0;
		width: calc(100% - 60px);
		margin-left: 30px;
		margin-bottom: 5px;
	}

</style>