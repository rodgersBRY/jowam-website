<template>
  <div class="home">
    <header>
      <nav-bar />
    </header>

    <main>
      
      <section class="banner-div">
        <div>
          <h1>GREEN COFFE EXPORTS COMPANY</h1>
          <p>
            Promote majority small-scale farmers by marketing their coffee and
            thereby creating a steady source of income for them
          </p>

          <!-- <v-btn depressed dark color="green">FREE BOOTSTRAP TEMPLATES</v-btn> -->
        </div>
      </section>

      <section class="about-us">
        <div class="about-text pa-5">
          <h2>ABOUT <span class="green--text">US</span></h2>
          <p>
            <em
              >Jowam Coffee Trading Company Limited was founded in June 2006 as
              an exporting company for coffees. We also promote farmers by
              providing advanced farming technologies to ensure production of
              high-quality coffee that is of great value.</em
            >
          </p>
          <p>
            Jowam Coffee Trading Company limited is registered and incorporated
            under the Company’s Act in the Laws of Kenya. We are licensed under
            the Coffee Directorate Crops Act, 2013 and the Coffee (Forms) Rules,
            2002 as a licensed coffee dealer and exporter in Kenya. With well
            over thirty years of experience in the Coffee industry coupled with
            quality control, passion and commitment to service, Jowam Coffee
            Trading Company founders empower clients by providing coffees that
            ensure their product sales remain high.
          </p>
        </div>
        <div class="about-img">
          <img
            width="100%"
            :src="require('../assets/img/jowam7.jpg')"
            alt="about jowam coffee"
          />
        </div>
      </section>

      <section class="business-concept">
        <div>
          <h1>BUSINESS CONCEPTS</h1>
          <p>
            Through a business model that is geared towards easy access and
            convenience for our customers, Jowam Coffee Trading Company has
            evolved to become a trusted coffee dealer and exporter of Kenyan
            green Arabica coffee. Our business model has continued to earn
            global recognition in terms of coffee quality assurance, friendly
            sales contracts, and timely delivery of shipments. Since the
            incorporation of Jowam Coffee Trading Company Ltd, we have shipped
            large volumes of green coffee beans from Kenya to many countries
            around the world.
          </p>
        </div>
      </section>

      <h2 class="text-center mb-10">OUR PARTNERS</h2>

      <section class="partners">
        <br />
        <div class="partner-logos">
          <img
          width="250px"
          height="150px"
            v-for="(partner, index) in partners"
            :key="index"
            :src="partner.img"
            alt="jowam partners"
          />
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

      partners: [
        { img: require("../assets/KCCE.png"), title: "" },
        { img: require("../assets/KCTA.png"), title: "" },
        { img: require("../assets/goldrock.png"), title: "" },
        { img: require("../assets/dhl.png"), title: "" },
        { img: require("../assets/coffee_board.png"), title: "" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
main {
  .banner-div {
    background-image: url("../assets/img/home-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-us {
    display: flex;
    align-items: center;
  }

  .business-concept {
    background-image: url("../assets/about1.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partners {
    background: rgba(144, 144, 144, 0.1);
    padding: 2rem 0;
    .partner-logos {
      display: flex;
    }
  }
}

// mobile device
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  .banner-div {
    height: 50vh;
    margin-top: 3rem;
    div {
      width: 90%;
      height: 60%;
      p {
        font-size: 16px;
      }
    }
  }
  .about-us {
    flex-direction: column;
    width: 90%;
    margin: 1rem auto 0 auto;
    .about-text {
      width: 100%;
    }
  }

  .business-concept {
    padding: 2rem 0;
    margin: 3rem 0 5rem 0;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
      p {
        font-size: 16px;
      }
    }
  }
  .partner-logos {
    flex-direction: column;
    align-items: center;
    img {
      margin: 1rem 0;
      width: 200px;
      height: 200px;
    }
  }
}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  .banner-div {
    background-attachment: fixed;
    padding: 2rem 0;
    height: 70vh;
    div {
      width: 50%;
      height: 60%;
      p {
        font-size: 30px;
      }
    }
  }
  .about-us {
    width: 70%;
    margin: 10rem auto 0 auto;
    .about-text {
      width: 50%;
    }
    img {
      height: 500px;
    }
  }
  .business-concept {
    padding: 10px 0;
    margin: 10rem 0;
    height: 60vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 70%;
      p {
        font-size: 20px;
      }
    }
  }
  .partner-logos {
    justify-content: space-around;
  }
}
</style>
