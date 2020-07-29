<template>
  <div class="cactusConteiner">
    <ul class="listConteiner">
      <li v-for="(product, index) in products" :key="product.id">
        <p class="name">{{ product.nombre }}</p>
        <img class="cactusPhoto" :src="product.imagen" />
        <p
          :class="{aviable: product.disponibilidad === 'Disponible', NOTaviable: product.disponibilidad === 'No disponible'}"
        >{{product.disponibilidad}} | {{ product.stock }} uds.</p>
        <button
          :class="{hide: product.stock <= 0}"
          class="buttonStyle2"
          @click="reservaAlert(index)"
        >Reservar</button>
        <button
          :class="{hide: product.stock <= 0}"
          class="buttonStyle1"
          @click="compraAlert(index)"
        >Comprar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "ProductList",
  props: {
    products: Array,
  },

  methods: {
    reservaAlert(index) {
      Swal.fire({
        icon: "success",
        title: "Reservado",
        text: `Has reservado un lindo ${this.products[index].nombre}`,
      });
    },
    compraAlert(index) {
      Swal.fire({
        icon: "success",
        title: "Compra exitosa",
        text: `Has Comprado un lindo ${this.products[index].nombre}
        Esperamos que le des un lindo hogar`,
      });
    },
  },
};
</script>

<style scoped>
.cactusConteiner {
  width: 85%;
  margin: 0 auto;
}

.aviable {
  padding: 1rem;
  color: var(--Greencolor);
  font-weight: 700;
}
.NOTaviable {
  padding: 1rem;
  color: var(--Violetcolor);
  font-weight: 700;
}
.cactusPhoto {
  width: 200px;
  height: 230px;
}

.hide {
  display: none;
}

@media (max-width: 600px) {
  .cactusConteiner {
    width: 90%;
    margin: 0 auto;
  }
}
</style>