import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Profile from "./views/Profile.vue";
import Logout from "./views/Logout.vue";
import {fb} from './firebase';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("./views/Contact.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta:{ requiresAuth: true },
      children: [{
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "logout",
          name: "logout",
          component: Logout
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
})

export default router;