import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Eslint通关小册',
  description: 'Eslint 0-1',
  lastUpdated: true,
  base:"/learn-eslint/",

  themeConfig: {
    repo: 'sudongyuer/learn-eslint',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Start', link: '/guide', activeMatch: '^/$|^/guide/' },
      {
        text: 'About ME',
        link: 'https://github.com/sudongyuer'
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '小册简介🍁',
       link:'/packages/learn-eslint-doc/docs/guide/guide/小册简介'
    },
    {
      text: '初识Eslint',
       link:'../guide/初识Eslint'
    }
  ]
}
