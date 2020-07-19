<template>
  <!--DIV RAIZ DEL FOOTER-->
  <div>
    <footer class="foot">
      <p>
        Music is life 🎶 By
        <a href="https://patriciaocando.com/">Patricia Ocando</a>
      </p>
    </footer>
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
//declaro el nombre del componente
export default {
  name: "footercustom"
};
</script>

<style scoped>
.foot {
  margin-bottom: 0px;
  display: block;
  margin: 0;
}
.foot p {
  background-color: #484848;
  padding: 2rem;
  margin-bottom: 0px;
}

.foot p a {
  color: whitesmoke;
  font-weight: 600;
}
</style>
