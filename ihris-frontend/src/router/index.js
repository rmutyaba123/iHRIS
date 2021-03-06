import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home.vue"
import Static from "../views/static-page.vue"
import HomeNav from "../views/home-nav.vue"
//import Test from "../views/test.vue"
//import mhero from "../views/mhero/mhero.vue"
//import contactGroups from "../views/mhero/contact-groups.vue"
// import store from "@/store";

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "home",
    components: {
      default: Home,
      homeNav: HomeNav
    },
    props: { default: { id: "page-home", blankOnErr: true } }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/auth/reset-password.vue'),
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: () => import('../views/auth/change-password.vue')
  },
  {
    path: '/page/blockContacts',
    name: 'mhero',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/blockContacts.vue")
  },
  {
    path: '/page/unblockContacts',
    name: 'mhero',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/unblockContacts.vue")
  },
  {
    path: '/page/mhero',
    name: 'mhero',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/mhero.vue")
  },
  {
    path: '/page/mhero-scheduled-message',
    name: 'mhero-scheduled-message',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/mhero-scheduled-message.vue")
  },
  {
    path: '/page/contact-groups',
    name: 'contact-groups',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/contact-groups.vue")
  },
  {
    path: '/page/mhero-reports',
    name: 'mhero-reports-base',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/mhero-reports-base.vue")
  },
  {
    path: '/report/:report',
    name: 'mhero-reports',
    component: () => import( /* webpackChunkName: "mhero" */ "../views/mhero/mhero-reports.vue")
  },
  /*
  {
    path: "/test/:id",
    name: "test",
    component: Test
  },
  */
  {
    path: "/static/:id",
    name: "static",
    //component: () => import( /* webpackChunkName: "static" */ "../views/static-page.vue")
    component: Static
  },
  //{
  //path: "/resource/:type/:page/:id?",
  //name: "resource_page",
  //// route level code-splitting
  //// this generates a separate chunk (about.[hash].js) for this route
  //// which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "resource" */ "../views/fhir-page-resource.vue")
  //},
  {
    path: "/resource/view/:page/:id",
    name: "resource_view",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "resource" */ "../views/fhir-page-view.vue")
  },
  {
    path: "/resource/search/:page",
    name: "resource_search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "resource" */ "../views/fhir-page-search.vue")
  },
  {
    path: "/resource/report/:report",
    name: "resource_report",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "report" */ "../views/fhir-report.vue")
  },
  {
    path: "/resource/add/:page",
    name: "resource_add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "resource-add" */ "../views/fhir-page-add.vue")
  },
  {
    path: "/questionnaire/:questionnaire/:page",
    name: "questionnaire",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "questionnaire" */ "../views/fhir-page-questionnaire.vue")
  },
  {
    path: "/dashboard/:id",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "dashboard" */ "../views/kibana-dashboard.vue")
  },
  {
    path: "/bulk-registration",
    name: "bulk_registration",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "questionnaire" */ "../views/bulk-registration")
  },    {
    path: "/adminUnit/by-location",
    name: "by-location",
    component: () =>
        import(
            /* webpackChunkName: "questionnaire" */ "../views/admin-unit-by-location"
            ),
  },
  {
    path: "/adminUnit/by-reporting",
    name: "by-reporting",
    component: () =>
        import(
            /* webpackChunkName: "questionnaire" */ "../views/admin-unit-by-reporting"
            ),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//     if (!store.state.user.loggedin) {
//       if (to.path !== '/' && to.path !== '/reset-password' &&to.path !== '/change-password') {
//         next({
//           path: '/'
//         })
//       }else {
//         next()
//       }
//     } else {
//       next()
//     }
// })

export default router
