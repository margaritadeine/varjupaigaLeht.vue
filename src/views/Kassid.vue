<template>
  <div class="home">
    <Navbar />


       <section class="pildid">
           <div>
		<router-link to="/kass1"><img class="kass" src="https://www.gcomegatto.it/wp-content/uploads/2016/09/Willow1.jpeg" alt="03.09.2018"></router-link>
			<p><p><b>Kaotatud:</b> 03.09.2018 </p><br>
			<p><b>Kontakt:</b> liisi43@hotmail.com</p>
		</div>

           <div>
		<router-link to="/kass2"><img class="kass" src="https://c1.staticflickr.com/2/1202/1089567053_946f4ad172_b.jpg" alt="12.10.2018"></router-link>
			<p><b>Kaotatud:</b> 12.10.2018</p><br>
			<p><b>Kontakt:</b> saaranoon@gmail.com</p>
		</div>


          <div>
		<router-link to="/kass3"><img class="kass" src="https://upload.wikimedia.org/wikipedia/commons/9/97/Feral_cat_Virginia_crop.jpg" alt="29.09.2018"></router-link>
			<p><b>Kaotatud:</b> 29.09.2018 </p><br>
			<p><b>Kontakt:</b> saaranoon@gmail.com</p>
		</div>

          <div>
		<router-link to="/kass4"><img class="kass" src="https://cdn12.picryl.com/photo/2016/12/31/cat-sneak-sneak-up-on-animals-b1fbdf-1024.jpg" alt="29.09.2018"></router-link>
			<p><b>Kaotatud:</b> 01.10.2018 </p><br>
			<p><b>Kontakt:</b> moonateq@gmail.com</p>
		</div>

       </section>

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
