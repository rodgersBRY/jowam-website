<template>
  <div id="footer">
    <section class="nav-links">
      <ul>
        <router-link exact-active-class="active" class="nav-link" to="/">
          Home
        </router-link>

        <router-link active-class="active" class="nav-link" to="/about">
          About Us
        </router-link>

        <router-link active-class="active" class="nav-link" to="/contact">
          Contact Us
        </router-link>
      </ul>
    </section>

    <section class="copyright">
      <p>Copyright &copy; {{ date }} All rights reserved.</p>
    </section>
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

<style scoped lang="scss">
#footer {
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  .nav-links {
    margin-bottom: 2rem;
    ul {
      list-style: none;
      padding: 0;
      .nav-link {
        text-decoration: none;
        color: black;
        display: inline-block;
        margin: 0 1rem;
        &:hover {
          cursor: pointer;
          color: green;
        }
      }
    }
  }
  .copyright {
    p {
      margin: 0;
      font-size: 14px;
      color: grey;
    }
    a {
      text-decoration: none;
      color: green;
    }
  }
}
</style>
