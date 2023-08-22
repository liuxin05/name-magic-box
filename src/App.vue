<template>
  <div id="app">
    <!-- <router-view v-if="!keepAlive && isRouterAlive" /> -->
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
// 添加meta标签，禁止屏幕缩放
const meta = document.createElement('meta')
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
document.getElementsByTagName('head')[0].appendChild(meta)
document.title = '取名字'

export default {
  name: 'App',
  components: {},
  // 以vue2为例
  mounted () {
    //为pc则用iframe把移动端页面显示到页面中间
    let userAgentInfo = navigator.userAgent
    let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod")
    //pc
    if (
      !Agents.some(item => userAgentInfo.toLowerCase().includes(item.toLowerCase())) &&
      !(self.frameElement && self.frameElement.tagName == "IFRAME")
    ) {
      let ifrTag = document.createElement("iframe")
      document.body.innerHTML = ""
      ifrTag.setAttribute("src", location.href)
      let styleObj = {
        width: "480px",
        height: "920px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }
      Object.entries(styleObj).forEach(([key, value]) => {
        ifrTag.style[key] = value
      })
      document.body.append(ifrTag)
    }
  }

}
</script>

<style>
</style>