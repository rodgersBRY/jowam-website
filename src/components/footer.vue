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
      
      <div class="insta">
        <p class="section-title tracking-wider">FOLLOW US ON INSTAGRAM</p>

        <div class="insta-div">
          <p>Jowam Coffee Traders</p>
          <a
          class="platform cursor-pointer rounded-lg"
          href="https://www.instagram.com/jowamcoffee/" target="_blank">
            <i class="mdi mdi-instagram"></i>
            <p>INSTAGRAM</p>
          </a>
        </div>
      </div>
  
      <div class="contact-info">
        <p class="section-title tracking-wider">CONTACT INFO</p>
        <div class="info">
          <p><span>Address:</span> 4th Flr, Pension Towers. Loita Str. Nairobi</p>
          <p><span>Phone:</span> +254728919092/+254722762945</p>
          <p><span>Email:</span> trading@jowamcoffee.com</p>
        </div>
      </div>

      <div class="hours">
        <p class="section-title tracking-wider">BUSINESS HOURS</p>

        <div class="">
          <p>Mon - Fri</p>
          <p>7.00 am - 5.00 pm</p>
        </div>
      </div>
    </section>

    <section class="bottom">
      <p>Copyright &copy; {{ date }} Jowam Coffee Traders LTD - Developed by
        <span>
          <a href="https://mawira.netlify.app/" target="_blank" class="duration-500 ease-in-out">Mawira Corp.</a>
        </span>
      </p>
      <div class="links">
        <ul>
          <router-link exact-active-class="active" class="nav-link duration-500 ease-in-out" to="/">
            Home
          </router-link>
  
          <router-link active-class="active" class="nav-link duration-500 ease-in-out" to="/about">
            About Us
          </router-link>

          <router-link active-class="active" class="nav-link duration-500 ease-in-out" to="/training">
            Training Centre
          </router-link>
  
          <router-link active-class="active" class="nav-link duration-500 ease-in-out" to="/contact">
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
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  .section-title {
    font-weight: bold;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid green;
  }
  .top {
    font-size: 14px;
    padding: 4rem 6rem;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
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
      span {
        font-weight: 500;
      }
    }
    .hours{
      width: 300px;
      div {
        display: flex;
        justify-content: space-between;
      }
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
