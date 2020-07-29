<template>
  <div class="home">
    <vue-headful title="Home | HackaMarket" description="Bienvenidos" />
    <h1 class="greenTitle">Bienvenidxs a HackaMarket</h1>
    <h3>🌵 Donde puedes adoptar tu cactus favorito🌵</h3>
    <button class="buttonStyle1">
      <router-link class="link" :to="{ name: 'Productos' }">Ver todos los cactus</router-link>
    </button>
    <button class="buttonStyle2">
      <router-link class="link2" :to="{ name: 'Registrar' }">Registrarme!</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.link {
  color: white;
  text-decoration: none;
}

.link2 {
  color: var(--Rosecolor);
  text-decoration: none;
}

h3 {
  margin: 2rem;
}
.home {
  width: 100%;
  height: 78vh;
  background-image: url("../assets/thomas-verbruggen-5A06OWU6Wuc-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 768px) {
  .home {
    font-size: 20px;
    height: 85vh;
  }
}
</style>