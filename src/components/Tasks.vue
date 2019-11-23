<template>
  <v-container>

    <TasksTable></TasksTable>

  </v-container>
</template>

<script>
import TasksTable from './TasksTable';
export default {
  name: 'Tasks',
  components:
{
  TasksTable
}
};
</script>
