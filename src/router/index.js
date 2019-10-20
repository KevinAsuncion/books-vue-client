import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../components/Ping';
import Editor from '../components/Editor';

Vue.use(VueRouter);

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
