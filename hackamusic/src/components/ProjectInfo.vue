<template>
  <!--DIV RAIZ-->
  <div>
    <!--DIV CONTENEDOR DE TODAS LAS TECNOLOGIAS DEL PROYECTO-->
    <div class="about">
      <!--DIV DONDE SE RECORRE E INTERPOLA LA INFORMACION DEL ARRAY QUE TRAE LA VISTA-->
      <div class="info" v-for="tool in tools" :key="tool.id">
        <!--IMAGEN DE LA TECNOLOGIA-->
        <div>
          <img class="image" :src="tool.img" />
        </div>
        <!--CONTENIDO DE TEXTO Y LINKS-->
        <div class="content">
          <p>
            <strong>{{ tool.name }}</strong>
            | {{ tool.title }}
          </p>
          <p>{{ tool.info }}</p>
          <a class="button" @click="tool.url" target="_blank">Web de {{ tool.name }}</a>
        </div>
      </div>
    </div>
    <!--DIV CONTENEDOR DE TODAS LAS TECNOLOGIAS DEL PROYECTO-->

    <!--DIV CONTENEDOR DE LA SECCION DE BOTONES Y CV-->
    <div class="moreinfo">
      <p>Quieres mas informacion?</p>
      <button id="sweetAlert" @click="sweetalertOn()">Aqui del proyecto</button>
      <a
        id="cv"
        href="src/assets/CV PATRICIA OCANDO.pdf"
        download="CV PATRICIA OCANDO"
      >Descarga el CV de la Autora</a>
    </div>
    <!-- FIN DIV CONTENEDOR DE LA SECCION DE BOTONES Y CV-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//Importar pluggin Sweetalert
import Swal from "sweetalert2";

export default {
  name: "ProjectInfo",
  //Declaro la variable y el tipo de dato que voy a recibir de la vista
  props: {
    tools: Array
  },
  //FUNCIONES(metodos): Declaro una funcion que ejecute una alerta utilizando el pluggin Sweetalert
  methods: {
    sweetalertOn() {
      Swal.fire({
        title: "Gracias por preguntar!",
        text: `Creado en Julio de 2020 - En el bootcamp de Hack a Boss`,
        imageUrl: "https://media.giphy.com/media/CzbiCJTYOzHTW/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Tom Hanks enviando un mail"
      });
    }
  }
};
</script>

<style scoped>
/*Margen global para todo el componente */
.about {
  margin: 3rem;
}

/*Quitar los bullets de la lista*/
ul li {
  list-style: none;
}

/*Grid para hacer dos columnas*/
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
}

/*Tamaio de la imagen de la tecnologia*/
.image {
  max-height: 120px;
}

/*Flex para distribuir los textos de cada una de las tecnologias*/
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-bottom: 1rem;
}

/*Espacio apra cada parrafo del contenido de las texnologias*/
.content p {
  padding-bottom: 0.5rem;
}

/*Flex para distribuir y alinear el texto y los botones de laseccion mas informacion*/
.moreinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}
/*Estilo del link para descargar el CV para que parezca un boton*/
#cv {
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #009688;
  color: #222222;
  padding: 0.8rem 1rem;
  margin: 1rem 0.5rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 16px -8px rgba(28, 31, 66, 1);
}

/*Estilo del boton para descargar el sweetalert*/
#sweetAlert {
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #7986cb;
  color: #222222;
  padding: 0.8rem 1rem;
  margin: 1rem 0.5rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 16px -8px rgba(28, 31, 66, 1);
}
</style>
