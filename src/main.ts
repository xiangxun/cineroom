import { createApp } from "vue";
import { createPinia } from "pinia";
// import "vfonts/Lato.css"; // 通用字体
// import "vfonts/FiraCode.css"; // 等宽字体
import App from "./App.vue";
// import router from './router'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
// app.use(router)

app.mount("#app");
