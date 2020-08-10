<template>
    <div class="contact">
        <div class="parent">
            <div class="header">
                <nav-bar />
            </div>

            <div class="main pt-10">
                <div class="exports mb-7 d-flex justify-center align-center">
                <div class="export-content">
                    <!-- desktop layout -->
                    <div class="text-center inner-div hidden-sm-and-down">
                        <h3 class="top-title mb-6">OUR CONTACTS</h3>
                        <v-list color="transparent">
                            <div
                            v-for="cn in contacts"
                            :key="cn.id">
                                <v-list-item class="contact-details mt-2 d-flex justify-space-between">
                                    <v-list-content class="name">{{ cn.title }}</v-list-content>
                                    <v-list-content>-</v-list-content>
                                    <v-list-content class="name blue--text" v-html="cn.text"></v-list-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </div>
                        </v-list>

                        <div class="hse my-12">
                            <h3 class="name">Caxton Hse, 3rd Floor</h3>
                            <p>Standard Street</p>
                        </div>
                        <div class="call">
                            <p class="name">Call Anytime</p>
                            <p>+254-722762945</p>
                        </div>
                    </div>

                    <!-- mobile layout -->
                    <div class="text-center pa-7 hidden-md-and-up">
                        <h3 class="top-title mb-6">OUR CONTACTS</h3>
                        <v-list color="transparent">
                            <div
                            v-for="cn in contacts"
                            :key="cn.id">
                                <v-list-item class="contact-details mt-2 d-flex justify-space-between">
                                    <v-list-content class="name">{{ cn.title }}</v-list-content>
                                    <v-list-content>-</v-list-content>
                                    <v-list-content class="name blue--text" v-html="cn.text"></v-list-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </div>
                        </v-list>

                        <div class="hse my-12">
                            <h3 class="name">Caxton Hse, 3rd Floor</h3>
                            <p>Standard Street</p>
                        </div>
                        <div class="call">
                            <p class="name">Call Anytime</p>
                            <p>+254-722762945</p>
                        </div>
                    </div>
                </div>
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
            contacts: [
                {title: 'Address', text: 'P.O Box: <i>58513-0200 City Square</i>'},
                {title: 'Country', text: 'Kenya'},
                {title: 'City/Town', text: 'Nairobi'},
                {title: 'County', text: 'Nairobi'},
                {title: 'Mobile', text: '+254-722762945, +254-28919092'},
                {title: 'Email Address', text: '<i>trading@jowamcoffee.com</i>'},
                {title: '', text: '<i>bundi.jowamcoffee@gmail.com</i>'}
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Marck+Script&display=swap');

.header {
  position: relative;
  z-index: 10;
  padding-bottom: 1.7rem;
}

.contact {
  background-image: url(https://ik.imagekit.io/qxekjpfx0b/Jowam_Coffee/coffee1_zXbvcAYrD.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.parent {
  background-color: rgba(46, 22, 14, 0.5);
}

.exports {
  background-color: #ba8445;
}

.export-content {
  background-color: rgba(255, 255, 255, 0.9);
  width: 65%;
  border-radius: 5px;
  margin: 4rem 0;
  padding: 5px;
}

.inner-div {
  border: 4px solid #ba8445;
  border-radius: 5px;
  padding: 8rem;
}

@media screen and (max-width: 700px) {
    .exports {
        background-color: #ba8445;
    }

    .export-content {
        background-color: rgba(255, 255, 255, 0.9);
        width: 90%;
        border-radius: 5px;
        margin: 4rem 0;
        padding: 5px;
    }

    .inner-div {
        border: 4px solid #ba8445;
        border-radius: 5px;
        padding: 1rem;
    }
}

.name {
    font-family: 'Lato', sans-serif;
}

.top-title {
    font-size: 40px;
}
</style>