import { createRouter, createWebHistory } from 'vue-router'
//import { useAuthStore } from '@/stores/account'

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
            path: '/the-loai',
            name: 'category',
            component: () =>
                import ('@/views/CategoryView.vue'),
            meta: { title: 'Chọn thể loại phim' }
        },
        {
            path: '/the-loai/:slug',
            name: 'categoryslug',
            component: () =>
                import ('@/views/CategoryBySlugView.vue'),
            meta: { title: 'Thể loại' }
        },
        {
            path: '/quoc-gia',
            name: 'country',
            component: () =>
                import ('@/views/CountryView.vue'),
            meta: { title: 'Chọn quốc gia sản xuất phim' }
        },
        {
            path: '/quoc-gia/:slug',
            name: 'countryslug',
            component: () =>
                import ('@/views/CountryBySlugView.vue'),
            meta: { title: 'Quốc gia' }
        },
        {
            path: '/phim/:id/:slug',
            name: 'detail',
            component: () =>
                import ('@/views/FilmDetailView.vue'),
            meta: { title: 'Chi tiết phim' }
        },
        {
            path: '/xem-phim/:id/:slug',
            name: 'play',
            component: () =>
                import ('@/views/PlayView.vue'),
            meta: { title: 'Chi tiết phim' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () =>
                import ('@/views/NotFoundView.vue'),
            meta: { title: 'Trang không tồn tại!' }
        },
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('@/views/AdminView.vue'),
            meta: { title: 'Quản trị' },
            children: [{
                path: '/films',
                name: 'films',
                children: [{
                        path: '/create',
                        name: 'createFilm',
                    },
                    {
                        path: '/edit/:id',
                        name: 'editFilm',
                    },
                    {
                        path: '/delete/:id',
                        name: 'deleteFilm',
                    },
                ]
            }]
        },
    ]
})

export default router