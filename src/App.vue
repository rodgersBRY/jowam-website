<template>
  <v-app class="vapp">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.vapp {
  font-family: 'Montserrat', sans-serif;
}
</style>