<template>
  <v-app>
    <!-- <v-layout row> -->
  
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Moscow Budgeting 2020</v-toolbar-title>
  
        <v-spacer></v-spacer>

 <span class="mr-2">
        <font-awesome-icon icon="user" />
      </span>
      <span class="mr-2">
        Radovan Jankovic
      </span>
      <v-btn
        
        target="_blank"
        text
      >
        <span>Logout</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
        <!-- <font-awesome-icon icon="user-secret" /> -->
      </v-btn>
      <!-- <div class="d-flex align-center"> -->
        
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      <!-- </div> -->

<!-- 
href="https://github.com/vuetifyjs/vuetify/releases/latest" -->


    </v-app-bar>
    
<v-navigation-drawer clipped="true" app v-model="drawer" color="primary" dark class="pt-5">
      
      <span class="white--text px-4">Budgeting process</span>
      <v-radio-group v-model="selectedProcess" class="px-4">
      <v-radio
        :key=-1
        label="All processes"
        :value=-1
      ></v-radio>
      <v-radio
        v-for="n in processList"
        :key=n.id
        :label="`${n.name}`"
        :value="n.id"
      ></v-radio>
    </v-radio-group>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="menuItem in menu" :key="menuItem.label">
        <v-list-item-action>
          <v-icon>{{menuItem.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-contnt>{{menuItem.label}}</v-list-item-contnt>
      </v-list-item>
    </v-list>
</v-navigation-drawer>

    <!-- </v-layout> -->
<v-content>


    
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    processList:
    [
      {id: 1, name: "Budget 2020"},
      {id: 2, name: "Budget 2021"},
      {id: 3, name: "Budget Extra 2020"}
    ],
    selectedProcess: -1,
    menu:
    [
      {label: "Dashboard", icon: "dashboard"},
      {label: "Notifications", icon: "notifications"},
      {label: "Tasks", icon: "assignment_turned_in"},
      {label: "Documents", icon: "description"}
    ]
  }),
};
</script>
