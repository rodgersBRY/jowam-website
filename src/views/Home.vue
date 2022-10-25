<template>
  <div class="home">
    <div class="parent">
      <div class="header">
        <nav-bar />
      </div>

      <div class="main-content hidden-sm-and-down">
        <v-carousel cycle hide-delimiters show-arrows-on-hover height="700px">
          <v-carousel-item v-for="(cnt, i) in contents" :key="i" :src="cnt.img">
            <v-sheet
              color="transparent"
              height="100%"
              width="60%"
              class=" mx-auto pb-12 d-flex align-end px-12"
            >
              <div>
                <div class="carousel-title mb-12">
                  {{ cnt.title }}
                </div>
                <div class="carousel-text">{{ cnt.info }}</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <div class="exports d-flex justify-center align-center">
          <div class="export-content">
            <div class="text-center inner-div">
              <h3 class="mb-6">GREEN COFFEE EXPORTS</h3>
              <p>
                Jowam Trading Coffee exports approximately 6,000 bags of green
                coffee from Kenya yearly. The trading operation is run from the
                Nairobi head office where all the pre-auction and post- auction
                quality control is carried out. In the search of the right
                qualities around 500 samples of coffee are roasted and cupped
                weekly and their quality merits assessed. The team then takes
                the individual auction lots and carefully blends them to match
                the requirements of each customer. Jowam Trading Coffee has its
                warehouse and processing equipment in Nairobi in order to
                maintain control over quality and security right up to export.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- mobile layout -->
      <div class="pt-10 hidden-md-and-up">
        <div class="mobile-image-div pa-10" v-for="cs in contents" :key="cs.id">
          <div class="mobile-content">
            <h3 class="mb-3">{{ cs.title }}</h3>
            <p>{{ cs.info }}</p>
          </div>
          <div class="mobile-image">
            <img width="100%" :src="cs.img" />
          </div>
        </div>

        <div class="mobile-exports d-flex justify-center align-center">
          <div class="mobile-export-content">
            <div class="text-center mobile-inner-div">
              <h3 class="mb-6">GREEN COFFEE EXPORTS</h3>
              <p>
                Jowam Trading Coffee exports approximately 6,000 bags of green
                coffee from Kenya yearly. The trading operation is run from the
                Nairobi head office where all the pre-auction and post- auction
                quality control is carried out. In the search of the right
                qualities around 500 samples of coffee are roasted and cupped
                weekly and their quality merits assessed. The team then takes
                the individual auction lots and carefully blends them to match
                the requirements of each customer. Jowam Trading Coffee has its
                warehouse and processing equipment in Nairobi in order to
                maintain control over quality and security right up to export.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <bottom-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: "INTRODUCTION",
          info:
            "Jowam Coffee Trading Company limited is registered and incorporated under the Company’s Act in the Laws of Kenya. We are licensed under the Coffee Directorate Crops Act, 2013 and the Coffee (Forms) Rules, 2002 as a licensed coffee dealer and exporter in Kenya. With well over thirty years of experience in the Coffee industry coupled with quality control, passion and commitment to service, Jowam Coffee Trading Company founders empower clients by providing coffees that ensure their product sales remain high.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.farmafrica.org%2Fimages%2Ftwitter-cards%2Fgrace-arineitwe-social-card.jpg&f=1&nofb=1",
        },
        {
          title: "",
          info:
            "Jowam Coffee Trading Company Limited was founded in June 2006 as an exporting company for coffees. We also promote farmers by providing advanced farming technologies to ensure production of high-quality coffee that is of great value.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2ru2mvuh5wx24.cloudfront.net%2Favtivity_bootstrap%2F1204%2Fcoffee_galore__1920x864.jpg&f=1&nofb=1",
        },
        {
          title: "BUSINESS CONCEPTS",
          info:
            "Through a business model that is geared towards easy access and convenience for our customers, Jowam Coffee Trading Company has evolved to become a trusted coffee dealer and exporter of Kenyan green Arabica coffee. Our business model has continued to earn global recognition in terms of coffee quality assurance, friendly sales contracts, and timely delivery of shipments. Since the incorporation of Jowam Coffee Trading Company Ltd, we have shipped large volumes of green coffee beans from Kenya to many countries around the world.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheexchange.africa%2Fwp-content%2Fuploads%2F2018%2F05%2FCoffee-Bill-Coffee-farming-in-East-Africa-Uganda-Coffee-industry.jpg&f=1&nofb=1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  background-image: url(https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/coffee1_zXbvcAYrD.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.header {
  position: relative;
  z-index: 10;
}

.parent {
  background-color: rgba(46, 22, 14, 0.5);
}

.carousel-title {
  color: orange;
  font-size: 44px;
  font-weight: bold;
}

.carousel-text {
  font-size: 24px;
  color: white;
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 300px;
  width: 40%;
  border-radius: 10px;
  padding: 3rem;
  text-align: center;
  position: relative;
  left: 5%;
}

.content-two {
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 300px;
  width: 40%;
  border-radius: 10px;
  padding: 3rem;
  text-align: center;
  position: relative;
  right: 5%;
}

.image {
  width: 100%;
  flex-basis: 70%;
}

.image img {
  border-radius: 5px;
}

.exports,
.mobile-exports {
  background-color: #ba8445;
}

.export-content {
  background-color: rgba(255, 255, 255, 0.9);
  width: 55%;
  border-radius: 5px;
  margin: 4rem 0;
  padding: 5px;
}

.mobile-export-content {
  background-color: rgba(255, 255, 255, 0.9);
  width: 90%;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
}

.inner-div {
  border: 4px solid #ba8445;
  border-radius: 5px;
  padding: 3rem;
}

.mobile-inner-div {
  border: 2px solid #ba8445;
  border-radius: 5px;
  padding: 1rem;
}

.mobile-content {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 2rem;
  border-radius: 5px 5px 0 0;
}
</style>
