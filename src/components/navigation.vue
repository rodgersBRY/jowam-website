<template>
    <div class="header text-center">
        <p class="firmName white--text">JOWAM COFFEE TRADERS LTD</p>
        <div class="nav-bar">
            <router-link tag="li" active-class="active" to="/" exact>Home</router-link>
            <router-link tag="li" active-class="active" to="/about">About Us</router-link>
            <router-link tag="li" active-class="active" to="/gallery">Photo Gallery</router-link>
            <router-link tag="li" active-class="active" to="/network">Network & Partnerships</router-link>
            <router-link tag="li" active-class="active" to="/contact">Contact Us</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeClass: 'active'
        }
    },

    computed: {
        currentPage() {
            return this.$route.path
        }
    }
}
</script>

<style scoped>

.nav-bar {
    list-style: none;
    background-color: #2e160e;
    color: white;
    display: flex;
    width: 100%;
    justify-content: center;
}

.firmName {
    padding: 6rem 0;
    font-size: 70px;
}

.nav-bar li {
    display: inline-block;
    margin: 1rem 2rem;
}

.nav-bar li {
    text-decoration: none;
    color: white;
    font-size: 20px;
}

.nav-bar li:hover {
    color: rgb(105, 103, 103);
}

.nav-bar li.active {
    color: #ba8445;
}
</style>