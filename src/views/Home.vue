<template>
  <div class="home">
    <Navbar />
    <section class="title">
		<h1>Loomade varjupaik</h1>

        </section>
    <div class="container">

   <section class="mini-contact">

     <div class="mini">
      <h2>Võta meiega ühendust:</h2>
  <p class="telefon">Telefon nr +372 7 983 543</p>
<p> Email: loomade.varjupaik@gmail.com</p>

  </div>

    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8374.445793565152!2d26.714705!3d58.3493563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31f91313d1bbe0ee!2sTartu+Vocational+Education+Center!5e0!3m2!1sen!2see!4v1536752347340" width="600" height="450" style="border:0" allowfullscreen></iframe>

       </div>

     </section>


<div class="clearfix"></div>

      </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
    .title h1 {
        background-image: url("../assets/akass.jpg");
    }
</style>
