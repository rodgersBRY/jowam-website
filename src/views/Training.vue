<template>
  <div id="training-page">
    <header class="bg-cover bg-center bg-fixed h-[50vh] md:h-[70vh]">
      <div class="wrapper bg-black/45 h-full w-full flex flex-col">
        <nav-bar />

        <div class="bg-black/25 text-white py-5 px-10 border-y-4 border-green-500 backdrop-blur-md mt-auto">
          <h1 class="page-title text-4xl font-bold mb-2" data-aos="fade-right" data-aos-duration="2400">Training center</h1>
          <p data-aos="fade-right" data-aos-duration="2800">A school that values success.</p>
        </div>
      </div>
    </header>

    <main class="my-20 md:my-28">
      <section class="about-us w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
        <div class="about-text flex-1 lg:flex-initial lg:w-[40%]">
          <h4 class="section-title text-2xl font-bold mb-2">About Us</h4>

          <div class="text flex flex-col gap-6 tracking-wider text-justify">
            <p  data-aos="fade-up" data-aos-duration="1800">
              <span class="font-semibold">Master the Craft of Coffee:</span> Unleash your barista potential with our in-depth courses, 
              guiding you from the fundamentals of espresso to the intricate art of latte creation
            </p>
            <p  data-aos="fade-up" data-aos-duration="2400">
              <span class="font-semibold">Explore Coffee Chemistry:</span>
              Dive into the science of coffee with our Coffee Chemistry course, where you'll explore brewing methods, roasting techniques, and understand complex flavor profiles.
            </p>
            <p  data-aos="fade-up" data-aos-duration="3000"><span class="font-semibold">Learn the Business of Coffee:</span>
              Gain essential knowledge for running a successful coffee shop through our Business Insights module, covering everything from customer service to effective menu creation.
            </p>
          </div>  
        </div>

        <div class="courses flex-1 lg:flex-initial lg:w-[40%] rounded-lg shadow-lg lg:mx-8 lg:p-10 px-4 py-8 mt-10 lg:mt-0">
          <h2 class="section-title font-bold text-3xl mb-5">Our Courses</h2>

          <div class="courses border-black p-4 flex justify-between" v-for="(crs, index) in courses" :key="index" :class="{'border-b': crs.border}">
            <div class="info">
              <p class="text-gray-500 text-sm"><span><i class="bx bx-calendar text-green-600 mr-1"></i></span> {{ crs.duration }}</p>
            
            <h3 class="text-2xl font-semibold my-3"  data-aos="zoom" data-aos-duration="2800">{{ crs.title }}</h3>
            <ul class="my-3 flex flex-col gap-2 ml-3">
              <li 
              class="text-gray-400 text-sm"
              v-for="(item, index) in crs.modules" :key="index">- {{ item }}</li>
            </ul>
          
            <p class="text-gray-500 text-sm"><span><i class="bx bx-time text-green-600 mr-1"></i></span>Weekdays: 9 am - 8 pm</p>
            </div>

            <div class="img w-[130px] h-[90px] rounded-lg overflow-hidden">
              <img class="object-cover h-full w-full" :src="crs.url" :alt="crs.title"  data-aos="fade-right" data-aos-duration="2400">
            </div>
          </div>

          <br />

          <a
          href="https://jowamtrainingcentre.co.ke/"
          target="_blank"
          class="section-title rounded bg-orange-400 p-3 text-white font-semibold hover:bg-slate-500 ease-in-out duration-500">
            <span><i class="bx bx-link-external mr-1"></i></span>Visit Our School Website
          </a>
        </div>
      </section>

      <section class="mt-28 certification w-11/12 lg:w-8/12 mx-auto flex flex-col md:flex-row text-white">
        <div class="certify bg-green-600 p-10 flex-1">
          <h2 class="text-3xl font-bold"><i class="bx bxs-graduation text-4xl mr-1"></i> Certification</h2>
          <br>
          <p>Once you're done with your course, a certificate is offered where you'll be a recognized professional in the coffee industry.
            You are not limited to local jobs but jobs outside the country as well
          </p>
        </div>

        <div class="instructors bg-orange-400 p-10 flex-1">
          <h2 class="text-3xl font-bold"><i class="bx bx-unite text-4xl mr-1"></i> Instructors</h2>
          <br>
          <p>With years of hands-on experience, our instructors are seasoned experts with the knowledge and skills to help you excel in the coffee industry.</p>
        </div>
      </section>

      <section class="why-us mt-28 flex items-center flex-col md:flex-row gap-7 w-11/12 lg:w-9/12 mx-auto">
        <div class="image-div flex-1 h-full rounded-lg overflow-hidden">
          <img class="w-full h-full object-contain" :src="require('@/assets/img/class.png')" alt="class">
        </div>

        <div class="info-div flex-1">
          <h2 class="section-title text-4xl font-bold text-green-600 mb-2">Why Choose Us</h2>

          <ul class="flex flex-col">
            <li data-aos="fade-up" data-aos-duration="1600">Extensive Training</li>
            <li data-aos="fade-up" data-aos-duration="2200">Global recognition in the Coffee Industry</li>
            <li data-aos="fade-up" data-aos-duration="2800">Job Opportunities locally and abroad</li>
            <li data-aos="fade-up" data-aos-duration="3000">Skilled Instructors</li>
          </ul>

          <button class="reach-us mt-10 rounded-md bg-green-600 p-3 text-white font-semibold flex items-center" @click="openWhatsapp">
            <i class="bx bxl-whatsapp text-2xl mr-2"></i>
            Reach Us Now
          </button>
        </div>
      </section>
    </main>

    <bottom-footer />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  data() {
    return {
      courses: [
        {
          title: "Professional Barista", duration: "6 weeks", modules: [
            'Introduction to Coffee',
            'Coffee Processing',
            "Roasting and Cupping",
            'Latte Art',
            'Grinder and Espresso Machine Operations',
            'Milkshakes, Smoothies, Cocktails & Mocktails',
            'Customer Service'
        ], url: require("@/assets/img/barista.png"), border: true },
        {
          title: "Professional Roasting", duration: "4 weeks", modules: [
            'Introduction to Coffee',
            'Green Coffee Assessment',
            'Sensory Analysis',
            'Coffee Roasting',
            'Costing & Management',
            'Marketing & Branding'
        ], url: require("@/assets/img/roasting.png"), border: false },
      ]
    }
  },

  mounted() {
    useHead({
      title: "Training Center | Jowam Coffee Traders",
      meta: [
        {
          name: "description",
          content:
            "Unleash your barista potential with our in-depth courses, guiding you from the fundamentals of espresso to the intricate art of latte creation.",
        },
        {
          property: "og:title",
          content: "Training Center | Jowam Coffee Traders",
        },
      ],
    });
  },

  methods: {
    openWhatsapp() {
      window.open("https://wa.me/254728919092", "_blank")
    }
  }
}
</script>

<style scoped>
header {
  background-image: url("@/assets/img/students.jpeg");
}

.page-title,
.section-title {
  font-family: "DM Serif Display", serif;
}

.section-title {
  color: var(--secondary-color);
}

.info-div li {
  padding: 1.5rem 10px;
  font-weight: 700;
}

.info-div ul li:not(:last-child) {
  border-bottom: 1px solid grey;
}

</style>