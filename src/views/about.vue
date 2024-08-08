<template>
  <div id="about">
    <header>
       <div class="wrapper bg-black/45 h-full w-full flex flex-col">
        <nav-bar />

        <div class="bg-black/25 text-white py-5 px-10 border-y-4 border-green-500 backdrop-blur-md mt-auto">
          <h1 data-aos="fade-right" data-aos-duration="2400">ABOUT US</h1>
          <p data-aos="fade-right" data-aos-duration="2800">Strong Coffee, Strong Roots</p>
        </div>
      </div>
    </header>

    <main>
      <section class="history">
        <div class="intro">
          <p class="section-title" data-aos="fade-up" data-aos-duration="2900">STRIVING FOR EXCELLENCE SINCE 2006</p>
          <div class="divider" />

          <div data-aos="fade-up" data-aos-duration="2000">
            <strong>Jowam Coffee Traders LTD was founded in June 2006 as an 
              exporting company for coffees. We promote farmers by
              providing advanced farming technologies to ensure production of
              high-quality coffee that is of great value.
              The company is registered and incorporated
              under the Company’s Act in the Laws of Kenya and licensed under
              the Coffee Directorate Crops Act, 2013 and the Coffee (Forms) Rules,
              2002 as a licensed coffee dealer and exporter in Kenya. With well
              over thirty years of experience in the Coffee industry coupled with
              quality control, passion and commitment to service, Jowam Coffee
              Trading Company founders empower clients by providing coffees that
              ensure their product sales remain high.</strong>
          </div>
        </div>

        <div class="personnel">
          <p data-aos="fade-right" data-aos-duration="2800">
            Our employees are working in a very good spirit to service customers
            24 hours a day and 7 days a week.
            Our company consists of different units for smooth operation. 
            These units include management, finance, operations, quality control,
            marketing, and Sales & Purchase. 
          </p>

          <p data-aos="fade-left" data-aos-duration="2800">
            In the warehouse department, the following units are working in different roles: management, coffee cleaning staff,
            quality inspector, machine operator, packaging and labeling, laborer, and security staff.
            Our logistics team works its best for timely shipment of coffee to destinations.
            In general our company, has a long time experience and knowledge in the coffee export business.
          </p>
        </div>

        <div class="image-div">
          <img width="100%" :src="require('@/assets/img/jowam7.jpg')" alt="coffee factory">
        </div>
      </section>

      <section class="values">
        <v-card
          dark
          class="pa-5 card mx-4"
          v-for="(val, index) in values"
          :key="index"
          data-aos="fade-left"
          :data-aos-duration="1700+(index + 1) * 300"
        >
          <v-card-title>
            <span class="mdi" :class="val.icon"></span>
            <h2>{{ val.tab }}</h2>
          </v-card-title>
          <v-card-text>{{ val.content }}</v-card-text>
        </v-card>
      </section>
      
      <section class="market-source w-8/12 mx-auto flex flex-col gap-16">
        <div class="source flex gap-36">
          <div class="title-div">
            <div class="w-1/4 h-[3px] bg-orange-300 mb-2" />
            <p class="text-2xl font-semibold"  data-aos="fade-up" data-aos-duration="2000">Coffee Source</p>
          </div>

          <div class="info-div flex-1 tracking-wider font-light">
            From cooperative society factory where berries are washed, processed, 
            dried and stored, we move to private coffee millers for another 
            level of quality assurance by hulling dried coffee beans, grading/screening 
            by size (AA, AB, C, E, HE, PB, SB, T, TT, UG, UG1, UG2, and UG3), shape, colour and weight.
          </div>
        </div>

        <div class="market flex gap-44">
          <div class="title-div">
            <div class="w-1/4 h-[3px] bg-orange-300 mb-2" />
            <p class="text-2xl font-semibold"  data-aos="fade-up" data-aos-duration="2000">Our Market</p>
          </div>

          <div class="info-div flex-1 tracking-wider font-light">
            Our primary focus is on exporting specialty, premium quality, and commercial
             Kenyan coffee to markets around the globe. Since 2006, we have successfully
             exported over 19,000 tons of coffee to various countries, including South Korea,
             Japan, Australia, the USA, Italy and many others.
             Our products reach almost every continent, with a significant
             portion of our exports going to the Asian market.
          </div>
        </div>
      </section>

      <section class="img w-6/12 h-[70vh] overflow-hidden rounded-2xl mx-auto my-16">
        <div class="about-img">
          <img
            :src="require('../assets/img/plantation.jpg')"
            alt="jowam values"
          />
        </div>
      </section>

      <section class="about w-10/12 mx-auto my-20">
        <div class="about-text">
          <p class="font-semibold text-3xl text-center mb-5"  data-aos="fade-up" data-aos-duration="2800">Why is Kenyan Coffee Unique?</p>
          <div class="w-1/12 h-[3px] mx-auto bg-orange-300 mb-4" />

          <p class="tracking-wider text-center"  data-aos="fade-up" data-aos-duration="2000">
            Kenyan coffee is cultivated in well-drained red volcanic soils, rich in phosphates, 
            found around the slopes and foothills of Mount Kenya, the Aberdare Ranges, Mount Elgon, 
            the Kisii Highlands, and parts of the Rift Valley. The primary type of coffee grown
            in Kenya is Arabica, with Robusta making up only 1 percent of the production. 
            All Kenyan Arabica is grown at altitudes above 1,220 meters above sea level.
            Kenyan coffee undergoes a meticulous process from seed to cup, including stages 
            such as nursery, farming, pulping, milling, and grading. The coffee is handpicked, 
            hand-sorted, sun-dried, and carefully processed, ensuring that the resulting cup 
            is exceptionally well-balanced in body and acidity, 
            with an intense flavor and a pleasant aroma featuring notes of blackcurrant, honey, 
            caramel, and chocolate. This attention to detail ensures that consumers enjoy only 
            the finest Kenyan coffee, which is among the most sought-after in the world.
            Kenya experiences two distinct flowering seasons each year: March/April and October to December. 
            In most counties, the main crop ripens between October and December, while the early crop is harvested 
            from May to July, ensuring that Kenyan coffee is available year-round.
          </p>
        </div>
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
          icon: "mdi-car-brake-retarder",
          tab: "GOALS & OBJECTIVE",
          content:
            "We are determined to be the best coffee dealers and merchants in the region and beyond, to promote unique coffees to the whole consumer world, to always provide our clients with the best quality, affordable coffee and to guarantee quality to our clients under the guidance of our directors who have decades-long experience in the industry. One of our main goals is to promote majority small-scale farmers by marketing their coffee and thereby creating a steady source of income for them",
        },
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
      ],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: url("../assets/img/cherries.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: var(--secondary-color);
}

.divider {
  background-color: var(--primary-color);
  height: 3px;
  width: 10%;
}

.history {
  width: 75%;
  margin: 1rem auto;
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: 1rem;
    font-size: 14px;
    gap: 2rem;
  }
  .personnel {
    display: flex;
    gap: 3rem;
    margin-block: 2rem;
    p {
      flex: 1;
    }
  }
  .image-div {
    height: 90vh;
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.values {
  background-image: url('@/assets/img/berries1.jpg');
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  color: white;
  margin-block: 9rem;
  .card {
    background-color: rgba(0, 0, 0, .9);
    color: white;
    span {
      font-size: 70px;
    }
  }
}

// desktop
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }

  header {
    height: 90vh;
    margin-bottom: 5rem;
  }
  .values {
    padding: 1rem 5rem;
    justify-content: space-around;
    .card {
      width: 400px;
    }
  }
}

// tablet and mobile
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 40px;
  }
  header {
    height: 50vh;
    align-items: center;
    .wrapper {
      background-color: rgba($color: black, $alpha: 0.7);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .values {
    flex-direction: column;
  }
}
</style>
