<template>
  <v-container>
    <!-- <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Notifications
        </h1>
        
      </v-flex>

    </v-layout> -->

    <NotificationsTable></NotificationsTable>

  </v-container>
</template>

<script>
import NotificationsTable from './NotificationsTable';
export default {
  name: 'Notifications',
  components:
{
  NotificationsTable
}
};
</script>
