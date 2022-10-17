<template>
  <div id="footer">
    <div class="nav-links">
      <div
        class="company-name"
        @click="$router.push('/training')"
        style="cursor: pointer;"
      >
        Training Centre
      </div>
      <div class="router-links">
        <router-link to="/" tag="li">Jowam</router-link>
        <!-- <router-link to="/courses" tag="li">Courses</router-link> -->
        <router-link to="/events" tag="li">Events</router-link>
        <router-link to="/teachers" tag="li">Teachers</router-link>
        <router-link to="/contact-us" tag="li">Contact Us</router-link>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {{ year }} All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  #footer {
    color: black;
    .nav-links {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .company-name {
        font-size: 32px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #footer {
    .nav-links {
      width: 90%;
      .company-name {
        font-size: 25px;
      }
      .router-links {
        display: none;
      }
    }
    .copyright {
      display: none;
    }
  }
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
#footer {
  background-color: black;
  color: white;
  .nav-links {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .company-name {
      font-family: "Abril Fatface", cursive;
      border-top: 3px solid white;
    }
    li {
      list-style: none;
      display: inline-block;
      margin: 0 1.5rem;
      padding: 1rem 0;
    }
    li:hover {
      cursor: pointer;
    }
  }
  .copyright {
    width: 80%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    color: #adadad;
  }
}
</style>
