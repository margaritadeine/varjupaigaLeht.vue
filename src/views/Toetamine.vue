<template>
  <div class="home">
    <Navbar />
    <section class="title">
    <h1 id="pealkiri">Toetamise võimalused</h1>
      </section>


<div class="container">

<div class="support">
    <section class="support-text">
    <p class="support-header">Lorem Ipsum</p>
     <p class="support-descrip">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <br>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

    </section>

    <section class="post-links">
    <p class="links-title">Toeta</p>
		<p><b>Annetused:</b><br>Konto IBAN: EE10 2200 2210 3277 9981</p>
		<p class="helper"><b>Vabatahtlikule info:</b><br>loomade.varjupaik@gmail.com </p>

		</section>

		<div class="clearfix"></div>
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
  name: 'toetamine',
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
