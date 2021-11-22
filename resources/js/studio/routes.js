export default [
    {
        path: '/',
        name: 'home',
        component: require('./screens/HomeScreen.vue').default,
    },
    {
        path: '/tags',
        name: 'tags',
        component: require('./screens/TagScreen.vue').default,
    },
    {
        path: '/tags/:slug',
        name: 'tag-posts',
        component: require('./screens/TagPostsScreen.vue').default,
    },
    {
        path: '/topics',
        name: 'topics',
        component: require('./screens/TopicScreen.vue').default,
    },
    {
        path: '/topics/:slug',
        name: 'topic-posts',
        component: require('./screens/TopicPostsScreen.vue').default,
    },
    {
        path: '/:identifier',
        name: 'user',
        component: require('./screens/UserScreen.vue').default,
    },
    {
        path: '/:identifier/:slug',
        name: 'post',
        component: require('./screens/PostScreen.vue').default,
    },
    {
        path: '*',
        name: 'catch-all',
        redirect: '/',
    },
]
