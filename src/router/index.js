import Vue from 'vue';
import VueRouter from 'vue-router';
import BookNotes from '../components/BookNotes';
import Editor from '../components/Editor';

Vue.use(VueRouter);

const routes = [
  {
    path: '/booknotes',
    name: 'Book Notes',
    component: BookNotes,
  },
  {
    path: '/edit',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/newbooknote',
    name: 'New Book Note',
    component: Editor,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
