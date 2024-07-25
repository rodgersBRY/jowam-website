<template>
  <div id="home">
    <header class="header">
      <menu-bar />

      <div class="header-content">
        <h1>
          A school <br />
          that values <br />
          success.
        </h1>
        <button>
          <a href="#featured-courses">FIND THE PERFECT COURSE</a>
        </button>
        <hr />
        <p>
          We are a school that places high value on both students, and high
          quality education.
        </p>
      </div>
    </header>

    <main>
      <section class="featured-courses" id="featured-courses">
        <h1>
          Featured <br />
          Modules.
        </h1>

        <div class="courses-div">
          <div class="card" v-for="module in modules" :key="module.id">
            <img
              width="100%"
              :src="module.img"
              alt="course-img, jowam, training center, barista course, mixology classes, coffee training, coffee, coffee roasting, roasting coffee, professional coffee training "
            />
            <div class="divider"></div>
            <h2>{{ module.title }}</h2>
            <p>
              {{ module.description }}
            </p>

            <!-- <button @click.prevent="goToModule(module.id)">Explore</button> -->
          </div>
        </div>
      </section>

      <section class="scenic-route">
        <h1>
          '' <br />
          <span>
            <div class="divider"></div>
          </span>
          Insert coffee to begin.
        </h1>
      </section>

      <section class="teachers-div">
        <div class="img-div"></div>
        <div class="divider"></div>
        <h1>
          Teachers <br />
          that care.
        </h1>
        <button @click.prevent="$router.push('/teachers')">
          FIND THE PERFECT FIT
        </button>
      </section>

      <section class="signup">
        <div class="signup-text-div">
          <div class="divider"></div>
          <h1>
            Signup. <br />
            Totally free.
          </h1>
          <p>Receive early notice on new courses.</p>
        </div>
        <div class="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            v-model="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            v-model="email"
          />
          <button @click.prevent="handleSubmit">SIGNUP</button>
        </div>
      </section>

      <section class="current-events">
        <h1>
          Current <br />
          Events.
        </h1>
        <div class="cards">
          <div class="event-card" v-for="(event, i) in events" :key="i">
            <img
              :src="event.img"
              :alt="[
                event.title,
                'coffee champions, kenyan coffee, barista kenya, jowam, barista events, coffee training',
              ]"
            />
            <div class="read-more">
              <div class="divider"></div>
              <h2 v-html="event.title"></h2>

              <p style="color: grey">{{ event.description }}</p>
              <!-- <button>Read</button> -->
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <training-footer />
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",

      modules: [
        {
          id: 1,
          img: require("../assets/barista.webp"),
          title: "Barista",
          description:
            "Four week course that takes a wholistic and indepth approach to coffee brewing.",
        },
        {
          id: 2,
          img: require("../assets/mixology.webp"),
          title: "Mixology",
          description:
            "Learn to make your own infusions, syrups, and craft cocktails using advanced techniques.",
        },
        {
          id: 3,
          img: require("../assets/roasting.webp"),
          title: "Roasting",
          description:
            "Gain practical experirence in the key elements of sensory evaluation in Sensory skills classes.",
        },
      ],

      events: [
        {
          img: require("../assets/barista-champ.webp"),
          title: "Barista <br> Championship.",
          description:
            "Our lead barista @tessthebarista took part in the KNBC 18th Edition hosted at TheHub in Karen and won it all",
        },
        {
          img: require("../assets/aeropress.png"),
          title: "Aeropress Competition",
          description:
            "Aeropress competition held at Westgate Mall saw our students emerge as champions and got recognition from top coffee organizations",
        },
      ],
    };
  },

  methods: {
    goToModule(id) {
      this.$router.push({ name: "module-details", params: { id: id } });
    },

    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
      };

      const res = await axios.post("/api/sendThankYou", data);
      if (res.status == 200) {
        document.getElementById("subscribed-form").style.display = "block";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribed-form {
  width: 100%;
  height: 100vh;
  display: none;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.73);
  .success-message {
    width: 400px;
    min-height: 300px;
    text-align: center;
    max-height: 500px;
    margin: 10% auto;
    padding: 3rem;
    background: white;
    color: black;
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
      color: red;
      position: relative;
      left: 80%;
      width: 50px;
      cursor: pointer;
      border: 2px solid red;
    }
  }
}
h1,
h2,
h3 {
  font-family: "Abril fatface", cursive;
  letter-spacing: 4px;
}

button {
  background: black;
  padding: 9px 15px;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
  border-style: none;
  cursor: pointer;
}

.header {
  color: white;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 66, 19, 0.73)
    ),
    url("../assets/header.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 1rem;
  height: 100%;

  .header-content {
    padding: 6rem 0 0 1rem;

    h1,
    p,
    a {
      color: white;
    }

    button {
      a {
        text-decoration: none;
      }
    }

    hr {
      margin: 3.5rem 0;
    }
  }
}

