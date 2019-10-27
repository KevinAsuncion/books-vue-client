import Vue from 'vue';
import VueRouter from 'vue-router';
import BookNotes from '../components/BookNotes';
import Editor from '../components/Editor';
import BookNoteDetail from '../components/BookNoteDetail';
import LandingPage from '../components/LandingPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage
  },
  {
    path: '/booknotes',
    name: 'Book Notes',
    component: BookNotes,
  },
  {
    path: '/booknotes/:id/edit',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/booknotes/new',
    name: 'New Book Note',
    component: Editor,
  },
  {
    path: '/booknotes/:id/',
    name: 'Book Note Detail',
    component: BookNoteDetail,
  },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
