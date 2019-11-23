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

import NavBar from './components/NavBar';
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

  }),
};
</script>
