import axios from 'axios'
import NProgress from 'nprogress'
import { message } from "ant-design-vue";

export const UNPROCESSABLE_ENTITY = 422;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const BAD_REQUEST = 400;
export const OK = 200;

const service = axios.create({
    timeout: 30000
})

//请求拦截器
service.interceptors.request.use(config => {
    NProgress.start();
    const token = window.localStorage.getItem('token');
    if (!token && config.url !== '/user/login') {
        NProgress.done();
        //跳到登录页面
        this.$router.push('/login');
        return false;
    }
    if (config.url !== '/user/login') {
        config.headers.Authorization = `Bearer ${token === 'null' ? "" : token}`;
    }
    return config;
}, error => {
    Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(
    response => {
        NProgress.done();
        const { data } = response;
        if (data.status === UNPROCESSABLE_ENTITY) {
            message.warning('无效的用户名或密码');
            return;
        } else if (data.status === BAD_REQUEST) {
            message.warning('发生错误，请检查输入的参数');
            return;
        }
        return data;
    }, error => {
        NProgress.done();
        message.error('异常：' + error);
    }
)

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        service.get(url, { params: params }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        service.post(url, data).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        service.put(url, data).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}
