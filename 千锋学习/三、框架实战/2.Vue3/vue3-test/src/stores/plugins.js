export const piniaPlugin = (context) => {
  // console.log(context)
  context.store.title = '通过store直接添加公共属性'

  // 保存 pinia 到本地
  if (context.options.save === true) {
    if (sessionStorage.getItem('count')) context.store.count = +sessionStorage.getItem('count')
    context.store.$subscribe((mutation, state) => {
      console.log(mutation, state)
      sessionStorage.setItem('count', state.count)
    })
  }

  return { secret: '通过返回对象添加公共属性' }
}
