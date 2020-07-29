<template>
  <div id="app">
    <menucustom />
    <router-view />
    <FooterCustom />
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";

import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    menucustom,
    FooterCustom,
  },
};
</script>

<style>
html,
body {
  height: 100%;

  background-color: #dfe8e7;
}
* {
  margin: 0;
  padding: 0;
  --Rosecolor: #a66a6f;
  --Violetcolor: #401223;
  --Greencolor: #1e403c;
  --Beigecolor: #f2d194;
  --Browncolor: #8c501c;
  --Greycolor: #4b4b4b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--Greycolor);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--Greycolor);
}

#nav a.router-link-exact-active {
  color: var(--Rosecolor);
}

.buttonStyle1 {
  text-transform: uppercase;
  background-color: var(--Greencolor);
  color: white;
  border: none;
  padding: 1rem 1rem;
  border-radius: 8px;
  box-shadow: -1px 10px 18px -4px rgba(98, 99, 99, 0.27);
  margin: 1rem 0.4rem;
  transition: all 0.4s;
  text-decoration: none;
}

button:hover {
  transform: translateY(-4px);
}

.buttonStyle2 {
  font-weight: 600;
  text-transform: uppercase;
  color: var(--Rosecolor);
  border: none;
  padding: 1rem 1rem;
  border-radius: 8px;
  box-shadow: -1px 10px 18px -4px rgba(98, 99, 99, 0.27);
  margin: 1rem 0.4rem;
  transition: all 0.4s;
  text-decoration: none;
}

.name {
  padding: 0.8rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--Greencolor);
}

.listConteiner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.listConteiner li {
  background-color: white;
  box-shadow: -1px 10px 18px -4px rgba(46, 46, 46, 0.27);
  list-style: none;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}

input {
  padding: 0.5rem 1rem;
  height: 1.5rem;
  border: 1px solid rgb(180, 180, 180);
  width: 250px;
  margin: 0.5rem 0;
}

input:focus {
  outline: none;
}

.greenTitle {
  padding: 2rem 0 1rem 0;
  color: var(--Greencolor);
  max-width: 50%;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .greenTitle {
    padding: 1rem 0 0.5rem 0;
    color: var(--Greencolor);
    max-width: 80%;
    margin: 0 auto;
  }
  .listConteiner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 1rem;
  }
}

@media (max-width: 768px) {
  .greenTitle {
    padding: 1rem 0 0.5rem 0;
    color: var(--Greencolor);
    max-width: 70%;
    margin: 0 auto;
  }
  .listConteiner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}

@media (max-width: 1200px) {
  .greenTitle {
    padding: 1rem 0 0.5rem 0;
    color: var(--Greencolor);
    max-width: 70%;
    margin: 0 auto;
  }
}
</style>
