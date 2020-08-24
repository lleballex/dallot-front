import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import axios from 'axios'
import Loading from '@/components/Loading.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBug, faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faHeading, faCode, faListUl, faImage as fasImage } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp, faChevronDown, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'
import { faEye, faCommentAlt, faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'
import { faDotCircle, faImage as farImage } from '@fortawesome/free-regular-svg-icons'
import '@/assets/css/index.css'

library.add(faBug, faCheck, faTimes, faTrash)
library.add(faPlus, faHeading, faCode, faListUl, fasImage)
library.add(faChevronUp, faChevronDown, fasBookmark)
library.add(faEye, faCommentAlt, farBookmark)
library.add(faDotCircle, farImage)

Vue.component('icon', FontAwesomeIcon)

Vue.component('Loading', Loading)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/'

axios.interceptors.response.use((response) => ({
	data: response.data,
	status: response.status
}), function(error) {
	console.log('ERROR: ', error.response ? error.response : error)

	try {
		var data = {
			message: 'Ой-ой! При загрузке данных что-то пошло не так',
			detail: error.response.data.detail,
			status: error.response.status,
			data: error.response.data
		}
	} catch(e) {
		data = {
			message: `Ой-ой! Что-то пошло вообще не так`,
			detail: `Ой-ой! Что-то пошло вообще не так`,
			status: 500
		}
	}

	return Promise.reject(data)
})

router.afterEach((to) => {
	document.title = to.meta.title ? `${to.meta.title} / Dallot` : 'Dallot'
})

router.beforeEach((to, from, next) => {
	if(to.path[to.path.length - 1] == '/') next()
	else next({path: `${to.path}/`, query: to.query})
})

var auth_token = localStorage.getItem('auth_token')
if(auth_token) {
	store.dispatch('checkAuthToken', {
		token: auth_token
	}).then(result => {
		new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app')

		if(!result.success) {
			localStorage.removeItem('auth_token')
			store.commit('showNotification', {
				message: result.message,
				type: 'error'
			})
		}
	})
} else {
	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app')
}
