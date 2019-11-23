<template>
    <v-data-table
      :headers="headers"
      :items="notifications"
            :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      class="elevation-1"
    >
        <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Notifications</v-toolbar-title>
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
      <template v-slot:expanded-item="{ item }">
        <td class="primary lighten-4" :colspan="headers.length">{{item.details}}</td>
      </template>
         <template
            v-slot:item.dateFormatted="{ item }" >
    {{ item.date | formatDate }}
  </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'NotificationsTable',

  data () {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Date', value: 'dateFormatted', sortable: false },
        { text: 'Details', value: 'data-table-expand', sortable: false },
        { text: 'Go to detail', value: 'action', sortable: false },
      ],
      notifications: [
        {
          id: 1,
          name: 'New document for approval',
          route: '/docs/1234',
          date: new Date("2019-11-30"),
          details: 'Document ABC has been submitted by XYZ and ready for your approval',
        },
        {
          id: 2,
          name: 'Task Save Universe due in 7 days',
          route: '/taks/1234',
          date: new Date("2019-11-29"),
          details: 'You need to finish Save Universe in 7 days',
        },
        {
          id: 3,
          name: 'Document World Domination Plan approved',
          route: '/docs/12345',
          date: new Date("2019-11-28"),
          details: 'The Illuminati has approved your World Domination Plan',
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
