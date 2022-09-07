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
    // sidebar: [''],
    logo: null,
    editLink: true,
    contributors: true,
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
