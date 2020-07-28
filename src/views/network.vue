<template>
    <div class="network">
        <div class="parent">
            <div class="header">
                <nav-bar />
            </div>

            <div class="exports mb-7 d-flex justify-center align-center">
                <div class="export-content">
                    <div class="text-center inner-div">
                        <p class="top-title">REGULATORS, FARM MANAGEMENT AGENTS, AUCTONEERS, MILLERS AND MARKETERS</p>
                        <v-list color="transparent">
                            <div
                            v-for="(ag, i) in agents"
                            :key="i">
                                <v-list-item class="mt-2 d-flex justify-space-between">
                                    <v-list-content class="name">{{ ag.name }}</v-list-content>
                                    <v-list-content class="name blue--text">{{ ag.email }}</v-list-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </div>
                        </v-list>
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
            agents: [
                {name: 'Coffee Board of Kenya', email: '--'},
                {name: 'Kenya Coffee Producers & Traders Association', email: '--'},
                {name: 'Kenya Coffee Traders Association', email: '--'},
                {name: 'Kenya Coffee Producers Association', email: '--'},
                {name: 'Coffee Millers & Marketers Association', email: '--'},
                {name: 'Tropical Farm Management Ltd', email: 'marketingtropicalke@ngea.com'},
                {name: 'SMS Ltd', email: 'sms_kenya@comtrading.com'},
                {name: 'OCM Ltd/KOFINAF', email: 'coffeemill@kofinaf.co.ke'},
                {name: 'KCCE Ltd', email: 'info@kencaffee.coop'},
                {name: 'AC&T Exporters Ltd/Sasini', email: 'info@sasini.co.ke'},
                {name: 'CMS Ltd', email: 'info@coffeemanagement.co.ke'},
                {name: 'Nyambene Ltd', email: 'marketing@nyambenecoffee.co.ke'},
                {name: 'TCM Ltd', email: 'admin@thikacoffeemills.com'},
                {name: 'Coffee Equipment Suppliers, Roasting & Packaging', email: '--'},
                {name: 'Brazafric Enterprices Ltd', email: 'info@brazafric.co.ke'},
                {name: 'Weighing Solutions Ltd', email: '--'},
                {name: 'Weighing Solutions Ltd', email: '--'},
                {name: 'C. Dorman Ltd', email: 'info@dorman.co.ke'},
                {name: 'GoldRock International Enterprises Ltd', email: 'marketing@goldrockkenya.com'},
                {name: 'KenyaNut Co. Ltd.', email: '--'},
                {name: 'Nairobi Java House', email: '--'},
                {name: 'Warehouses, Clearing & Forwarding and Courier Services Agents', email: '--'},
                {name: 'Bollore Africa (K) Ltd', email: '--'},
                {name: 'Mwangi Coffee Warehouse Ltd', email: '--'},
                {name: 'TNT, FedEx', email: '--'},
            ]
        }
    }
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 10;
  padding-bottom: 3rem;
}

.network {
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.top-title {
    font-size: 30px;
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
    .export-content {
        background-color: rgba(255, 255, 255, 0.9);
        width: 90%;
        border-radius: 5px;
        margin: 2rem 0;
        padding: 5px;
    }

    .inner-div {
        border: 4px solid #ba8445;
        border-radius: 5px;
        padding: 1rem;
    }
}

</style>