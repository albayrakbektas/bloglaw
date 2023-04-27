import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/user/pages/Home/HomeView.vue";
import AdminView from "@/views/admin/pages/AdminView.vue";
import AdminDashboard from "@/views/admin/pages/AdminDashboard.vue";
import ServicesView from "@/views/user/pages/Services/ServicesView.vue";
import ServiceView from "@/views/user/pages/Services/ServiceView.vue";
import EmploymentView from "@/views/user/pages/Employments/EmploymentView.vue";
import EmploymentDetail from "@/views/user/pages/Employments/EmploymentDetail.vue";
import { auth } from "@/services/firebase";

async function isAuthenticated() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(!!user);
    });
  });
}

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
    path: "/is-alanlarimiz",
    name: "EmploymentView",
    component: EmploymentView,
  },
  {
    path: "/is-alanlarimiz/:id",
    name: "EmploymentDetail",
    component: EmploymentDetail,
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
        meta: { requiresAuth: true },
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
        path: "carousels",
        name: "carousels.index",
        component: () => import("@/views/admin/cruds/Carousels/CrudIndex.vue"),
        meta: { title: "cruds.carousel.title" },
      },
      {
        path: "carousel/create",
        name: "carousel.create",
        component: () => import("@/views/admin/cruds/Carousels/CrudCreate.vue"),
        meta: { title: "cruds.carousel.title" },
      },
      {
        path: "carousel/:id",
        name: "carousel.show",
        component: () => import("@/views/admin/cruds/Carousels/CrudShow.vue"),
        meta: { title: "cruds.carousel.title" },
      },
      {
        path: "carousel/:id/edit",
        name: "carousel.edit",
        component: () => import("@/views/admin/cruds/Carousels/CrudEdit.vue"),
        meta: { title: "cruds.carousel.title" },
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
        path: "slider",
        name: "slider.create",
        component: () => import("@/views/admin/cruds/Slider/CrudCreate.vue"),
        meta: { title: "cruds.slider.title" },
      },
      {
        path: "profile",
        name: "profile.create",
        component: () => import("@/views/admin/cruds/Profile/CrudCreate.vue"),
        meta: { title: "cruds.admin.title" },
      },
      {
        path: "settings",
        name: "settings",
        component: () =>
          import("@/views/admin/pages/Settings/AdminSettings.vue"),
        meta: { title: "cruds.admin.title" },
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

// function isAuthenticated() {
//   // Replace this with your actual authentication logic
//   const token = store.getters["Auth/bearerToken"];
//   return !!token;
// }
router.beforeEach(async (to, from, next) => {
  const loggedIn = await isAuthenticated();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({ name: "AdminLogin", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
