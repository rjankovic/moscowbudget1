<template>
  <v-container>

    <DocumentsTable></DocumentsTable>

  </v-container>
</template>

<script>
import DocumentsTable from './DocumentsTable';
export default {
  name: 'Documents',
  components:
{
  DocumentsTable
}
};
</script>
