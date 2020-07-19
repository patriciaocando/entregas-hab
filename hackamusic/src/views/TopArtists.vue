<template>
  <!--DIV RAIZ-->
  <div class="home">
    <!--DIV METATITLE PARA SEO-->
    <div>
      <vue-headful title="Hackamusic\Top Artists" description="Top Artists de musica" />
    </div>
    <!--FIN DIV METATITLE PARA SEO-->
    1
    <!--DIV CONTENEDOR DONDE SE VA A MOSTRAR EL CONTENIDO DEL COMPONENTE-->
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <h3>Top Artistas</h3>
      <!--etiqueta html del componente-->
      <topartiststable :artists="artists" />
    </div>
    <!-- FIN DIV CONTENEDOR-->
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
  //Registro la etiqueta del componente
  components: {
    topartiststable
  }, //Declaro las variables que voy a usar
  data() {
    return {
      artists: []
    };
  },
  //DATOS DE ARTISTAS TRAIDOS DE LA API(ES una promesa)
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>
