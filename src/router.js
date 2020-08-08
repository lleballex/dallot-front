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
			component: () => import('@/views/About.vue')
		},
		{
			path: '/account/login',
			name: 'Login',
			component: () => import('@/views/account/Login.vue'),
			meta: {title: 'Авторизация \\ Dallot'}
		},
		{
			path: '/account/register',
			name: 'Register',
			component: () => import('@/views/account/Register.vue'),
			meta: {title: 'Регистрация \\ Dallot'}
		},
		{
			path: '/account/profile',
			name: 'Profile',
			component: () => import('@/views/account/profile/Profile.vue')
		},
		{
			path: '/account/profile/posts',
			name: 'ProfilePosts',
			component: () => import('@/views/account/profile/Posts.vue')
		},
		{
			path: '/account/profile/personal',
			name: 'ProfilePersonal',
			component: () => import('@/views/account/profile/Personal.vue')
		},
		{
			path: '/posts',
			name: 'Posts',
			component: () => import('@/views/posts/Posts.vue'),
			meta: {title: 'Последние посты \\ Dallot'}
		},
		{
			path: '/posts/new',
			name: 'NewPost',
			component: () => import('@/views/posts/New.vue'),
			meta: {title: 'Новый пост \\ Dallot'}
		},
		{
			path: '/posts/:id',
			name: 'Post',
			props: true,
			component: () => import('@/views/posts/Post.vue')
		}
	]
})