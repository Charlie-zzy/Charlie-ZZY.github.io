import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Charlie's VuePress",
  description: '年轻人的第一个 VuePress',
  theme: defaultTheme({
    navbar: [
      // // 1.NavbarItem
      // {
      //   text: 'Foo',
      //   link: '/foo/',
      // },
      // // 2.NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
      // // 3.字符串
      // '/legacy/',
    ],
    sidebar: {
      '/': [''],
      '/posts/legacy': [
        {
          text: '博客归档',
          children: [
            // '/posts/legacy/2019年度总结.md',
            '/posts/legacy/2020年度总结（上）.md',
            '/posts/legacy/DAILY⊕报.md',
            '/posts/legacy/TACA白给记.md',
            '/posts/legacy/一道题.md',
            '/posts/legacy/从零开始搭建博客.md',
            '/posts/legacy/关于RobotMaster青少年挑战赛.md',
            '/posts/legacy/瞎整的音乐.md',
            '/posts/legacy/神奇的3.md',
            '/posts/legacy/联系方式.md',
            '/posts/legacy/育才体系图.md',
            '/posts/legacy/语录大全.md',
            '/posts/legacy/颓废专用游戏.md',
          ],
        },
      ],
    },
    logo: null,
    contributors: false,
    lastUpdatedText: '最近更新',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['未找到页面'],
    backToHome: '回到首页',
    openInNewWindow: '在新标签页打开',
    toggleColorMode: '切换页面颜色',
    toggleSidebar: '切换侧边栏',
    selectLanguageText: '选择语言',
    editLinkText: '编辑此页',
    contributorsText: '此页贡献者',
  }),
})
