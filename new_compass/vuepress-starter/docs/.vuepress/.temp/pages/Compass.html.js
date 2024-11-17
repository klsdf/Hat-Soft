import comp from "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/Compass.html.vue"
const data = JSON.parse("{\"path\":\"/Compass.html\",\"title\":\"罗盘\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"RPG Maker MV\",\"slug\":\"rpg-maker-mv\",\"link\":\"#rpg-maker-mv\",\"children\":[]},{\"level\":3,\"title\":\"AI\",\"slug\":\"ai\",\"link\":\"#ai\",\"children\":[]},{\"level\":3,\"title\":\"前端\",\"slug\":\"前端\",\"link\":\"#前端\",\"children\":[]}],\"git\":{\"updatedTime\":1731844556000,\"contributors\":[{\"name\":\"Rose-Butterfly\",\"email\":\"rose.butterfly.0330@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Rose-Butterfly\"}]},\"filePathRelative\":\"Compass.md\"}")
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
