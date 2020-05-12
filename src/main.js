// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '@/components/ValidationErrors'

Vue.config.productionTip = false
Vue.use(vueResource)

Vue.component('errors-validation', {
  data () {
    return {
    }
  },
  props: ['errors'],
  template: `
    <div v-if="validationErrors" alert alert-danger>
        <ul class="alert alert-danger">
            <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
        </ul>
    </div>`,
  computed: {
    validationErrors () {
      let errors = Object.values(this.errors)
      errors = errors.flat()
      return errors
    }
  }
})

Vue.component('errors-notfound', {
  data () {
    return {
    }
  },
  template: `
    <div alert alert-danger>
        <ul class="alert alert-danger">
            <li>404 error</li>
        </ul>
    </div>`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
