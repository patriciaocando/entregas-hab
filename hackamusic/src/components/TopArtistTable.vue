<template>
  <!--DIV RAIZ-->
  <div>
    <!--LISTADO DE TOP ARTISTAS ESPANIA-->
    <!--DIV DONDE SE RECORRE E INTERPOLA LA INFORMACION DEL ARRAY QUE TRAE LA VISTA DESDE LA API-->
    <div class="artistsStyle">
      <!--LISTA DE ELEMENTOS-->
      <ul v-for="artist in artists" :key="artist.id">
        <!--IMAGEN-->
        <li>
          <img :src="artist.image[2]['#text']" />
        </li>
        <!--TEXTOS-->
        <li>
          <p>
            <strong>{{ artist.name }} 🎵</strong>
          </p>

          <p>
            <strong>Fans:</strong>
            {{ artist.listeners }}
          </p>
        </li>
      </ul>
      <!--FIN LISTA DE ELEMENTOS-->
    </div>
    <!-- FIN LISTADO DE TOP ARTISTAS ESPANIA-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//importar la funcion que trae los datos de la api
import api from "@/api/index.js";

export default {
  name: "topartists",
  //Declaro la variable y el tipo de dato que voy a recibir de la vista
  props: {
    artists: Array
  }
};
</script>

<style scoped>
/*Grid para distribuir todos los items*/
.artistsStyle {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 3rem;
}

/*Quitar los bullets de la lista*/
ul li {
  list-style: none;
  line-height: 1.5rem;
}
</style>
