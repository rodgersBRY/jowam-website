<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
:root {
  --primary-color: rgb(255, 165, 0);
  --secondary-color: rgb(0, 128, 0);
  --accent-color: rgb(208, 87, 87);
  --faded-primary-color: rgba(255, 165, 0, 0.5);
  --faded-secondary-color: rgba(0, 128, 0, 0.5);
}
* {
  box-sizing: border-box;
}
</style>