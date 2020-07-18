<template>
  <div>
    <div class="searchInput">
      <p>Busca tu cancion favorita 👉</p>
      <input type="search" v-model="search" />
    </div>
    <div class="trakStyle">
      <ul v-for="track in filtered" :key="track.id">
        <li class="info">
          <p class="title">
            <strong>{{ track.name }}</strong>
          </p>
          <p>{{ track.artist.name }}</p>
          <p>📻 {{ parseFloat(track.duration / 60).toFixed(2) }} Minutos</p>
          <p>⏩ {{ track.listeners }}</p>
        </li>
        <li>
          <a class="button" :href="track.url" target="_blank">Escúchala aquí</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";
export default {
  name: "TopTracksTable",
  props: {
    tracks: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.tracks;
      }
      return this.tracks.filter((track) =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.searchInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.searchInput input {
  padding: 0.5rem 2rem;
  margin: 1rem;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.trakStyle {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: repeat(1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin: 3rem;
  align-items: center;
}
.info {
  height: 180px;
}
ul {
  border: 1px solid white;
  list-style: none;
  padding: 1rem;
  border-radius: 2px;
}
</style>
