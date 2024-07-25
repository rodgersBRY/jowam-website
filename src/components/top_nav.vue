<template>
  <div id="nav">
    <div
      class="company-name"
      @click="$router.push('/')"
      style="cursor: pointer;"
    >
      Training Centre
    </div>
    <div class="router-links">
      <router-link to="/events" class="nav-link" active-class="active"
        >Events</router-link
      >
      <router-link to="/teachers" class="nav-link" active-class="active"
        >Teachers</router-link
      >
      <router-link to="/contact-us" class="nav-link" active-class="active"
        >Contact Us</router-link
      >
      <a
        href="https://jowamcoffee.co.ke"
        exact-active-class="active"
        class="jowam-btn"
      >
        Jowam Traders
      </a>
    </div>

    <button class="mobile-menu-icon white--text" @click="openNav">
      <i class="fa fa-bars"></i>
    </button>

    <div class="mobile-menu-items" id="mobile-menu-items">
      <button @click="closeNav"><i class="fa fa-close"></i></button>

      <router-link to="/events" class="nav-link" active-class="active">
        Events
      </router-link>
      <router-link to="/teachers" class="nav-link" active-class="active">
        Teachers
      </router-link>
      <router-link to="/contact-us" class="nav-link" active-class="active">
        Contact Us
      </router-link>
      <button href="https://jowamcoffee.co.ke" class="jowam-btn-mobile">
        Jowam Coffee
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // created() {
  //   var prevScrollPos = window.scrollY;
  //   window.onscroll = () => {
  //     var currentScrollPos = window.scrollY;
  //     if (prevScrollPos > currentScrollPos) {
  //       document.getElementById("nav").style.top = "0";
  //     } else {
  //       document.getElementById("nav").style.top = "-100px";
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };
  // },

  methods: {
    openNav() {
      document.getElementById("mobile-menu-items").style.width = "100%";
    },
    closeNav() {
      document.getElementById("mobile-menu-items").style.width = "0";
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  transition: top 0.5s ease;
  .router-links .nav-link {
    text-decoration: none;
    color: white;
  }
  .company-name {
    font-family: "Abril Fatface", cursive;
    border-top: 3px solid white;
    padding: 1rem 0;
    color: white;
  }
  .router-links {
    .nav-link {
      list-style: none;
      display: inline-block;
      margin: 0 1.5rem;
      padding: 2rem 0;
      font-size: 16px;
      color: white;
    }
    li:hover,
    li.active {
      color: white;
      border-top: 3px solid white;
      cursor: pointer;
    }
  }
  .mobile-menu-icon {
    color: white;
    background: transparent;
    border-style: none;
  }
  .mobile-menu-items {
    padding-top: 5rem;
    position: fixed;
    right: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
    .nav-link {
      font-size: 18px;
      text-decoration: none;
      display: block;
      list-style: none;
      text-align: center;
      color: white;
      padding: 2rem 1rem;
      &.active, &:hover {
        background: rgb(44, 44, 44);
      }
    }
    button:first-child {
      background: transparent;
      position: absolute;
      right: 2%;
      top: 1%;
      border: 2px solid grey;
      padding: 10px;
      font-size: 30px;
      color: white;
      cursor: pointer;
    }
    .jowam-btn-mobile {
      text-decoration: none;
      color: white;
      background: #ba8445;
      padding: 8px;
      width: 100%;
      margin: 40px 0;
      border-radius: 5px;
    }
  }
  
  .jowam-btn {
    margin-left: 3rem;
    text-decoration: none;
    color: white;
    background: #ba8445;
    padding: 1rem 2rem;
    border-radius: 5px;
  }
}

@media screen and (min-width: 1000px) {
  #nav {
    justify-content: space-between;
    .company-name {
      margin-left: 10rem;
      font-size: 30px;
    }
    .router-links {
      margin-right: 10rem;
    }
    .mobile-menu-icon,
    .mobile-menu-items {
      display: none;
    }
  }
}

@media screen and (max-width: 1000px) {
  #nav {
    background-color: rgba($color: #000000, $alpha: 0.7);
    display: flex;
    justify-content: space-between;
    .router-links {
      display: none;
    }
    .company-name {
      margin-left: 2rem;
      font-size: 25px;
    }
    .mobile-menu-icon {
      margin-right: 1rem;
      font-size: 20px;
    }
  }
}


</style>
