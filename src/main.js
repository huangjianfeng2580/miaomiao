import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'

Vue.config.productionTip=false
//需要安装axios
Vue.prototype.axios=axios;


Vue.filter('setWH',(url,arg)=>{
	return url.replace(/w\.h/,arg);
});




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
