<template>
  <div class="home">
    <Navbar />

 <div class="container">


     <p class="cat-title">Annelinnast</p>


<div class="full-profile">


      <div class="brown-cat">
     <img class="kass" src="https://cdn.pixabay.com/photo/2017/04/25/16/32/labrador-2260192_960_720.jpg" alt="01.10.2018">
      </div>


    <div class="brown-descrip">
    <table>
     <tr>
     <th><span>&#9792;</span></th>
     </tr>

      <tr>
        <th>Liik</th>
        <td>Koer</td>
      </tr>
      <tr>
        <th>Tõulisus</th>
        <td>Segavereline</td>
      </tr>
      <tr>
        <th>Vanus</th>
        <td>ca 3 aastat</td>
      </tr>
      <tr>
        <th>Välimus</th>
        <td>voluptatum deleniti atque, corrupti quos dolores, et quas molestias excepturi sint</td>
      </tr>
      <tr>
        <th>Sugu</th>
        <td>Emane</td>
      </tr>
      <tr>
        <th>Päritolu</th>
        <td>Tartu, Annelinn </td>
      </tr>
      <tr>
        <th>Kaotatud</th>
        <td>01.10.2018</td>
      </tr>
      <tr>
        <th class="contact-spacing">Kontakttelefon</th>
        <td>57281003</td>
          </tr>


    </table>
        </div>

    <div class="extra-text">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
    </div>

  </div>


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
