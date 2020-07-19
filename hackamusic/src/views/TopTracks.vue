<template>
  <!--DIV RAIZ-->
  <div class="home">
    <!--DIV METATITLE PARA SEO-->
    <div>
      <vue-headful title="Hackamusic\Top Tracks" description="Top Canciones en Espania" />
    </div>
    <!--FIN DIV METATITLE PARA SEO-->

    <!--DIV CONTENEDOR DONDE SE VA A MOSTRAR EL CONTENIDO DEL COMPONENTE-->
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <h3>Top Tracks</h3>
      <!--etiqueta html del componente-->
      <toptrackstable :tracks="tracks" />
    </div>

    <!-- FIN DEL DIV CONTENEDOR-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//importar la funcion que trae los datos de la api
import api from "@/api/index.js";

//Importo el componente para las tags
import toptrackstable from "@/components/TopTracksTable.vue";

export default {
  name: "TopTracks",
  //Registro la etiqueta del componente
  components: {
    toptrackstable
  },
  //Declaro las variables que voy a usar
  data() {
    return {
      tracks: []
    };
  },
  //Datos de las canciones traidos de la api
  created() {
    api
      .getTopTracks()
      .then(response => (this.tracks = response.data.tracks.track));
  }
};
</script>
