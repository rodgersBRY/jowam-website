<template>
  <nav class="header">
    <section class="logo-div d-flex align-center">
      <img
        :src="require('../assets/logo.png')"
        alt="jowam coffee, coffee experts"
      />
      <h1>
        <span>Jowam</span> <br />
        Coffee Traders
      </h1>
    </section>

    <section class="nav-links">
      <v-btn icon class="mobile-menu-close" color="white" @click="closeNavMenu"
        ><v-icon>mdi-close</v-icon></v-btn
      >
      <ul>
        <router-link exact-active-class="active" tag="li" to="/">
          Home
        </router-link>

        <span>|</span>
        <router-link active-class="active" tag="li" to="/about">
          About Us
        </router-link>

        <span>|</span>
        <router-link active-class="active" tag="li" to="/contact">
          Contact Us
        </router-link>

        <router-link active-class="active" tag="li" to="/training">
          Training Centre
        </router-link>
      </ul>
    </section>

    <section class="mobile-menu-open">
      <v-btn icon small @click="openNavMenu"><v-icon>mdi-menu</v-icon></v-btn>
    </section>
  </nav>
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
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    openNavMenu() {
      let navDiv = document.getElementsByClassName("nav-links")[0];
      navDiv.style.width = "100%";
    },
    closeNavMenu() {
      let navDiv = document.getElementsByClassName("nav-links")[0];
      navDiv.style.width = "0";
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-div {
    h1 {
      margin-left: 20px;
      text-align: center;
      span {
        color: rgb(130, 202, 130);
      }
    }
  }
  .nav-links ul {
    padding: 0;
    list-style: none;
    span {
      font-weight: bold;
    }
    li {
      display: inline-block;
      margin: 0 10px;
      padding: 10px 1rem;
      font-weight: bold;
      &:hover,
      &.active {
        color: #ba8445;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .header {
    width: 70%;
    margin: 0 auto;
    padding: 5px 0;
    .logo-div {
      img {
        height: 60px;
      }
    }

    .nav-links {
      li:last-child {
        background: #ba8445;
        padding: 20px;
        border-radius: 5px;
        color: white;
      }
      .mobile-menu-close {
        display: none;
      }
    }
    .mobile-menu-open {
      display: none;
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    padding: 5px;

    .logo-div {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .nav-links {
      z-index: 1;
      width: 0;
      background: black;
      color: white;
      height: 100vh;
      position: absolute;
      overflow: hidden;
      transition: width 1s ease-in-out;
      top: 0;
      left: 0;
      ul {
        margin-top: 4rem;
        li {
          display: block;
        }
        span {
          display: none;
        }
      }
      .mobile-menu-close {
        position: absolute;
        right: 4%;
        top: 1%;
      }
    }
  }
}
</style>
