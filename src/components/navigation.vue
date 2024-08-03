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
      </ul>
    </section>

    <router-link active-class="active" class="contact nav-link" to="/contact">
      Contact Us
  </router-link>

    <section class="mobile-nav-links">
      <i icon class="mobile-menu-close" color="white" @click="closeNavMenu"
        ><span class="mdi mdi-close"></span></
      i>
      <ul class="list">
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>
        
        <router-link active-class="active" class="nav-link" to="/contact-us">
          Training Centre
        </router-link>

        <router-link class="contact nav-link" to="/contact">
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
.navbar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin-top: 1.5rem;
  z-index: 1;
  margin-inline: auto;
  box-shadow: 0 4px 8px rgba($color: black, $alpha: 0.1);
  padding: 7px 1rem;
  img {
    width: 40px;
    height: 40px;
  }
  .nav-link {
    text-decoration: none;
    color: gray;
    font-weight: 700;
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
    }
  }
}

.nav-links, .contact {
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
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav-link {
      display: block;
      margin-bottom: 2rem;
      color: white;
      font-size: 22px;
    }
  }
  
  .contact {
    text-align: center;
    width: 40%;
    margin: 8rem auto 0 auto;
    background-color: var(--secondary-color);
    padding: 10px;
    border-radius: 25px;
    font-weight: 500;
  }
}

// mobile device
@media screen and (max-width: 700px) {
  .navbar {
    width: 90%;
  }
}

// tablet and desktop
@media screen and (min-width: 700px) {
  .navbar {
    width: 70%;
    .nav-link {
      margin-right: 2rem;
    }
    .contact {
      margin-right: 0;
      background-color: var(--secondary-color);
      padding: 12px 12px;
      color: white;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      font-weight: 500;
      &:hover {
        transform: translateY(-2px);
        background-color: var(--primary-color);
        color: white;
      }
    }
    
  }
}

// large screens
@media screen and (min-width: 1024px) {
  .navbar {
    width: 65%;
  }
  .mobile-nav-links {
    display: none;
  }
  .nav-links, .contact {
    display: block;
  }

  .mobile-menu-open,
    .mobile-menu-close {
      display: none;
    }
}
</style>
