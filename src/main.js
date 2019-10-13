import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import {
  Button,
  Cell,
  CellGroup,
  NavBar,
  Field
} from 'vant'

Vue.use(request)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Button)

Vue.config.productionTip = false

Vue.use(NavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
