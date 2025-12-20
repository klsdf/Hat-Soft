import comp from "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"heroImage\":\"Logo.png\",\"actions\":[{\"text\":\"让我们开始\",\"link\":\"Compass\",\"type\":\"primary\"},{\"text\":\"官网\",\"link\":\"https://hat-soft.top/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"你好\",\"details\":\"世界\"},{\"title\":\"占位\",\"details\":\"占位内容\"},{\"title\":\"占位\",\"details\":\"占位内容\"},{\"title\":\"占位\",\"details\":\"占位内容\"},{\"title\":\"占位\",\"details\":\"占位内容\"},{\"title\":\"占位\",\"details\":\"占位内容\"}],\"footer\":\"Hello? Welcome!\"},\"headers\":[],\"git\":{\"updatedTime\":1731851225000,\"contributors\":[{\"name\":\"Rose-Butterfly\",\"email\":\"rose.butterfly.0330@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Rose-Butterfly\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
