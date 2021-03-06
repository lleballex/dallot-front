import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/views/Home.vue')
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('@/views/About.vue'),
			meta: {title: 'О проекте'}
		},
		{
			path: '/account/login',
			name: 'Login',
			component: () => import('@/views/account/Login.vue'),
			meta: {title: 'Авторизация'}
		},
		{
			path: '/account/register',
			name: 'Register',
			component: () => import('@/views/account/Register.vue'),
			meta: {title: 'Регистрация'}
		},
		{
			path: '/users/:username',
			name: 'Profile',
			props: true,
			component: () => import('@/views/account/profile/Overview.vue'),
			meta: {title: 'Просмотр профиля пользователя'}
		},
		{
			path: '/users/:username/posts',
			name: 'ProfilePosts',
			props: true,
			component: () => import('@/views/account/profile/Posts.vue'),
			meta: {title: 'Просмотр постов пользователя'}
		},
		{
			path: '/users/:username/personal',
			name: 'ProfilePersonal',
			component: () => import('@/views/account/profile/Personal.vue'),
			meta: {title: 'Данные о себе'}
		},
		{
			path: '/posts',
			name: 'Posts',
			component: () => import('@/views/posts/Posts.vue'),
			meta: {title: 'Последние посты'}
		},
		{
			path: '/posts/new',
			name: 'NewPost',
			component: () => import('@/views/posts/New.vue'),
			meta: {title: 'Новый пост'}
		},
		{
			path: '/posts/:id',
			name: 'Post',
			props: true,
			component: () => import('@/views/posts/Post.vue'),
			meta: {title: 'Пост'}
		}
	]
})