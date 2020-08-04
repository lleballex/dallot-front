<template>
	<div class="post-icons">
		<div class="post-icons__half">
			<div class="post-icons__icon-item">
				<icon :icon="['far', 'eye']" class="post-icons__icon" />
				{{post.views}}
			</div>
			<div class="post-icons__icon-item">
				<icon :icon="['far', 'comment-alt']" class="post-icons__icon" />
				0
			</div>
			<div class="post-icons__icon-item">
				<icon
					@click="updatePostBookmarks($event.target, post.id)"
					:icon="[getIconPrefix(post.bookmarked_users), 'bookmark']"
					:class="getIconClass(post.bookmarked_users)"
					class="post-icons__icon clickable"
				/>
				<div class="post-icons__value">
					{{post.bookmarked_users.length}}
				</div>
			</div>
		</div>
		<div class="post-icons__half">
			<div class="post-icons__icon-item">
				<icon
					@click="updatePostRating($event.target, post.id, 'raise')"
					:class="getIconClass(post.raised_rating_users)"
					class="post-icons__icon clickable"
					icon="chevron-up"
				/>
				<div class="post-icons__value">
					{{post.rating}}
				</div>
				<icon
					@click="updatePostRating($event.target, post.id, 'drop')"
					:class="getIconClass(post.dropped_rating_users)"
					class="post-icons__icon clickable"
					icon="chevron-down"
					style="margin: 0 0 0 10px;"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Posts',
		props: ['post'],
		methods: {
			getIconClass(users) {
				if(users.indexOf(this.$store.getters.userId) >= 0)
					return 'active'
				return ''
			},

			getIconPrefix(users) {
				if(users.indexOf(this.$store.getters.userId) >= 0)
					return 'fas'
				return 'far'
			},

			async updatePostBookmarks(obj, id) {
				if(!this.$store.getters.isUserAuthenticated) {
					this.$store.commit('showNotification', {
						message: 'Нет, попробуй сначала авторизоваться',
						type: 'error'
					})
					return
				}
				if(obj.tagName == 'path')
					obj = obj.parentElement
				if(obj.classList.contains('active')) {
					var result = await this.$store.dispatch('removePostFromBookmarks', {
						id: id
					})
					if(result.success) {
						this.post.bookmarked_users.splice(this.post.bookmarked_users.indexOf(this.$store.getters.userId, 1))

						obj.parentElement.querySelector('.post-icons__value').innerText = result.bookmarks
					}
				} else {
					result = await this.$store.dispatch('addPostToBookmarks', {
						id: id
					})
					if(result.success) {
						this.post.bookmarked_users.push(this.$store.getters.userId)

						obj.parentElement.querySelector('.post-icons__value').innerText = result.bookmarks
						this.$store.commit('showNotification', {
							message: result.message,
							type: 'success'
						})
					}
				}
			},

			async updatePostRating(obj, id, action) {
				if(!this.$store.getters.isUserAuthenticated) {
					this.$store.commit('showNotification', {
						message: 'Нет, попробуй сначала авторизоваться',
						type: 'error'
					})
					return
				}

				if(obj.tagName == 'path')
					obj = obj.parentElement
		
				if(obj.classList.contains('active')) {
					var result = await this.$store.dispatch('restorePostRating', {
						id: id
					})
					if(result.success) {
						obj.classList.remove('active')
						obj.parentElement.querySelector('.post-icons__value').innerText = result.rating
					}
				} else {
					result = await this.$store.dispatch(action + 'PostRating', {
						id: id
					})
					if(result.success) {
						this.$store.commit('showNotification', {
							message: result.message,
							type: 'success'
						})
						for(var i = 0; i < obj.parentElement.childElementCount; i++)
							obj.parentElement.children[i].classList.remove('active')
						obj.classList.add('active')
						obj.parentElement.querySelector('.post-icons__value').innerText = result.rating
					}
				}
			},
		}
	}
</script>

<style>
	.post-icons {
		display: flex;
		justify-content: space-between;
		color: #666;
		font-size: 15px;
	}

	.post-icons__half {
		display: flex;
	}

	.post-icons__icon-item {
		display: flex;
		align-items: center;
		margin-right: 20px;
	}

	.post-icons__half .post-icons__icon-item:last-child {
		margin-right: 0;
	}

	.post-icons__icon {
		margin-right: 10px;
		transition: .1s;
	}

	.post-icons__icon.clickable:hover {
		color: #999;
		cursor: pointer;
	}

	.post-icons__icon.active {
		color: #2980b9;
	}

	.post-icons__icon.active.clickable:hover {
		color: #3498db;
	}
</style>