<template>
  <div class="gallery">
    <div class="parent">
      <div class="header" id="top">
        <nav-bar />
      </div>

      <div class="main-content mb-6 pt-12">
        <div class="row hidden-sm-and-down">
          <div class="col">
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/director_Y-QbK_-NV.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/results_jh6D2XOPp.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/packing_a3ZM3Ul9Z.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam3_VO-DO5-j5.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam5_hl4IUeRCu.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam4_6KnsQfhmg.jpg"
            />
          </div>
          <div class="col">
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/plant_rDAzqrkhT.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam2_p4qS3D639.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/plantation_rDU5jeH3-8.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam7_8SQPrawos.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam2_p4qS3D639.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/plantation_rDU5jeH3-8.jpg"
            />
          </div>
          <div class="col">
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam7_8SQPrawos.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam0_I0sbjpbM2t.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam_zy8E31tbzs.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam6_rZf5Xy5-b.jpg"
            />
            <img
              src="https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/jowam1_EZSJ9qSBOS.jpg"
            />
          </div>
          -->
        </div>

        <div class="mobile-row hidden-md-and-up pa-6 mb-7">
          <div
            class="d-flex justify-center my-3"
            v-for="im in images"
            :key="im.id"
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

.gallery {
  background-image: url(https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/coffee1_zXbvcAYrD.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.parent {
  background-color: rgba(46, 22, 14, 0.5);
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rem;
}

.top-btn {
  position: fixed;
  bottom: 10%;
  right: 2%;
}

.col img {
  width: 100%;
  border-radius: 10px;
  margin: 8px;
}
</style>
