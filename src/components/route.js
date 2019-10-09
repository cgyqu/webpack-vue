import VueRouter from 'vue-router'

const routes = [{
        path: '/vue2',
        component: () => import('../views/Vue2.vue')
    }, {
        path: '/vue1',
        component: () => import('../views/Vue1.vue')
    },
    {
        path: '/vue5',
        component: () => import('../views/Vue5.vue')
    }
];

const router = new VueRouter({
    routes
})

export default () => {
    return router;
}