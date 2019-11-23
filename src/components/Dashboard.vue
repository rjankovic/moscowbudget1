<template>
  <v-container>
<v-layout row wrap justify-left>
  <v-flex xs12 xl5>
    <v-card class="ma-3 elevation-8">
      <NotificationsTable></NotificationsTable>
      </v-card>
      </v-flex>
  <v-flex xs12 xl5>
    <v-card class="ma-3 elevation-8">
      <TasksTable></TasksTable>
      </v-card>
      </v-flex>
  <v-flex xs12 xl5>
    <v-card class="ma-3 elevation-8">
      <DocumentsTable></DocumentsTable>
      </v-card>
      </v-flex>
</v-layout>

  </v-container>
</template>

<script>
import NotificationsTable from './NotificationsTable';
import TasksTable from './TasksTable';
import DocumentsTable from './DocumentsTable';
export default {
  name: 'Dashboard',
  components:
{
  NotificationsTable,
  TasksTable,
  DocumentsTable
}
};
</script>
