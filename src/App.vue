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
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.vapp {
  background-image: url(./assets/bg.jpg);
  background-size: cover;
  font-family: 'Raleway', sans-serif;
}
</style>