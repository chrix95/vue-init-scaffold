import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    alias: "/login",
    meta: { pageTitle: 'Login' }
  },
  {
    path: '/auth/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/Auth/AuthForgotPassword.vue'),
    meta: { pageTitle: 'Forgot Password' }
  },
  {
    path: '/auth/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/Auth/AuthResetPassword.vue'),
    meta: { pageTitle: 'Reset Password' }
  },
  {
    path: '/auth/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Index.vue'),
    meta: { requiresAuth: true, pageTitle: 'Dashboard' }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  store
})

router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem("setResponse");
  if (to.matched.some(record => record.meta.requiresAuth) && loggedIn == null) {
    next("/login");
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.requiresAuth ? to.meta.pageTitle : to.name}`
  window.scroll(0, 0)
  NProgress.done();
})

export default router
