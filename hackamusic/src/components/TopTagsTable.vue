<template>
  <div>
    <div class="tagStyle">
      <ul v-for="(tag, index) in tags" :key="tag.id">
        <li>
          <p class="rank">⭐ RANK {{ index + 1 }}</p>
          <p class="tag">
            <strong>{{ tag.name }}</strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTagsTable",
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
.tagStyle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
}
.tagStyle ul li {
  border: 1px solid white;
  list-style: none;
  padding: 1.5rem;
  border-radius: 2px;
  width: 100px;
  height: 50px;
  margin: 0.5rem;
}
.rank {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.tag {
  text-transform: capitalize;
  font-size: 1rem;
}
</style>
