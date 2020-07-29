<template>
  <div class="errormessage">
    <vue-headful title="Error | HackaMarket" description="404" />
    <h1 class="greenTitle">Te has perdido?</h1>
    <h2>No te preocupes,</h2>
    <h2>
      Muchas veces perderse...
      es encontrarse a si mismo
    </h2>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>



<style scoped>
.errormessage {
  width: 100%;
  height: 78vh;
  background-image: url("../assets/scott-webb-GQD3Av_9A88-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>