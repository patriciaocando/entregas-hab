<template>
  <div class="error">
    <div>
      <vue-headful title="Hackamusic\Error" description="404" />
    </div>
    <h1>Error</h1>
    <h3>😱 This is not the web page you are looking for 😱</h3>
    <br />
    <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" />
  </div>
</template>

<script>
//importar el headful
import vueHeadful from "vue-headful";
export default {
  name: "Error",
};
</script>

<style scoped>
.error {
  min-height: 80vh;
}
</style>
