<template>
  <div class="home">
    <header>
      <section class="banner-div bg-cover bg-no-repeat">
        <div class="wrapper bg-black/70 w-full h-[60vh] lg:h-screen flex flex-col items-center pb-10">
          <nav-bar />
          
          <div class="header-intro text-white flex flex-col items-center text-center mt-auto">
            <h1 data-aos="fade-down" data-aos-duration="2400" class="font-bold">Jowam Coffee Traders</h1>
            <p data-aos="fade-down" data-aos-duration="2000" class="text-md md:text-xl px-2 md:px-4 lg:px-0">Promote majority small-scale farmers by marketing their coffee</p>
            <i class="mt-10 bx bx-chevrons-down bx-fade-down text-xl"></i>
          </div>
        </div>
      </section>
    </header>

    <main class="my-28">
      <section class="about-us mb-14 lg:mt-28 w-11/12 lg:w-4/5 mx-auto flex flex-col gap-16">
        <div 
        class="gateway text-xl tracking-wide flex flex-col lg:flex-row items-center gap-4 md:gap-12"
        v-for="(item, index) in items" :key="index"
        :class="{ 'lg:flex-row-reverse': item.reverse }">
          <div class="text-div lg:flex-1">
            <p class="section-title mb-3" data-aos="fade-right" data-aos-duration="1600">{{ item.title }}</p>
            <p
            v-html="item.text"
            data-aos="fade-left"
            data-aos-duration="2000" />
          </div>
          
          <div
          class="img-div bg-red-400 lg:flex-1 h-96 lg:w-[600px] rounded-lg overflow-hidden" 
          data-aos="fade-right" 
          data-aos-duration="2000">
            <img
            :src="item.url" alt="coffee beans" 
            class="h-full w-full object-cover transition-all duration-700 ease-in-out transform hover:scale-110" />
          </div>
        </div>
      </section>

      <section class="business-concept bg-cover bg-no-repeat w-full bg-fixed flex justify-center items-center">
        <div
        class="bg-black/60 text-white w-screen h-full p-5 md:p-14"
        >
          <h1 data-aos="fade-up"
          data-aos-duration="1600" class="section-title font-bold text-3xl mb-1">BUSINESS CONCEPT</h1>
        
          <p
          class="text-xl tracking-wider"
          data-aos="fade-up"
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

      <section class="partners mt-24">
        <h2 class="section-title font-bold text-center text-2xl mb-10">OUR PARTNERS</h2>

        <div class="partner-logos w-10/12 mx-auto max-w-screen-2xl relative h-52 overflow-hidden">
          <div class="marquee item-1 h-36 w-36 rounded-lg absolute left-full animate-scrollLeft p-6">
            <img :src="require('../assets/KCCE.png')" alt="KCCE logo" class="w-full h-full object-contain" />
          </div>

          <div class="marquee item-2 h-36 w-36 rounded-lg absolute left-full animate-scrollLeft p-6">
            <img :src="require('../assets/KCTA.png')" alt="KCTA logo" class="w-full h-full object-contain" />
          </div>

          <div class="marquee item-3 h-36 w-36 rounded-lg absolute left-full animate-scrollLeft p-6">
            <img :src="require('../assets/goldrock.png')" alt="Goldrock logo" class="w-full h-full object-contain" />
          </div>

          <div class="marquee item-4 h-36 w-36 rounded-lg absolute left-full animate-scrollLeft p-6">
            <img :src="require('../assets/dhl.png')" alt="dhl express logo" class="w-full h-full object-contain" />
          </div>

          <div class="marquee item-5 h-36 w-36 rounded-lg absolute left-full animate-scrollLeft p-6">
            <img :src="require('../assets/coffee_board.png')" alt="coffee board logo" class="w-full h-full object-contain" />
          </div>          
        </div>
      </section>

      <section class="choose-us w-11/12 lg:w-4/5 mx-auto flex flex-col gap-20 lg:mt-28">
        <p
        class="section-title text-center text-2xl"
        data-aos="fade-up"
        data-aos-duration="1600">Why Choose Our Green Coffee?</p>

        <div class="div-1 lg:flex gap-4 shadow-md rounded-lg overflow-hidden p-0 lg:pr-3"
        v-for="q in qualities" :key="q.id">
          <div class="img-div w-full h-[350px] overflow-hidden" data-aos="fade-up"
          data-aos-duration="2000">
            <img
            :src="q.url"
            alt="global initiative"
            class="h-full w-full object-cover" />
          </div>

          <div class="details flex gap-12 justify-around p-2 lg:p-0" data-aos="fade-up"
          data-aos-duration="2400">
            <div class="icon bg-green-700 h-[40px] w-[90px] lg:h-[70px] lg:w-[150px] rounded-[25%] p-2 flex items-center justify-center text-white text-xl md:text-4xl">
              <i :class="q.icon"></i>
            </div>

            <div class="text">
              <div 
              v-for="(l_item, index) in qualityList" 
              :key="index">
                <p
                class="text-sm lg:text-lg mb-2" 
                v-if="l_item.q_id == q.id"
                >
                  <span class="font-semibold">{{ l_item.title }}: </span>{{ l_item.desc }}
                </p>
              </div>
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
      items: [
        {
          title: "Introduction",
          text: 'At <span class="title font-semibold text-orange-400">Jowam Coffee Trading Company LTD</span> We are dedicated to delivering green coffee beans that meet the highest industry standards. Our rigorous quality control processes and close relationships with growers ensure that our clients receive beans that are perfect for roasting, cupping, and savoring',
          url: require('@/assets/img/g_beans.webp'),
          reverse: false
        },
        {
          title: "Your Gateway to Kenya’s Finest Green Coffee",
          text: "Kenya’s green coffee beans are celebrated worldwide for their bright acidity, full-bodied flavor, and delightful fruity notes. We partner with local farmers who share our dedication to quality, ensuring that each bean is a perfect representation of the unique Kenyan terroir.",
          url: require('../assets/img/hand_coffee.jpg'),
          reverse: true
        }
      ],
      qualities: [
        { url: require('@/assets/img/global.webp'), icon: 'mdi mdi-earth', id: 1 },
        { url: require('@/assets/img/quality.png'), icon: 'mdi mdi-gold', id: 2 },
      ],
      qualityList: [
        { q_id: 1, title: "Traceability", desc: "We provide complete transparency from the farm to your roastery, allowing you to trace the origin of every batch of beans." },
        { q_id: 1, title: "Global Expertise", desc: "With a robust logistics network, we ensure timely and efficient delivery to roasters and coffee traders worldwide." },
        { q_id: 2, title: "Exceptional Quality", desc: "We meticulously source and export only the highest quality Arabica beans, known for their distinct flavor profile and consistency." },
        { q_id: 2, title: "Sustainability", desc: "Our partnerships are built on sustainable practices that support environmental stewardship and uplift the farming communities." },
      ]
    };
  },
};
</script>

<style scoped lang="scss">
header {
  h1,
  p {
   font-family: "DM Serif Display", serif;
  }
}

.banner-div {
  background-image: url("../assets/img/home_bg.jpg");
}

.section-title {
  color: var(--primary-color);
  font-family: "DM Serif Display", serif;
}

.business-concept {
  background-image: url("../assets/img/cargo-ship.jpg");
}

.partner-logos {
  mask-image: linear-gradient(
    to right,
    rgba(0,0,0,0),
    rgba(0,0,0,1), 20%,
    rgba(0,0,0,1), 80%,
    rgba(0,0,0,0),
  );
  .marquee {
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

</style>
