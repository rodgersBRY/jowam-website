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
        <div class="about-img"></div>
        <div class="about-text">
          <h2>WE STRIVE TO BE THE BEST</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius enim,
            accusantium repellat ex autem numquam iure officiis facere vitae
            itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nam qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
            modi quis iste tempora non, suscipit repellendus labore voluptatem
            dicta amet? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Provident, neque!
          </p>
        </div>
      </section>

      <section class="values">
          <v-card
            flat
            dark
            color="transparent"
            width="300px"
            class="pa-3"
            v-for="(val, index) in values"
            :key="index"
          >
            <v-icon large>{{ val.icon }}</v-icon>
            <v-card-title>{{ val.tab }}</v-card-title>
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
h1 {
  font-size: 50px;
}

.about-banner {
  background-image: url("../assets/img/home-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 50vh;
  color: white;
  padding: 0 0 3rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}


.values {
  padding: 1rem 5rem;
  display: flex;
  background: rgb(28, 28, 28);
  justify-content: space-around;
}

</style>
