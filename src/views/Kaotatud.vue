<template>
  <div class="home">
    <Navbar />
    <section class="title">
    <h1 id="pealkiri">Kaotatud loomad</h1>
    </section>
    <div class="conatainer">

<div class="wrapper">
   <router-link to="/kassid">
	 <div class="box a" >
		<img class="pilt" src="http://lanaicatsanctuary.org/wp-content/uploads/2017/08/lanai-cat-sanctuary-head-2.jpg" alt="Kassid">
		<p class="descrip"><b>Kaotatud kassid</b></p>
	 </div>
	</router-link>


	<router-link to="/koerad">
     <div class="box b">
		<img class="pilt" src="../assets/dog.jpg" alt="Koerad">
		<p class="descrip"><b>Kaotatud koerad</b></p>

	 </div>
	 </router-link>


	 <div class="additing">
	     <h2 class="add-yourself">Lisa kuulutus</h2>

    <form class="outline">
        <select id="missing" name="missing">
            <option value="kaotatud">Kaotatud</option>
            <option value="leitud">Leitud</option>
         </select>

         <br>
        <select id="animal-type" name="animal-type">
            <option value="koer">Koer</option>
            <option value="kass">Kass</option>
            <option value="muu loom">Muu loom</option>
         </select>

         <br>
           <input type="text" id="breed-type" name="breed-type" placeholder="Nimi ja/või tõug">

        <br>

            <textarea id="subject" name="subject" placeholder="Info kaotatud või leitud looma kohta, vabas vormis." style="height:200px"></textarea>
        <br>

           <input type="text" id="finding-date" name="finding-date" placeholder="Kaotamise/leidmise kuupäev">
        <br>

            <p id="add-file"><b>Lisa pildifail</b></p>
           <input type="file" id="chosen" style="width:200px">

        <br>
           <input type="text" id="personal-epost" name="personal-epost" placeholder="Teie e-post">
        <br>

           <input type="text" id="personal-tel" name="personal-tel" placeholder="Teie telefon">

        <br>

            <input type="submit" value="Saada">

         </form>
	 </div>
</div>

</div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'kaotatud',
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
