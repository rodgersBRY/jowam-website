<template>
  <div id="events">
    <header>
      <menu-bar />
      <div class="header-content">
        <h1>
          Notable/ <br />
          Upcoming Events
        </h1>
      </div>
    </header>

    <main>
      <div class="events-div">
        <div class="card" v-for="(event, index) in events" :key="index">
          <img
            :src="event.img"
            alt="coffee events, coffee roasting, barista, jowam events, jowam experts"
          />
          <div class="card-details">
            <p>{{ event.pin }}</p>
            <h3>{{ event.title }}</h3>
            <p>
              {{ event.details }}
            </p>
          </div>
        </div>
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
      events: [
        {
          img: require("../../assets/barista-champ.png"),
          title: "Barista Championship",
          pin: "@TheHub Karen",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae exercitationem odio omnis sit sunt.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 5px;
  font-family: "Abril Fatface", cursive;
}

header {
  background-image: url("../../assets/events.jpg");
  background-size: cover;
  background-position: fixed;
  padding-bottom: 3rem;
  .header-content {
    display: flex;
    align-items: flex-end;
    height: 70%;
    margin: auto;
  }
}

main {
  color: black;
  .events-div {
    .card {
      width: 300px;
      .card-details {
        h3 {
          font-size: 25px;
          font-family: "Abril Fatface", cursive;
          letter-spacing: 1px;
        }
        p {
          color: grey;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    height: 70vh;
    .header-content {
      padding-left: 5rem;
      h1 {
        font-size: 105px;
      }
    }
  }

  main {
    .events-div {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      width: 80%;
      margin: 3rem auto;
      .card {
        width: 300px;
        margin-right: 3rem;
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    height: 60vh;
    .header-content {
      padding-left: 4rem;
      h1 {
        font-size: 72px;
      }
    }
  }
  main {
    .events-div {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      margin: 5rem 2rem;
      .card {
        width: 400px;
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  header {
    height: 50vh;
    .header-content {
      padding-left: 1rem;
      h1 {
        font-size: 40px;
      }
    }
  }

  main {
    .events-div {
      display: block;
      width: 90%;
      margin: auto;
      .card {
        width: 100%;
        margin: 2rem auto;
        img {
          width: 100%;
          height: 250px;
        }
      }
    }
  }
}
</style>
