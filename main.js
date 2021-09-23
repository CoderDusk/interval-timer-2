import Vue from 'vue'
import App from './App'

// 引入 uView
import uView from 'uview-ui';
Vue.use(uView);

// 引入自定义工具类
import myTimeTools from 'common/time.js'
Vue.prototype.$time = myTimeTools
import tools from 'common/tools.js'
Vue.prototype.$tools = tools

// 引入 vue-awesome-countdown
import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac')

// 引入自定义混入
import mixin from 'mixin/mixin.js'
Vue.use(mixin)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
