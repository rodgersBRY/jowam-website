<template>
  <div id="nav">
    <div
      class="company-name"
      @click="$router.push('/training')"
      style="cursor: pointer;"
    >
      Training Centre
    </div>
    <div class="router-links">
      <router-link to="/events" tag="li" active-class="active"
        >Events</router-link
      >
      <router-link to="/teachers" tag="li" active-class="active"
        >Teachers</router-link
      >
      <router-link to="/contact-us" tag="li" active-class="active"
        >Contact Us</router-link
      >
      <a
        href="https://jowamcoffee.co.ke"
        exact-active-class="active"
        class="jowam-btn"
      >
        Jowam
      </a>
    </div>

    <button class="mobile-menu-icon white--text" @click="openNav">
      <i class="fa fa-bars"></i>
    </button>

    <div class="mobile-menu-items" id="mobile-menu-items">
      <button @click="closeNav"><i class="fa fa-close"></i></button>

      <router-link to="/events" tag="li" active-class="active"
        >Events</router-link
      >
      <router-link to="/teachers" tag="li" active-class="active"
        >Teachers</router-link
      >
      <router-link to="/contact-us" tag="li" active-class="active"
        >Contact Us</router-link
      ><a
        href="https://jowamcoffee.co.ke"
        tag="li"
        exact-active-class="active"
        style="margin-top: 4rem"
        class="jowam-btn-mobile"
        >Jowam</a
      >
    </div>
  </div>
</template>

<script>
export default {
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
.jowam-btn {
  margin-left: 3rem;
  padding: 1rem 2rem;
}

.jowam-btn-mobile {
  width: 50%;
  margin: 0 auto;
}
.jowam-btn,
.jowam-btn-mobile {
  text-decoration: none;
  color: white;
  background: #ba8445;

  border-radius: 5px;
}

@media screen and (min-width: 1200px) {
  #nav {
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

@media screen and (max-width: 1200px) {
  #nav {
    .company-name {
      margin-left: 3rem;
      font-size: 27px;
    }
    .mobile-menu-icon {
      display: block;
      margin-right: 3rem;
      font-size: 22px;
    }
    .router-links {
      display: none;
    }
  }
}

@media screen and (max-width: 900px) {
  #nav {
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

#nav {
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  justify-content: space-between;

  .company-name {
    font-family: "Abril Fatface", cursive;
    border-top: 3px solid white;
    padding: 1rem 0;
    color: white;
  }
  .router-links {
    li {
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
    background: transparent;
    border-style: none;
    // color: white;
    cursor: pointer;
  }

  .mobile-menu-items {
    padding-top: 5rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
    li {
      list-style: none;
      text-align: center;
      color: white;
      padding: 2rem 1rem;
      cursor: pointer;
    }
    li:hover,
    li.active {
      background: rgb(44, 44, 44);
    }
    button {
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
  }
}
</style>
