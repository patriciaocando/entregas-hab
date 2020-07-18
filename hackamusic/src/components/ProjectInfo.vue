<template>
  <div>
    <div class="about">
      <div class="info" v-for="tool in tools" :key="tool.id">
        <div>
          <img class="image" :src="tool.img" />
        </div>

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
    <div class="moreinfo">
      <p>Quieres mas informacion?</p>
      <button id="sweetAlret" @click="sweetalertOn()">Aqui del proyecto</button>
      <a
        id="cv"
        href="src/assets/CV PATRICIA OCANDO.pdf"
        download="CV PATRICIA OCANDO"
      >Descarga el CV de la Autora</a>
    </div>
  </div>
</template>

<script>
//Importar componente de personales
import Swal from "sweetalert2";

export default {
  name: "ProjectInfo",
  props: {
    tools: Array
  },
  methods: {
    sweetalertOn() {
      console.log("Estoy en la funcion");
      Swal.fire({
        title: "Gracias por preguntar!",
        text: `Creado en Julio de 2020 - En el bootcamp de Hack a Boss`,
        imageUrl: "https://media.giphy.com/media/CzbiCJTYOzHTW/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Tom Hanks haciendo enviando un mail"
      });
    }
  }
};
</script>

<style scoped>
.about {
  margin: 3rem;
}
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
}
.image {
  max-height: 120px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-bottom: 1rem;
}

.content p {
  padding-bottom: 0.5rem;
}

.moreinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}

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

#sweetAlret {
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

ul li {
  list-style: none;
}
</style>
