module.exports = {
    title: 'Hello VuePress(can change)',
    description: 'Just playing around',
    base: '/VuePress_tut/',
    themeConfig: 
    {
        sidebar: 
        [
            '/',
            {
                title: 'Catagory1_nest',
                path: '/Catagory_1/',
                children: 
                [
                    '/Catagory_1/test1.md',
                    '/Catagory_1/test2.md',
                ]
            },
            '/Catagory_2/',
        ]
    }
}