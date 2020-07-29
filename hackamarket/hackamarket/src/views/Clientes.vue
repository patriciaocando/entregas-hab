<template>
  <div>
    <vue-headful title="Nuestros clientes | HackaMarket" description="Pagina de login" />
    <h1 class="greenTitle">Estos son nuestros Clientes</h1>
    <!--Escucho los eventos y igualo los valores del array interpolado del componente con el array del json de la bbdd-->
    <clienteslist
      v-on:dataClient="getdataClient"
      v-on:idClient="deleteClient"
      :clientes="clientes"
    />
    <!--MODAL PARA ACTUALIZAR CLIENTE-->
    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente:</h3>

        <p>ID del cliente: {{ idCliente }}</p>

        <input type="text" placeholder="Nombre" v-model="nuevoNombre" />
        <br />
        <input type="text" placeholder="Nombre de usuario" v-model="nuevoUsuario" />
        <br />
        <input type="text" placeholder="Email" v-model="nuevoEmail" />
        <br />
        <input type="text" placeholder="Password" v-model="nuevoPassword" />
        <br />
        <input type="text" placeholder="Foto" v-model="nuevaFoto" />
        <br />
        <button class="buttonStyle2" @click="seeModal =! seeModal">Cancelar</button>
        <button class="buttonStyle1" @click="updateCLientData()">Actualizar cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
//PASO 1.- importo axios para comunicarme con la api
import axios from "axios";
//importar el componente
import clienteslist from "@/components/ClientesList.vue";
import Swal from "sweetalert2";

export default {
  name: "Clientes",
  components: {
    clienteslist,
  },
  //PASO 2.2-
  //array para guardar los datos de mi bbdd
  data() {
    return {
      clientes: [],
      nuevoNombre: "",
      nuevoUsuario: "",
      nuevoEmail: "",
      nuevoPassword: "",
      nuevaFoto: "",
      idCliente: "",
      seeModal: false,
    };
  },
  methods: {
    //ALERT DE EDITAR
    updateClientAlert(username) {
      Swal.fire({
        icon: "success",
        title: "Actualizado",
        text: `Has editado los datos de ${username} exitosamente`,
      });
    },
    //ALERT DE BORRAR
    deleteClientAlert() {
      Swal.fire({
        icon: "warning",
        title: "Borrado",
        text: `Has eliminado un usuario de la base de datos`,
      });
    },
    //PASO 2.-
    //funcion para traer mis clientes desde la api
    getClients() {
      const self = this;
      axios
        .get("http://localhost:3030/clients")
        .then(function (response) {
          self.clientes = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    //MOSTRAR DATOS CLIENTES DESDE EL EVENTO DEL COMPONENTE
    getdataClient(datosCliente) {
      this.nuevoNombre = datosCliente.nombre;
      this.nuevoUsuario = datosCliente.usuario;
      this.nuevoEmail = datosCliente.email;
      this.nuevoPassword = datosCliente.password;
      this.nuevaFoto = datosCliente.foto;
      this.idCliente = datosCliente.id;
      this.seeModal = true;
    },
    //FUNCION PARA ACTUALIZAR EL CLIENTE DESDE LA BBDD
    updateCLientData() {
      const self = this;
      axios
        .put("http://localhost:3030/update-client/" + self.idCliente, {
          nombre: self.nuevoNombre,
          usuario: self.nuevoUsuario,
          password: self.nuevoPassword,
          email: self.nuevoEmail,
          foto: self.nuevaFoto,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
      self.updateClientAlert(self.nuevoNombre);
      setTimeout(function () {
        location.reload();
      }, 2000);
    },
    deleteClient(idCliente) {
      axios
        .delete("http://localhost:3030/delete-client/" + idCliente)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
      this.deleteClientAlert();
      setTimeout(function () {
        location.reload();
      }, 2000);
    },
  },
  //PASO 3.-
  //HOOCK QUE LLAMA A LA FUNCION
  created() {
    this.getClients();
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modalBox {
  background-color: #fefefe;
  margin: 2% auto;
  padding: 3rem;
  width: 80%;
  border: 1px solid #888;
}
</style>