import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

import MyApp from "./components/MyComponents.vue"
import NotFound from "./components/404.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "",
        component: MyApp,
      },
      {
        path: "/:notFound",
        component: NotFound,
      },
    ],
  });

app.use(router);
app.mount("#app");