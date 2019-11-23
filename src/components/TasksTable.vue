<template>
    <v-data-table
      :headers="headers"
      :items="tasks"
      item-key="id"
      class="elevation-1"
    >
        <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Tasks</v-toolbar-title>
      </v-toolbar>
    </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          class="mr-2"
          @click="goToItem(item)"
        >
          exit_to_app
        </v-icon>
      </template>
         <template
            v-slot:item.dueFormatted="{ item }" >
    {{ item.due | formatDate }}
  </template>
           <template
            v-slot:item.status="{ item }" >
    <v-chip small :class="`${item.statusCode} white--text caption my-2`">{{ item.status }}</v-chip>
  </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'TasksTable',

  data () {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Status', value: 'status', sortable: true },
        { text: 'Due to', value: 'dueFormatted', sortable: true },
        { text: 'Go to detail', value: 'action', sortable: false },
      ],
      tasks: [
        {
          id: 1,
          name: 'Budget for Unit A',
          route: '/tasks/1234',
          due: new Date("2019-11-20"),
          status: "TODO",
          statusCode: "status-todo"
        },
        {
          id: 2,
          name: 'Budget for Unit B',
          route: '/tasks/1234',
          due: new Date("2019-11-30"),
          status: "Awaiting Dependencies",
          statusCode: "status-ad"
        },
        {
          id: 3,
          name: 'Materials for Unit B',
          route: '/tasks/12345',
          due: new Date("2019-11-10"),
          status: "Done",
          statusCode: "status-done"
        },
        {
          id: 4,
          name: 'Budget for Unit C',
          route: '/tasks/12845',
          due: new Date("2019-11-10"),
          status: "Done",
          statusCode: "status-done"
        },

      ],
    }
  },
  methods: {
goToItem (item) {
      window.console.log("goto");
      window.console.log(item);
    },
  }
};
</script>

<style scoped>
  .v-chip.status-todo
  {
    background: #888800
  }
  .v-chip.status-ad
  {
    background: #666666
  }
  .v-chip.status-done
  {
    background: #448844
  }
</style>
