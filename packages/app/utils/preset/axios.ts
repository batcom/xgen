import { message } from 'antd'
import axios from 'axios'
import store from 'store2'

import { history } from '@umijs/max'
import { getToken } from '@yaoapp/utils'

axios.interceptors.request.use((config) => {
	return {
		...config,
		headers: {
			...config['headers'],
			authorization: getToken()
		}
	}
})

axios.interceptors.response.use(
	(response) => response.data,
	(error) => {
		const res = error.response
		const data = res.data

		if (data && data.message) {
			message.error(data.message)
		} else {
			if (res.status && res.statusText)
				message.error(`${res.status} : ${res.statusText}`)
		}

		if (data?.code === 401 || data?.code === 403) {
			const login_url = store.get('login_url')

			if (login_url) history.push(login_url)
		}

		return Promise.reject(error)
	}
)
