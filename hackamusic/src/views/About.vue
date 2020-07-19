<template>
  <!--DIV RAIZ-->
  <div class="about">
    <!--DIV METATITLE PARA SEO-->
    <div>
      <vue-headful title="Hackamusic\About" description="Pagina de descripcion del proyecto" />
    </div>
    <!--FIN DIV METATITLE PARA SEO-->

    <!--DIV CONTENEDOR DONDE SE VA A MOSTRAR EL CONTENIDO DEL COMPONENTE-->
    <div>
      <h1>⭐ HACKAMUSIC ⭐</h1>
      <h3>Acerca este proyecto</h3>
      <!--etiqueta html del componente-->
      <projectinfo :tools="tools" />
    </div>
    <!--FIN DIV CONTENEDOR-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//importo el componente
import projectinfo from "@/components/ProjectInfo.vue";
//importar el headful
import vueHeadful from "vue-headful";

export default {
  name: "About",
  //Registro la etiqueta del componente
  components: {
    projectinfo
  },
  //Declaro las variables que voy a usar y el contenido especifico
  data() {
    return {
      tools: [
        {
          title: "API",
          name: "LastFm",
          info:
            "La API de Last.fm permite a cualquier persona crear sus propios programas utilizando datos de Last.fm, ya sea en la web, el escritorio o los dispositivos móviles.",
          img:
            "https://secure.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png",
          url: "https://www.last.fm/home"
        },
        {
          title: "Framework",
          name: "Vue",
          info:
            "Vue.js es un marco JavaScript de código abierto modelo-vista-vista-modelo para construir interfaces de usuario y aplicaciones de una sola página.",

          img: "https://i.imgur.com/scrcyJ3.png",
          url: "https://vuejs.org/"
        },
        {
          title: "Lenguage de programacion",
          name: "JavaScript",
          info:
            "JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.",
          img:
            "https://lh3.googleusercontent.com/proxy/YmYW_AW4xBkY36FrOAmIq_8CVCbO-qWMy1mbShtL8RKgqPskP1ifWSNVVCUFOSBWd4dT0CuZkxi9lLbgRRz0oOIN6Kd9hRO8lCeAF9PUDr4Fxu2xb2E4arp7O3V2_6lsR30-ypc",
          url: "https://developer.mozilla.org/es/docs/Web/JavaScript"
        },
        {
          title: "Libreria",
          name: "Axios",
          info: "Cliente HTTP basado en promesas para el navegador y node.js.",
          img:
            "https://cdn.cjr.org/wp-content/uploads/2017/01/jim_vandehei_axios.png",
          url: "https://www.npmjs.com/package/axios"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
