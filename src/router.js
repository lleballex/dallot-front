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
			path: '/account/profile',
			name: 'Profile',
			component: () => import('@/views/account/Profile.vue')
		},
		{
			path: '/account/login',
			name: 'Login',
			component: () => import('@/views/account/Login.vue')
		},
		{
			path: '/account/register',
			name: 'Register',
			component: () => import('@/views/account/Register.vue')
		},
		{
			path: '/posts',
			name: 'Posts',
			component: () => import('@/views/posts/Posts.vue')
		},
		{
			path: '/posts/new',
			name: 'NewPost',
			component: () => import('@/views/posts/New.vue')
		},
		{
			path: '/posts/:id',
			name: 'Post',
			props: true,
			component: () => import('@/views/posts/Post.vue')
		}
	]
})