export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Compass.html", { loader: () => import(/* webpackChunkName: "Compass.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/Compass.html.js"), meta: {"title":"罗盘"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/rpg-mv/ide.html", { loader: () => import(/* webpackChunkName: "rpg-mv_ide.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/rpg-mv/ide.html.js"), meta: {"title":"视图"} }],
  ["/rpg-mv/misc.html", { loader: () => import(/* webpackChunkName: "rpg-mv_misc.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/rpg-mv/misc.html.js"), meta: {"title":""} }],
  ["/rpg-mv/script.html", { loader: () => import(/* webpackChunkName: "rpg-mv_script.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/rpg-mv/script.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/rpg-mv/start.html", { loader: () => import(/* webpackChunkName: "rpg-mv_start.html" */"C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/new_compass/vuepress-starter/docs/.vuepress/.temp/pages/rpg-mv/start.html.js"), meta: {"title":"你好，世界"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
