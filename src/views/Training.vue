<template>
  <div id="training-page">
    <header>
      <div class="wrapper bg-black/45 h-full w-full flex flex-col">
        <nav-bar />

        <div class="bg-black/25 text-white py-5 px-10 border-y-4 border-green-500 backdrop-blur-md mt-auto">
          <h1 class="text-4xl font-bold mb-2" data-aos="fade-right" data-aos-duration="2400">Training center</h1>
          <p data-aos="fade-right" data-aos-duration="2800">A school that values success.</p>
        </div>
      </div>
    </header>

    <main class="my-28">
      <section class="about-us w-11/12 mx-auto flex justify-between">
        <div class="about-text flex-initial w-[40%]">
          <h4 class="text-2xl text-green-600 font-bold mb-2">About Us</h4>

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

        <div class="courses flex-initial w-[40%] rounded-lg shadow-lg mx-8 p-10">
          <h2 class="font-bold text-green-600 text-3xl mb-5">Our Courses</h2>

          <div class="courses border-black p-4 flex justify-between" v-for="(crs, index) in courses" :key="index" :class="{'border-b': crs.border}">
            <div class="info">
              <p class="text-gray-500 text-sm"><span><i class="bx bx-calendar text-green-600 mr-1"></i></span> {{ crs.duration }}</p>
            
            <h3 class="text-2xl font-semibold my-3"  data-aos="zoom" data-aos-duration="2800">{{ crs.title }}</h3>
          
            <p class="text-gray-500 text-sm"><span><i class="bx bx-time text-green-600 mr-1"></i></span>Weekdays: 8 am - 6 pm</p>
            </div>

            <div class="img w-[100px] h-[100px] rounded-lg overflow-hidden">
              <img class="object-cover" :src="crs.url" :alt="crs.title"  data-aos="fade-right" data-aos-duration="2400">
            </div>
          </div>

          <button 
          class="rounded bg-orange-400 p-3 text-white font-semibold mt-8 hover:bg-slate-500 ease-in-out duration-500">
            <span><i class="bx bx-link-external mr-1"></i></span>Visit Our School Website
          </button>
        </div>
      </section>
    </main>

    <bottom-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { title: "Professional Barista", duration: "6 weeks", url: require("@/assets/img/barista.png"), border: true },
        { title: "Professional Mixology", duration: "4 weeks", url: require("@/assets/img/mixology.png"), border: true },
        { title: "Professional Roasting", duration: "4 weeks", url: require("@/assets/img/roasting.png"), border: false },
      ]
    }
  },
}
</script>

<style scoped>
header {
  background-image: url("@/assets/img/school.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>