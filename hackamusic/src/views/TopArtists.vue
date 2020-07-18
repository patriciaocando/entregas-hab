<template>
  <!--DIV RAIZ-->
  <div class="home">
    <div>
      <vue-headful title="Hackamusic\Top Artists" description="Top Artists de musica" />
    </div>
    <h1>⭐ HACKAMUSIC ⭐</h1>
    <h3>Top Artistas</h3>
    <div>
      <topartiststable :artists="artists" />
    </div>
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//importar el "modulo" que trae las funciones de llamada a la api
import api from "@/api/index.js";
//Importo el componente para las tags
import topartiststable from "@/components/TopArtistTable.vue";
//importar el headful
import vueHeadful from "vue-headful";

export default {
  name: "Home",
  components: {
    topartiststable
  },
  data() {
    return {
      artists: []
    };
  },
  //DATOS DE TAGS
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>
