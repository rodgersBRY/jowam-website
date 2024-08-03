<template>
  <div id="footer">
    <section class="top">
      <div class="about">
        <div class="logo">
          <img :src="require('@/assets/logo.png')" alt="company logo" />
          <p>Jowam Coffee Traders LTD</p>
        </div>

        <div class="content">
          <p>At Jowam Coffee Traders, we specialize in exporting premium green coffee beans 
            straight from Kenya's renowned coffee-growing regions. Based in Nairobi,
              our headquarters is strategically positioned to connect the rich 
              coffee heritage of Kenya with markets across the globe.
          </p>
        </div>
      </div>
      
      <div class="socials">
        <p class="section-title">FOLLOW US ON INSTAGRAM</p>

        <div class="insta-div">
          <p>Jowam Coffee Traders</p>
          <div class="platform">
            <i class="mdi mdi-instagram"></i>
            <p>INSTAGRAM</p>
          </div>
        </div>
      </div>
  
      <div class="contact-info">
        <p class="section-title">CONTACT INFO</p>
        <div class="info">
          <p>Address: 4th Flr, Pension Towers. Loita Str. Nairobi</p>
          Phone: 254728919092/254722762945
          Email: trading@jowamcoffee.com
        </div>
      </div>
    </section>

    <section class="bottom">
      <p>&copy; {{ date }} Jowam Coffee Traders LTD. - Developed by <span><a href="">Mawira Corp.</a></span></p>
      <div class="links">
        <ul>
          <router-link exact-active-class="active" class="nav-link" to="/">
            Home
          </router-link>
  
          <router-link active-class="active" class="nav-link" to="/about">
            About Us
          </router-link>
  
          <router-link active-class="active" class="nav-link" to="/contact">
            Contact Us
          </router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  background-color: var(--faded-secondary-color);
  .section-title {
    font-weight: bold;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid green;
  }
  .top {
    font-size: 15px;
    padding: 4rem 6rem;
    display: flex;
    justify-content: space-between;
    .about {
      width: 300px;
      .logo {
        display: flex;
        gap: 1rem;
        font-weight: bold;
        margin-bottom: 12px;
        img {
          height: 50px;
        }
      }
      .content p {
        text-align: justify;
      }
    }
    .insta-div {
      background-image: url('@/assets/img/beans.png');
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      width: 300px;
      height: 150px;
      color: white;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .platform {
        background-color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        padding: 5px;
        width: 50%;
        color: black;
        font-weight: bold;
        font-size: 17px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        p {
          font-size: 12px;
        }
      }
      img {
        width: 100%;
      }
    }
    .contact-info {
      width: 300px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1.5rem 2rem;
    border-top: 1px solid black;
    font-size: 13px;
    a {
      text-decoration: none;
      color: black;
      font-weight: 600;
      &:hover {
        color: white;
      }
    }
    .links a:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
