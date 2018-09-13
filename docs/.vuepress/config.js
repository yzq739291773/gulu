module.exports = {
    base: '/gulu/',
    title: 'Face UI',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                ]
            },
        ]
    }
}