<template>
  <nav class="navbar bg-white flex justify-between items-center rounded-full z-10 mx-auto p-2 mt-5 shadow-xl w-11/12">
    <section
      @click="$router.push('/')"
      style="cursor: pointer;"
    >
      <img
      class="w-[40px] h-[40px]"
        :src="require('../assets/logo.png')"
        alt="jowam coffee, coffee experts"
      />
    </section>

    <section class="nav-links hidden lg:block">
      <ul class="flex gap-6">
        <router-link exact-active-class="text-orange-400" class="nav-link font-semibold text-gray-400 hover:text-orange-400 duration-500 ease-in-out" to="/">
          Home
        </router-link>

        <router-link active-class="text-greorangee4-500" class="nav-link font-semibold text-gray-400 hover:text-orange-400 duration-500 ease-in-out" to="/about">
          About Us
        </router-link>
        
        <router-link active-class="text-orange-400"  class="nav-link font-semibold text-gray-400 hover:text-orange-400 duration-500 ease-in-out" to="/training">
          Training Centre
        </router-link>
      </ul>
    </section>

    <router-link active-class="active" class="hidden lg:block p-2 rounded-full contact nav-link bg-green-600 text-white font-bold" to="/contact">
      Contact Us
    </router-link>

    <section class="mobile-nav-links flex lg:hidden fixed top-0 right-0 flex-col gap-3 overflow-hidden bg-black/50 h-screen z-10 transition-all duration-300 ease-in-out backdrop-blur-lg">
      <i icon class="mobile-menu-close block lg:hidden text-xl font-bold relative right-[-80%] top-[2%] text-white border-2 border-white h-[40px] w-[40px] p-2 rounded-full text-center" color="white" @click="closeNavMenu"
        ><span class="bx bx-x"></span></
      i>
      <ul class="list flex flex-col gap-10 items-center text-white text-xl font-bold">
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>
        
        <router-link active-class="active" class="nav-link" to="/training">
          Training Centre
        </router-link>

        <router-link class="contact nav-link p-2 rounded-full shadow-lg w-2/3 bg-orange-400 font-semibold text-center" to="/contact">
          Contact Us
        </router-link>
      </ul>
    </section>

    <section class="mobile-menu-open block lg:hidden">
      <v-btn icon small flat><span class="mdi mdi-menu text-xl" @click="openNavMenu"></span></v-btn>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },

  mounted() {
    window.onscroll = () => {
      var navBar = document.getElementsByClassName('navbar')[0]

      if (window.scrollY > 150) {
        navBar.style.position = "fixed";
        navBar.style.top = "5";
        navBar.style.left = "0";
        navBar.style.right = "0";
      } else {
        navBar.style.position = "relative";
      }
    };
  },

  methods: {
    openNavMenu() {
      let navDiv = document.getElementsByClassName("mobile-nav-links")[0];
      navDiv.style.width = "100%";
    },
    closeNavMenu() {
      let navDiv = document.getElementsByClassName("mobile-nav-links")[0];
      navDiv.style.width = "0";
    },
  },
};
</script>

<style scoped lang="scss">

</style>
