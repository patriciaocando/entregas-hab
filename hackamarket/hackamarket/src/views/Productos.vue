<template>
  <div>
    <vue-headful title="Cactus | HackaMarket" description="Cactus del amor" />

    <h1 class="greenTitle">
      Estos son nuestros
      <br />💞 lindos cactus 🌵
      <br />en busca de un hogar 🏡
    </h1>
    <productlist :products="productos" />
    <button class="buttonStyle1">
      <router-link class="link" :to="{ name: 'GestionarProductos' }">Gestionar todos los cactus</router-link>
    </button>
  </div>
</template>

<script>
//PASO 1.- importo axios para comunicarme con la api
import axios from "axios";

//Importar componente de lista de productos
import productlist from "@/components/ProductList.vue";

export default {
  name: "Productos",
  //REGISTRAR COMPONENTE
  components: {
    productlist,
  },
  data() {
    return {
      productos: [],
    };
  },
  //funciones
  methods: {
    //PASO 2.-
    //FUncion para conectar con la bbdd
    getProductsList() {
      let self = this;
      axios
        .get("http://localhost:3030/products")
        .then(function (response) {
          self.productos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  //PASO 3.-
  //HOOCK QUE LLAMA A LA FUNCION
  created() {
    this.getProductsList();
  },
};
</script>

<style scoped>
.link {
  color: white;
  text-decoration: none;
}

.buttonStyle1 {
  margin: 3rem;
}
</style>