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
      </v-btn>

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
      {label: "Dashboard", icon: "dashboard", route: "/"},
      {label: "Notifications", icon: "notifications", route: "/notifications"},
      {label: "Tasks", icon: "assignment_turned_in", route: "/tasks"},
      {label: "Documents", icon: "description", route: "/docs"}
    ]
  })
};
</script>
