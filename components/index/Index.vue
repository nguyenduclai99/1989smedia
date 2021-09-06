<template>
    <div>
        <Header/>
        <LandingPage/>
        <Footer/>
    </div>
</template>
<script>
import Header from './Header.vue'
import LandingPage from './LandingPage.vue'
import Footer from './Footer.vue'
export default {
  components: { LandingPage, Header, Footer },
    
}
</script>