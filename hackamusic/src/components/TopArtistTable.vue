<template>
  <!--DIV RAIZ-->
  <div>
    <!--LISTADO DE TOP ARTISTAS ESPANIA-->

    <div class="artistsStyle">
      <!--Recorro el array de los artistas-->
      <ul v-for="artist in artists" :key="artist.id">
        <li>
          <img :src="artist.image[2]['#text']" />
        </li>
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
  props: {
    artists: Array
  }
};
</script>

<style scoped>
.artistsStyle {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 3rem;
}
ul {
  list-style: none;
}

ul li {
  line-height: 1.5rem;
}
</style>
