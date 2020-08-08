<template>
	<div id="app">
		<Navbar/>
		<div class="content-area">
			<div class="content">
				<router-view class="content__main-box" />
				<div v-if="this.$store.state.showExtraContentBox" class="content__extra-box">
					<div class="content__block">
						Сайт находится в разработке.<br><br>Данные для связи: @lleballex - telegram
					</div>
					<div class="content__block" style="padding: 50px 30px; text-align: center;">
						Место для вашей рекламы
					</div>
				</div>
			</div>
		</div>
		<Notifications/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {
			Navbar: () => import('@/components/Navbar.vue'),
			Notifications: () => import('@/components/Notifications.vue')
		}
	}
</script>