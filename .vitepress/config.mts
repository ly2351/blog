import { defineConfig } from 'vitepress'
import nav from './nav.mjs'

import { generateSidebar } from './generateSidebar';

const sidebar  = generateSidebar('./docs');

console.log(sidebar);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "摘星楼上",
  description: "个人知识库",
  srcDir: '.',
  metaChunk:true,
  themeConfig: {
    logo: '/favicon.png',
    lastUpdatedText: '更新时间',
    outline: 'deep', // 递归显示多层级
    outlineTitle: '大纲',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/muchuang1024' }],
    footer: {
      message: '千山慕雪',
      copyright: 'Copyright © 2024-present 寒江孤影'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
    }
  },
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  }
})
