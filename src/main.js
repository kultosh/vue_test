import Vue from 'vue'
import ParentComponent from './ParentComponent.vue'
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(ParentComponent),
}).$mount('#app')
