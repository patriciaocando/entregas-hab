<template>
  <!--DIV RAIZ-->
  <div>
    <!--COMPONENTE DEL MENU NAVEGACION DONDE SE LINKEAN LOS PATH DEL ./ROUTER/INDEX  UTILIZANDO EN NOMBRE SE SE LE HA ASIGNADO A CADA PATH-->
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home \</router-link>
      <router-link :to="{ name: 'About' }">About \</router-link>
      <router-link :to="{ name: 'Toptags' }">Top Tracks \</router-link>
      <router-link :to="{ name: 'Topartists' }">Top Artists \</router-link>
    </div>
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//nombre del componente
export default {
  name: "menucustom"
};
</script>

<style scoped>
</style>