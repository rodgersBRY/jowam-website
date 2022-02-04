<template>
  <div class="gallery">
    <div class="parent">
      <div class="header" id="top">
        <nav-bar />
      </div>

      <div class="main-content mb-6">
        <div class="col hidden-sm-and-down mx-auto pl-12">
          <div class="image-div" v-for="(im, i) in images" :key="i">
            <v-img class="img" :src="im.src"> </v-img>
          </div>
        </div>

        <div class="mobile-row hidden-md-and-up pa-6 mb-7">
          <div
            class="d-flex justify-center my-3"
            v-for="(im, i) in images"
            :key="i"
          >
            <img width="95%" :src="im.src" />
          </div>
          <v-btn class="top-btn" rounded dark left href="#top">
            <i class="bx bxs-up-arrow-alt bx-sm"></i>top
          </v-btn>
        </div>
      </div>

      <div class="footer">
        <bottom-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("../assets/img/director.jpg") },
        { src: require("../assets/img/jowam.jpg") },
        { src: require("../assets/img/jowam0.jpg") },
        { src: require("../assets/img/jowam1.jpg") },
        { src: require("../assets/img/jowam2.jpg") },
        { src: require("../assets/img/jowam3.jpg") },
        { src: require("../assets/img/jowam4.jpg") },
        { src: require("../assets/img/jowam5.jpg") },
        { src: require("../assets/img/jowam6.jpg") },
        { src: require("../assets/img/jowam7.jpg") },
        { src: require("../assets/img/packing.jpg") },
        { src: require("../assets/img/plantation.jpg") },
        { src: require("../assets/img/tasting1.jpg") },
        { src: require("../assets/img/tasting3.jpg") },
        { src: require("../assets/img/roasting1.jpg") },
        { src: require("../assets/img/tasting5.jpg") },
        { src: require("../assets/img/tasting6.jpg") },
      ],
    };
  },

  
};
</script>

<style scoped>


.header {
  position: relative;
  z-index: 10;
}

.main-content {
  padding-top: 8rem;
}

.gallery {
  background-image: url(https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/coffee1_zXbvcAYrD.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.parent {
  background-color: rgba(46, 22, 14, 0.5);
}

.top-btn {
  position: fixed;
  bottom: 10%;
  right: 2%;
}

.image-div {
  border-radius: 10px;
  margin: 1rem;
  height: 20rem;
  width: 30%;
  display: inline-block;
  overflow: hidden;
  animation: zoom-in-zoom-out 2s ease;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}

.image-div > .img {
  transition: transform 0.5s ease;
}

.image-div > .img:hover {
  transform: scale(1.2);
}
</style>
