<template>
  <!--DIV RAIZ-->
  <div>
    <!--LISTADO DE TOP TAGS-->
    <!--DIV DONDE SE RECORRE E INTERPOLA LA INFORMACION DEL ARRAY QUE TRAE LA VISTA DESDE LA API-->
    <div class="tagStyle">
      <!--LISTA DE ELEMENTOS-->
      <ul v-for="(tag, index) in tags" :key="tag.id">
        <li>
          <p class="rank">⭐ RANK {{ index + 1 }}</p>
          <p class="tag">
            <strong>{{ tag.name }}</strong>
          </p>
        </li>
      </ul>
    </div>
    <!--FIN DIV CONTENEDOR-->
  </div>
  <!--FIN DIV RAIZ-->
</template>

<script>
export default {
  name: "TopTagsTable",
  //Declaro la variable y el tipo de dato que voy a recibir de la vista
  props: {
    tags: Array
  }
};
</script>

<style scoped>
/*Flex para distribuir todos los items*/
.tagStyle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
}
/*Estilo de la lsita*/
.tagStyle ul li {
  border: 1px solid white;
  list-style: none;
  padding: 1.5rem;
  border-radius: 2px;
  width: 100px;
  height: 50px;
  margin: 0.5rem;
}
/*Estilo para el titulo de la lista*/
.rank {
  font-size: 0.8rem;
  letter-spacing: 1px;
}
/*Estilo para el tag*/
.tag {
  text-transform: capitalize;
  font-size: 1rem;
}
</style>
