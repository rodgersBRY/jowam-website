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
}
</script>

<style>
:root {
  --primary-color: rgb(255, 165, 0);
  --secondary-color: #008000;
  --accent-color: rgb(208, 87, 87);
  --faded-primary-color: rgba(255, 165, 0, 0.5);
  --faded-secondary-color: rgb(0, 0, 0, .7);
}
* {
  box-sizing: border-box;
}
</style>