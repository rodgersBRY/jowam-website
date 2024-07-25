<template>
  <div id="about">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="about-banner">
        <div>
          <h1>ABOUT US</h1>
          <p>Strong Coffee, Strong Roots</p>
        </div>
      </section>

      <section class="about">
        <div class="about-text">
          <h2>WE STRIVE TO BE THE BEST</h2>
          <p>
            From cooperative society factory where berries are washed,
            processed, dried and stored, we move to private and state-owned
            coffee millers for another level of quality assurance by hulling
            dried coffee beans, grading/screening by size (AA, AB, C, E, HE, PB,
            SB, T, TT, UG, UG1, UG2, and UG3), shape, colour and weight. They
            label beans according to beans source farm, cooperative, plantation
            or garden for ascertaining FCS domestic collector/dealer
            connectivity with actual farmers.
          </p>
          <p>
            We, Jowam Trading Coffee Exporters, are committed to managing
            health, safety and environmental (HS&E) matters involved in the
            process as an integral part of our business. It is the company
            policy to assure the HS&E integrity of our processes and facilities
            at all times and all places.
          </p>
        </div>
        <div class="about-img">
          <img
            :src="require('../assets/img/plantation.jpg')"
            alt="jowam values"
          />
        </div>
      </section>

      <section class="values">
        <v-card
          dark
          color="transparent"
          class="pa-5 card"
          v-for="(val, index) in values"
          :key="index"
        >
          <v-card-title>
            <span class="mdi" :class="val.icon"></span>
            <h2>{{ val.tab }}</h2>
          </v-card-title>
          <v-card-text>{{ val.content }}</v-card-text>
        </v-card>
      </section>
    </main>

    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      values: [
        {
          icon: "mdi-barley",
          tab: "MISSION",
          content:
            "Jowam Coffee Trading Limited is committed to transforming the lives and livelihoods of coffee farmers, socially and economically by availing to them modern inclusive technologies for coffee farming, milling and beans evaluation and ensure production of the best quality coffee that will, in turn, generate more income for them.",
        },
        {
          icon: "mdi-camera-document",
          tab: "VISION",
          content:
            "To export large volumes of coffee from the region and beyond to international markets, sustain quality and help in reviving coffee farming in Kenya and the region as a viable business entity.",
        },
        {
          icon: "mdi-car-brake-retarder",
          tab: "GOALS & OBJECTIVE",
          content:
            "We are determined to be the best coffee dealers and merchants in the region and beyond, to promote unique coffees to the whole consumer world, to always provide our clients with the best quality, affordable coffee and to guarantee quality to our clients under the guidance of our directors who have decades-long experience in the industry. One of our main goals is to promote majority small-scale farmers by marketing their coffee and thereby creating a steady source of income for them",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.about-banner {
  background-image: url("../assets/img/home-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
}

.about {
  display: flex;
}

.values {
  display: flex;
  background: rgb(28, 28, 28);
  color: white;
  .card {
    span {
      font-size: 70px;
    }
  }
}

@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  .about-banner {
    background-attachment: fixed;
    height: 50vh;
    padding: 0 0 3rem 3rem;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .about {
    justify-content: space-around;
    width: 70%;
    margin: 5rem auto;
    .about-text {
      width: 40%;
    }
    .about-img {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .values {
    padding: 1rem 5rem;
    justify-content: space-around;
    .card {
      width: 400px;
    }
  }
}

@media screen and (max-width: 1000px) {
  h1 {
    font-size: 40px;
  }
  .about-banner {
    background-attachment: fixed;
    height: 40vh;
    padding: 0 0 0 1rem;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .about {
    flex-direction: column;
    padding: 1rem;
    margin: 2rem 0;
    .about-img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .values {
    flex-direction: column;
  }
}
</style>
