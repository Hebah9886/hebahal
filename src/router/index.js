import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createevent from '../views/createevent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createevent',
      name: 'createevent',
      component:createevent
    }
    
    
  ]
});
export default router;
