<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home \</router-link>
      <router-link :to="{ name: 'About' }">About \</router-link>
      <router-link :to="{ name: 'Toptags' }">Top Tracks \</router-link>
      <router-link :to="{ name: 'Topartists' }">Top Artists \</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menucustom"
};
</script>

<style scoped>
</style>