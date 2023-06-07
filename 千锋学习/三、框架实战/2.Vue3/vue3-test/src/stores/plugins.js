export const piniaPlugin = (context) => {
  // console.log(context)
  context.store.title = '通过store直接添加公共属性'
  context.store.$subscribe(() => {
    console.log('store被修改')
  })
  return { secret: '通过返回对象添加公共属性' }
}
