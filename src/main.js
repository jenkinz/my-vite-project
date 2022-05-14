import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);

app.config.errorHandler = (err, instance, info) => {
  // handle error...
  // report error to tracking services...
};

app.mount('#app');
