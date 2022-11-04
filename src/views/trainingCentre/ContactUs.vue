<template>
  <div id="contact-school">
    <header>
      <menu-bar />
      <div class="header-content">
        <h1>
          Get in touch <br />
          with us.
        </h1>
      </div>
    </header>

    <main style="background">
      <div class="map-div">
        <h3>Find Us</h3>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173752470507!2d36.81552211533582!3d-1.2834391359864927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b6fa22017b%3A0xdabfba1e3666b1dd!2sJOWAM%20TRAINING%20CENTER!5e0!3m2!1sen!2ske!4v1662716234918!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p>
          Pension Towers, Loita Str. <br />
          Nairobi, Kenya
        </p>
        <p>+254728919092</p>
      </div>

      <div class="email-us">
        <h3>Email Us</h3>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          type="email"
          v-model="message"
          name="message"
          placeholder="Enter your message"
          cols="4"
        ></textarea>
        <button>Submit</button>
      </div>
    </main>
    <footer>
      <training-footer />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      subject: "",
    };
  },
};
</script>

<style lang="scss" scoped>
#contact-school {
  color: black;
}

header {
  background-image: url("../../assets/contact-us.webp");
  background-size: cover;
  background-position: fixed;
  .header-content {
    h1 {
      color: white;
      font-family: "Abril Fatface", cursive;
    }
  }
}

main {
  h3 {
    font-family: "Abril Fatface", cursive;
    font-size: 22px;
  }
  .map {
    background-color: #ababab;
  }
  .email-us {
    input,
    textarea {
      border-style: none;
      border: 1px solid black;
      display: block;
      margin-bottom: 10px;
      color: grey;
    }
    button {
      background: black;
      padding: 9px 15px;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 14px;
      border-style: none;
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    height: 100%;
    .header-content {
      width: 80%;
      margin: 5rem auto;
      h1 {
        font-size: 75px;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: 5rem auto;
    .map-div {
      .map {
        width: 500px;
        height: 400px;
      }
    }
    .email-us {
      margin-left: 1rem;
      input,
      textarea {
        padding: 2rem 1rem;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    height: 100%;
    .header-content {
      width: 60%;
      margin: 5rem auto;
      h1 {
        font-size: 75px;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: 5rem auto;
    .map-div {
      .map {
        width: 500px;
        height: 350px;
      }
    }

    .email-us {
      margin-left: 1rem;
      input,
      textarea {
        padding: 1.5rem 0.5rem;
        width: 300px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  header {
    .header-content {
      width: 70%;
      margin: 2rem auto;
      h1 {
        font-size: 50px;
      }
    }
  }
  
  main {
    width: 90%;
    margin: auto;
    h3 {
      letter-spacing: 1px;
    }
    .map-div {
      .map {
        width: 100%;
        height: 400px;
      }
    }
    .email-us {
      margin-bottom: 3rem;
      input,
      textarea {
        padding: 1rem 10px;
        width: 93%;
      }
    }
  }
}
</style>
