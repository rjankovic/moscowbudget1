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
    
<v-navigation-drawer clipped="true" app v-model="drawer" color="primary" dark>
  <p>Lorem ipsum dolor</p>
</v-navigation-drawer>

    <!-- </v-layout> -->
<v-content>


<v-spacer height="20"/>

<v-container>
<v-flex>
        <v-card
    width="256"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Application
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

        <!-- <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </v-card>
</v-flex>
</v-container>

    
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
    drawer: false
  }),
};
</script>
