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
  --primary-color: orange;
  --secondary-color: green;
  --accent-color: rgb(208, 87, 87);
}
* {
  box-sizing: border-box;
}
</style>