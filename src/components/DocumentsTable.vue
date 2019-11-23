<template>
    <v-data-table
      :headers="headers"
      :items="docs"
      item-key="id"
      class="elevation-1"
    >
        <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Documents</v-toolbar-title>
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
  name: 'DocumentsTable',

  data () {
    return {
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Status', value: 'status', sortable: true },
        { text: 'Due by', value: 'dueFormatted', sortable: true },
        { text: 'Go to detail', value: 'action', sortable: false },
      ],
      docs: [
        {
          id: 1,
          name: 'Document 1 for Unit A',
          route: '/docs/1234',
          due: new Date("2019-11-20"),
          status: "TODO",
          statusCode: "status-todo"
        },
        {
          id: 2,
          name: 'Document 1 for Unit B',
          route: '/docs/1234',
          due: new Date("2019-11-30"),
          status: "In progress",
          statusCode: "status-progress"
        },
        {
          id: 3,
          name: 'Document 2 for Unit B',
          route: '/docs/12345',
          due: new Date("2019-11-10"),
          status: "Done",
          statusCode: "status-done"
        },
        {
          id: 4,
          name: 'Document 1 for Unit C',
          route: '/docs/12845',
          due: new Date("2019-11-10"),
          status: "Done",
          statusCode: "status-done"
        },
        {
          id: 5,
          name: 'Document 3 for Unit B',
          route: '/docs/12345',
          due: new Date("2019-11-10"),
          status: "Submitted",
          statusCode: "status-submitted"
        }

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
  .v-chip.status-progress
  {
    background: #1976D2
  }
  .v-chip.status-done
  {
    background: #448844
  }
  .v-chip.status-submitted
  {
    background: #99AA66
  }
</style>
