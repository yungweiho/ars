import "core-js/stable"; 
import "regenerator-runtime/runtime";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pvm from 'p5-vue-mirror'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(pvm)
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
