<template>
  <div class="about">
    <vue-headful title="About | HackaMarket" description="Pagina de About" />
    <h1 class="greenTitle">¡Hola! Soy Patricia Ocando</h1>
    <div class="aboutContainer">
      <img
        src="https://patriciaocando.com/wp-content/uploads/2019/12/IMG_20190710_144623-ANIMATION.gif"
      />
      <div>
        <h3>Me encantan los cactus 🌵💕</h3>
        <h3>👩‍💻 Para este proyecto he utilizado:</h3>
        <p>👉 Javascript para... bueno... TODO!</p>
        <p>👉 Vuejs para la estructura front-end.</p>
        <p>👉 Nodejs para la comunicaicon con la base de datos.</p>
        <p>👉 Workbench para una base de datos.</p>
        <p>👉 Ubunto como sistema operativo.</p>
        <p>👉 HTML y CSS para todos los estilos.</p>
        <a class="buttonStyle1" href="https://www.linkedin.com/in/patricia-ocando/">Mi linkedIn</a>
      </div>
    </div>
  </div>
</template>

<script>
//importar el headful
import vueHeadful from "vue-headful";
export default {};
</script>

<style scoped>
.about {
  background-color: white;
  width: 70%;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: -1px 10px 18px -4px rgba(98, 99, 99, 0.27);
}
.aboutContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  text-align: left;
}
.aboutContainer img {
  height: 400px;
  margin: 2rem;
}
.aboutContainer h3 {
  margin: 1.5rem 0;
}

.aboutContainer p {
  margin: 1.5rem 0;
}

.aboutContainer a {
  display: block;
  width: 100px;
  margin: 2rem 0;
  text-decoration: none;
}

@media (max-width: 600px) {
  .about {
    width: 90%;
    margin: 0.5rem auto;
  }
  .aboutContainer {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
  }
  .aboutContainer img {
    height: 350px;
    margin: 1.5rem;
  }
}

@media (max-width: 768px) {
  .about {
    width: 80%;
    margin: 0.5rem auto;
  }
  .aboutContainer {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 0 1rem;
  }

  .aboutContainer img {
    width: 300px;
    margin: 0 auto;
  }
  .aboutContainer a {
    display: block;
    margin: 0 auto 2rem;
  }
  .aboutContainer p {
    margin: 1rem 0;
  }
}

@media (max-width: 1200px) {
  .about {
    width: 90%;
    margin: 0.5rem auto;
  }
}
</style>