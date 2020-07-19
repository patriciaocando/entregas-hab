<template>
  <!--DIV RAIZ-->
  <div class="error">
    <!--DIV METATITLE PARA SEO-->
    <div>
      <vue-headful title="Hackamusic\Error" description="404" />
    </div>
    <!--FINDIV METATITLE PARA SEO-->

    <!--DIV DE CONTENIDO-->
    <div>
      <h1>Error</h1>
      <h3>😱 This is not the web page you are looking for 😱</h3>
      <br />
      <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" />
    </div>
    <!--FIN DIV DE CONTENIDO-->
  </div>
  <!--FI DIV RAIZ-->
</template>

<script>
//importar el headful
import vueHeadful from "vue-headful";

export default {
  name: "Error"
};
</script>

<style scoped>
/*Estilo de altura para que ocupe todo el alto de la web*/
.error {
  min-height: 80vh;
}
</style>
