<template>
  <div class="home">
    <header>
      <section class="banner-div">
        <div class="wrapper">
          <nav-bar />
          
          <div class="header-intro">
            <h1 data-aos="fade-down" data-aos-duration="2400">Jowam Coffee Traders</h1>
            <p data-aos="fade-down" data-aos-duration="2000">Promote majority small-scale farmers by marketing their coffee</p>
          </div>
        </div>
      </section>
    </header>

    <main>
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
            data-aos="fade-right"
            data-aos-duration="2000"
            width="100%"
            :src="require('../assets/img/jowam7.jpg')"
            alt="about jowam coffee"
          />
        </div>
      </section>

      <section class="business-concept">
        <div
        >
          <h1 data-aos="fade-right"
          data-aos-duration="1600">BUSINESS CONCEPTS</h1>
        
          <p data-aos="fade-right"
          data-aos-duration="2000">
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
          <div class="marquee item-1">
            <img :src="require('../assets/KCCE.png')" alt="KCCE logo" />
          </div>

          <div class="marquee item-2">
            <img :src="require('../assets/KCTA.png')" alt="KCTA logo" />
          </div>

          <div class="marquee item-3">
            <img :src="require('../assets/goldrock.png')" alt="Goldrock logo" />
          </div>

          <div class="marquee item-4">
            <img :src="require('../assets/dhl.png')" alt="dhl express logo" />
          </div>

          <div class="marquee item-5">
            <img :src="require('../assets/coffee_board.png')" alt="coffee board logo" />
          </div>          
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
    };
  },
};
</script>

<style scoped lang="scss">
main {
  .banner-div {
    background-image: url("../assets/img/home_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    .wrapper {
      background-color: rgba($color: black, $alpha: 0.7);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-inline: 2rem;
      .header-intro {
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .about-us {
    display: flex;
    align-items: center;
  }

  .business-concept {
    background-image: url("../assets/img/cargo-ship.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      background-color: rgba($color: black, $alpha: 0.6);
      color: white;
      width: 100%;
      height: 100%;
    }
  }

  .partner-logos {
    width: 90%;
    margin-inline: auto;
    max-width: 1536px;
    position: relative;
    height: 200px;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0,0,0,0),
      rgba(0,0,0,1), 20%,
      rgba(0,0,0,1), 80%,
      rgba(0,0,0,0),
    );
    .marquee {
      height: 150px;
      width: 150px;
      border-radius: 10px;
      position: absolute;
      left: 100%;
      animation-name: scrollLeft;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 10s;
      padding: 1.5rem 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .item-1 {
      animation-delay: calc(30s / 5 * (5 - 1) * -1);
    }

    .item-2 {
      animation-delay: calc(30s / 5 * (5 - 2) * -1);
    }

    .item-3 {
      animation-delay: calc(30s / 5 * (5 - 3) * -1);
    }
    
    .item-4 {
      animation-delay: calc(30s / 5 * (5 - 4) * -1);
    }
    
    .item-5 {
      animation-delay: calc(30s / 5 * (5 - 5) * -1);
    }
  }
}

@keyframes scrollLeft {
  to {
    left: -200px;
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
    margin: 3rem 0 5rem 0;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
      padding: 2rem 10px;
      p {
        font-size: 16px;
      }
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
    margin: 10rem 0;
    height: 60vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 3rem 10rem;
      p {
        font-size: 20px;
      }
    }
  }
}
</style>
