<template>
  <div class="hello">
    <header>
    <div class="logo">Loomade varjupaik</div>
    <img class="logo-pilt" src="../assets/animal.logo.svg">

    <div class="search"><input type="text" placeholder="Otsing"></div>
</header>

	<div class="clearfix"></div>
	<div class="nav-hero">

<nav>
    <ul id="nav">
        <li><router-link to="/">Avaleht</router-link></li>
        <li><router-link to="/loomad">Loomad varjupaigas</router-link></li>
        <li><router-link to="/kaotatud">Kaotatud loomad</router-link></li>

         <li><router-link to="/toetamine">Toetamise võimalused</router-link></li>
        <li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>

    </ul>
</nav>

             	<div class="hamburger">
		<div>&#9776;</div>
		</div>


        	<div class="clearfix"></div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
