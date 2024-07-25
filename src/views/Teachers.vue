<template>
  <div id="teachers-page">
    <header>
      <menu-bar />
      <div class="header-content">
        <h1>
          Our <br />
          Teachers
        </h1>
      </div>
    </header>

    <main>
      <section class="teachers">
        <div class="card" v-for="(tr, i) in teachers" :key="i">
          <!-- <v-avatar color="grey lighten-2" size="200">
            <v-icon size="150">mdi-account-outline</v-icon>
          </v-avatar> -->
          <p>{{ tr.name }}</p>
          <p class="subtitle">{{ tr.subtitle }}</p>
        </div>
      </section>
    </main>
    <footer>
      <training-footer />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers: [
        { name: "Tony", subtitle: "Mixologist, Barista" },
        { name: "Clinton Munene", subtitle: "Barista" },
        { name: "Margaret Macharia", subtitle: "Mixology Specialist, Barista" },
        { name: "Milka", subtitle: "Roaster, Barista"}
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 10px;
  font-family: "Abril Fatface", cursive;
  color: white;
}

header {
  background-image: url("../assets/teachers-banner.webp");
  background-size: cover;
  background-attachment: fixed;
  .header-content {
    display: flex;
    align-items: flex-end;
    height: 90%;
  }
}

main {
  .teachers {
    display: grid;
    gap: 20px;
    justify-content: space-between;
    flex-flow: row wrap;
    .card {
      text-align: center;
      border: 1px solid rgb(203, 203, 203);
      border-radius: 15px;
      padding: 1rem;
      img {
        border-radius: 50%;
      }
      p {
        margin-top: 10px;
        font-size: 22px;
        font-family: "Abril Fatface", cursive;
        letter-spacing: 1px;
      }
      .subtitle {
        font-size: 16px;
        color: grey;
        margin: 0;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    height: 50vh;
    .header-content {
      padding-left: 5rem;
      h1 {
        font-size: 75px;
      }
    }
  }

  main {
    .teachers {
      grid-template-columns: 1fr 1fr;
      width: 70%;
      margin: 3rem auto 5rem auto;
      .card {
        width: 400px;
        img {
          width: 40%;
          height: 60%;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    height: 50vh;
    .header-content {
      padding-left: 2rem;
      h1 {
        font-size: 75px;
      }
    }
  }
  main {
    .teachers {
      margin-top: 10rem;
      .card {
        width: 400px;
        img {
          width: 40%;
          height: 60%;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  header {
    height: 40vh;
    .header-content {
      padding-left: 1rem;
      h1 {
        font-size: 50px;
      }
    }
  }

  main {
    .teachers {
      grid-template-columns: 1fr;
      width: 100%;
      margin: 0;
      padding: 15px;
      .card {
        width: 100%;
        margin: 2rem auto;
        img {
          width: 80%;
          height: 200px;
        }
      }
    }
  }
}
</style>
