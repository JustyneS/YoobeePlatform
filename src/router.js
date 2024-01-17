// router.js
import { createRouter, createWebHistory } from 'vue-router';
import NoticeboardComponent from './components/Noticeboard.vue';
import MondayPostsComponent from './components/MondayPosts.vue';

const routes = [
  { path: '/noticeboard', component: NoticeboardComponent },
  { path: '/monday-posts', component: MondayPostsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
