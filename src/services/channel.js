
const url = '';
import { fetch, post } from '../utils/request'

/**
 * 
 * @param {JSON | params} params 
 */
export const query = async function (params) {
    return new Promise((resolve, reject) => {
        fetch('/channel/query', params).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

/**
 * 
 * @param {JSON} params 
 */
export const save = function (params) {
    return new Promise((resolve, reject) => {
        post('/channel/save', params).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })

}

/**
 * 
 * @param {JSON} params 
 */
export const del = function (params) {

}

export const edit = function (params) {

}