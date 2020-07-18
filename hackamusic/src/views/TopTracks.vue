<template>
  <!--DIV RAIZ-->
  <div class="home">
    <div>
      <vue-headful
        title="Hackamusic\Top Tracks"
        description="Top Canciones en Espania"
      />
    </div>
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <h3>Top Tracks</h3>
      <toptrackstable :tracks="tracks" />
    </div>
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
  components: {
    toptrackstable,
  },
  data() {
    return {
      tracks: [],
    };
  },
  created() {
    api
      .getTopTracks()
      .then((response) => (this.tracks = response.data.tracks.track));
  },
};
</script>
