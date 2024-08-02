<template>
  <div id="contact">
    <header>
      <div class="wrapper">
        <nav-bar />

        <div>
          <h1>Drop Us A Note</h1>
        </div>
      </div>
    </header>

    <main>
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
textarea {
  resize: none;
}

header {
  background-image: url("../assets/about2.webp");
  background-size: cover;
  background-attachment: fixed;
  color: white;
  display: flex;
  flex-direction: column;
  .wrapper {
    background-color: rgba($color: black, $alpha: 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      text-align: center;
      height: 50%;
      display: flex;
      align-items: end;
    }
  }
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

  header {
    height: 50vh;
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
}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  header {
    height: 60vh;    
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
