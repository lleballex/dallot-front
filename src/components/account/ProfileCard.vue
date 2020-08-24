<template>
	<div class="content__block">
		<div class="profile__img-container">
			<div class="profile__img-preview">
				<img v-if="userImage" :src="userImage">
				<img v-else src="@/assets/imgs/user_mask.svg">
			</div>
			<button v-if="userIsOwner" @click="$refs.imageChooser.click()" class="profile__change-img-btn">
				<icon :icon="['far', 'image']" />
			</button>
			<input
				ref="imageChooser"
				@change="setImage"
				type="file"
				accept="image/*"
				style="display: none;"
			>
		</div>
		<div class="profile__username">
			{{username}}
		</div>
		<div v-if="userAbout" class="profile__about-user">
			{{userAbout}}
		</div>
		<div v-if="userIsOwner" v-show="showImageCropper" class="profile__cropper-container">
			<vue-cropper
				ref="imageCropper"
				:src="imageSrc"
				:aspect-ratio="10 / 10"
				class="profile__cropper"
				preview=".profile__img-preview"
			/>
			<div class="profile__cropper-btns">
				<button @click="saveImage" class="profile__cropper-btn positive">
					<icon icon="check" />
				</button>
				<button @click="hideCropper" class="profile__cropper-btn warning">
					<icon icon="times" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import 'cropperjs/dist/cropper.css'

	export default {
		name: 'ProfileCard',
		props: {
			username: String
		},
		data: () => ({
			userAbout: '',
			userImage: '',
			imageSrc: '',
			showImageCropper: false,
			userIsOwner: false
		}),
		components: {
			VueCropper: () => import('vue-cropperjs')
		},
		created() {
			if(this.username == this.$store.getters.username) {
				this.userAbout = this.$store.getters.userAbout
				this.userImage = this.$store.getters.userImage
				this.userIsOwner = true
				return
			}

			var loadedUser = this.$store.getters.loadedUser

			if(loadedUser && loadedUser.username == this.username) {
				this.userImage = loadedUser.image
				this.userAbout = loadedUser.about
			} else {
				this.$store.dispatch('getUser', {
					username: this.username
				}).then(result => {
					if(result.success) {
						this.userAbout = result.user.about
						this.userImage = result.user.image
						this.$store.commit('setLoadedUser', {
							username: this.username,
							image: this.userImage,
							about: this.userAbout
						})
					}
				})
			}
		},
		methods: {
			updateUserData() {
				this.userAbout = this.$store.getters.userAbout
			},

			setImage(event) {
				var file = event.target.files[0]

				if(file.type.indexOf('image/') < 0) {
					this.$store.commit('showNotification', {
						message: 'Так не пойдет. Выбери изображение',
						type: 'error'
					})
					return
				}
				if(typeof(FileReader) != 'function') {
					this.$store.commit('showNotification', {
						message: 'Прости, но загрузить картинку в этом браузере не получится',
						type: 'error'
					})
					return
				}

				var reader = new FileReader()
				reader.onload = e => {
					this.imageSrc = e.target.result
					this.showImageCropper = true
					this.$refs.imageCropper.replace(e.target.result)
				}
				reader.readAsDataURL(file)
			},

			hideCropper() {
				this.imageSrc = ''
				this.showImageCropper = false
			},

			async saveImage() {
				this.$store.dispatch('updateUser', {
					username: this.$store.getters.username,
					email: this.$store.getters.userEmail,
					image: await this.$refs.imageCropper.getCroppedCanvas().toDataURL()
				}).then(result => {
					this.hideCropper()
					this.$store.commit('showNotification', {
						message: result.success ? 'Ура! Фото профиля успешно обновлено' : result.message,
						type: result.success ? 'success' : 'error'
					})
					if(result.success)
						this.$store.commit('setUserInfo', result.user)
				})
			}
		}
	}
</script>

<style>
	.profile__img-container {
		position: relative;
	}

	.profile__img-preview {
		border-radius: 50%;
		overflow: hidden;
	}

	.profile__img-preview > img {
		width: 100%;
		display: block;
	}

	.profile__change-img-btn {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		background: rgba(255, 255, 255, .5);
		border: none;
		border-radius: 50%;
		font-size: 40px;
		color: #333;
		outline: none;
		transition: .3s;
	}

	.profile__change-img-btn:hover {
		opacity: 1;
		cursor: pointer;
	}

	.profile__username {
		margin: 15px 0 0 0;
		font-size: 20px;
		font-weight: 300;
	}

	.profile__about-user {
		margin-top: 15px;
		font-size: 14px;
		line-height: 22px;
	}


	/* image cropper */

	.profile__cropper-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}

	.profile__cropper {
		width: 500px;
		max-height: 300px;
		margin: 50px auto;
	}

	.profile__cropper-btns {
		display: flex;
		width: 500px;
		margin: 50px auto;
	}

	.profile__cropper-btn {
		width: 50%;
		padding: 5px;
		border: none;
		background: none;
		color: #000;
		font-size: 25px;
		cursor: pointer;
		outline: none;
		transition: .2s;
	}

	.profile__cropper-btn:first-child {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	.profile__cropper-btn:last-child {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.profile__cropper-btn.positive {
		background: #2ecc71;
	}

	.profile__cropper-btn.positive:hover {
		background: #27ae60;
	}

	.profile__cropper-btn.warning {
		background: #e74c3c;
	}

	.profile__cropper-btn.warning:hover {
		background: #c0392b;
	}
</style>