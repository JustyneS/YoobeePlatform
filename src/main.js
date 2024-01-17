import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex' // Import Vuex
import App from './App.vue'
import ModuleOne from './components/ModuleOne.vue'
import ModuleTwo from './components/ModuleTwo.vue'
import ModuleThree from './components/ModuleThree.vue'
import MyNotesPage from './components/MyNotesPage.vue'

const routes = [
  { path: '/module-one', component: ModuleOne },
  { path: '/module-two', component: ModuleTwo },
  { path: '/module-three', component: ModuleThree },
  { path: '/my-notes-page', component: MyNotesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// Create a new Vuex store
const store = createStore({
  state: {
    isOpen: false
  },
  mutations: {
    toggle(state) {
      state.isOpen = !state.isOpen
    }
  }
})

createApp(App)
  .use(router)
  .use(store) // Use Vuex store
  .mount('#app')

