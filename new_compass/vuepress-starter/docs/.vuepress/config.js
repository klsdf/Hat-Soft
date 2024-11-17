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
            text: '视图',
            link: 'ide.md'
          },
          {
            text: '杂项',
            link: 'misc.md'
          },
        ],
      },
      {
        text: 'Bilibili',
        link: 'https://space.bilibili.com/36163336',
      },
    ],
  }),

  bundler: viteBundler(),
})
