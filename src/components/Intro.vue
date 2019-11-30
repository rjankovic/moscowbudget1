<template>
  <v-container>
  <v-row align="center" justify="center">

      <v-img
            aspect-ratio="1"
      max-width="300"
      max-height="200"
      src="../../mb2020_logo.png"></v-img>
  </v-row>
<!-- src="https://github.com/rjankovic/moscowbudget1/raw/master/mb2020_logo.png" -->
<v-layout row wrap justify-left>
  <v-flex xs12 xl5>
    <v-card class="ma-3 pa-4 elevation-8">
<p class="title text-center">Welcome to Budgeting Demo</p>
<p>On top, choose user (click "Choose User") and select the date (click "2020-01-01") for which you want to show the data.</p>
<p>Then, use the menu on the left. (If you cannot see the menu, open it by the button in the top lef corner.)</p>

      <!-- max-width="500"
      max-height="300" -->

    </v-card>
  </v-flex>
</v-layout>

  </v-container>
</template>

<script>

export default {
  name: 'Intro',
  components:
{
}
};
</script>
