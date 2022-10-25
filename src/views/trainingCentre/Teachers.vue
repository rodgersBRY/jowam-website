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
          <img
            :src="tr.img"
            :alt="[
              tr.img,
              'jowam teachers',
              'jowam training centre',
              'coffee experts',
              'coffee barista',
              'coffee courses',
            ]"
          />
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
        {
          img: require("../../assets/potrait2.webp"),
          name: "Derreck Thompson",
          subtitle: "Barista",
        },
        {
          img: require("../../assets/potrait3.webp"),
          name: "John Mark",
          subtitle: "",
        },
        {
          img: require("../../assets/potrait4.webp"),
          name: "Ivan Mutugi",
          subtitle: "",
        },
        {
          img: require("../../assets/potrait5.webp"),
          name: "Lady Las",
          subtitle: "",
        },
        {
          img: require("../../assets/potrait6.webp"),
          name: "Jackie Jun",
          subtitle: "",
        },
        {
          img: require("../../assets/potrait7.webp"),
          name: "Lizzie Kims",
          subtitle: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  color: black;
}
h1 {
  letter-spacing: 10px;
  font-family: "Abril Fatface", cursive;
}

header {
  background-image: url("../../assets/teachers-banner.webp");
  background-size: cover;
  padding-bottom: 3rem;
  .header-content {
    display: flex;
    align-items: flex-end;
    height: 70%;
    margin: auto;
  }
}

main {
  .teachers {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    .card {
      text-align: center;
      img {
        border-radius: 50%;
      }
      p {
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
    height: 70vh;
    .header-content {
      padding-left: 5rem;
      h1 {
        font-size: 105px;
      }
    }
  }

  main {
    .teachers {
      width: 70%;
      margin: 10rem auto 5rem auto;
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
    height: 60vh;
    .header-content {
      padding-left: 2rem;
      h1 {
        font-size: 105px;
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
    height: 50vh;
    .header-content {
      padding-left: 1rem;
      h1 {
        font-size: 50px;
      }
    }
  }

  main {
    .teachers {
      // display: block;
      flex-direction: column;
      width: 100%;
      margin: 0;
      .card {
        width: 50%;
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
