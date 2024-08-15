<template>
  <nav class="navbar bg-white flex justify-between items-center rounded-full z-10 mx-auto p-2 mt-5 shadow-xl transition-all duration-700 ease-in-out w-11/12 md:w-8/12">
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
      <ul class="flex gap-12">
        <router-link exact-active-class="text-orange-400" class="nav-link font-semibold text-gray-400 hover:text-orange-400 duration-500 ease-in-out" to="/">
          Home
        </router-link>

        <router-link active-class="text-orange-500" class="nav-link font-semibold text-gray-400 hover:text-orange-400 duration-500 ease-in-out" to="/about">
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

    <section class="mobile-nav-links flex lg:hidden w-[0] fixed top-0 right-0 flex-col gap-3 overflow-hidden bg-black/50 h-screen z-10 transition-all duration-1000 ease-in backdrop-blur-lg pb-4">
      <div class="mobile-menu-close lg:hidden text-xl font-bold relative right-[-80%] top-[2%] text-white border-2 border-white h-[40px] w-[40px] p-2 rounded-full flex justify-center items-center" color="white" @click="closeNavMenu"
        >
          <i class="bx bx-x text-xl"></i>
        </div>
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

      <div class="logo-div flex justify-center items-center my-auto w-1/2 mx-auto h-[20vh]">
        <img
        class="w-full h-full"
          :src="require('../assets/logo.png')"
          alt="jowam coffee, coffee experts"
        />
      </div>
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
      let nav = document.getElementsByClassName("mobile-nav-links")[0];
      nav.style.width = "100%";
    },
    closeNavMenu() {
      let nav = document.getElementsByClassName("mobile-nav-links")[0];
      nav.style.width = "0";
    },
  },
};
</script>

<style scoped lang="scss">

</style>
