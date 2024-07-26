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

    <main>
      <form action="https://formspree.io/f/xpzeazed" method="POST">
        <div class="email-us">
          <h3>Email Us</h3>
          <input
            type="text"
            v-model="name"
            name="Name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            v-model="email"
            name="Email"
            placeholder="Enter your email"
          />
          <textarea
            type="text"
            v-model="message"
            name="Message"
            placeholder="Enter your message"
            cols="4"
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div class="map-div">
        <h3>Find Us</h3>
        <div class="map">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.2774521015442!2d36.81591826403446!3d-1.2833511115817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11eb088edba3%3A0xa9504aec85fd23f6!2sJOWAM%20COFFEE%20TRAINING%20CENTRE!5e0!3m2!1sen!2ske!4v1721925651184!5m2!1sen!2ske" 
          class="map"
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p>
          Pension Towers, Loita Str. <br />
          Nairobi, Kenya
        </p>
        <p>+254 722762945</p>
      </div>
    </main>
    <footer>
      <training-footer />
    </footer>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
header {
  background-image: url("../assets/contact-us.webp");
  background-size: cover;
  background-position: fixed;
  background-attachment: fixed;
  height: 100%;
  .header-content {
    height: 400px;
    padding: 10rem  0 0 2rem;
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
    .header-content {
      h1 {
        font-size: 75px;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    margin: 5rem auto;
    .map-div {
      .map {
        width: 400px;
        height: 400px;
      }
    }

    .email-us {
      margin-right: 1rem;
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
      h1 {
        font-size: 75px;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    margin: 5rem auto;
    .map-div {
      .map {
        width: 400px;
        height: 350px;
      }
    }

    .email-us {
      margin-right: 1rem;
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
      h1 {
        font-size: 50px;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
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
        width: 100%;
      }
    }
    .map {
      width: 100%;
    }
  }
}
</style>
