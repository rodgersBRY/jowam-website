<template>
    <div class="contact">
        <div class="parent">
            <div class="header">
                <nav-bar />
            </div>

            <div class="exports mb-7 d-flex justify-center align-center">
                <div class="export-content ">
                    <div class="text-center inner-div">
                        <h3 class="mb-6">REGULATORS, FARM MANAGEMENT AGENTS, AUCTONEERS, MILLERS AND MARKETERS</h3>
                        <v-list color="transparent">
                            <div
                            v-for="cn in contacts"
                            :key="cn.id">
                                <v-list-item class="contact-details mt-2 d-flex justify-space-between">
                                    <v-list-content class="name">{{ cn.title }}</v-list-content>
                                    <v-list-content class="name blue--text">{{ cn.text }}</v-list-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </div>
                        </v-list>

                        <div class="hse my-12">
                            <h3 class="name">Wakulima Hse, 4th Floor</h3>
                            <p>Haile Selassie Ave</p>
                        </div>
                        <div class="call">
                            <p class="name">Call Anytime</p>
                            <p>+254-722762945</p>
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
                {title: 'Address', text: 'P.O Box: 58513-0200 City Square'},
                {title: 'City/Town', text: 'Nairobi'},
                {title: 'Country', text: 'Kenya'},
                {title: 'County', text: 'Nairobi'},
                {title: 'Mobile', text: ''},
                {title: 'Email Address', text: 'trading@jowamcoffee.com'},
                {title: '', text: 'bundi.jowamcoffee@gmail.com'}
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Marck+Script&display=swap');

.contact {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.parent {
  background-color: rgba(46, 22, 14, 0.5);
}

.exports {
  background-color: #ba8445;
  margin-top: 5rem;
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

.name {
    font-family: 'Lato', sans-serif;
}
</style>