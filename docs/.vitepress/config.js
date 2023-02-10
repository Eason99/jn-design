module.exports = {
	// 网站标题
	title: "jn-design",
	// 网站描述
	description: "jn-design with vitePress",
	// 打包目录
	dest: "./jn-design",
	base: "/jn-design-deploy/",
	// 头部head
	head: [
		// 添加图标
		["link", { rel: "icon", href: "/favicon.ico" }],
	],
	// 使用插件
	plugins: [
		"@vuepress/active-header-links",
		"@vuepress/back-to-top",
		"@vuepress/medium-zoom",
		"@vuepress/nprogress",
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: "Search",
					},
					"/zh/": {
						placeholder: "搜索",
					},
				},
				search: true, //默认false
        searchMaxSuggestions: 10 // 默认是5
			},
		],
	],
	// 主题配置
	themeConfig: {
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		lastUpdated: "最后一次修改", // string | boolean
		// 启动页面丝滑滚动
		smoothScroll: true,
		siteTitle: false,
		searchMaxSuggestions: 10,
		logo: "/logo.svg", // 导航栏logo
		// 导航栏配置
		nav: [
			{ text: "君南官方网站", link: "http://www.strongdata.com.cn/" },
			{
				text: "掘金",
				link: "https://juejin.cn/user/1855631359481847/posts",
			},
			{ text: "Github", link: "https://github.com/Eason99/jn-design" },
		],
		sidebar: {
			"/": getSidebar(),
		},
	},
};

function getSidebar() {
	return [
		{
			text: "JN Design",
			children: [
				{ text: "介绍", link: "/titlePages/introduce" },
				{ text: "设计价值观", link: "/titlePages/design-values" },
			],
		},
		{
			text: "设计规范",
			children: [
				{ text: "桌面端", link: "/designStandards/pcEnd/" },
				{ text: "移动端", link: "/designStandards/mobileEnd/" },
				{ text: "可视大屏", link: "/designStandards/visualBigScreen/" },
			],
		},
		{
			text: "实践案例",
			children: [
				{ text: "桌面端", link: "/example/pcEnd/" },
				{ text: "移动端", link: "/example/mobileEnd/" },
				{ text: "可视大屏", link: "/example/visualBigScreen/" },
			],
		},
		{
			text: "实践案例",
			children: [
				{ text: "桌面端", link: "/example/pcEnd/" },
				{ text: "移动端", link: "/example/mobileEnd/" },
				{ text: "可视大屏", link: "/example/visualBigScreen/" },
			],
		},
		{
			text: "资源库",
			children: [
				{ text: "通用", link: "/resourceLib/10/" },
				{ text: "布局", link: "/resourceLib/20/" },
				{ text: "导航", link: "/resourceLib/30/" },
				{ text: "数据录入", link: "/resourceLib/40/" },
				{ text: "数据展示", link: "/resourceLib/50/" },
				{ text: "图表", link: "/resourceLib/60/" },
			],
		},
		// {
		//     text:'HTML',
		//     children: [
		//         { text: '基础', link: '/HTML/' },
		//         { text: '进阶', link: '/HTML/advanced' },
		//     ],
		//     sidebarDepth:3
		// },
		// {
		//     text:'CSS',
		//     children:[
		//         { text: '基础', link: '/CSS/' },
		//         { text: '进阶', link: '/CSS/advanced' },
		//     ]
		// },
		// {
		//   text:'Javascript',
		//   children:[
		//     { text: '基础', link: '/Javascript/' },
		//     { text: '进阶', link: '/Javascript/advanced' },
		//     { text: '进阶', link: '/Javascript/nightmare' },
		//   ]
		// },
		// {
		//   text:'Vue',
		//   children:[
		//     { text: '基础', link: '/Vue/' },
		//     { text: '进阶', link: '/Vue/advanced' },
		//   ]
		// },
		// {
		//   text:'浏览器',
		//   children:[
		//     { text: '基础', link: '/Vue/' },
		//     { text: '进阶', link: '/Vue/advanced' },
		//   ]
		// },
		// {
		//   text:'网络',
		//   children:[
		//     { text: '基础', link: '/Network/' },
		//     { text: '进阶', link: '/Network/advanced' },
		//   ]
		// },
		// {
		//   text:'安全',
		//   children:[
		//     { text: '基础', link: '/Security/' },
		//     { text: '进阶', link: '/Security/advanced' },
		//   ]
		// },
		// {
		//   text:'面经',
		//   children:[
		//     { text: '基础', link: '/Experience/' },
		//     { text: '进阶', link: '/Experience/advanced' },
		//   ]
		// },
	];
}
