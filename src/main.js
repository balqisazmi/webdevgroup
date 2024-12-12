/*import './assets/main.css'*/

import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import RailwayFeedback from "./views/RailwayFeedback.vue";
import StationFeedback from "./views/StationFeedback.vue";
import 'purecss';
import 'font-awesome/css/font-awesome.css';
/*import router from './router'; // Import the router configuration*/

const app = createApp(App);

app.component("Navbar", Navbar);
app.component("RailwayFeedback", RailwayFeedback);
app.component("StationFeedback", StationFeedback);
//app.use(router); // Use the router

app.mount("#app");