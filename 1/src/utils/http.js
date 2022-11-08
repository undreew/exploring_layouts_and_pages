import axios from 'axios';
import {API_URL as BASE_URL} from '../config/environment';

// SETTING AUTHORIZATION HEADER WITH TOKEN FROM COOKIE
// axios.interceptors.request.use((config) => {
// 	if (cookies.get(AUTH_COOKIE_NAME)) {
// 		config.headers.Authorization = `Bearer ${cookies.get(AUTH_COOKIE_NAME)}`;
// 	}
// 	return config;
// });

export async function http(method, endpoint, formData) {
	if (method === 'POST') {
		const response = await axios.post(`${BASE_URL}${endpoint}`, formData);
		const {data} = response;

		return data;
	}
}
