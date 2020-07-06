<template>
    <div class="footer d-flex justify-center align-center">
        <div>
            Developed by <a href="mailto:brianmawira2@gmail.com">Mawira </a>Copyright &copy; {{ date }} Jowam Coffee
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer {
    background-color: rgb(46, 22, 14);
    color: grey;
    height: 50px;
}

.footer a {
    text-decoration: none;
}
</style>