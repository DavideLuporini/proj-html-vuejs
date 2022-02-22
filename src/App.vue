<template>
  <div id="app">  
    <Header/>
    <Jumbo />
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Jumbo from './components/Jumbo.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Jumbo,
    Main,
    Footer,
  }
}
</script>

<style lang="scss">
@import 'bootstrap';
@import "./assets/sass/colors.scss";
*{
  font-family: 'Nanum Gothic', sans-serif;
}

</style>
