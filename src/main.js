import Vue from 'vue'

import App from './App.vue';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import Documents from './components/Documents';

import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import moment from 'moment'

library.add(faUserSecret)
library.add(faUser)
library.add(faSolarPanel)
library.add(faFilter)
library.add(faCircle)
library.add(faDotCircle)
library.add(faBell)
library.add(faClipboardCheck)
library.add(faFileAlt)


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(require('vue-moment'));
Vue.prototype.moment = moment;

const router = new VueRouter(
  {
    routes: [
      {path: "/", component: Dashboard},
      {path: "/notifications", component: Notifications},
      {path: "/tasks", component: Tasks},
      {path: "/docs", component: Documents}
    ],
mode: 'history'
  }
);

Vue.config.productionTip = false;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});

// Vue.prototype.$log = console.log;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
