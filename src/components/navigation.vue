<template>
  <div class="header text-center">
    <v-app-bar
      elevation="0"
      fixed
      elevate-on-scroll
      color="transaprent"
      :class="[scrollPosition > 50 ? 'change-color' : 'transparent']"
      height="70px"
      width="80%"
      class="mx-auto mb-10 hidden-sm-and-down"
    >
      <div class="transparent" style="width: 50px">
        <v-img :src="require('../assets/logo.png')" width="100%"></v-img>
      </div>
      <v-toolbar-title class="company-name white--text ml-3"
        >JOWAM COFFEE TRADERS LTD</v-toolbar-title
      >
      <v-spacer />
      <div class="nav-bar">
        <!-- use the exact attribute to prevent root route from being always active -->
        <router-link role="button" tag="li" active-class="active" to="/" exact
          >Home</router-link
        >
        <router-link tag="li" active-class="active" to="/about"
          >About Us</router-link
        >
        <router-link tag="li" active-class="active" to="/gallery"
          >Photo Gallery</router-link
        >

        <router-link tag="li" active-class="active" to="/network"
          >Network & Partnerships</router-link
        >
        <router-link tag="li" active-class="active" to="/contact"
          >Contact Us</router-link
        >
        <router-link tag="li" active-class="active" to="/training"
          class="training-btn">Training Centre</router-link
        >
      </div>
    </v-app-bar>

    <!-- mobile layout -->
    <div class="mobile-nav d-flex justify-space-between">
      <div
        class="logo hidden-md-and-up"
        role="button"
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        <img width="40" :src="require('../assets/logo.png')" />
      </div>
      <!-- hamburger menu -->
      <v-app-bar-nav-icon
        large
        class="grey--text hidden-md-and-up nav"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-navigation-drawer
        dark
        v-model="drawer"
        app
        right
        class="drawer hidden-md-and-up"
        color="#2e160e"
      >
        <div
          class="mobile-logo"
          role="button"
          @click="$router.push('/')"
          style="cursor: pointer"
        >
          <img width="40" :src="require('../assets/logo.png')" />
        </div>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/about">About Us</router-link>
        <router-link tag="li" to="/gallery">Photo Gallery</router-link>
        <router-link tag="li" to="/network">Network & Partnerships</router-link>
        <router-link tag="li" to="/contact">Contact Us</router-link>
        <router-link tag="li" to="/training" class="training-btn"
          >Training Centre
        </router-link>
        <div class="copyright white--text">
          <p>copyright &copy; {{ date }}</p>
        </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      drawer: false,
      date: new Date().getFullYear(),
      scrollPosition: null,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.company-name {
  font-size: 30px;
  font-weight: bold;
}
.change-color {
  background: rgb(46, 22, 14);
  border-radius: 0 0 10px 10px;
}

.nav-bar {
  list-style: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar li {
  display: inline-block;
  margin: 1rem 2rem;
  cursor: pointer;
}

.nav-bar li {
  text-decoration: none;
  color: white;
}

.nav-bar li:hover {
  color: rgb(105, 103, 103);
}

.nav-bar li.active {
  color: #ba8445;
}

.mobile-nav {
  background-color: #2e160e;
  position: fixed;
  width: 100%;
}

.mobile-logo {
  margin: 4rem 0;
}

.drawer li {
  display: block;
  text-align: right;
  list-style: none;
  margin: 1rem 6px;
  padding: 8px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.drawer li:hover {
  background: rgba(160, 157, 157, 0.5);
  color: #ba8445;
}

.copyright {
  position: absolute;
  width: 100%;
  bottom: 2px;
}

.firmName {
  padding: 6rem 0;
  font-size: 70px;
}

.training-btn {
  background: #ba8445;
  padding: 10px;
  border-radius: 5px;
}

.training-btn:hover {
  background: white;
  color: black;
}
</style>
