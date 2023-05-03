import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/HomeView.vue')
        },
        {
            path: '/admin/login',
            name: 'adminLogin',
            component: () =>
                import ('@/views/LoginView.vue'),
            meta: { title: 'Đăng nhập' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () =>
                import ('@/views/NotFoundView.vue'),
            meta: { title: 'Trang không tồn tại!' }
        },
    ]
})

export default router