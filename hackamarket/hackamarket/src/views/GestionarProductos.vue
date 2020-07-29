<template>
  <div>
    <vue-headful title="Gestion productos | HackaMarket" description="Registro nuevo producto" />

    <h1 class="greenTitle">Nuevo Producto:</h1>
    <div class="registerContent">
      <input type="text" placeholder="Nombre del cactus" v-model="nompreProducto" />
      <br />
      <input type="number" placeholder="Stock disponible" v-model="stockProducto" />

      <br />
      <input type="text" placeholder="disponibilidad" v-model="disponibilidad" />
      <br />
      <input type="text" placeholder="Image" v-model="newImage" />
      <br />
      <button class="buttonStyle2" @click="deleteInputs()">Cancelar</button>
      <button class="buttonStyle1" @click="registerNewClient()">Agregar Producto</button>
      <div v-show="spinner" class="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "GestionProductos",
  data() {
    return {
      nompreProducto: "",
      stockProducto: "",
      disponibilidad: "",
      newImage: "",
    };
  },
  methods: {
    //ALERT DE EDITAR
    newProductALert(nombreproducto) {
      Swal.fire({
        icon: "success",
        title: "Nuevo producto",
        text: `Has creado un nuevo producto${nombreproducto}`,
      });
    },
    registerNewClient() {
      const self = this;

      if (
        self.nompreProducto === "" ||
        self.stockProducto === "" ||
        self.disponibilidad === "" ||
        self.newEmail === "" ||
        self.newImage === ""
      ) {
        Swal.fire({
          icon: "warning",
          title: "Atencion!",
          text: `Debes llenar todos los datos para completar el registro dle producto`,
        });
      } else {
        axios
          .post("http://localhost:3030/new-product", {
            nombre: self.nompreProducto,
            stock: self.stockProducto,
            disponibilidad: self.disponibilidad,
            imagen: self.newImage,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.spinner = true;
        self.newProductALert(self.nompreProducto);
        setTimeout(function () {
          location.reload();
        }, 2000);
      }
    },
    deleteInputs() {
      const self = this;
      self.nompreProducto = "";
      self.stockProducto = "";
      self.disponibilidad = "";
      self.newEmail = "";
      location.reload();
    },
  },
};
</script>

<style scoped>
.registerContent {
  min-height: 100%;
  margin: 1rem 0 3rem 0;
}
</style>