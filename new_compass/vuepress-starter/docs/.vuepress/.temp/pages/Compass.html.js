import comp from "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/component_notes/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/Compass.html.vue"
const data = JSON.parse("{\"path\":\"/Compass.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello?\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"Compass.md\"}")
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
