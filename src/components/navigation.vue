<template>
  <nav class="header">
    <section
      class="logo-div d-flex align-center"
      @click="$router.push('/')"
      style="cursor: pointer;"
    >
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
        ><span class="mdi mdi-close"></span></v-btn
      >
      <ul>
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <span>|</span>
        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>

        <span>|</span>
        <router-link active-class="active" class="nav-link" to="/contact">
          Contact Us
        </router-link>

        <br class="br" />
        <br class="br"/>
        <a
          class="jowam-btn"
          href="https://training.jowamcoffee.co.ke"
        >
          Training Centre
        </a>
      </ul>
    </section>

    <section class="mobile-menu-open">
      <v-btn icon small @click="openNavMenu"><span class="mdi mdi-menu text-xl"></span></v-btn>
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
    var prevScrollPos = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.getElementsByClassName("header")[0].style.top = "0";
      } else {
        document.getElementsByClassName("header")[0].style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    };
  },

  methods: {
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
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  transition: top 0.8s ease;
  .logo-div {
    img {
      position: relative;
      top: 1.5rem;
      left: 2%;
    }
    h1 {
      margin-left: 20px;
      text-align: center;
      span {
        color: rgb(130, 202, 130);
      }
    }
  }
  .mdi {
    font-size: 25px;
  }
  .nav-links ul {
    padding: 0;
    list-style: none;
    .nav-link {
      display: inline-block;
      text-decoration: none;
      margin: 0 10px;
      padding: 10px 1rem;
      color: black;
      font-weight: bold;
      &:hover,
      &.active {
        color: #ba8445;
        cursor: pointer;
      }
    }
    .jowam-btn {
      text-decoration: none;
      color: white;
      background: #ba8445;
      padding: 1rem;
      border-radius: 10px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .br {
    display: none;
  }
  .header {
    padding: 5px 5rem;
    .logo-div {
      img {
        height: 60px;
      }
    }

    .nav-links {
      .mobile-menu-close {
        display: none;
      }
    }
    .mobile-menu-open {
      display: none;
    }
  }
}

@media screen and (max-width: 1000px) {
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
        .nav-link {
           color: white;
          display: block;
          font-size: 20px;
        }
        span {
          display: none;
        }
      }
      .jowam-btn {
        margin-left: 1rem;
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
