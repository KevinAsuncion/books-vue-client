import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../components/Ping';

Vue.use(VueRouter);

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
