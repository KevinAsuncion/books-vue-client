import Vue from 'vue';
import VueRouter from 'vue-router';
import BookNotes from '../components/BookNotes';
import BookNoteDetail from '../components/BookNoteDetail';
import LandingPage from '../components/LandingPage';
import EditBookNote from '../components/EditBookNote'
import AddNewBook from '../components/AddBookNote';

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
    name: 'Edit Book Note',
    component: EditBookNote,
  },
  {
    path: '/booknotes/new',
    name: 'New Book Note',
    component: AddNewBook,
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
