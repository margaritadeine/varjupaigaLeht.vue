<template>
  <div class="home">
    <Navbar />
    <section class="title">
    <h1 id="pealkiri">Loomad varjupaigas</h1>
      </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'loomad',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
    #pealkiri {
        background-image: url("../assets/akass.jpg");
    }
</style>
