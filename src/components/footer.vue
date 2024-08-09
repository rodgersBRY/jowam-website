<template>
  <div id="footer" class="m-2 rounded-lg overflow-hidden">
    <section class="top text-sm p-6 md:p-16 flex justify-between flex-col lg:flex-row gap-16 text-white">
      <div class="about lg:w-72">
        <div class="logo flex gap-4 font-bold mb-3">
          <img 
          :src="require('@/assets/logo.png')" 
          alt="company logo"
          class="h-12" />
          <p>Jowam Coffee Traders LTD</p>
        </div>

        <div class="content">
          <p class="text-justify">At Jowam Coffee Traders, we specialize in exporting premium green coffee beans 
            straight from Kenya's renowned coffee-growing regions. Based in Nairobi,
              our headquarters is strategically positioned to connect the rich 
              coffee heritage of Kenya with markets across the globe.
          </p>
        </div>
      </div>
      
      <div class="insta">
        <p class="section-title tracking-wider">FOLLOW US ON INSTAGRAM</p>

        <div class="insta-div bg-cover bg-no-repeat rounded-xl w-11/12 lg:w-72 h-36 text-white p-4 flex flex-col justify-between">
          <p>Jowam Coffee Traders</p>
          <a
          class="platform bg-white/50 cursor-pointer p-1.5 lg:w-1/2 text-black font-bold text-lg rounded-xl flex justify-center items-center gap-1.5"
          href="https://www.instagram.com/jowamcoffee/" target="_blank">
            <i class="mdi mdi-instagram"></i>
            <p class="text-xs">INSTAGRAM</p>
          </a>
        </div>
      </div>
  
      <div class="contact-info lg:w-72">
        <p class="section-title tracking-wider">CONTACT INFO</p>
        <div class="info">
          <p><span class="font-medium">Address:</span> 4th Flr, Pension Towers. Loita Str. Nairobi</p>
          <p><span class="font-medium">Phone:</span> +254728919092/+254722762945</p>
          <p><span class="font-medium">Email:</span> trading@jowamcoffee.com</p>
        </div>
      </div>

      <div class="hours lg:w-72">
        <p class="section-title tracking-wider">BUSINESS HOURS</p>

        <div class="">
          <p>Mon - Fri</p>
          <p>7.00 am - 5.00 pm</p>
        </div>
      </div>
    </section>

    <section class="bottom flex justify-between items-center gap-10 bg-black/30 p-6 border-t text-xs text-gray-400 flex-col lg:flex-row">
      <p class="text-center">Copyright &copy; {{ date }} Jowam Coffee Traders LTD - Developed by
        <span>
          <a href="https://mawira.netlify.app/" target="_blank" class="duration-500 ease-in-out font-semibold hover:text-black text-green-500 mr-6">Mawira Corp.</a>
        </span>
      </p>

      <div class="links hidden md:flex">
        <ul>
          <router-link exact-active-class="active" class="nav-link duration-500 ease-in-out font-semibold hover:text-black mr-6" to="/">
            Home
          </router-link>
  
          <router-link active-class="active" class="nav-link duration-500 ease-in-out font-semibold hover:text-black mr-6" to="/about">
            About Us
          </router-link>

          <router-link active-class="active" class="nav-link duration-500 ease-in-out font-semibold hover:text-black mr-6" to="/training">
            Training Centre
          </router-link>
  
          <router-link active-class="active" class="nav-link duration-500 ease-in-out font-semibold hover:text-black" to="/contact">
            Contact Us
          </router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  background-color: var(--faded-secondary-color);
}

.section-title {
  font-weight: bold;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid green;
  padding: 5px 0;
}

.insta-div {
  background-image: url('@/assets/img/beans.png');
}
</style>
