<template>
  <div id="module-details">
    <div v-for="mdl in modules" :key="mdl.id">
      <div v-if="id === mdl.id">
        <header>
          <menu-bar />

          <div class="header-content">
            <h1>{{ mdl.title }}</h1>
            <div class="key-points-div">
              <section class="categories">
                <p class="h3">MODULES</p>
                <li v-for="topic in mdl.topics" :key="topic.id">{{ topic }}</li>
              </section>
              <section class="teachers">
                <p class="h3">INSTRUCTORS</p>
                <div class="avatar" v-for="(tr, i) in mdl.teachers" :key="i">
                  <div class="avatar-image-div">
                    <img
                      width="100%"
                      :src="tr.img"
                      :alt="[
                        tr.name,
                        'professional barista',
                        'coffee training',
                        'coffee expert',
                        'jowam training center',
                      ]"
                    />
                  </div>
                  <p class="instructor-name">{{ tr.name }}</p>
                </div>
              </section>

              <section class="certification">
                <p class="h3">CERTIFICATION</p>
                <li>Certificate</li>
              </section>
            </div>
          </div>
        </header>

        <main>
          <section class="section-title">
            <p>Course Details</p>
            <div class="rotated-div"></div>
          </section>
          <section class="intro-section">
            <h2>Information and Overview.</h2>
            <p>
              {{ mdl.info }}
            </p>
          </section>

          <br />
          <br />
          <section class="article-section">
            <article>
              {{ mdl.ht }}
            </article>
            <br />
            <p>
              {{ mdl.more_info }}
            </p>
          </section>
        </main>
        <footer>
          <training-footer />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "module-details",

  data() {
    return {
      id: this.$route.params.id,

      modules: [
        {
          id: 1,
          img: require("../assets/barista.webp"),
          title: "Barista",
          info:
            "Students that enroll in the barista training program learn how to produce a variety of coffee and non-coffee-based drinks, as well as how to grind and brew coffee. Some courses cover information on different roasts, growth areas, and grind varieties. The training often covers inventory management, cash register operation, and customer service protocols. A few programs provide specialized training in techniques like cupping and latte art.",
          ht:
            "Looking for a coffee training school in Kenya? The good news is that you have landed on the best training centre",
          more_info:
            "The speciality coffee industry places a high value on education, so seize any chance to broaden your expertise on a continuing basis. A planned training program will teach you the essentials and more than just technical abilities; it will drive you to consistently deliver amazing espresso drinks and exceptional customer service, which will eventually increase business for your café.",
          topics: [
            "Introduction to Coffee",
            "Speciality Brewing",
            "Espresso Brewing Formula",
            "Hygiene Standards",
            "From Bean to Cup",
            "Coffee Beverages",
            "latte Art",
            "Financial Management",
          ],
          teachers: [
            // {
            //   img: require("../assets/potrait.webp"),
            //   name: "Esther Nyokabi",
            //   divider: true,
            // },
            // {
            //   img: require("../assets/potrait_1.webp"),
            //   name: "kelvin Bundi",
            //   divider: false,
            // },
          ],
        },
        {
          id: 2,
          img: require("../assets/mixology.webp"),
          title: "Mixology",
          info:
            "You'll learn about all of the many types of ingredients and items used behind the bar, their flavor profiles, and how to work with them in cocktails in this course, which is much more than just a 'overview of ingredients'",
          ht:
            "Learn to make your own infusions, syrups, and craft cocktails using advanced techniques.",
          more_info:
            "Put the parts back together one more time. You'll graduate from this course with a thorough understanding of balance and flavor, as well as the ability to plan your cocktails on paper before wasting expensive ingredients.",
          topics: [
            "Introduction to Bartending",
            "Tools and Equipment",
            "Spirits Discovery",
            "History of Cocktails",
            "Pouring Techniques",
            "Cocktail Recipes",
            "Drinks Presentation",
            "Wine Assessment",
            "menu Development",
            "Costing & Finance",
            "Bar Management",
            "Customer Service",
          ],
          teachers: [
            // {
            //   img: require("../assets/potrait.webp"),
            //   name: "Esther Nyokabi",
            //   divider: true,
            // },
            // {
            //   img: require("../assets/potrait_1.webp"),
            //   name: "kelvin Bundi",
            //   divider: false,
            // },
          ],
        },
        {
          id: 3,
          img: require("../assets/roasting.webp"),
          title: "Roasting",
          info:
            "Many roasting tests and research findings. one subject. You now have access to all of our expertise, experience, and roasting secrets. Study under the greatest. Get access to master seminars from top coffee roasters",
          ht:
            "Gain practical experience in the key elements of sensory evaluation in Sensory skills classes.",
          more_info:
            "A cup of coffee can be downed by some in seconds, although you are hopefully able to enjoy your coffee enough to savour it a little longer. But the process leading to a cup of coffee is years long in the making.",
          topics: [
            "Introduction to Coffee",
            "Green Coffee Assessment",
            "Cupping Analysis",
            "Coffee Roasting",
          ],
          // teachers: [
          //   {
          //     img: require("../assets/potrait.webp"),
          //     name: "Esther Nyokabi",
          //     divider: true,
          //   },
          //   {
          //     img: require("../assets/potrait_1.webp"),
          //     name: "kelvin Bundi",
          //     divider: false,
          //   },
          // ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/module-banner.webp");
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  padding: 5rem 0 2rem 0;

  h1 {
    font-weight: bold;
    font-family: "Abril fatface", cursive;
    letter-spacing: 4px;
    color: white;
  }

  .key-points-div {
    .h3 {
      margin-bottom: 2.5rem;
      font-weight: 700;
      font-size: 16px;
    }

    li {
      list-style: none;
      margin-bottom: 10px;
      border-left: 2px solid rgb(192, 192, 192);
      padding-left: 5px;
      font-weight: 600;
    }
    .avatar {
      display: flex;
      color: #585858;
      margin-bottom: 10px;
      .avatar-image-div {
        width: 20%;
        height: 55px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}

main {
  p {
    line-height: 25px;
  }
  .section-title {
    background-color: #f0f0f0;
    padding-top: 3rem;
    p {
      border-left: 2px solid rgb(192, 192, 192);
      padding-left: 3px;
      font-weight: 500;
    }
    .rotated-div {
      background: #f0f0f0;
      width: 40px;
      height: 40px;
      transform: rotate(45deg);
      position: relative;
      top: 20px;
    }
  }

  .intro-section {
    margin: 5rem auto 0 auto;
    h2 {
      font-size: 32px;
      border-left: 3px solid black;
      padding-left: 1rem;
    }
  }

  .article-section {
    margin: 2rem auto 4rem auto;
    h3 {
      font-size: 24px;
    }

    article {
      background-color: #edf2f3;
      border-left: 4px solid #aebec9;
      padding: 25px 32px;
      font-size: 18px;
      font-style: italic;
      font-weight: 600;
      text-align: justify;
    }
  }
}

@media screen and (min-width: 1200px) {
  header {
    h1 {
      font-size: 72px;
    }
    .header-content {
      width: 70%;
      margin: 0 auto;
      .key-points-div {
        background-color: rgba($color: #ffff, $alpha: 0.9);
        padding: 3rem;
        display: flex;
        justify-content: space-between;

        .h3 {
          margin-bottom: 2.5rem;
          font-weight: 700;
          font-size: 16px;
        }

        li {
          list-style: none;
          margin-bottom: 10px;
          border-left: 2px solid rgb(192, 192, 192);
          padding-left: 5px;
          font-weight: 600;
        }
        .avatar {
          width: 300px;
          display: flex;
          color: #585858;
          margin-bottom: 10px;
          .avatar-image-div {
            width: 20%;
            height: 55px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }

  main {
    .section-title {
      p {
        margin: 0 auto;
        width: 60%;
      }
      .rotated-div {
        left: 20%;
      }
    }
    .intro-section,
    .article-section {
      width: 50%;
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    h1 {
      font-size: 50px;
    }
    .header-content {
      width: 95%;
      margin: 0 auto;
      .key-points-div {
        background-color: rgba($color: #ffff, $alpha: 0.9);
        display: flex;
        justify-content: space-between;
        padding: 10px 2rem;
        .avatar {
          width: 250px;
        }
      }
    }
  }

  main {
    .section-title {
      p {
        margin: 0 auto;
        width: 90%;
      }
      .rotated-div {
        left: 5%;
      }
    }
    .intro-section,
    .article-section {
      width: 80%;
    }
  }
}

@media screen and (max-width: 900px) {
  header {
    h1 {
      font-size: 39px;
    }
    .header-content {
      width: 96%;
      margin: 0 auto;
      .key-points-div {
        padding: 0;
        background: none;
        display: block;
        .categories,
        .teachers,
        .certification {
          background-color: rgba($color: #ffff, $alpha: 0.9);
          padding: 1rem 2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  main {
    .section-title {
      p {
        margin: 0 auto;
        width: 90%;
      }
      .rotated-div {
        left: 5%;
      }
    }
    .intro-section,
    .article-section {
      width: 90%;
    }
  }
}
</style>
