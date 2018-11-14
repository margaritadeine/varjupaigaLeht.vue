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
        <li><router-link to="/" exact-active-class="active">Avaleht</router-link></li>
        <li><router-link to="/loomad" exact-active-class="active">Loomad varjupaigas</router-link></li>
        <li><router-link to="/kaotatud" exact-active-class="active">Kaotatud loomad</router-link></li>

         <li><router-link to="/toetamine" exact-active-class="active">Toetamise võimalused</router-link></li>
        <li><router-link to="/varjupaigast" exact-active-class="active">Varjupaigast</router-link></li>
          <li><router-link to="/kontakt" exact-active-class="active">Kontakt</router-link></li>

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
