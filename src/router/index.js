import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';
import Create from '../views/Create.vue';
import TagView from '../views/TagView.vue';
import RealTime from '../views/RealTimeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/posts/:id',
    name: 'details',
    component: DetailsView,
    props: true
  },

  {
    path: '/create',
    name: 'create',
    component: Create
  },

  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagView
  },

  {
    path: '/realtime',
    name: 'realTime',
    component: RealTime
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
