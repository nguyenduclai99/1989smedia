<template>
    <div>
        <Header/>
        <Index/>
        <Footer/>
    </div>
</template>

<script>
import Header from './../../components/index/Header.vue'
import Footer from './../../components/index/Footer.vue'
import Index from './../../components/about/index.vue'
export default {
    components: { Header, Footer, Index },
    head: {
        title: 'Giới thiệu về 1989s Media | 1989s Media',
        link: [
            { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
            { rel: 'stylesheet', href: '/assets/css/themify-icons.css' },
            { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
            { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
            { rel: 'stylesheet', href: '/assets/css/owl.theme.default.min.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
            { rel: 'stylesheet', href: '/assets/css/responsive.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans&display=swap' },
        ],
        script: [
            {src:'/assets/js/jquery-3.5.0.min.js'},
            {src:'/assets/js/popper.min.js'},
            {src:'/assets/js/bootstrap.min.js'},
            {src:'/assets/js/jquery.magnific-popup.min.js'},
            {src:'/assets/js/jquery.easing.min.js'},
            {src:'/assets/js/wow.min.js'},
            {src:'/assets/js/owl.carousel.min.js'},
            {src:'/assets/js/jquery.countdown.min.js'},
            {src:'/assets/js/validator.min.js'},
            {src:'/assets/js/scripts.js'},
        ],
    },
    mounted() {
        console.log(process.env.NUXT_ENV_URL_ADMIN_API)
    }
}
</script>
