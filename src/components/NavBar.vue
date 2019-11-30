<template>
  <nav>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Moscow Budgeting 2020</v-toolbar-title>
<v-spacer></v-spacer>
<!-- <span class="mr-2">
        Choose "today"
      </span>   -->
        

<v-menu
          v-model="menu2"
          :close-on-content-click="false"
          
          transition="scale-transition"
          
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              prepend-icon="event"
              readonly
              v-on="on"
              width="100px"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"
          min="2020-01-01"
          max="2020-06-15"
          ></v-date-picker>
        </v-menu>

<v-spacer></v-spacer>

 <span class="mr-2">
        <font-awesome-icon icon="user" />
      </span>
      <span class="mr-2">
        {{currentUser.title}}
      </span>

<!-- 
        disabled=false
      absolute=false
      open-on-hover=false
      close-on-click=true
      close-on-content-click=true
      offset-x=false
      offset-y=true 
      -->
<!-- 
offset-y
          min-width="290px" -->
<!-- offset-y
          min-width="290px" -->
        

<v-menu
      offset-y="true"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Choose user
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in allUsers"
          :key="index"
          @click="boardSwitch('shoPFIB', index, item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
<!-- @click="" -->

      <!-- <v-btn
        
        target="_blank"
        text
      >
        <span>Logout</span>
      </v-btn> -->

    </v-app-bar>
    
<v-navigation-drawer clipped="true" app v-model="drawer" color="primary" dark class="pt-5">
      
      <!-- <span class="white--text px-4">Budgeting process</span>
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
    <v-divider></v-divider> -->
    <v-list>
      <v-list-item v-for="menuItem in menu" :key="menuItem.label" router :to="menuItem.route">
        <v-list-item-action>
          <v-icon>{{menuItem.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-contnt>{{menuItem.label}}</v-list-item-contnt>
      </v-list-item>
    </v-list>
</v-navigation-drawer>
  </nav>
</template>

<script>
import store from '../store';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'NavBar',

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
      {label: "Dashboard", icon: "dashboard", route: "/dashboard"},
      {label: "Notifications", icon: "notifications", route: "/notifications"},
      {label: "Tasks", icon: "assignment_turned_in", route: "/tasks"},
      {label: "Documents", icon: "description", route: "/docs"}
    ],

//     userList: [

// {title: "The government of Moscow", code: "Government"},
// {title: "Moscow Department of Finance", code: "Finance"},
// {title: "Department of Economic Policy and Development of Moscow", code: "Policy"},
// {title: "Moscow Department of Health", code: "Health"},
// {title: "The main administrators of the budget revenues of the city of Moscow", code: "Revenues"},
// {title: "Chief administrators of sources of financing the budget deficit in Moscow", code: "Administrators"},
// {title: "Coordinators of government programs in Moscow", code: "Coordinators"},
// {title: "The main managers of the budget funds of the city of Moscow", code: "Managers"},
// {title: "Moscow City Compulsory Health Insurance Fund", code: "Fund"}


// Budget Commission of the Government of Moscow; Commission
// Moscow Department of Finance; Finance
// Department of Economic Policy and Development of Moscow; Policy
// Moscow Department of Health; Health
// The main administrators of the budget revenues of the city of Moscow; Revenues
// Chief administrators of sources of financing the budget deficit in Moscow; Administrators
// Coordinators of government programs in Moscow; Coordinators
// The main managers of the budget funds of the city of Moscow; Managers
// Moscow City Compulsory Health Insurance Fund; Fund

        // { title: 'Click Me' },
        // { title: 'Click Me 2' },
        // { title: 'Click Me 3' },
        // { title: 'Click Me 4' },
      //],
      // selectedUser: {title: "The government of Moscow", code: "Government"},

          date: '2020-01-01', //new Date().toISOString().substr(0, 10),
    modal: false,
    menu2: false,
  }),

  methods:
  {
    ...mapActions(["setCurrentUser"]),
  boardSwitch (firstArg, secondArg, value) {
        
        //window.console.log(value);
        
        //this.selectedUser = value;
        
        //setCurrentUser(value);
        window.console.log(value);
store.dispatch('setCurrentUser', {newCurrentUser: value});
    }
  },

  computed: mapGetters(["allUsers", "currentUser"]),
};
</script>
