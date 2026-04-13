import { createApp } from 'vue';

// import App from './App.vue'      // 프록시서버
// import App from './App1.vue';        //Promise
// import App from './App2.vue';        // async-await
// import App from './App3.vue';       // async-await 반복
// import App from './App4.vue';        // post
// import App from './App5.vue';        // error
import App from './App6.vue';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
