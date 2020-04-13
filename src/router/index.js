import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import * as types from '../store/types';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/A',
    },
    {
      path: '/A',
      name: 'A',
      component: () => import('../views/A.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/A/B',
      name: 'B',
      component: () => import('../views/B.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/A/B/C',
      name: 'C',
      component: () => import('../views/C.vue'),
    },
    {
      path: '/D',
      name: 'D',
      component: () => import('../views/D.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.keepAlive) {
    store.commit(types.ADD_KEEP_ALIVE_COMP, to.name);
  }
  next();
});

export default router;
