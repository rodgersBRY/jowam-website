<template>
  <div id="training">
    <main>
      <div class="top-header">
        <header>
          <nav-bar></nav-bar>
        </header>
        <div class="divide"></div>
        <p class="h5">Online Courses</p>

        <p class="h1">Learn anything, On <br />Your Schedule</p>
      </div>

      <div class="courses">
        <v-card
          class="course"
          width="350px"
          flat
          v-for="(course, i) in courses"
          :key="i"
        >
          <div class="img-div">
            <v-img height="300px" :src="course.img" :alt="course.title"></v-img>
          </div>

          <v-card-title>{{ course.title }}</v-card-title>
          <div class="line"></div>
          <v-card-text>
            <ul>
              <li v-for="(mdl, i) in course.modules" :key="i">{{ mdl }}</li>
              <li v-if="showMore">Hello world!</li>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-if="!showMore"
              text
              @click="showMore = true"
              style="text-transform: capitalize"
              >Show more...
            </v-btn>
            <v-btn
              v-else
              text
              @click="showMore = false"
              style="text-transform: capitalize"
              >Show less...
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      showLess: false,
      courses: [
        {
          img: require("../assets/roastery.svg"),
          title: "ROASTING",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae doloribus veniam obcaecati sed hic! Expedita, doloremque laborum?",
          modules: [
            "Introduction to Coffee",
            "Green Coffee Assessment",
            "Cupping Analysis",
            "Coffee Roasting",
          ],
        },
        {
          img: require("../assets/barista.svg"),
          title: "BARISTA",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae doloribus veniam obcaecati sed hic! Expedita, doloremque laborum?",
          modules: [
            "Introduction to Coffee",
            "Special Brewing",
            "Espresso Brewing Formula",
            "Hygiene Standards",
          ],
        },
        {
          img: require("@/assets/mixology.svg"),
          title: "MIXOLOGY",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae doloribus veniam obcaecati sed hic! Expedita, doloremque laborum?",
          modules: [],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  position: relative;
  z-index: 10;
}
#training {
  main {
    .top-header {
      background-image: url(https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/coffee1_zXbvcAYrD.jpg);
      background-size: cover;
      text-align: center;
      height: 500px;
      .h5 {
        font-weight: 400px;
        font-size: 1.87rem;
        color: white;
      }
      .h1 {
        color: white;
        font-size: 4.5rem;
        font-weight: 700px;
      }
    }
    .courses {
      background: white;
      margin: 0 auto;

      .v-card {
        .line {
          width: 25%;
          height: 2px;
          margin-left: 5%;
          background: #e79538;
        }
        .img-div {
          background: rgba(177, 127, 69, 0.479);
          overflow: hidden;
          border-radius: 0 30px 0 30px;
        }
        .v-card__title {
          letter-spacing: 2px;
          padding-bottom: 0;
        }
      }
    }
  }

  @media only screen and(min-width: 900px) {
    .top-header {
      padding-top: 6rem;
    }
    .courses {
      width: 70%;
      margin: 0 auto;
      padding: 2rem;
      position: relative;
      top: -5rem;
      display: flex;
      justify-content: center;

      .v-card {
        margin: 0 1rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    main {
      .top-header {
        .divide {
          padding-top: 5rem;
        }
        .h5 {
          font-weight: 200px;
          font-size: 1.87rem;
        }
        .h1 {
          font-size: 2.5rem;
          font-weight: 900px;
        }
      }
    }
    .courses {
      width: 80%;
      margin: 0 auto;
      position: relative;
      top: -7rem;
      padding-top: 1px;

      .v-card {
        margin: 2rem auto;
      }
    }
  }
}
</style>