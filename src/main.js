import Vue from 'vue'
import App from './App.vue';
import store from './store';

import Intro from './components/Intro';
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

import msal from 'vue-msal'

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
      {path: "/dashboard", component: Intro},
      {path: "/dashboard", component: Dashboard},
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
 
Vue.use(msal, {
    auth: {
      clientId: '45bee137-c643-4667-adbd-7d1adb27fb76', // application ID
      //redirectUri: 'https://login.live.com/oauth20_desktop.srf' // MSAL 2
      redirectUri: 'http://localhost:8080/' // localhost redirect URI
      
      //redirectUri: 'msal45bee137-c643-4667-adbd-7d1adb27fb76://auth' // MSAL redirect URI
      //redirectUri: '45bee137-c643-4667-adbd-7d1adb27fb76' // localhost redirect URI
      
    },
    request: {
      scopes: ['45bee137-c643-4667-adbd-7d1adb27fb76']
    }
});


// import AuthService from './services/auth.service'



// Vue.prototype.$X = 'Y';
// const authService = new AuthService();
// Vue.prototype.$AuthService = authService;
// window.console.log('service');
// window.console.log(authService);


//Vue.prototype.$token = msal

new Vue({
  store,
  vuetify,
  router,
  msal,
  render: h => h(App),
  created() {
    // if (!this.$msal.isAuthenticated()) {
    //     this.$msal.signIn();
    // }
    // else
    // {
    //   window.console.log('msal:');
    //   window.console.log(this.$msal);
    // }
  },
  components: {
    app: App
  }
}).$mount('#app')
