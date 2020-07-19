<template>
  <!--DIV RAIZ-->
  <div>
    <!--DIV DE BARRA DE BUSQUEDA-->
    <div class="searchInput">
      <p>Busca tu cancion favorita 👉</p>
      <input type="search" v-model="search" />
    </div>
    <!--FIN DIV DE BARRA DE BUSQUEDA-->

    <!--LISTADO DE TOP CANCIONES-->
    <!--DIV DONDE SE RECORRE E INTERPOLA LA INFORMACION DEL ARRAY QUE TRAE LA VISTA DESDE LA API-->
    <div class="allTracks">
      <!--LISTA DE ELEMENTOS-->
      <ul class="singleTrack" v-for="track in filtered" :key="track.id">
        <!--TEXTOS-->
        <li class="info">
          <p class="title">
            <strong>{{ track.name }}</strong>
          </p>
          <p>{{ track.artist.name }}</p>
          <p>📻 {{ parseFloat(track.duration / 60).toFixed(2) }} Minutos</p>
          <p>⏩ {{ track.listeners }}</p>
        </li>
        <!--FIN TEXTOS-->
        <!--BOTON/LINK-->
        <li>
          <a class="button" :href="track.url" target="_blank">Escúchala aquí</a>
        </li>
        <!--FIN BOTON/LINK-->
      </ul>
    </div>
    <!--FIN DIV DE CONTENIDO-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
export default {
  name: "TopTracksTable",
  //Declaro la variable y el tipo de dato que voy a recibir de la vista
  props: {
    tracks: Array
  },
  //Declaro la variable "search" para la barra de bsuqueda
  data() {
    return {
      search: ""
    };
  },
  //Funciond e filtro de busqueda
  computed: {
    filtered() {
      if (!this.search) {
        return this.tracks;
      }
      return this.tracks.filter(track =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/*Flex para distribuir todos los items*/
.searchInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
/*Estilo para la barra de busqueda */
.searchInput input {
  padding: 0.5rem 2rem;
  margin: 1rem;
}

/*Estilo para el contenedor todas las canciones */
.allTracks {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: repeat(1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin: 3rem;
  align-items: center;
}
/*Estilo para el contenedor de cada una de las canciones */
.singleTrack {
  border: 1px solid white;
  list-style: none;
  padding: 1rem;
  border-radius: 2px;
}
/*Estilo para titulo de cancion */
.title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
/*ALto del contenedos de la informacion*/
.info {
  height: 180px;
}
</style>
