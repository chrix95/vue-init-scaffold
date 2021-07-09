import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import VueSimpleAlert from "vue-simple-alert"
import globalFunc from "@/functions/globalFunc"

Vue.config.productionTip = false

Vue.use(VueSimpleAlert)
Vue.prototype.$window = window
Vue.prototype.$globalFunc = globalFunc

new Vue({
  router,
  store,
  created() {
    const userString = sessionStorage.getItem("setResponse")
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.dispatch("reloadUserData", userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout")
        }
        return Promise.reject(error)
      }
    );
  },
  render: h => h(App)
}).$mount('#app')
