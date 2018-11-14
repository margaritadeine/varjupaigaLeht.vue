<template>
  <div class="home">
    <Navbar />


        <section class="pildid">
           <div>
		<router-link to="/koer1"><img class="koer" src="https://cdn.pixabay.com/photo/2016/09/26/15/15/bernese-mountain-dog-1696135_960_720.jpg" alt="25.08.2018"></router-link>
			<p><b>Kaotatud:</b> 25.08.2018 </p><br>
			<p><b>Kontakt:</b> adamlom98@hotmail.com</p>
		</div>

           <div>
		<router-link to="/koer2"><img class="koer" src="https://upload.wikimedia.org/wikipedia/en/5/53/Panasonic_Lumix_Cam_008.jpg" alt="15.09.2018"></router-link>
			<p><b>Kaotatud:</b> 15.09.2018 </p><br>
			<p><b>Kontakt:</b> tuuli.klaas@gmail.com</p>
		</div>


          <div>
		<router-link to="/koer3"><img class="koer" src="https://upload.wikimedia.org/wikipedia/en/0/0e/Dog_stretch_wb.jpg" alt="09.10.2018"></router-link>
			<p><b>Kaotatud:</b> 09.10.2018 </p><br>
			<p><b>Kontakt:</b> jevgenij0001@gmail.com</p>
		</div>

          <div>
		<router-link to="/koer4"><img class="koer" src="https://cdn.pixabay.com/photo/2017/04/25/16/32/labrador-2260192_960_720.jpg" alt="29.09.2018"></router-link>
			<p><b>Kaotatud:</b> 01.10.2018 </p><br>
			<p><b>Kontakt:</b> piiasaar@hotmailmail.com</p>
		</div>

		 <div>
		<router-link to="/koer5"><img class="koer" src="https://upload.wikimedia.org/wikipedia/commons/8/86/Maltese_puppy.jpeg" alt="29.09.2018"></router-link>
			<p><b>Kaotatud:</b> 30.08.2018 </p><br>
			<p><b>Kontakt:</b> triina.muha@hotmailmail.com</p>
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
