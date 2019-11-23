<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Notifications
        </h1>
        
      </v-flex>

    </v-layout>

    <v-data-table
      :headers="headers"
      :items="notifications"
            :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      class="elevation-1"
    >
    <!-- sort-by="date" -->
      <!-- <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Notifications</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template> -->
      <template v-slot:item.action="{ item }">
        <v-icon
          class="mr-2"
          @click="goToItem(item)"
        >
          exit_to_app
        </v-icon>
      </template>
      <template v-slot:expanded-item="{ item }">
        <td class="primary lighten-4" :colspan="headers.length">{{item.details}}}</td>
      </template>
         <template
            v-slot:item.dateFormatted="{ item }" >
    {{ item.date | formatDate }}
  </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template> -->
    </v-data-table>
  </v-container>
</template>

<script>
// import moment from 'moment'
export default {
  name: 'Notifications',

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
          date: new Date(), // new Date("2019-11-30"),
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
          details: 'The Illuminati has approved your World Dominatino Plan',
        },

      ],
    }
  },
  methods: {
goToItem (item) {
      window.console.log("goto");
      window.console.log(item);
    },
    // frontEndDateFormat: function(date) {
    //   var date2 = date;
    //   var x = moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
    //   x = date2;
    //   date2 = x;
    //   return "AAAAA"; // moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
    //   },

  }
};
</script>
