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
        <router-link to="/events" class="nav-link">Events</router-link>
        <router-link to="/teachers" class="nav-link">Teachers</router-link>
        <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
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
      color: white;
    }
    .nav-link {
      text-decoration: none;
      list-style: none;
      display: inline-block;
      color: white;
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
</style>
