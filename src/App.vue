<template>
  <v-app>
    <NavBar></NavBar>

<v-content>


    
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

// import AuthService from './services/auth.service';
// import GraphService from './services/graph.service';

import NavBar from './components/NavBar';
//import { log } from 'util';
//import msal from '../vue-msal'
// import Vue from 'vue'
//import AuthService from './services/auth.service'

// import { Vue, Component, Prop } from 'vue-property-decorator';

// import Dashboard from './components/Dashboard';
// import Notifications from './components/Notifications';
// import Taks from './components/Tasks';
// import Documents from './components/Documents';

export default {
  name: 'App',

  components: {
    // Dashboard,
    // Notifications,
    // Taks,
    // Documents,
    NavBar
  },

  data: () => ({
          msg: 'Welcome to Your Vue.js + MSAL.js App',
      user: null,
      userInfo: null,
      apiCallFailed: false,
      loginFailed: false
  }),
  created() {
    // this.authService = new AuthService();
    // this.graphService = new GraphService();

    ///this.$authService.loginPopup();
    window.console.log('getting token');
    // window.console.log($X);
    window.console.log(this.$msal);
    //var token = '';
    this.$msal.acquireToken().then((token) => { 
            window.console.log(token); 

      window.console.log('user info');
      //var userInfo = this.$msal.getGraphUserInfo(token);
      

    // const headers = new Headers({ Authorization: `Bearer ${token}` });
    // const options = {
    //   headers
    // };
    // fetch('https://graph.microsoft.com/v1.0/me', options)
    //   .then(response => response.json())
    //   .then(x => window.console.log(x))
    //   .catch(response => {
    //     throw new Error(response.text());
    //   });



      fetch("https://localhost:44302/api/User", {
          method: "GET",
          headers: {
            'Authorization': "Bearer " + token
          }
        })
          .then(response => response.json())
          .then(data => {
            window.console.log("user:");
            window.console.log(data);
          });

      // fetch("https://localhost:44302/api/TodoList", {
      //     method: "GET",
      //     headers: {
      //       'Authorization': "Bearer " + token
      //     }
      //   })
      //     .then(response => response.json())
      //     .then(data => {
      //       window.console.log("response:");
      //       window.console.log(data);
      //     });

      } );
    

    // var authService = new AuthService();
    // authService.loginPopup();
    // var token = authService.getGraphToken();
    // window.console.log(token);
    
    //var token = this.$AuthService.getGraphToken();
    //window.console.log(token);
    

    // this.loginFailed = false;
    //   this.authService.login().then(
    //     user => {
    //       if (user) {
    //         this.user = user;
    //       } else {
    //         this.loginFailed = true;
    //       }
    //     },
    //     () => {
    //       this.loginFailed = true;
    //     }
    //   )
  },
  methods: {
    // login() {
    //   this.loginFailed = false;
    //   this.authService.login().then(
    //     user => {
    //       if (user) {
    //         this.user = user;
    //       } else {
    //         this.loginFailed = true;
    //       }
    //     },
    //     () => {
    //       this.loginFailed = true;
    //     }
    //   )
    // }
  }
}
</script>
