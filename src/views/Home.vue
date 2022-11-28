<template>
  <div class="home">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="banner-div">
        <div>
          <h1>A DIGITAL MARKETING & DESIGN AGENCY</h1>
          <p>
            We love the Web and the work we do.We work closely with our clients
            to deliver the best possible solutions for their needs
          </p>

          <v-btn depressed dark color="green">FREE BOOTSTRAP TEMPLATES</v-btn>
        </div>
      </section>

      <section class="about-us">
        <div class="about-text">
          <h2>ABOUT US</h2>
          <p>
            <em
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem repellendus accusantium dignissimos alias adipisci
              laboriosam et soluta voluptatibus dolor odit libero magni quasi
              voluptates unde, sapiente ex amet architecto temporibus?</em
            >
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo
            molestiae voluptatum sunt non, laboriosam voluptas deserunt harum
            ipsum aperiam eligendi quo provident. Quisquam nihil blanditiis
            praesentium ipsa incidunt dicta! Quos eum aliquid perferendis iure
            distinctio. Facilis, porro! Consequatur, commodi.
          </p>
        </div>
        <div class="about-img"></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: "INTRODUCTION",
          info:
            "Jowam Coffee Trading Company limited is registered and incorporated under the Company’s Act in the Laws of Kenya. We are licensed under the Coffee Directorate Crops Act, 2013 and the Coffee (Forms) Rules, 2002 as a licensed coffee dealer and exporter in Kenya. With well over thirty years of experience in the Coffee industry coupled with quality control, passion and commitment to service, Jowam Coffee Trading Company founders empower clients by providing coffees that ensure their product sales remain high.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.farmafrica.org%2Fimages%2Ftwitter-cards%2Fgrace-arineitwe-social-card.jpg&f=1&nofb=1",
        },
        {
          title: "",
          info:
            "Jowam Coffee Trading Company Limited was founded in June 2006 as an exporting company for coffees. We also promote farmers by providing advanced farming technologies to ensure production of high-quality coffee that is of great value.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2ru2mvuh5wx24.cloudfront.net%2Favtivity_bootstrap%2F1204%2Fcoffee_galore__1920x864.jpg&f=1&nofb=1",
        },
        {
          title: "BUSINESS CONCEPTS",
          info:
            "Through a business model that is geared towards easy access and convenience for our customers, Jowam Coffee Trading Company has evolved to become a trusted coffee dealer and exporter of Kenyan green Arabica coffee. Our business model has continued to earn global recognition in terms of coffee quality assurance, friendly sales contracts, and timely delivery of shipments. Since the incorporation of Jowam Coffee Trading Company Ltd, we have shipped large volumes of green coffee beans from Kenya to many countries around the world.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheexchange.africa%2Fwp-content%2Fuploads%2F2018%2F05%2FCoffee-Bill-Coffee-farming-in-East-Africa-Uganda-Coffee-industry.jpg&f=1&nofb=1",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 50px;
}

h2 {
  font-size: 40px;
}
main {
  .banner-div {
    background-image: url("../assets/img/home-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    padding: 2rem 0;
    height: 70vh;
    div {
      width: 50%;
      margin: 3rem auto;

      p {
        font-size: 30px;
      }
    }
  }

  .about-us {
    width: 70%;
    margin: 3rem auto;
  }
}
</style>
