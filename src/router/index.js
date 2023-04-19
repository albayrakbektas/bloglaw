import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/user/pages/Home/HomeView.vue";
import AdminView from "@/views/admin/pages/AdminView.vue";
import AdminDashboard from "@/views/admin/pages/AdminDashboard.vue";
import ServicesView from "@/views/user/pages/Services/ServicesView.vue";
import ServiceView from "@/views/user/pages/Services/ServiceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hakkimizda",
    name: "AboutView",
    component: () =>
      import(
        /* webpackChunkName: "hakkimizda" */ "../views/user/pages/About/AboutView.vue"
      ),
  },
  {
    path: "/iletisim",
    name: "ChannelsView",
    component: () =>
      import(
        /* webpackChunkName: "iletisim" */ "../views/user/pages/Channels/ChannelsView.vue"
      ),
  },
  {
    path: "/hizmetlerimiz",
    name: "ServicesMain",
    component: ServicesView,
  },
  {
    path: "/hizmetlerimiz/:id",
    name: "ServiceView",
    component: ServiceView,
  },
  {
    path: "/login",
    name: "AdminLogin",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../views/admin/pages/login/AdminLogin.vue"
      ),
  },
  {
    path: "/hukuki-makaleler",
    name: "BlogView",
    component: () =>
      import(
        /* webpackChunkName: "blog view" */ "../views/user/pages/Blog/BlogView.vue"
      ),
  },
  {
    path: "/hukuki-makaleler/:id",
    name: "BlogDetail",
    component: () =>
      import(
        /* webpackChunkName: "blog view" */ "../views/user/pages/Blog/BlogDetail.vue"
      ),
  },
  {
    path: "/admin",
    component: AdminView,
    meta: { requiresAuth: true },
    children: [
      //pages
      {
        path: "/",
        component: AdminDashboard,
      },
      {
        path: "channels",
        name: "channels",
        component: () => import("@/views/admin/pages/AdminChannels.vue"),
        meta: { title: "cruds.channels.title" },
      },
      // cruds
      {
        path: "blogs",
        name: "blogs.index",
        component: () => import("@/views/admin/cruds/Blogs/CrudIndex.vue"),
        meta: { title: "cruds.blog.title" },
      },
      {
        path: "blog/create",
        name: "blog.create",
        component: () => import("@/views/admin/cruds/Blogs/CrudCreate.vue"),
        meta: { title: "cruds.hotel.title" },
      },
      {
        path: "blog/:id",
        name: "blog.show",
        component: () => import("@/views/admin/cruds/Blogs/CrudShow.vue"),
        meta: { title: "cruds.hotel.title" },
      },
      {
        path: "blog/:id/edit",
        name: "blog.edit",
        component: () => import("@/views/admin/cruds/Blogs/CrudEdit.vue"),
        meta: { title: "cruds.blog.title" },
      },
      {
        path: "about",
        name: "about.index",
        component: () => import("@/views/admin/cruds/About/CrudIndex.vue"),
        meta: { title: "cruds.about.title" },
      },
      {
        path: "about/create",
        name: "about.create",
        component: () => import("@/views/admin/cruds/About/CrudCreate.vue"),
        meta: { title: "cruds.about.title" },
      },
      {
        path: "about/edit",
        name: "about.edit",
        component: () => import("@/views/admin/cruds/About/CrudEdit.vue"),
        meta: { title: "cruds.about.title" },
      },
      {
        path: "staff",
        name: "staff.index",
        component: () => import("@/views/admin/cruds/Staffs/CrudIndex.vue"),
        meta: { title: "cruds.blog.title" },
      },
      {
        path: "staff/create",
        name: "staff.create",
        component: () => import("@/views/admin/cruds/Staffs/CrudCreate.vue"),
        meta: { title: "cruds.hotel.title" },
      },
      {
        path: "staff/:id",
        name: "staff.show",
        component: () => import("@/views/admin/cruds/Staffs/CrudShow.vue"),
        meta: { title: "cruds.hotel.title" },
      },
      {
        path: "staff/:id/edit",
        name: "staff.edit",
        component: () => import("@/views/admin/cruds/Staffs/CrudEdit.vue"),
        meta: { title: "cruds.blog.title" },
      },
      {
        path: "services",
        name: "services.index",
        component: () => import("@/views/admin/cruds/Services/CrudIndex.vue"),
        meta: { title: "cruds.service.title" },
      },
      {
        path: "service/create",
        name: "service.create",
        component: () => import("@/views/admin/cruds/Services/CrudCreate.vue"),
        meta: { title: "cruds.service.title" },
      },
      {
        path: "service/:id",
        name: "service.show",
        component: () => import("@/views/admin/cruds/Services/CrudShow.vue"),
        meta: { title: "cruds.service.title" },
      },
      {
        path: "service/:id/edit",
        name: "service.edit",
        component: () => import("@/views/admin/cruds/Services/CrudEdit.vue"),
        meta: { title: "cruds.service.title" },
      },
      {
        path: "employments",
        name: "employments.index",
        component: () =>
          import("@/views/admin/cruds/Employments/CrudIndex.vue"),
        meta: { title: "cruds.employment.title" },
      },
      {
        path: "employment/create",
        name: "employment.create",
        component: () =>
          import("@/views/admin/cruds/Employments/CrudCreate.vue"),
        meta: { title: "cruds.employment.title" },
      },
      {
        path: "employment/:id",
        name: "employment.show",
        component: () => import("@/views/admin/cruds/Employments/CrudShow.vue"),
        meta: { title: "cruds.employment.title" },
      },
      {
        path: "employment/:id/edit",
        name: "employment.edit",
        component: () => import("@/views/admin/cruds/Employments/CrudEdit.vue"),
        meta: { title: "cruds.employment.title" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// import Vue from 'vue'
// import VueMeta from 'vue-meta'
// import VueRouter from 'vue-router'
// import HomeView from "@/views/user/pages/Home/HomeView.vue";
// import AboutView from "@/views/user/pages/About/ChannelsView.vue";
// import ServicesView from "@/views/user/pages/Employments/EmploymentView.vue";
// import BlogView from "@/views/user/pages/Blog/BlogView.vue";
// import AdminView from "@/views/admin/pages/AdminView.vue";
// import AdminDashboard from "@/views/admin/pages/AdminDashboard.vue";
//
// Vue.use(VueRouter)
// Vue.use(VueMeta)
//
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView,
//     meta: {
//       title: 'Ana Sayfa - My Website',
//       description: 'Sitemize hoş geldiniz!'
//     }
//   },
//   {
//     path: '/hakkimizda',
//     name: 'about',
//     component: AboutView,
//     meta: {
//       title: 'Hakkımızda - My Website',
//       description: 'Şirketimiz hakkında daha fazla bilgi edinin.'
//     }
//   },
//   {
//     path: '/hizmetlerimiz',
//     name: 'services',
//     component: ServicesView,
//     meta: {
//       title: 'Hizmetlerimiz - My Website',
//       description: 'Sunduğumuz hizmetler hakkında daha fazla bilgi edinin.'
//     }
//   },
//   {
//     path: '/blog/:id',
//     name: 'blog',
//     component: BlogView,
//     meta: {
//       title: 'Blog Yazısı - My Website',
//       description: 'Bu blog yazısını okuyun.'
//     }
//   },
//   {
//     path: '/admin',
//     component: AdminView,
//     meta: {
//       requiresAuth: true,
//       title: 'Yönetici Paneli - My Website',
//       description: 'Yönetici paneline hoş geldiniz!'
//     },
//     children: [
//       {
//         path: '',
//         name: 'admin.dashboard',
//         component: AdminDashboard,
//         meta: {
//           requiresAuth: true,
//           title: 'Yönetici Paneli - My Website',
//           description: 'Yönetici paneline hoş geldiniz!'
//         }
//       },
//       {
//         path: 'blogs',
//         name: 'blog.index',
//         component: () => import('@/views/admin/cruds/Blogs/CrudIndex.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Blog Yazıları - My Website',
//           description: 'Sistemdeki tüm blog yazılarını görüntüleyin.'
//         }
//       },
//       {
//         path: 'blog/create',
//         name: 'blog.create',
//         component: () => import('@/views/admin/cruds/Blogs/CrudCreate.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Blog Yazısı Ekle - My Website',
//           description: 'Yeni bir blog yazısı ekleyin.'
//         }
//       },
//       {
//         path: 'blogs/:id',
//         name: 'blogs.show',
//         component: () => import('@/views/admin/cruds/Blogs/CrudShow.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Blog Yazısı - My Website',
//           description: 'Blog yazısını görüntüleyin.'
//         }
//       },
//       {
//         path: 'blogs/:id/edit',
//         name: 'blogs.edit',
//         component: () => import('@/views/admin/cruds/Blogs/CrudEdit.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Blog Yazısı Düzenle - My Website',
//           description: 'Blog yazısını düzenleyin.'
//         }
//       },
//       {
//         path: 'about',
//         name: 'admin.about.index',
//         component: () => import('@/views/admin/cruds/About/CrudIndex.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Hakkımızda Sayfası - My Website',
//           description: 'Hakkımızda sayfasını düzenleyin.'
//         }
//       },
//       {
//         path: 'about/create',
//         name: 'admin.about.create',
//         component: () => import('@/views/admin/cruds/About/CrudCreate.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Hakkımızda Sayfası Ekle - My Website',
//           description: 'Yeni bir hakkımızda sayfası ekleyin.'
//         }
//       },
//       {
//         path: 'about/edit',
//         name: 'admin.about.edit',
//         component: () => import('@/views/admin/cruds/About/CrudEdit.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Hakkımızda Sayfasını Düzenle - My Website',
//           description: 'Hakkımızda sayfasını düzenleyin.'
//         }
//       },
//       {
//         path: 'staff',
//         name: 'admin.staff.index',
//         component: () => import('@/views/admin/cruds/Staffs/CrudIndex.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Çalışanlar - My Website',
//           description: 'Sistemdeki tüm çalışanları görüntüleyin.'
//         }
//       },
//       {
//         path: 'staff/create',
//         name: 'admin.staff.create',
//         component: () => import('@/views/admin/cruds/Staffs/CrudCreate.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Çalışan Ekle - My Website',
//           description: 'Yeni bir çalışan ekleyin.'
//         }
//       },
//       {
//         path: 'staff/:id',
//         name: 'admin.staff.show',
//         component: () => import('@/views/admin/cruds/Staffs/CrudShow.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Çalışan - My Website',
//           description: 'Çalışanı görüntüleyin.'
//         }
//       },
//       {
//         path: 'staff/:id/edit',
//         name: 'admin.staff.edit',
//         component: () => import('@/views/admin/cruds/Staffs/CrudEdit.vue'),
//         meta: {
//           requiresAuth: true,
//           title: 'Çalışan Düzenle - My Website',
//           description: 'Çalışanı düzenleyin.'
//         }
//       }
//     ]
//   },
//   {
//     path: '',
//     name: 'NotFound',
//     component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
//     meta: {
//       title: 'Sayfa Bulunamadı - My Website',
//       description: 'Aradığınız sayfa bulunamadı.'
//     }
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// router.beforeEach((to, from, next) => {
//   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
//   if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
//
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.description);
//   if (nearestWithMeta) {
//     const description = nearestWithMeta.meta.description;
//     document.querySelector('meta[name="description"]').setAttribute('content', description);
//   }
//
//   next();
// });
//
// export default router
