<template>
  <div id="app">
    <menucustom />
    <router-view />

    <footercustom />
  </div>
</template>

<script>
//importar el menu
import menucustom from "@/components/MenuCustom.vue";
//importar el footer
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1f1b24;
  color: whitesmoke;
}

#nav {
  padding: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #7986cb;
}
.button {
  display: block;
  color: whitesmoke;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #7986cb;
  padding: 0.8rem 0.5rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 16px -8px rgba(28, 31, 66, 1);
  max-width: 180px;
  margin: 0 auto;
}
h1 {
  padding: 2rem 0;
}
</style>
