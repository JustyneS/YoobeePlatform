import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex' // Import Vuex
import App from './App.vue'
import ModuleOne from './components/ModuleOne.vue'
import ModuleTwo from './components/ModuleTwo.vue'
import ModuleThree from './components/ModuleThree.vue'
import MyNotesPage from './components/MyNotesPage.vue'
import NoticeboardComponent from './components/Noticeboard.vue';
import MondayPostsComponent from './components/MondayPosts.vue';
import OrientationComponent from './components/Orientation.vue';
import LiveSessionsComponent from './components/LiveSessions.vue';
import CalendarComponent from './components/EventCalendar.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import LandingPage from './components/LandingPage.vue'


const routes = [
  { path: '/module-one', component: ModuleOne },
  { path: '/module-two', component: ModuleTwo },
  { path: '/module-three', component: ModuleThree },
  { path: '/my-notes-page', component: MyNotesPage },
  { path: '/noticeboard', component: NoticeboardComponent },
  { path: '/monday-posts', component: MondayPostsComponent },
  { path: '/orientation', component: OrientationComponent},
  { path: '/live-sessions', component: LiveSessionsComponent},
  { path: '/EventCalendar', component: CalendarComponent},
  { path: '/', component: LandingPage },
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

  const firebaseConfig = {
    apiKey: "AIzaSyDog4gaGVAAiONeTzwUIkqt3jbC5sSs4IA",
    authDomain: "yoobeedata.firebaseapp.com",
    projectId: "yoobeedata",
    storageBucket: "yoobeedata.appspot.com",
    messagingSenderId: "292216842527",
    appId: "1:292216842527:web:056b6f958d206ffb97e82a",
    measurementId: "G-ZL7008M71Z"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  createApp(App)
  .use(router)
  .use(store) // Use Vuex store
  .mount('#app')
