<template>
  <!--DIV RAIZ-->
  <div class="home">
    <!--DIV METATITLE PARA SEO-->
    <div>
      <vue-headful title="Hackamusic\Home" description="Pagina de musica cool" />
    </div>
    <!--FIN DIV METATITLE PARA SEO-->

    <!--DIV CONTENEDOR DONDE SE VA A MOSTRAR EL CONTENIDO DEL COMPONENTE-->
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <!--etiqueta html del componente donde igualo el array que espera recibir con el array recibido en la vista-->
      <toptagstable :tags="tags" />
    </div>
    <!--FIN DIV CONTENEDOR-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//Importar el "modulo" que trae las funciones de llamada a la api
import api from "@/api/index.js";
//Importo el componente para las tags
import toptagstable from "@/components/TopTagsTable.vue";
//Importar el headful
import vueHeadful from "vue-headful";

export default {
  name: "Home",
  //Registro la etiqueta del componente
  components: {
    toptagstable
  },
  //Declaro las variables que voy a usar
  data() {
    return {
      tags: []
    };
  },
  //DATOS DE TAGS traidos de la api
  created() {
    api.getTopTags().then(response => (this.tags = response.data.tags.tag));
  }
};
</script>

<style scoped></style>
