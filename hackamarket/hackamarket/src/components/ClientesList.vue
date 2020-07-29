<template>
  <div class="clientsContainer">
    <ul class="listConteiner">
      <li v-for="(cliente, index) in clientes" :key="cliente.id">
        <img class="clientPhoto" :src="cliente.foto" />
        <p class="name">{{ cliente.nombre }}</p>
        <p>@{{ cliente.usuario }}</p>
        <p>{{ cliente.email }}</p>

        <button class="buttonStyle2" @click="sendIdClient(index)">Borrar</button>
        <button class="buttonStyle1" @click="sendIndex(index)">Editar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClientesList",
  //PASO 1= DECLARO EL TIPO DE DATO QUE VOY A RECIBIR
  props: {
    clientes: Array,
  },
  methods: {
    sendIndex(index) {
      const datosCliente = this.clientes[index];
      this.$emit("dataClient", datosCliente);
    },
    sendIdClient(index) {
      const idCliente = this.clientes[index].id;
      this.$emit("idClient", idCliente);
    },
  },
};
</script>

<style scoped>
.clientsContainer {
  width: 85%;
  margin: 0 auto;
}
.clientPhoto {
  border-radius: 100px;
  width: 150px;
  border: 5px solid var(--Greencolor);
}

@media (max-width: 600px) {
  .clientsContainer {
    width: 90%;
    margin: 0 auto;
  }
}
</style>