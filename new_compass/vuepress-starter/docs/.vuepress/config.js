import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Hat Soft',
  description: '帽子社资料集',

  theme: defaultTheme({
    logo: 'Logo.png',

    navbar: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '总类',
        link: '/Compass'
      },
      {
        text: 'RPG-MV',
        prefix: '/rpg-mv/',
        children: [
          {
            text: '开始',
            link: 'start'
          },
          {
            text: '视图',
            link: 'ide'
          },
          {
            text: '脚本',
            link: 'script'
          },
          {
            text: '杂项',
            link: 'misc'
          },
          {
            text: 'API速查',
            link: 'api'
          }
        ],
      },
      {
        text: 'BiliBili',
        link: 'https://space.bilibili.com/36163336',
      },
    ],
  }),

  bundler: viteBundler(),
})