main {
  p {
    color: black;
  }
  .featured-courses {
    margin: 0 auto;
    .courses-div {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      .card {
        .divider {
          height: 3px;
          background: black;
          margin-top: 5rem;
        }
      }
    }
  }

  .scenic-route {
    margin: 5rem 0;
    background: url("../assets/coffee-img.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    max-height: 700px;
    h1 {
      color: white;
      .divider {
        height: 3px;
        background: white;
      }
    }
  }

  .teachers-div {
    text-align: center;
    .divider {
      height: 3px;
      width: 10%;
      margin: 4rem auto 0 auto;
      background: black;
    }
    .img-div {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: blue;
      background: url("../assets/educate.webp");
      background-size: cover;
      margin: auto;
    }
    button {
      background-color: rgb(237, 201, 134);
    }
  }

  .signup {
    margin: 3rem 0;
    color: white;
    background-image: linear-gradient(
        to bottom,
        rgba(132, 132, 132, 0.52),
        rgba(66, 66, 66, 0.73)
      ),
      url("../assets/signup-form.webp");
    background-size: cover;
    background-attachment: fixed;

    .signup-text-div {
      h1,
      p {
        color: white;
      }
    }
    .signup-form {
      background-color: rgba(0, 0, 0, 0.73);
      padding: 3rem 1rem;
      display: flex;
      justify-content: center;
      input {
        background: transparent;
        border-style: none;
        border: 2px solid white;
        color: white;
        padding: 0 5px;
      }
      button {
        background-color: white;
        color: black;
      }
    }
  }

  .current-events {
    .event-card {
      .divider {
        height: 3px;
        background: black;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  h1 {
    font-size: 75px;
  }
  h2 {
    font-size: 28px;
  }
  header {
    .header-content {
      width: 70%;
    }
  }
  main {
    .featured-courses {
      width: 90%;
      .courses-div {
        flex-direction: row;
        .divider {
          width: 30%;
        }
      }
      .card {
        width: 25%;
      }
    }
    .scenic-route {
      display: flex;
      justify-content: center;
      h1 {
        width: 40%;
        .divider {
          width: 20%;
        }
      }
    }
    .signup {
      .signup-text-div {
        width: 60%;
        margin: 5rem auto;
        h1,
        p {
          color: white;
        }
      }
      .signup-form {
        display: flex;
        justify-content: center;
        input {
          width: 20%;
          height: 50px;
          font-size: 20px;
        }
        button {
          width: 300px;
        }
      }
    }

    .current-events {
      width: 90%;
      margin: 0 auto 7rem auto;
      .cards {
        display: flex;
        flex-flow: row wrap;
        .event-card {
          width: 40%;
          display: flex;
          margin: 10px;
          img {
            width: 50%;
          }
          .divider {
            width: 70%;
          }
          .read-more {
            margin-left: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 22px;
  }
  header {
    .header-content {
      width: 80%;
    }
  }
  main {
    .featured-courses {
      width: 90%;

      .courses-div {
        .divider {
          width: 30%;
        }
      }
      .card {
        width: 25%;
      }
    }
    .scenic-route {
      padding: 4rem 0;
      h1 {
        width: 80%;
        margin: 0 auto;
        .divider {
          width: 20%;
        }
      }
    }
    .signup {
      .signup-text-div {
        width: 60%;
        margin: 5rem auto;
        h1,
        p {
          color: white;
        }
      }
      .signup-form {
        display: flex;
        justify-content: center;
        input {
          width: 20%;
          height: 50px;
          font-size: 20px;
        }
        button {
          width: 300px;
        }
      }
    }

    .current-events {
      width: 90%;
      margin: 0 auto 7rem auto;
      .cards {
        display: flex;
        .event-card {
          margin: 0 1rem;
          img {
            width: 100%;
          }
          .divider {
            margin-top: 3rem;
            width: 40%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 50px;
  }
  header {
    .header-content {
      width: 90%;
    }
  }
  main {
    .featured-courses {
      width: 90%;
      h1 {
        font-size: 40px;
      }
      .courses-div {
        flex-direction: column;
        .divider {
          width: 30%;
        }
      }
      .card {
        width: 100%;
        margin-bottom: 2rem;
        img {
          height: 250px;
        }
      }
    }
    .scenic-route {
      h1 {
        width: 90%;
        margin: 0 auto;
        .divider {
          width: 30%;
        }
      }
    }
    .signup {
      .signup-text-div {
        width: 90%;
        margin: 5rem auto;
      }
      .signup-form {
        input {
          display: block;
          width: 40%;
          height: 50px;
          font-size: 14px;
        }
        button {
          width: 20%;
        }
      }
    }

    .current-events {
      width: 90%;
      margin: 0 auto 7rem auto;
      .cards {
        display: block;
        .event-card {
          margin-bottom: 2rem;
          border: 1px solid black;
          .divider {
            width: 30%;
          }
          .read-more {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
