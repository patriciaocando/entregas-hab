<template>
  <!--DIV RAIZ-->
  <div class="home">
    <div>
      <vue-headful
        title="Hackamusic\Home"
        description="Pagina de musica cool"
      />
    </div>
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <toptagstable :tags="tags" />
    </div>
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//importar el "modulo" que trae las funciones de llamada a la api
import api from "@/api/index.js";
//IMporto el componente para las tags
import toptagstable from "@/components/TopTagsTable.vue";
//importar el headful
import vueHeadful from "vue-headful";

export default {
  name: "Home",
  components: {
    toptagstable,
  },
  data() {
    return {
      tags: [],
    };
  },
  //DATOS DE TAGS
  created() {
    api.getTopTags().then((response) => (this.tags = response.data.tags.tag));
  },
};
</script>

<style scoped></style>
