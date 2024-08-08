<template>
  <div class="home">
    <header>
      <section class="banner-div">
        <div class="wrapper">
          <nav-bar />
          
          <div class="header-intro">
            <h1 data-aos="fade-down" data-aos-duration="2400">Jowam Coffee Traders</h1>
            <p data-aos="fade-down" data-aos-duration="2000">Promote majority small-scale farmers by marketing their coffee</p>
            <i class="mt-10 bx bx-chevrons-down bx-fade-down"></i>
          </div>
        </div>
      </section>
    </header>

    <main>
      <section class="about-us">
        <div class="gateway text-xl tracking-wide">
          <div class="text-div" data-aos="fade-left" data-aos-duration="2000">
            <p>
              At <span class="title">Jowam Coffee Trading Company LTD</span>
              We are dedicated to delivering green coffee beans that meet the highest industry standards. Our rigorous quality control processes and close relationships with growers ensure that our clients receive beans that are perfect for roasting, cupping, and savoring
            </p>
          </div>
          
          <div class="img-div" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-back">
            <img :src="require('@/assets/img/g_beans.webp')" alt="coffee beans">
          </div>
        </div>

        <div class="intro">
          <div class="text-div pa-5">
            <p class="section-title mb-3" data-aos="fade-right" data-aos-duration="1600">Your Gateway to Kenya’s Finest Green Coffee</p>

            <p class="text-xl tracking-wide" data-aos="fade-right" data-aos-duration="2000">
              Kenya’s green coffee beans are celebrated worldwide for their bright acidity, full-bodied flavor, and delightful fruity notes. We partner with local farmers who share our dedication to quality, ensuring that each bean is a perfect representation of the unique Kenyan terroir.
            </p>
          </div>
  
          <div
          class="img-div"
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-offset="300"
          data-aos-duration="2000">
            <img
              :src="require('../assets/img/hand_coffee.jpg')"
              alt="about jowam coffee"
            />
          </div>
        </div>
      </section>

      <section class="business-concept">
        <div
        >
          <h1 data-aos="fade-up"
          data-aos-duration="1600">BUSINESS CONCEPTS</h1>
        
          <p data-aos="fade-up"
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

      <section class="choose-us">
        <p
        class="section-title"
        data-aos="fade-up"
        data-aos-duration="1600">Why Choose Our Green Coffee?</p>

        <div class="div-1">
          <div class="img-div" data-aos="fade-up"
          data-aos-duration="2000">
            <img :src="require('@/assets/img/global.webp')" alt="global initiative">
          </div>

          <div class="details" data-aos="fade-up"
          data-aos-duration="2400">
            <div class="icon">
              <i class="mdi mdi-earth"></i>
            </div>
            
            <div class="text">
              <p><span>Traceability: </span>We provide complete transparency from the farm to your roastery, allowing you to trace the origin of every batch of beans.</p>
              <p><span>Global Expertise: </span>With a robust logistics network, we ensure timely and efficient delivery to roasters and coffee traders worldwide.</p>
            </div>
          </div>
        </div>

        <div class="div-2">
          <div class="img-div" data-aos="fade-up"
          data-aos-duration="1600">
            <img :src="require('@/assets/img/quality.png')" alt="quality control">
          </div>

          <div class="details" data-aos="fade-up"
          data-aos-duration="2000">
            <div class="icon">
              <i class="mdi mdi-gold"></i>
            </div>
            
            <div class="text">
              <p><span>Exceptional Quality: </span>We meticulously source and export only the highest quality Arabica beans, known for their distinct flavor profile and consistency.</p>
              <p><span>Sustainability: </span>Our partnerships are built on sustainable practices that support environmental stewardship and uplift the farming communities.</p>
            </div>
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
      .header-intro {
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        i {
          font-size: 30px;
        }
      }
    }
  }

  .section-title {
    color: var(--primary-color);
    font-weight: bold;
  }

  .about-us {
    margin-top: 6rem;
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .intro,
    .gateway {
      display: flex;
      gap: 2rem;
      .text-div {
        flex: 1;
        span {
          color: var(--primary-color);
          font-weight: 500;
        }
      }
      .img-div {
        flex: 1;
        width: 200px;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: all .7s ease-in-out;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .gateway {
      flex-direction: row-reverse;
    }
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

  .choose-us {
    width: 80%;
    margin-inline: auto;
    margin-block: 4rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .section-title {
      text-align: center;
      font-size: 25px;
    }
    .div-1,
    .div-2 {
      display: flex;
      gap: 1rem;
      box-shadow: 0 4px 8px rgba($color: black, $alpha: 0.1);
      border-radius: 10px;
      overflow: hidden;
      padding: 0 12px 0 0;
      .img-div {
        width: 100%;
        height: 350px;
        overflow: hidden;
        
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .details {
        display: flex;
        gap: 3rem;
        justify-content: space-around;
        .icon {
          background-color: var(--secondary-color);
          height: 70px;
          width: 150px;
          border-radius: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 35px;
        }
        .text p {
          font-size: 17px;
          margin-bottom: 10px;
          span {
            font-weight: 600;
          }
        }
      }
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
      height: 60%;
      p {
        font-size: 16px;
      }
    }
  }
  .intro {
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
    height: 90vh;
    div {
      width: 50%;
      height: 60%;
      p {
        font-size: 30px;
      }
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
