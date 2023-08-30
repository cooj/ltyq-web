import { createRouter, defineEventHandler, useBase } from 'h3'
import { setAdminCreate, setAdminDelete, setAdminUpdate } from '~/server/controller/admin'
import { getMenuList } from '~/server/controller/menu'

const router = createRouter()

/**
 * 获取菜单列表
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return getMenuList(event)
}))

/**
 * 添加菜单
 */
router.use('/add', defineEventHandler(async (event) => {
    return setAdminCreate(event)
}))

/**
 * 修改菜单
 */
router.use('/edit', defineEventHandler(async (event) => {
    return setAdminUpdate(event)
}))

/**
 * 删除菜单
 */
router.use('/delete', defineEventHandler(async (event) => {
    return setAdminDelete(event)
}))

export default useBase('/api/menu', router.handler)
