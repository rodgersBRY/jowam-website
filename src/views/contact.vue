<template>
  <div id="contact">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="contact-banner">
        <div>
          <h1>Drop Us A Note</h1>
        </div>
      </section>

      <div class="contacts-row">
        <div class="form-contact-div">
          <section class="contact-form">
            <form action="https://formspree.io/f/mdovnojj" method="POST">
              <h2>Feedback form</h2>
              <div>
                <input
                  type="text"
                  name="Name"
                  v-model="name"
                  class="input"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  name="Email"
                  v-model="email"
                  class="input"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  name="Subject"
                  v-model="subject"
                  class="input"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  v-model="message"
                  cols="60"
                  rows="7"
                  class="input"
                  placeholder="Your Message"
                >
                </textarea>
                <button type="submit" class="send-btn">Submit Feedback</button>
              </div>
            </form>
          </section>
          
          <div class="divider"></div>

          <section class="location">
            <h2>Stop By For A Visit</h2>
            <p>
              <span class="mr-2 mdi mdi-pin-outline"></span>Pension Towers,
              4th Floor. Loita Street
            </p>
            <p>
              <span class="mr-2 mdi mdi-email-outline"></span>
              Emails
            <ul style="list-style:none">
              <li class="ml-3"><em>trading@jowamcoffee.com</em> </li>
              <li class="ml-3"><em>kelvin.bundi@jowamcoffee.com</em> </li>
            </ul>
            </p>
            <p>
              <span class="mr-2 mdi mdi-phone-outline"></span>Phone: 254728919092, 254722762945
            </p>

            <div class="social-media">
              <button
              href="https://www.instagram.com/jowamcoffee/"
              color="orange darken-2" 
              style="text-transform: lowercase;">
                <span class="mr-2 mdi mdi-instagram"></span> jowamcoffee
              </button>
            </div>
          </section>
        </div>

        <section class="map" style="height: 500px;">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4087562679113!2d36.81591826403446!3d-1.2833511115817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111a45494c6b%3A0x580089d59691bf84!2sJowam%20Coffee%20Traders%20Ltd!5e0!3m2!1sen!2ske!4v1721927032397!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <section class="japanese">
          <v-card flat width="350px">
            <v-card-title class="title">会社概要</v-card-title>
            <v-card-text>
             <p>代表: Josphat Mwirigi Mburugu</p>
             <p>役職: Director</p>
              <p>会社: Jowam Coffee Traders Co.Ltd</p>
              <p>TEL: +254722762945</p>
              <p>Mail: trading@jowamcoffee.com</p>
              <p>Mail: quality@jowamcoffee.com</p>
              <p>住所: 00200 Nairobi P.O Box 58513-00200 Nairobi Kenya Kenya</p>
            </v-card-text>
          </v-card>
          <v-card  flat width="350px">
            <v-card-title class="title">海外事業部日本・中国アジア担当</v-card-title>
            <v-card-text>
              <p>Alex Nduati アレックスドゥアティ（日本語可</p>
              <p>TEL: +254722659595</p>
              <p>Mail: alex.nduati@jowamcoffee.com</p>
            </v-card-text>
          </v-card>
        </section>
      </div>     
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
      name: '',
      email:'',
      subject: '',
      message: '',
    };
  },

};
</script>

<style scoped lang="scss">

.japanese .title  {
  color: #e09f55;
}

textarea {
  resize: none;
}
.contact-banner {
  background-image: url("../assets/about2.webp");
  background-size: cover;
  color: white;
  display: flex;
}

.form-contact-div {
  display: flex;
  .divider {
    background-color: rgb(226, 226, 226);
    height: 1px;
    margin: 0 20px;
    display: none;
  }
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
    font-weight: bold;
    width: 100%;
  }
}

.location {
  padding: 10px;
  h2 {
    margin-bottom: 1rem;
  }
  span {
    font-size: 20px;
    color: grey;
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

  .form-contact-div {
    flex-direction: column;
    .divider {
      display: block;
    }
  }

  .contact-form,
  .location {
    width: 100%;
    margin: 3rem auto;
  }

  .contact-form {
    h2 {
      text-align: center;
    }
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

  .japanese {
    margin: 1.5rem 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }

  .japanese {
    padding: 20px 0;
    width: 60%;
    margin: 1rem auto 3rem auto;
    display: flex;
    justify-content: space-between;
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

  .form-contact-div {
    width: 80%;
    margin: auto;
    .divider {
      display: none;
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
