<template>
  <nav class="navbar">
    <section
      @click="$router.push('/')"
      style="cursor: pointer;"
    >
      <img
        :src="require('../assets/logo.png')"
        alt="jowam coffee, coffee experts"
      />
    </section>

    <section class="nav-links">
      <v-btn icon class="mobile-menu-close" color="white" @click="closeNavMenu"
        ><span class="mdi mdi-close"></span></v-btn
      >
      <ul>
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>
        
        <router-link active-class="active" class="nav-link" to="/contact">
          Training Centre
        </router-link>

        <router-link active-class="active" class="contact nav-link" to="/contact">
          Contact Us
        </router-link>
      </ul>
    </section>

    <section class="mobile-nav-links">
      <i icon class="mobile-menu-close" color="white" @click="closeNavMenu"
        ><span class="mdi mdi-close"></span></
      i>
      <ul>
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>
        
        <router-link active-class="active" class="nav-link" to="/contact">
          Training Centre
        </router-link>

        <router-link active-class="active" class="contact nav-link" to="/contact">
          Contact Us
        </router-link>
      </ul>
    </section>

    <section class="mobile-menu-open">
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
    var prevScrollPos = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
      } else {
        document.getElementsByClassName("navbar")[0].style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
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
.navbar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin-top: 1.5rem;
  img {
    width: 40px;
    height: 40px;
  }
  .nav-link {
    text-decoration: none;
    color: gray;
    font-weight: 400;
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
    }
  }
}

.nav-links {
  display: none;
}

.mobile-nav-links {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: rgba(0, 0, 0, .5);
  height: 100vh;
  width: 0;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  .mobile-menu-close {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    right: -80%;
    top: 2%;
    color: white;
    border: 2px solid white;
    height: 40px;
    width: 40px;
    padding: 5px;
    border-radius: 50%;
    text-align: center;
  }
  .nav-link {
    display: block;
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    font-size: 22px;
  }
  .contact {
    width: 50%;
    margin: 8rem auto 0 auto;
    background-color: var(--secondary-color);
    padding: 10px;
    border-radius: 25px;
    font-weight: 500;
  }
}

@media screen and (max-width: 700px) {
  .navbar {
    width: 100%;
    padding: 7px 1rem;
  }
}

@media screen and (min-width: 700px) {
  .navbar {
    
    width: 70%;
    padding: 6px 1rem;
    .nav-link:not(:last-child) {
      margin-right: 2rem;
    }
    .contact {
      background-color: var(--secondary-color);
      padding: 12px 12px;
      color: white;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      font-weight: 500;
      &:hover {
        transform: translateY(-10px);
        background-color: var(--primary-color);
        color: white;
      }
    }
    
  }
}

@media screen and (min-width: 1024px) {
  .navbar {
    width: 65%;
  }
  .mobile-nav-links {
    display: none;
  }
  .nav-links {
    display: block;
  }
  .mobile-menu-open,
    .mobile-menu-close {
      display: none;
    }
}
</style>
