<template>
  <div class="home">
    <Navbar />
    <section class="title">
		<h1>Kontakt</h1>

        </section>

<div class="container">
    <section class="main-contact">
     <h2 class="header-contact">Kontakt</h2>
    <div class="main-map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8374.445793565152!2d26.714705!3d58.3493563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31f91313d1bbe0ee!2sTartu+Vocational+Education+Center!5e0!3m2!1sen!2see!4v1536752347340" width="600" height="450" style="border:0" allowfullscreen></iframe>
    </div>


    <div class="full-contact">
     <p class="info"><b>Oleme avatud:</b>  E-R 12.00-17.00<br>
       L-P ja pühad 12.00-14.00</p>

       <p class="info"><b>Info:</b>  Telefon vastab tööpäevadel 8.00-17.00. <br> Muul ajal pöörduda telefonil 112</p>

        <p class="info"><b>Aadress:</b>  Soola 56,<br>
        Keila, <br>
            Harjumaa</p>
        <p class="info"> <b> E-mail:</b>  loomade.varjupaik@gmail.com</p>

        <p class="info"> <b>Telefon:</b>  +372 7 983 543 <br>
            <b>Mobiil:</b> +372 56 199 455 </p>

        <p class="info"><b>Veeb:</b>  <a href="#"> http://wwww.loomade.varjupaik.ee</a></p>


    </div>
    </section>
</div>


<div class="clearfix"></div>
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
