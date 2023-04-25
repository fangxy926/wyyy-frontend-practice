import { isEmpty } from '@/utils/ToolUtil'
/**
 * 存储到session或localStorage
 */
export const setStorage = (params) => {
    const {
        name,
        content,
        type
    } = params
    const obj = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    if (type === 'session') window.sessionStorage.setItem(name, JSON.stringify(obj))
    else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取session或localStorage
 */
export const getStorage = (params) => {
    const {
        name
    } = params
    let obj = {}
    let content
    obj = window.localStorage.getItem(name)
    if (isEmpty(obj)) obj = window.sessionStorage.getItem(name)
    if (isEmpty(obj)) return
    obj = JSON.parse(obj)
    if (obj.dataType === 'string') {
        content = obj.content
    } else if (obj.dataType === 'number') {
        content = Number(obj.content)
    } else if (obj.dataType === 'boolean') {
        content = this.eval(obj.content)
    } else if (obj.dataType === 'object') {
        content = obj.content
    }
    return content
}
/**
 * 删除session和localStorage
 */
export const removeStorage = (params) => {
    const {
        name
    } = params
    window.localStorage.removeItem(name)
    window.sessionStorage.removeItem(name)
}
