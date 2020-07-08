<template>
    <div class="gallery">
        <div class="parent">
            <div class="header" id="top">
                <nav-bar />
            </div>

            <div class="main-content">
                <div class="row hidden-sm-and-down">
                    <div class="col">
                        <img :src="require('../assets/img/director.jpg')">
                        <img :src="require('../assets/img/jowam.jpg')">
                        <img :src="require('../assets/img/jowam0.jpg')">
                        <img :src="require('../assets/img/jowam1.jpg')">
                        <img :src="require('../assets/img/jowam2.jpg')">
                        <img :src="require('../assets/img/jowam3.jpg')">
                    </div>
                    <div class="col">
                        <img :src="require('../assets/img/jowam4.jpg')">
                        <img :src="require('../assets/img/jowam5.jpg')">
                        <img :src="require('../assets/img/jowam6.jpg')">
                        <img :src="require('../assets/img/jowam7.jpg')">
                        <img :src="require('../assets/img/packing.jpg')">
                        <img :src="require('../assets/img/plantation.jpg')">
                    </div>
                    <div class="col">
                        <img :src="require('../assets/img/tasting1.jpg')">
                        <img :src="require('../assets/img/roasting1.jpg')">
                        <img :src="require('../assets/img/tasting3.jpg')">
                        <img :src="require('../assets/img/tasting5.jpg')">
                        <img :src="require('../assets/img/tasting6.jpg')">
                    </div>
                </div>

                <v-btn rounded dark icon>
                    <i class="bx bxs-up-arrow-alt"></i> top
                </v-btn>

                <div class="mobile-row hidden-md-and-up pt-6 mb-7" >
                    <div class="d-flex justify-center my-3" v-for="im in images" :key="im.id">
                        <img width="95%" :src="im.src">
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
import navBar from '../components/navigation'
import Footer from '../components/footer'

export default {
    components: {
        'nav-bar': navBar,
        'bottom-view': Footer 
    },

    data() {
        return {
            images: [
                {src: require('../assets/img/director.jpg')},
                {src: require('../assets/img/jowam.jpg')},
                {src: require('../assets/img/jowam0.jpg')},
                {src: require('../assets/img/jowam1.jpg')},
                {src: require('../assets/img/jowam2.jpg')},
                {src: require('../assets/img/jowam3.jpg')},
                {src: require('../assets/img/jowam4.jpg')},
                {src: require('../assets/img/jowam5.jpg')},
                {src: require('../assets/img/jowam6.jpg')},
                {src: require('../assets/img/jowam7.jpg')},
                {src: require('../assets/img/packing.jpg')},
                {src: require('../assets/img/plantation.jpg')},
                {src: require('../assets/img/tasting1.jpg')},
                {src: require('../assets/img/tasting3.jpg')},
                {src: require('../assets/img/roasting1.jpg')},
                {src: require('../assets/img/tasting5.jpg')},
                {src: require('../assets/img/tasting6.jpg')}
            ]
        }
    }
}
</script>

<style scoped>

.header {
  position: relative;
  z-index: 10;
}

.gallery {
  background-image: url(../assets/bg.jpg);
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
    /* margin: 4rem 0; */
}

.top-btn {
    position: fixed;
    bottom: 10%;
    right: 2%;
}

/* Create two equal columns that sits next to each other */
.col {
    flex: 20%;
    padding: 0 4px;
}

.col img {
    width: 100%;
    margin-top: 8px;
    vertical-align: middle;
}
</style>