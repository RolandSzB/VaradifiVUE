import { createApp } from "vue";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import EventCalendar from "./components/EventCalendar.vue";
import About from "./components/About.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/events", component: EventCalendar },
  { path: "/about", component: About },
];

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
