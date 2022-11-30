<template>
  <div id="contact">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="contact-banner">
        <div>
          <h1>Drop Us A Note</h1>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> -->
        </div>
      </section>

      <section class="contact-form">
        <div>
          <input
            type="text"
            name="name"
            v-model="name"
            class="input"
            placeholder="Your Name"
          />
          <input
            type="text"
            name="email"
            v-model="email"
            class="input"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="subject"
            v-model="subject"
            class="input"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            name="message"
            v-model="message"
            cols="60"
            rows="7"
            class="input"
            placeholder="Your Message"
          >
          </textarea>
          <button type="button" @click="sendEmail" class="send-btn">Send Message</button>
        </div>
      </section>

      <section class="location">
        <h2>Stop By For A Visit</h2>
        <p>
          <v-icon class="mr-2">mdi-map-marker-outline</v-icon>Pension Towers,
          4th Floor. Loita Street
        </p>
        <p>
          <v-icon class="mr-2">mdi-email-outline</v-icon>
          Emails
         <ul style="list-style:none">
          <li class="ml-3"><em>trading@jowamcoffee.com</em> </li>
          <li class="ml-3"><em>bundi.jowamcoffee@gmail.com</em> </li>
         </ul>
        </p>
        <p>
          <v-icon class="mr-2">mdi-phone-outline</v-icon>Phone: 254728919092, 254722762945
        </p>

        <div class="social-media">
          <v-btn icon large href="https://www.instagram.com/jowamcoffee/">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon>mdi-google</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </section>
    </main>

    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email:'',
      subject: '',
      message: '',
    };
  },

  methods: {
    async submitEmail() {
      const baseUrl = "/.netlify/functions";

      let userData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      try {
        await axios.post(`${baseUrl}/contactCompany`, userData);

        await axios.post(`${baseUrl}/autoreply`, userData);

        alert("Message sent successfully");
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (err) {
        alert(err.message);
      }
    },
  }
};
</script>

<style scoped lang="scss">
textarea {
  resize: none;
}
.contact-banner {
  background-image: url("../assets/about2.webp");
  background-size: cover;
  color: white;
  display: flex;
}

.contact-form {
  .input {
    background: rgb(236, 236, 236);
    border: 1px solid rgb(220, 225, 220);
    &:focus {
      outline: none;
    }
  }
  button {
    background: rgb(131, 154, 131);
    color: white;
    padding: 15px;
    width: 100%;
  }
}

.location {
  padding: 10px;
  h2 {
    margin-bottom: 1rem;
  }
}

// mobile device
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 35px;
  }

  .contact-banner {
    height: 50vh;
    align-items: flex-end;
    padding-left: 10px;
    div {
      text-align: center;
      height: 25%;
    }
  }

  .contact-form,
  .location {
    width: 100%;
    margin: 3rem auto;
  }

  .contact-form {
    div {
      margin: 0 1rem;
    }
    .input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
    }
  }

  .location {
    h2 {
      text-align: center;
    }
  }
}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }

  .contact-banner {
    background-attachment: fixed;
    height: 60vh;
    padding-left: 2rem;
    justify-content: center;
    align-items: flex-end;
    div {
      text-align: center;
      height: 50%;
    }
  }

  .contact-form,
  .location {
    width: 40%;
    margin: 3rem auto;
  }

  .contact-form {
    display: flex;
    div {
      margin: 0 1rem;
    }
    .input {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
    }
  }
}
</style>
