<template>
  <div id="contact">
    <header class="bg-cover bg-fixed bg-center h-[60vh] md:h-[70vh]">
      <div class="wrapper bg-black/45 h-full w-full flex flex-col">
        <nav-bar />

        <div class="bg-black/25 text-white py-5 px-10 border-y-4 border-green-500 backdrop-blur-md mt-auto">
          <h1 class="page-title text-4xl font-bold mb-2"  data-aos="fade-right" data-aos-duration="2400">Contact Us</h1>
          <p class="" data-aos="fade-right" data-aos-duration="2900">We answer within 24 hours on working days.</p>
        </div>
      </div>
    </header>

    <main>
      <section class="contact-details flex justify-between flex-col gap-10 lg:flex-row w-10/12 mx-auto my-28">
        <div class="socials flex-1 lg:flex-initial lg:w-[40%]">
          <h2 class="section-title text-3xl font-bold mb-3">Social Media</h2>
          <p class="text-xl text-gray-500">You can send us your inquiries by e-mail, contact form, or visit our office for face-to-face discussion</p>  
          <a
          class="rounded-full w-[40px] h-[40px] bg-green-600/30 flex items-center justify-center mt-2 cursor-pointer"
          href="https://www.instagram.com/jowamcoffee/"
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="2400">
            <i class="bx bxl-instagram text-green-600 text-2xl"></i>
          </a>
        </div>

        <div class="info flex-1 lg:flex-initial lg:w-[40%]">
          <h2 class="section-title text-3xl font-bold mb-3">Contact Details</h2>

          <div class="flex flex-col gap-7 tracking-wider text-xl">
            <div class="flex gap-5"
            data-aos="fade-up"
            data-aos-duration="2000">
              <i class="bx bxs-map-pin text-green-600 text-xl"></i>
              <div>
                <h4 class="text-xl font-semibold">Address</h4>
                <p>Pension Towers, 4th Floor. Loita Street</p>
              </div>
            </div>
  
            <div class="flex gap-5"
            data-aos="fade-up"
            data-aos-duration="2000">
              <i class="bx bxs-phone text-green-600 text-xl"></i>
              <div>
                <h4 class="text-xl font-semibold">Phone</h4>
                <p>+254722762945, +254728919092</p>
              </div>
            </div>
  
            <div class="flex gap-5"
            data-aos="fade-up"
            data-aos-duration="2000">
              <i class="bx bxs-envelope text-green-600 text-xl"></i>
              <div>
                <h4 class="text-xl font-semibold">Email Address</h4>
                <p>trading@jowamcoffee.com</p>
                <p>kelvin.bundi@jowamcoffee.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="message flex flex-col lg:flex-row bg-orange-100 justify-between">
        <div class="form-div lg:w-[50%] p-12">
          <h2 class="section-title text-3xl font-bold mb-3">Feedback Form</h2>

          <form @submit.prevent="submitForm">
            <div class="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                v-model="name"
                class="input p-2 block w-full border border-gray-600 rounded-md"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                v-model="email"
                class="input p-2 block w-full border border-rose-500 rounded-md"
                placeholder="Email Address"
              />
              <input
                type="phone"
                name="phone"
                required
                v-model="phone"
                class="input p-2 block w-full border border-rose-500 rounded-md"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="Subject"
                required
                v-model="subject"
                class="input p-2 block w-full border border-gray-900 rounded-md"
                placeholder="Subject"
              />
              <textarea
                name="Message"
                required
                v-model="message"
                cols="60"
                rows="7"
                class="input p-2 block w-full border border-gray-900 rounded-md"
                placeholder="Your Message"
              >
              </textarea>
            </div>

            <button
            :disabled="isLoading"
            data-aos="fade-right"
            data-aos-duration="2000"
            type="submit"
            class="send-btn bg-orange-400 text-white font-bold p-3 rounded-md mt-3 w-[150px] hover:bg-orange-300 hover:text-orange-400 hover:border border-orange-400 duration-500 ease-in-out disabled:bg-gray-500 disabled:cursor-not-allowed">Submit</button>
          </form>

          <p v-if="showSuccess" class="px-7 py-3 mt-6 bg-green-200 text-green-800 rounded-lg font-bold uppercase text-sm">Your Feedback has been submitted. Thank you</p>
          <p v-if="showError" class="px-7 py-3 mt-6 bg-red-200 text-red-800 rounded-lg font-bold uppercase text-sm">{{ error }}</p>
        </div>

        <div class="map lg:w-[50%]">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4087562679113!2d36.81591826403446!3d-1.2833511115817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111a45494c6b%3A0x580089d59691bf84!2sJowam%20Coffee%20Traders%20Ltd!5e0!3m2!1sen!2ske!4v1721927032397!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>     
    </main>

    <bottom-footer />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email:'',
      subject: '',
      phone: '',
      message: '',

      error: '',
      loading: false,
      showError: false,
      showSuccess: false,
    };
  },

  computed: {
    isLoading() {
      return this.loading;
    }
  },

  mounted() {
    useHead({
      title: "Contact Us | Jowam Coffee Traders",
      meta: [
        {
          name: "description",
          content:
            "You can send us your inquiries by e-mail, contact form, or visit our office for face-to-face discussion.",
        },
        {
          property: "og:title",
          content: "Contact Us | Jowam Coffee Traders",
        },
      ],
    });
  },

  methods: {
    async submitForm() {      
      this.loading = true;
      const data = {
        service_id: process.env.VUE_APP_EMAIL_SERVICE_ID,
        template_id: process.env.VUE_APP_EMAIL_TEMPLATE_ID,
        user_id: process.env.VUE_APP_EMAIL_PUBLIC_KEY,
        template_params: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          message: this.message,
        }
      }

      try {
        const resp = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);

        if (resp.status == 200) {
          this.showSuccess = true;

          setTimeout(() => {
            this.showSuccess = false;

            this.name = "";
            this.email = "";
            this.phone = "";
            this.subject = "";
            this.message = "";
          }, 3000)
        }
      } catch (err) {
        this.showError = true,
        this.error = err;
      } finally {
        this.loading = false;
      }
      
    }
  }
};
</script>

<style scoped lang="scss">
textarea {
  resize: none;
}

header {
  background-image: url("../assets/about2.webp");
}

.page-title,
.section-title {
  font-family: "DM Serif Display", serif;
}

.section-title {
  color: var(--primary-color);
}

</style>
