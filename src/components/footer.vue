<template>
  <div class="footer">
    <div class="footer-desktop hidden-sm-and-down">
      <p class="title">Jowam Coffee</p>
      <v-divider color="white" />
      <div class="shortcuts my-5 px-4">
        <div class="nav-details d-flex">
          <header>Home</header>
          <ul>
            <li>|</li>
            <li>Introduction</li>
            <li>Business Concepts</li>
            <li>Green Coffee Exports</li>
          </ul>
        </div>
        <div class="nav-details d-flex mt-4">
          <header>About</header>
          <ul>
            <li>|</li>
            <li>Privacy Notice</li>
            <li>Our Company</li>
            <li>Mission, Vision, Goals & Objectives</li>
          </ul>
        </div>
        <div class="nav-details d-flex mt-4">
          <header>Network</header>
          <ul>
            <li>|</li>
            <li>Regulators</li>
            <li>Farm Management Agents</li>
            <li>Auctioneers</li>
            <li>Millers and Marketers</li>
          </ul>
        </div>
        <div class="nav-details d-flex mt-4">
          <header>Contacts</header>
          <ul>
            <li>|</li>
            <li>City/Town</li>
            <li>Country</li>
            <li>Mobile</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <v-divider color="white" />
      <div class="d-flex justify-space-between align-center mt-7">
        <div>
          Developed by <a href="mailto:brianmawira2@gmail.com">Mawira </a>
        </div>
        <div>Copyright &copy; {{ date }} Jowam Coffee</div>
      </div>
    </div>

    <div class="footer-mobile hidden-md-and-up text-center">
      <div>
        Developed by <a href="mailto:brianmawira2@gmail.com">Mawira </a>
      </div>
      <div>Copyright &copy; {{ date }} Jowam Coffee</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: rgb(46, 22, 14);
  color: grey;
}

.footer-desktop {
  padding: 2rem 10rem;
}

.footer-mobile {
  padding: 1rem;
}

.footer a {
  text-decoration: none;
}

.nav-details ul li {
  list-style-type: none;
  margin: 0 15px;
  display: inline-block;
}
</style>
